import init, {workspace_database} from "./pkg/layer_web.c4a01ec050de74cbcbf3.js";
import {createWorkspaceStore} from "./workspace-store.47d94f330959acc88fb7.js";
const ready = init();
const store = createWorkspaceStore(workspace_database);
self.onmessage = async ({data}) => {
  try { await ready; self.postMessage({id:data.id,response:await store.execute(data.request)}); }
  catch(error) { self.postMessage({id:data.id,error:typeof error === "string" ? error : JSON.stringify({kind:"unavailable",message:String(error)})}); }
};
