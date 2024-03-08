import { Card, CardContent, CardHeader, SxProps } from "@mui/material";
import PageNavigationCardActions from "../PageNavigationCardActions";

type CustomCardProps = {
  children: React.ReactNode;
  contentSx?: SxProps;
  subheader: string;
  title: string;
};

export default function CustomCard({
  children,
  contentSx = {},
  subheader,
  title,
}: CustomCardProps) {
  return (
    <Card
      sx={{ display: "flex", flexDirection: "column", height: "100%" }}
      variant="outlined"
    >
      <CardHeader subheader={subheader} title={title} />

      <CardContent sx={{ flexGrow: 1, ...contentSx }}>{children}</CardContent>

      <PageNavigationCardActions />
    </Card>
  );
}
