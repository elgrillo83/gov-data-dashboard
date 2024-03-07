import { Stack, Typography } from "@mui/material";
import DepartmentsList from "../components/DepartmentsList";
import OrganizationsTable from "../components/OrganizationsTable";
import PackageCountsByOrganizationChart from "../components/PackageCountsByOrganizationChart";
import organizationsListJson from "../data/organizations_list.json";
import { Organization } from "../types";

export const ORGANIZATIONS_URL =
  "https://www.govdata.de/ckan/api/3/action/organization_list?all_fields=true";

async function fetchOrganizations() {
  // NOTE: Due to maintenance on the govdata.de/CKAN API, we are using a local JSON file
  // const response = await fetch(ORGANIZATIONS_URL);

  // if (!response.ok) {
  //   throw new Error("Failed to fetch data");
  // }

  // return response.json();

  return organizationsListJson;
}

export default async function Home() {
  const organizationsResponse = await fetchOrganizations();

  const organizations = organizationsResponse.result;

  const packageCountsByOrganization = organizations.reduce(
    (object: object, organization: Organization) => {
      return {
        ...object,
        [organization.display_name]: organization.package_count,
      };
    },
    {}
  );

  return (
    <Stack spacing={4}>
      <Typography variant="h1">GovData Dashboard</Typography>

      <DepartmentsList />

      <OrganizationsTable organizations={organizations} />

      <PackageCountsByOrganizationChart
        packageCountsByOrganization={packageCountsByOrganization}
      />
    </Stack>
  );
}
