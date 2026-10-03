import {createWorkspaceClient} from "./workspace-store.f591a06acda7e2734597.js";

// This small entry point can run before the editor's full module graph loads.
// Start storage's isolate and compile the shared Wasm module in that interval.
let wake = () => {};
export const workspaceStore = createWorkspaceClient(new URL("./workspace-worker.837bc000a2d252ea32b4.js", import.meta.url), {
  preload: true, onSettled: () => wake(),
});
export const setWorkspaceWake = callback => { wake = callback; };
export const modulePromise = (async () => {
  const response = await fetch(new URL("./pkg/layer_web_bg.bd4d1d93408b5f8b65e1.wasm", import.meta.url));
  if (!response.ok) throw new Error("Cannot load application code");
  return response.headers.get("Content-Type")?.split(";")[0] === "application/wasm"
    ? WebAssembly.compileStreaming(response)
    : WebAssembly.compile(await response.arrayBuffer());
})();
// The editor reports failures after its imports load, even if this rejects first.
modulePromise.catch(() => {});
