"use client";

import { BarChart } from "@mui/x-charts";
import { useMemo } from "react";
import { PackageCountsByOrganization } from "../types";
import CustomCard from "./shared/CustomCard";

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
    <CustomCard
      subheader="Excluding organizations with a zero packages count"
      title="Organizations Chart"
    >
      <BarChart
        series={[
          {
            data: Object.values(packageCountsByOrganization),
          },
        ]}
        xAxis={[
          {
            data: Object.keys(packageCountsByOrganization),
            id: "packageCountsByOrganization",
            scaleType: "band",
            tickLabelStyle: {
              angle: 90,
              textAnchor: "start",
              fontSize: 12,
            },
          },
        ]}
      />
    </CustomCard>
  );
}
