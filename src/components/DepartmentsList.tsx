import { Card, CardContent, CardHeader } from "@mui/material";
import List from "@mui/material/List";
import { DepartmentWithPackageAndTotalCount } from "../types";
import DepartmentListItem from "./DepartmentListItem";
import PageNavigationCardActions from "./PageNavigationCardActions";

type DepartmentsListProps = {
  departmentsWithPackageAndTotalCounts: DepartmentWithPackageAndTotalCount[];
};

export default function DepartmentsList({
  departmentsWithPackageAndTotalCounts,
}: DepartmentsListProps) {
  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      variant="outlined"
    >
      <CardHeader
        subheader="Departments including subordinated organizations."
        title="Departments List"
      />

      <CardContent sx={{ flexGrow: 1, overflow: "auto", padding: 0 }}>
        <List dense>
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

      <PageNavigationCardActions />
    </Card>
  );
}
