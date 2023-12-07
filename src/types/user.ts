export type GitHubUser = {
  login: string;
  avatar_url: string;
};

export type GitHubRepo = {
  id: number;
  name: string;
  owner: GitHubUser;
};

export type Profile = {
  login: string;
  avatar: string;
  repos: GitHubRepo[];
};
