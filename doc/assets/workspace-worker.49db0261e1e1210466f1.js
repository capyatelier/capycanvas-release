import init, {workspace_database} from "./pkg/layer_web.e851dec193b14a85e9f3.js";
import {createWorkspaceStore} from "./workspace-store.bcf00214205abe1e8c3c.js";
let ready;
const store = createWorkspaceStore(workspace_database);
self.onmessage = async ({data}) => {
  if (data.module) { ready = init({module_or_path:data.module}); return; }
  try { await (ready ||= init()); self.postMessage({id:data.id,response:await store.execute(data.request)}); }
  catch(error) { self.postMessage({id:data.id,error:typeof error === "string" ? error : JSON.stringify({kind:"unavailable",message:String(error)})}); }
};
