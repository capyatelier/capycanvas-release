import init, {proof_worker_build,proof_texture_build} from "./pkg/layer_web.0460e0f49f4f2b5f5f00.js";
// Exactly one build, followed by host termination to release the Wasm arena.
self.onmessage=async({data})=>{
  try{await init();const result=data?.type==="texture"?{bytes:proof_texture_build(512)}:proof_worker_build(data);self.postMessage({result},[result.bytes.buffer]);}
  catch(error){self.postMessage({error:String(error)});}
};
