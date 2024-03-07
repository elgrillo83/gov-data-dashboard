import { Stack, Typography } from "@mui/material";
import DepartmentsList from "../components/DepartmentsList";
import OrganizationsTable from "../components/OrganizationsTable";
import PackageCountsByOrganizationChart from "../components/PackageCountsByOrganizationChart";
import organizationsListJson from "../data/organizations_list.json";
import { Organization, PackageCountsByOrganization } from "../types";

export const ORGANIZATIONS_URL =
  "https://www.govdata.de/ckan/api/3/action/organization_list?all_fields=true";

async function fetchOrganizations(apiOrLocal: "api" | "local") {
  // NOTE: In case the govdate.de/CKAN API is in maintenance, we can fall back to a local JSON file.
  if (apiOrLocal === "api") {
    const response = await fetch(ORGANIZATIONS_URL);

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } else {
    return organizationsListJson;
  }
}

export default async function Home() {
  const organizationsResponse = await fetchOrganizations("api");

  const organizations = organizationsResponse.result;

  const packageCountsByOrganization: PackageCountsByOrganization =
    organizations.reduce((object: object, organization: Organization) => {
      return {
        ...object,
        [organization.display_name]: organization.package_count,
      };
    }, {});

  return (
    <Stack spacing={4}>
      <Typography variant="h1">GovData Dashboard</Typography>

      <DepartmentsList
        packageCountsByOrganization={packageCountsByOrganization}
      />

      <OrganizationsTable organizations={organizations} />

      <PackageCountsByOrganizationChart
        packageCountsByOrganization={packageCountsByOrganization}
      />
    </Stack>
  );
}
