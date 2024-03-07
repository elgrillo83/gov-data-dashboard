import DepartmentsList from "@/src/components/DepartmentsList";
import departmentsJson from "../../data/departments.json";
import organizationsListJson from "../../data/organizations_list.json";
import {
  addPackageCountToDepartment,
  addTotalCountToDepartmentWithPackageCount,
} from "../../helpers";
import {
  DepartmentWithPackageAndTotalCount,
  Organization,
  PackageCountsByOrganization,
} from "../../types";

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

  const departments = departmentsJson.departments;

  const departmentsWithPackageCounts = departments.map((department) =>
    addPackageCountToDepartment(department, packageCountsByOrganization)
  );

  const departmentsWithPackageAndTotalCounts: DepartmentWithPackageAndTotalCount[] =
    departmentsWithPackageCounts.map(addTotalCountToDepartmentWithPackageCount);

  return (
    <DepartmentsList
      departmentsWithPackageAndTotalCounts={
        departmentsWithPackageAndTotalCounts
      }
    />
  );
}
