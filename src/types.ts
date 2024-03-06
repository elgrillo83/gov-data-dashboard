export type Department = {
  name: string;
  subordinates?: Department[];
};

export type Organization = {
  approval_status: string;
  created: string;
  description: string;
  display_name: string;
  id: string;
  image_display_url: string;
  image_url: string;
  is_organization: boolean;
  name: string;
  num_followers: number;
  package_count: number;
  revision_id: string;
  state: string;
  title: string;
  type: string;
};

export type PackageCountsByOrganization = {
  [key: string]: number;
};
