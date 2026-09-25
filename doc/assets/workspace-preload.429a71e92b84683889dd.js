import {createWorkspaceClient} from "./workspace-store.684c28e6d75d22608cfb.js";

// This small entry point can run before the editor's full module graph loads.
// Start storage's isolate and compile the shared Wasm module in that interval.
let wake = () => {};
export const workspaceStore = createWorkspaceClient(new URL("./workspace-worker.ce4b2cfe64f389a70f1c.js", import.meta.url), {
  preload: true, onSettled: () => wake(),
});
export const setWorkspaceWake = callback => { wake = callback; };
export const modulePromise = (async () => {
  const response = await fetch(new URL("./pkg/layer_web_bg.7e9d15ca3451f944ad07.wasm", import.meta.url));
  if (!response.ok) throw new Error("Cannot load application code");
  return response.headers.get("Content-Type")?.split(";")[0] === "application/wasm"
    ? WebAssembly.compileStreaming(response)
    : WebAssembly.compile(await response.arrayBuffer());
})();
// The editor reports failures after its imports load, even if this rejects first.
modulePromise.catch(() => {});
