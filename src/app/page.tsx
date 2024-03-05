import { Typography } from "@mui/material";
import PackageCountsByOrganizationChart from "../components/PackageCountsByOrganizationChart";
import { Organization } from "../types";

async function fetchOrganizationList() {
  const response = await fetch(
    "https://www.govdata.de/ckan/api/3/action/organization_list?all_fields=true"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const organizationList = await fetchOrganizationList();

  const packageCountsByOrganization = organizationList.result.reduce(
    (object: object, organization: Organization) => {
      return {
        ...object,
        [organization.display_name]: organization.package_count,
      };
    },
    {}
  );

  return (
    <main>
      <Typography variant="h1">GovData Dashboard</Typography>

      <PackageCountsByOrganizationChart
        packageCountsByOrganization={packageCountsByOrganization}
      />
    </main>
  );
}
