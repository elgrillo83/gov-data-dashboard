"use client";

import { BarChart } from "@mui/x-charts";
import { DepartmentWithPackageAndTotalCount } from "../types";
import CustomCard from "./shared/CustomCard";

export default function TotalPackageCountsByDepartmentChart({
  departmentsWithPackageAndTotalCounts,
}: {
  departmentsWithPackageAndTotalCounts: DepartmentWithPackageAndTotalCount[];
}) {
  const keys = departmentsWithPackageAndTotalCounts.map(
    (departmentsWithPackageAndTotalCounts) =>
      departmentsWithPackageAndTotalCounts.name
  );

  const values = departmentsWithPackageAndTotalCounts.map(
    (departmentsWithPackageAndTotalCounts) =>
      departmentsWithPackageAndTotalCounts.totalPackageCount
  );

  return (
    <CustomCard
      subheader="Total package counts by departments including subordinated organizations."
      title="Departments Chart"
    >
      <BarChart
        series={[
          {
            data: values,
          },
        ]}
        xAxis={[
          {
            data: keys,
            id: "packageCountsByOrganization",
            scaleType: "band",
            tickLabelStyle: {
              angle: 90,
              textAnchor: "start",
              fontSize: 16,
            },
          },
        ]}
      />
    </CustomCard>
  );
}
