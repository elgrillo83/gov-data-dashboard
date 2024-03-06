import {
  Museum as DepartmentIcon,
  Foundation as SubordinateIcon,
} from "@mui/icons-material";
import { Chip, List, ListItemIcon } from "@mui/material";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Department } from "../types";

export default function DepartmentListItem({
  department,
  nestingLevel = 1,
}: {
  department: Department;
  nestingLevel?: number;
}) {
  return (
    <>
      <ListItemButton key={department.name} sx={{ pl: 2 * nestingLevel }}>
        <ListItemIcon>
          {nestingLevel === 1 ? <DepartmentIcon /> : <SubordinateIcon />}
        </ListItemIcon>

        <ListItemText primary={department.name} />

        <Chip label="packages count" size="small" />
      </ListItemButton>

      {department.subordinates && (
        <List component="div" dense>
          {department.subordinates.map((subordinate) => (
            <DepartmentListItem
              department={subordinate}
              key={subordinate.name}
              nestingLevel={nestingLevel + 1}
            />
          ))}
        </List>
      )}
    </>
  );
}
