import GeoJsonRepo from "./GeoJsonRepo";
import NodeInfoRepo from "./NodeInfoRepo";

const repositories = {
  nodes: GeoJsonRepo,
  nodeInfo: NodeInfoRepo,
};
export const RepoFactory = {
  get: (name) => repositories[name],
};
