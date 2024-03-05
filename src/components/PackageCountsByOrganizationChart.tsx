"use client";

import { Card, CardContent, CardHeader } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useMemo } from "react";
import { PackageCountsByOrganization } from "../types";

export default function PackageCountsByOrganizationChart({
  packageCountsByOrganization,
}: {
  packageCountsByOrganization: PackageCountsByOrganization;
}) {
  const sanitizedPackageCountsByOrganization = useMemo(() => {
    const entriesWithPositiveValues = Object.entries(
      packageCountsByOrganization
    ).filter(([_key, value]) => value > 0);

    return Object.fromEntries(entriesWithPositiveValues);
  }, [packageCountsByOrganization]);

  return (
    <Card variant="outlined">
      <CardHeader title="Package Counts By Organization" />

      <CardContent>
        <BarChart
          height={300}
          series={[
            {
              data: Object.values(sanitizedPackageCountsByOrganization),
            },
          ]}
          xAxis={[
            {
              data: Object.keys(sanitizedPackageCountsByOrganization),
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
