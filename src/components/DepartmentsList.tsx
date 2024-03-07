import { Card, CardContent, CardHeader } from "@mui/material";
import List from "@mui/material/List";
import departmentsJson from "../data/departments.json";
import {
  Department,
  DepartmentWithPackageCount,
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

  const addPackageCountToDepartment = (
    department: Department
  ): DepartmentWithPackageCount => {
    return {
      ...department,
      packageCount: packageCountsByOrganization[department.name] || 0,
      subordinates: department.subordinates?.map(addPackageCountToDepartment),
    };
  };

  const departmentsWithPackageCounts = departments.map(
    addPackageCountToDepartment
  );

  return (
    <Card variant="outlined">
      <CardHeader
        subheader='As stored in "departments.json"'
        title="Departments"
      />

      <CardContent sx={{ padding: 0 }}>
        <List aria-label="departments-list" dense>
          {departmentsWithPackageCounts.map((departmentWithPackageCount) => (
            <DepartmentListItem
              departmentWithPackageCount={departmentWithPackageCount}
              key={departmentWithPackageCount.name}
            />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
