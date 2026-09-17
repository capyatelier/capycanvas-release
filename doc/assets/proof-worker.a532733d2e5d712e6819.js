import init, {proof_worker_build} from "./pkg/layer_web.8189936a4fc31b766bd6.js";
// Exactly one build, followed by host termination to release the Wasm arena.
self.onmessage=async({data})=>{
  try{await init();const result=proof_worker_build(data);self.postMessage({result},[result.bytes.buffer]);}
  catch(error){self.postMessage({error:String(error)});}
};
