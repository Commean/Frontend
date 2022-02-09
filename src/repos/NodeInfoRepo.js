import Repo from "./Repo";

const resource = "/measurements";
export default {
  getNodeInfo(nodeId) {
    return Repo.get(`${resource}/${nodeId}/now`);
  },
};
