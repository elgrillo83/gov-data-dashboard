import { Stack, Typography } from "@mui/material";
import OrganizationsTable from "../components/OrganizationsTable";
import PackageCountsByOrganizationChart from "../components/PackageCountsByOrganizationChart";
import { Organization } from "../types";

async function fetchOrganizations() {
  const response = await fetch(
    "https://www.govdata.de/ckan/api/3/action/organization_list?all_fields=true"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
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

      <OrganizationsTable organizations={organizations} />

      <PackageCountsByOrganizationChart
        packageCountsByOrganization={packageCountsByOrganization}
      />
    </Stack>
  );
}
