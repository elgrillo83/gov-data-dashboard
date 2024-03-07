import { Card, CardContent, CardHeader } from "@mui/material";
import List from "@mui/material/List";
import { DepartmentWithPackageAndTotalCount } from "../types";
import DepartmentListItem from "./DepartmentListItem";

type DepartmentsListProps = {
  departmentsWithPackageAndTotalCounts: DepartmentWithPackageAndTotalCount[];
};

export default function DepartmentsList({
  departmentsWithPackageAndTotalCounts,
}: DepartmentsListProps) {
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
