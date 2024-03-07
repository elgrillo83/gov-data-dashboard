import {
  Museum as DepartmentIcon,
  Foundation as SubordinateIcon,
} from "@mui/icons-material";
import { Chip, List, ListItemIcon } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DepartmentWithPackageCount } from "../types";

type DepartmentListItemProps = {
  departmentWithPackageCount: DepartmentWithPackageCount;
  nestingLevel?: number;
};

export default function DepartmentListItem({
  departmentWithPackageCount,
  nestingLevel = 1,
}: DepartmentListItemProps) {
  return (
    <>
      <ListItemButton
        key={departmentWithPackageCount.name}
        sx={{ pl: 2 * nestingLevel }}
      >
        <ListItemIcon>
          {nestingLevel === 1 ? <DepartmentIcon /> : <SubordinateIcon />}
        </ListItemIcon>

        <ListItemText primary={departmentWithPackageCount.name} />

        <Chip label={departmentWithPackageCount.packageCount} size="small" />
      </ListItemButton>

      {departmentWithPackageCount.subordinates && (
        <List component="div" dense>
          {departmentWithPackageCount.subordinates.map((subordinate) => (
            <DepartmentListItem
              departmentWithPackageCount={subordinate}
              key={subordinate.name}
              nestingLevel={nestingLevel + 1}
            />
          ))}
        </List>
      )}
    </>
  );
}
