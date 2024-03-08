import List from "@mui/material/List";
import { DepartmentWithPackageAndTotalCount } from "../types";
import DepartmentListItem from "./DepartmentListItem";
import CustomCard from "./shared/CustomCard";

type DepartmentsListProps = {
  departmentsWithPackageAndTotalCounts: DepartmentWithPackageAndTotalCount[];
};

export default function DepartmentsList({
  departmentsWithPackageAndTotalCounts,
}: DepartmentsListProps) {
  return (
    <CustomCard
      contentSx={{ overflow: "auto", padding: 0 }}
      subheader="Departments including subordinated organizations."
      title="Departments List"
    >
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
    </CustomCard>
  );
}
