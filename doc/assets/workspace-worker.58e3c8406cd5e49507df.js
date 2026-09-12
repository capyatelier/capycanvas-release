import init, {workspace_database} from "./pkg/layer_web.485c58a724c50d84ee5f.js";
import {createWorkspaceStore} from "./workspace-store.d0b6d9aa69b42184f4a9.js";
const ready = init();
const store = createWorkspaceStore(workspace_database);
self.onmessage = async ({data}) => {
  try { await ready; self.postMessage({id:data.id,response:await store.execute(data.request)}); }
  catch(error) { self.postMessage({id:data.id,error:typeof error === "string" ? error : JSON.stringify({kind:"unavailable",message:String(error)})}); }
};
