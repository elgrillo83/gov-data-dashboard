"use client";

import { Card, CardContent, CardHeader } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { DepartmentWithPackageAndTotalCount } from "../types";
import PageNavigationCardActions from "./PageNavigationCardActions";

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
    <Card
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      variant="outlined"
    >
      <CardHeader
        subheader="Total package counts by departments including subordinated organizations."
        title="Departments Chart"
      />

      <CardContent sx={{ flexGrow: 1 }}>
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
      </CardContent>

      <PageNavigationCardActions />
    </Card>
  );
}
