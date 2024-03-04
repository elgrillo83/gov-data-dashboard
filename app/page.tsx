import { Button } from "@mui/material";

async function getData() {
  const response = await fetch(
    "https://www.govdata.de/ckan/api/3/action/organization_list?all_fields=true"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default async function Home() {
  const data = await getData();

  return (
    <main>
      <Button variant="contained">Hello world</Button>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </main>
  );
}
