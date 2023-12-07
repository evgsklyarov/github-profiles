export type Branch = {
  name: string;
  commit: {
    sha: string;
    url: string;
  };
};
