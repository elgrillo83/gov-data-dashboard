"use client";

import { Card, CardContent, CardHeader } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import { useMemo } from "react";
import { PackageCountsByOrganization } from "../types";
import PageNavigationCardActions from "./PageNavigationCardActions";

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
    <Card
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      variant="outlined"
    >
      <CardHeader
        subheader="Excluding organizations with a zero packages count"
        title="Organizations Chart"
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <BarChart
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

      <PageNavigationCardActions />
    </Card>
  );
}
