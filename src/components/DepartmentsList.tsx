import { Card, CardContent, CardHeader } from "@mui/material";
import List from "@mui/material/List";
import departmentsJson from "../data/departments.json";
import DepartmentListItem from "./DepartmentListItem";

export default function DepartmentsList() {
  const departments = departmentsJson.departments;

  return (
    <Card variant="outlined">
      <CardHeader
        subheader='As stored in "departments.json"'
        title="Departments"
      />

      <CardContent sx={{ padding: 0 }}>
        <List aria-label="departments-list" dense>
          {departments.map((department) => (
            <DepartmentListItem department={department} key={department.name} />
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
