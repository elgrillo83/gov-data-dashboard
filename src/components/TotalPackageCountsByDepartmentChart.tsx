"use client";

import { Card, CardContent, CardHeader } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { DepartmentWithPackageAndTotalCount } from "../types";

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
    <Card variant="outlined">
      <CardHeader
        subheader="Subheader"
        title="Total Package Counts By Department"
      />

      <CardContent>
        <BarChart
          height={300}
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
    </Card>
  );
}
