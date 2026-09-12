import init, {workspace_database} from "./pkg/layer_web.643f99e5f33c4a03a3d0.js";
import {createWorkspaceStore} from "./workspace-store.4b0bacc3ad861f7fe4a1.js";
const ready = init();
const store = createWorkspaceStore(workspace_database);
self.onmessage = async ({data}) => {
  try { await ready; self.postMessage({id:data.id,response:await store.execute(data.request)}); }
  catch(error) { self.postMessage({id:data.id,error:typeof error === "string" ? error : JSON.stringify({kind:"unavailable",message:String(error)})}); }
};
