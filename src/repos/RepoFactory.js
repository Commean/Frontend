import GeoJsonRepo from "./GeoJsonRepo";

const repositories = {
  nodes: GeoJsonRepo,
};
export const RepoFactory = {
  get: (name) => repositories[name],
};
