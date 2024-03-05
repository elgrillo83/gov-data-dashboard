"use client";

import { Card, CardContent, CardHeader } from "@mui/material";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";
import { ORGANIZATIONS_URL } from "../app/page";
import { Organization } from "../types";

const columns: GridColDef[] = [
  { field: "display_name", headerName: "Display Name", width: 250 },
  {
    field: "package_count",
    headerName: "# Packages",
    type: "number",
    width: 100,
  },
  { field: "approval_status", headerName: "Approval Status", width: 150 },
  { field: "created", headerName: "Created", type: "dateTime", width: 150 },
  { field: "description", headerName: "Description", width: 150 },
  { field: "id", headerName: "ID", width: 150 },
  { field: "image_display_url", headerName: "Image Display URL", width: 150 },
  { field: "image_url", headerName: "Image URL", width: 150 },
  {
    field: "is_organization",
    headerName: "Is Organization?",
    type: "boolean",
    width: 150,
  },
  { field: "name", headerName: "Name", width: 150 },
  {
    field: "num_followers",
    headerName: "# Followers",
    type: "number",
    width: 150,
  },
  { field: "state", headerName: "State", width: 150 },
  { field: "title", headerName: "Title", width: 150 },
  { field: "type", headerName: "Type", width: 150 },
];

export default function OrganizationsTable({
  organizations,
}: {
  organizations: Organization[];
}) {
  console.log(organizations);

  const rows: GridRowsProp = organizations.map((organization) => {
    return {
      approval_status: organization.approval_status,
      created: new Date(organization.created),
      description: organization.description,
      display_name: organization.display_name,
      id: organization.id,
      image_display_url: organization.image_display_url,
      image_url: organization.image_url,
      is_organization: organization.is_organization,
      name: organization.name,
      num_followers: organization.num_followers,
      package_count: organization.package_count,
      state: organization.state,
      title: organization.title,
      type: organization.type,
    };
  });

  return (
    <Card variant="outlined">
      <CardHeader
        subheader={`As returned from "${ORGANIZATIONS_URL}"`}
        title="Organizations"
      />

      <CardContent sx={{ height: "500px", padding: 0 }}>
        <DataGrid columns={columns} rows={rows} sx={{ border: 0 }} />
      </CardContent>
    </Card>
  );
}
