import init, {workspace_database} from "./pkg/layer_web.40dd59b98e7065306600.js";
import {createWorkspaceStore} from "./workspace-store.684c28e6d75d22608cfb.js";
let ready;
const store = createWorkspaceStore(workspace_database);
self.onmessage = async ({data}) => {
  if (data.module) { ready = init({module_or_path:data.module}); return; }
  try { await (ready ||= init()); self.postMessage({id:data.id,response:await store.execute(data.request)}); }
  catch(error) { self.postMessage({id:data.id,error:typeof error === "string" ? error : JSON.stringify({kind:"unavailable",message:String(error)})}); }
};
