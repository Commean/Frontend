import Repo from "./Repo";

const resource = "/nodes/geojson";
export default {
  get() {
    return Repo.get(`${resource}`);
  },
  getNode(nodeId) {
    return Repo.get(`${resource}/${nodeId}`);
  },
};
