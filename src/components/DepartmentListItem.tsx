import {
  Museum as DepartmentIcon,
  Home as SubordinateIcon,
} from "@mui/icons-material";
import { Chip, List, ListItemIcon, Stack } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DepartmentWithPackageAndTotalCount } from "../types";

type DepartmentListItemProps = {
  departmentWithPackageAndTotalCounts: DepartmentWithPackageAndTotalCount;
  nestingLevel?: number;
};

export default function DepartmentListItem({
  departmentWithPackageAndTotalCounts,
  nestingLevel = 1,
}: DepartmentListItemProps) {
  return (
    <>
      <ListItemButton
        key={departmentWithPackageAndTotalCounts.name}
        sx={{ pl: 2 * nestingLevel }}
      >
        <ListItemIcon>
          {nestingLevel === 1 ? (
            <DepartmentIcon color="primary" />
          ) : (
            <SubordinateIcon />
          )}
        </ListItemIcon>

        <ListItemText primary={departmentWithPackageAndTotalCounts.name} />

        <Stack direction="row" spacing={1}>
          {departmentWithPackageAndTotalCounts.totalPackageCount >= 0 && (
            <Chip
              label={departmentWithPackageAndTotalCounts.totalPackageCount}
              size="small"
              color="primary"
            />
          )}

          <Chip
            label={departmentWithPackageAndTotalCounts.packageCount}
            size="small"
          />
        </Stack>
      </ListItemButton>

      {departmentWithPackageAndTotalCounts.subordinates && (
        <List component="div" dense>
          {departmentWithPackageAndTotalCounts.subordinates.map(
            (subordinate) => (
              <DepartmentListItem
                departmentWithPackageAndTotalCounts={subordinate}
                key={subordinate.name}
                nestingLevel={nestingLevel + 1}
              />
            )
          )}
        </List>
      )}
    </>
  );
}
