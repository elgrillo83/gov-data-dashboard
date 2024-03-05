import { Button } from "@mui/material";

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

  const packageCountsByDisplayName = organizationList.result.reduce(
    (object: object, organization) => {
      return {
        ...object,
        [organization.display_name]: organization.package_count,
      };
    },
    {}
  );

  return (
    <main>
      <Button variant="contained">Hello world</Button>

      <pre>{JSON.stringify(packageCountsByDisplayName, null, 2)}</pre>

      {organizationList && (
        <pre>{JSON.stringify(organizationList, null, 2)}</pre>
      )}
    </main>
  );
}
