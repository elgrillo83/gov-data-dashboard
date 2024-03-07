import { Card, CardContent, CardHeader } from "@mui/material";
import List from "@mui/material/List";
import departmentsJson from "../data/departments.json";
import {
  addPackageCountToDepartment,
  addTotalCountToDepartmentWithPackageCount,
} from "../helpers";
import {
  DepartmentWithPackageAndTotalCount,
  PackageCountsByOrganization,
} from "../types";
import DepartmentListItem from "./DepartmentListItem";

type DepartmentsListProps = {
  packageCountsByOrganization: PackageCountsByOrganization;
};

export default function DepartmentsList({
  packageCountsByOrganization,
}: DepartmentsListProps) {
  const departments = departmentsJson.departments;

  const departmentsWithPackageCounts = departments.map((department) =>
    addPackageCountToDepartment(department, packageCountsByOrganization)
  );

  const departmentsWithPackageAndTotalCounts: DepartmentWithPackageAndTotalCount[] =
    departmentsWithPackageCounts.map(addTotalCountToDepartmentWithPackageCount);

  return (
    <Card variant="outlined">
      <CardHeader
        subheader='As stored in "departments.json"'
        title="Departments"
      />

      <CardContent sx={{ padding: 0 }}>
        <List aria-label="departments-list" dense>
          {departmentsWithPackageAndTotalCounts.map(
            (departmentWithPackageAndTotalCounts) => (
              <DepartmentListItem
                departmentWithPackageAndTotalCounts={
                  departmentWithPackageAndTotalCounts
                }
                key={departmentWithPackageAndTotalCounts.name}
              />
            )
          )}
        </List>
      </CardContent>
    </Card>
  );
}
