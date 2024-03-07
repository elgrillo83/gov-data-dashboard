import OrganizationsTable from "@/src/components/OrganizationsTable";
import organizationsListJson from "../../data/organizations_list.json";

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

  return <OrganizationsTable organizations={organizations} />;
}
