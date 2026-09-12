import init, { WebApp, WebGpu } from "./pkg/layer_web.92aa9364579febe9d54e.js";
import { createPreferences } from "./preferences.63fd8f8678d7fe7b57dd.js";
import { showGpuNotice } from "./gpu.974d8febbbb3582fae28.js";
import { createCustomization } from "./customization.ff1a992808c11d302d87.js";
import { createEditorPanels } from "./editor-panels.e2c5f79bbc73ad160375.js";
import { createWorkspaceChrome } from "./workspace-chrome.106416c6c0326ce9f9a6.js";
import { createDocuments } from "./documents.5002d3ca223c9f29c502.js";
import { createSystemStatus } from "./system-status.488dd6d1a506ec139165.js";
import { createNumberField } from "./numeric.9da6fc00fab7ed615c33.js";
import { createLayerPanel } from "./layers.5b977782c4e455cdec63.js";
import { createEffectPanels, fetchFilterPackage } from "./effects.32f7cf3f01aec0e95017.js";

// The static packager fills this map with fingerprinted resource filenames.
const assetPaths = {"brush-previews/1-dark.png":"brush-previews/1-dark.35ec1a4918457c880720.png","brush-previews/1-light.png":"brush-previews/1-light.bee4559498a8376fe52f.png","brush-previews/10-dark.png":"brush-previews/10-dark.e47579a59864f7970777.png","brush-previews/10-light.png":"brush-previews/10-light.e47579a59864f7970777.png","brush-previews/11-dark.png":"brush-previews/11-dark.047f67c3f13a9a6eb99b.png","brush-previews/11-light.png":"brush-previews/11-light.f842bb41f2e36e1e9ea9.png","brush-previews/12-dark.png":"brush-previews/12-dark.fc5c25b87ebece789b7a.png","brush-previews/12-light.png":"brush-previews/12-light.fc5c25b87ebece789b7a.png","brush-previews/13-dark.png":"brush-previews/13-dark.7878ec28e845590266dd.png","brush-previews/13-light.png":"brush-previews/13-light.7878ec28e845590266dd.png","brush-previews/14-dark.png":"brush-previews/14-dark.a6cc6398ba846ed2333b.png","brush-previews/14-light.png":"brush-previews/14-light.12144ad5d9bbce9369ad.png","brush-previews/15-dark.png":"brush-previews/15-dark.5458d30800c4da9c1545.png","brush-previews/15-light.png":"brush-previews/15-light.6afbd60c5f66689c056f.png","brush-previews/16-dark.png":"brush-previews/16-dark.6fac7ba24240a4fd0a58.png","brush-previews/16-light.png":"brush-previews/16-light.a604fdfd4d866a979608.png","brush-previews/17-dark.png":"brush-previews/17-dark.da227d0b5145bdc58b5e.png","brush-previews/17-light.png":"brush-previews/17-light.bdc124bf88934e611913.png","brush-previews/18-dark.png":"brush-previews/18-dark.cbed83f4c2b48d46d26c.png","brush-previews/18-light.png":"brush-previews/18-light.328d2e717788f183bdae.png","brush-previews/19-dark.png":"brush-previews/19-dark.5d5f0fd9dd9891d5c858.png","brush-previews/19-light.png":"brush-previews/19-light.d713d171dc4c957f4f9b.png","brush-previews/2-dark.png":"brush-previews/2-dark.cefae5142b7dc81b0e55.png","brush-previews/2-light.png":"brush-previews/2-light.3ee7ad470d0c68043a63.png","brush-previews/20-dark.png":"brush-previews/20-dark.9661fe431beac189e49f.png","brush-previews/20-light.png":"brush-previews/20-light.834923c53af902867019.png","brush-previews/21-dark.png":"brush-previews/21-dark.e2e7bbdc9631e95121ba.png","brush-previews/21-light.png":"brush-previews/21-light.fd6bd04e2feee4c3bfe7.png","brush-previews/22-dark.png":"brush-previews/22-dark.242fa7e13844c69eba87.png","brush-previews/22-light.png":"brush-previews/22-light.ee6205c9e076bff465bb.png","brush-previews/23-dark.png":"brush-previews/23-dark.861181594623a794928e.png","brush-previews/23-light.png":"brush-previews/23-light.8cf65e3d783b829d8014.png","brush-previews/24-dark.png":"brush-previews/24-dark.85b74930aee61a192265.png","brush-previews/24-light.png":"brush-previews/24-light.85b74930aee61a192265.png","brush-previews/3-dark.png":"brush-previews/3-dark.e4190213e18ad0c90c78.png","brush-previews/3-light.png":"brush-previews/3-light.e4190213e18ad0c90c78.png","brush-previews/4-dark.png":"brush-previews/4-dark.5800de4355ae039a3bc2.png","brush-previews/4-light.png":"brush-previews/4-light.4c19bc1f0ea2dabc3127.png","brush-previews/5-dark.png":"brush-previews/5-dark.65f2b9fc447f2cdbbf2d.png","brush-previews/5-light.png":"brush-previews/5-light.5cd08ed93f1bdaa69679.png","brush-previews/6-dark.png":"brush-previews/6-dark.3442a23d66984b101b67.png","brush-previews/6-light.png":"brush-previews/6-light.25926b61bdd9b2e9536f.png","brush-previews/7-dark.png":"brush-previews/7-dark.03675f16205c23394553.png","brush-previews/7-light.png":"brush-previews/7-light.0a84514d678d7cb3a5eb.png","brush-previews/8-dark.png":"brush-previews/8-dark.c135f645abd4c57da6ab.png","brush-previews/8-light.png":"brush-previews/8-light.ca572e4f089f67af6f3a.png","brush-previews/9-dark.png":"brush-previews/9-dark.4609551d2240598560f3.png","brush-previews/9-light.png":"brush-previews/9-light.e782c2d1201096becd32.png","filters/effects.wgsl":"filters/effects.61be4812695a7498684d.wgsl","filters/filter_library.wgsl":"filters/filter_library.cf48a5a87149d5537115.wgsl","filters/gaussian-prepare.wgsl":"filters/gaussian-prepare.b65389202b05796620e5.wgsl","filters/manifest.json":"filters/manifest.44cf8780fae5331b015a.json","icons/layer-adjustments-symbolic.svg":"icons/layer-adjustments-symbolic.3cef237b343ecde56892.svg","icons/layer-airbrush-symbolic.svg":"icons/layer-airbrush-symbolic.78e1a5cee2e2466b56e5.svg","icons/layer-alpha-lock-symbolic.svg":"icons/layer-alpha-lock-symbolic.ed3a94b7158e488752fd.svg","icons/layer-animation-symbolic.svg":"icons/layer-animation-symbolic.11c87a5b3c87ff5c2d18.svg","icons/layer-appearance-symbolic.svg":"icons/layer-appearance-symbolic.effffbd0832cde145d56.svg","icons/layer-auto-select-symbolic.svg":"icons/layer-auto-select-symbolic.332992e18e98a96ae918.svg","icons/layer-back-symbolic.svg":"icons/layer-back-symbolic.13316926b7d26a1fc2b6.svg","icons/layer-black_white-symbolic.svg":"icons/layer-black_white-symbolic.872598821f9884acd3a2.svg","icons/layer-blend-symbolic.svg":"icons/layer-blend-symbolic.04c0fb4f2a8f4b4282ff.svg","icons/layer-brightness_contrast-symbolic.svg":"icons/layer-brightness_contrast-symbolic.89387c572ed70b490515.svg","icons/layer-brush-symbolic.svg":"icons/layer-brush-symbolic.95a107fa96f12f8b1dc1.svg","icons/layer-check-symbolic.svg":"icons/layer-check-symbolic.ee42a3e6be05b2a036e0.svg","icons/layer-chevron-down-symbolic.svg":"icons/layer-chevron-down-symbolic.68da7053e2f57c63a593.svg","icons/layer-clip-symbolic.svg":"icons/layer-clip-symbolic.341127a0e3d6af76d3c7.svg","icons/layer-color_balance-symbolic.svg":"icons/layer-color_balance-symbolic.0fc164956f5ff859ee9a.svg","icons/layer-color-symbolic.svg":"icons/layer-color-symbolic.d57e12a7c6f7ac8f7046.svg","icons/layer-colors-symbolic.svg":"icons/layer-colors-symbolic.bd7ea01dc46286863cf3.svg","icons/layer-column-expand-symbolic.svg":"icons/layer-column-expand-symbolic.44f26da8a96a80900339.svg","icons/layer-cursor-brush-cross-symbolic.svg":"icons/layer-cursor-brush-cross-symbolic.00af67c62fbc5f6b9ef0.svg","icons/layer-cursor-brush-symbolic.svg":"icons/layer-cursor-brush-symbolic.5f29fedd81117cb05a71.svg","icons/layer-cursor-cross-symbolic.svg":"icons/layer-cursor-cross-symbolic.4312a1e7d5c5754568e4.svg","icons/layer-cursor-dot-symbolic.svg":"icons/layer-cursor-dot-symbolic.dbb8054a0b207e1b7eb2.svg","icons/layer-cursor-none-symbolic.svg":"icons/layer-cursor-none-symbolic.b0b167dbd699d2b240fa.svg","icons/layer-curves-symbolic.svg":"icons/layer-curves-symbolic.34d6320d5cb43fde1da1.svg","icons/layer-decoration-symbolic.svg":"icons/layer-decoration-symbolic.fab6db0f7dbf2a0695d1.svg","icons/layer-delete-symbolic.svg":"icons/layer-delete-symbolic.3fe343840fe1253261c1.svg","icons/layer-down-symbolic.svg":"icons/layer-down-symbolic.2077aefc6f508c80c30b.svg","icons/layer-ellipse-symbolic.svg":"icons/layer-ellipse-symbolic.ca6d5bcd5168a0110fef.svg","icons/layer-eraser-symbolic.svg":"icons/layer-eraser-symbolic.d36a1a78e891175bbb48.svg","icons/layer-export-document-symbolic.svg":"icons/layer-export-document-symbolic.6b989ba07964d0af2987.svg","icons/layer-exposure-symbolic.svg":"icons/layer-exposure-symbolic.e0482b14da72038b56c6.svg","icons/layer-eye-hidden-symbolic.svg":"icons/layer-eye-hidden-symbolic.520bf33852eac0c74a68.svg","icons/layer-eye-symbolic.svg":"icons/layer-eye-symbolic.fa3abcbf8ce5e4b30745.svg","icons/layer-eyedropper-symbolic.svg":"icons/layer-eyedropper-symbolic.cfc6decc86a1b97e00d1.svg","icons/layer-figure-symbolic.svg":"icons/layer-figure-symbolic.2a30a1ee2a6afa013656.svg","icons/layer-fill-symbolic.svg":"icons/layer-fill-symbolic.b32c4577e804936cc30b.svg","icons/layer-fit-symbolic.svg":"icons/layer-fit-symbolic.ac6a0b9c390c32598367.svg","icons/layer-flip-horizontal-symbolic.svg":"icons/layer-flip-horizontal-symbolic.e8736e08b28af37ce741.svg","icons/layer-flip-vertical-symbolic.svg":"icons/layer-flip-vertical-symbolic.e6b2396971afcb8a2ec1.svg","icons/layer-folder-open-symbolic.svg":"icons/layer-folder-open-symbolic.6ee6368524331b647b32.svg","icons/layer-folder-symbolic.svg":"icons/layer-folder-symbolic.be0904f291249af7827b.svg","icons/layer-fullscreen-enter-symbolic.svg":"icons/layer-fullscreen-enter-symbolic.21583f12193d5121f8c2.svg","icons/layer-fullscreen-exit-symbolic.svg":"icons/layer-fullscreen-exit-symbolic.d70383f540802d1c1c13.svg","icons/layer-gradient_map-symbolic.svg":"icons/layer-gradient_map-symbolic.dcbb1ef9a592fff18b11.svg","icons/layer-gradient-symbolic.svg":"icons/layer-gradient-symbolic.d4d1ad1a98ff24fa796b.svg","icons/layer-grip-symbolic.svg":"icons/layer-grip-symbolic.258f461bcfa33a125d89.svg","icons/layer-hand-symbolic.svg":"icons/layer-hand-symbolic.c5a9b4e90675a216f95e.svg","icons/layer-hue_saturation-symbolic.svg":"icons/layer-hue_saturation-symbolic.121bf9f7fcf95c20bbe6.svg","icons/layer-image-symbolic.svg":"icons/layer-image-symbolic.3d4764f002e54c5ce715.svg","icons/layer-info-symbolic.svg":"icons/layer-info-symbolic.de87224179edc68417bb.svg","icons/layer-keyboard-symbolic.svg":"icons/layer-keyboard-symbolic.807feffcdae0b3ec077a.svg","icons/layer-lasso-symbolic.svg":"icons/layer-lasso-symbolic.e623236322bb908bfe36.svg","icons/layer-layers-symbolic.svg":"icons/layer-layers-symbolic.68c5097329d72a48a01d.svg","icons/layer-levels-symbolic.svg":"icons/layer-levels-symbolic.cd341232d3880dab5092.svg","icons/layer-line-symbolic.svg":"icons/layer-line-symbolic.d268b3bfa9c2d763616c.svg","icons/layer-link-symbolic.svg":"icons/layer-link-symbolic.4cd2d7081664ed727f16.svg","icons/layer-liquify-symbolic.svg":"icons/layer-liquify-symbolic.d3424fa71f0a103280dc.svg","icons/layer-lock-symbolic.svg":"icons/layer-lock-symbolic.bd3cd63801c343afe5ce.svg","icons/layer-mask-symbolic.svg":"icons/layer-mask-symbolic.e14671ba6bdc24fe08af.svg","icons/layer-menu-symbolic.svg":"icons/layer-menu-symbolic.3162891262ac586b6742.svg","icons/layer-minus-symbolic.svg":"icons/layer-minus-symbolic.7deca782c8516d2be808.svg","icons/layer-more-symbolic.svg":"icons/layer-more-symbolic.83a3457d1575caee0305.svg","icons/layer-move-symbolic.svg":"icons/layer-move-symbolic.3d221b52837a0334f0c6.svg","icons/layer-navigator-symbolic.svg":"icons/layer-navigator-symbolic.c2a5fa6a5fecf2371dee.svg","icons/layer-new-document-symbolic.svg":"icons/layer-new-document-symbolic.478481b2657e19025ada.svg","icons/layer-opacity-symbolic.svg":"icons/layer-opacity-symbolic.4723f12783d40aa72aea.svg","icons/layer-open-document-symbolic.svg":"icons/layer-open-document-symbolic.fca15f9010e91362d0bc.svg","icons/layer-pen-symbolic.svg":"icons/layer-pen-symbolic.81809a79e688bbfd00cd.svg","icons/layer-pencil-symbolic.svg":"icons/layer-pencil-symbolic.a1af1dc64e78f17c9463.svg","icons/layer-plus-symbolic.svg":"icons/layer-plus-symbolic.d5bcbc365c42d903955d.svg","icons/layer-posterize-symbolic.svg":"icons/layer-posterize-symbolic.8463ce4dacd5498f5bb9.svg","icons/layer-properties-symbolic.svg":"icons/layer-properties-symbolic.63b4e797b87c93560b6c.svg","icons/layer-rectangle-symbolic.svg":"icons/layer-rectangle-symbolic.9301acf9a5ce8e3c03f2.svg","icons/layer-redo-symbolic.svg":"icons/layer-redo-symbolic.d6c2966e05601e4c9496.svg","icons/layer-reference-symbolic.svg":"icons/layer-reference-symbolic.5b245b7829699a74bf0a.svg","icons/layer-rotate-left-symbolic.svg":"icons/layer-rotate-left-symbolic.508e77c22c5b490cf651.svg","icons/layer-rotate-right-symbolic.svg":"icons/layer-rotate-right-symbolic.41bb4bb6c84097d9ff72.svg","icons/layer-ruler-parallel-symbolic.svg":"icons/layer-ruler-parallel-symbolic.3da39e680ef233d328fc.svg","icons/layer-ruler-radial-symbolic.svg":"icons/layer-ruler-radial-symbolic.a93909a534e85020e981.svg","icons/layer-ruler-snap-symbolic.svg":"icons/layer-ruler-snap-symbolic.a38e148c68a7bb7c8206.svg","icons/layer-ruler-symbolic.svg":"icons/layer-ruler-symbolic.8a5c8e9f35f180930ef1.svg","icons/layer-save-document-symbolic.svg":"icons/layer-save-document-symbolic.3d74e1be50abdf7a7585.svg","icons/layer-search-symbolic.svg":"icons/layer-search-symbolic.083808e07e9068e1f81a.svg","icons/layer-selection-checked-symbolic.svg":"icons/layer-selection-checked-symbolic.cb46fcf370ac812ec902.svg","icons/layer-selection-empty-symbolic.svg":"icons/layer-selection-empty-symbolic.3b1d5aaabc8a9e0426b7.svg","icons/layer-settings-symbolic.svg":"icons/layer-settings-symbolic.792d51cf281148198e77.svg","icons/layer-size-symbolic.svg":"icons/layer-size-symbolic.25002ebc368eefcb7969.svg","icons/layer-stats-symbolic.svg":"icons/layer-stats-symbolic.5381ed753736936f7f45.svg","icons/layer-swap-symbolic.svg":"icons/layer-swap-symbolic.41e20700834a3444ad8d.svg","icons/layer-undo-symbolic.svg":"icons/layer-undo-symbolic.04adc640c989dc473065.svg","icons/layer-up-symbolic.svg":"icons/layer-up-symbolic.83375c5cd82ab6cde565.svg","icons/layer-vibrance-symbolic.svg":"icons/layer-vibrance-symbolic.93957274aac3dea4f4f0.svg","icons/layer-zen-bathing-symbolic.svg":"icons/layer-zen-bathing-symbolic.a638473e74f9e05000d7.svg","icons/layer-zen-facing-forward-symbolic.svg":"icons/layer-zen-facing-forward-symbolic.06a3a282919298af5baf.svg","icons/layer-zen-looking-up-symbolic.svg":"icons/layer-zen-looking-up-symbolic.702efa7f434780589e3e.svg","icons/layer-zen-sleeping-symbolic.svg":"icons/layer-zen-sleeping-symbolic.adc886ce0a33f63e8896.svg"};
const asset = (path) => new URL(assetPaths[path.replace(/^\.\//, "")] || path, import.meta.url).href;

const panels = new Map(),
  groups = new Map(),
  dividers = new Map();
const $ = (id) =>
  document.getElementById(id) ||
  [...panels.values()]
    .map((panel) => panel.querySelector(`#${id}`))
    .find(Boolean);
const workspace = $("workspace"),
  canvas = $("canvas"),
  center = $("center");
const commands = new Map(), sizeButtons = new Map();
let app,
  catalog,
  panelNames,
  state,
  scheduled = false,
  layout,
  lastPenEvent = null,
  chromeHeld = false,
  dragItem = null,
  statusTimer;
let refreshPreferences, customization, layerPanel, effectPanels, editor, workspaceChrome, documents, systemStatus;
const fullscreenRequests = new Set();
let gpuStarting = false;
let gpuReady = false;
let compilerScheduled = false, compilerFailed = false;
const startupTimes = { canvas: null, document: null, brush: null, complete: null };
let startupNotice;
let firstCanvasRendered = false;
let servicingRequests = false;
const settingsKey = "layer.preferences.v1", workspaceKey = "layer.workspace.v1";
let savedWorkspace = "", workspaceSaveTimer;
const pending = [];
const systemTheme = matchMedia("(prefers-color-scheme: dark)");
applyTheme(systemTheme.matches ? "dark" : "light");

function applyTheme(theme, palette) {
  document.body.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="color-scheme"]').content = theme;
  if (palette) for (const [name, color] of Object.entries(palette)) {
    if (typeof color === "string") document.body.style.setProperty(`--${name.replaceAll("_", "-")}`, name === "button" ? `${color}0d` : color);
  }
  document.querySelector('meta[name="theme-color"]').content = palette?.bg || (theme === "dark" ? "#333333" : "#b8b8b8");
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}
function message(error) {
  $("status").textContent = String(error);
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    $("status").textContent = "";
  }, 7000);
}
function button(text, action, className = "") {
  const node = element("button", className, text);
  node.type = "button";
  node.addEventListener("click", action);
  return node;
}
function numberField(control, label, onChange, inline = false) {
  return createNumberField({ control, label, onChange, inline, icon, resolve: request => app.number_input(request) });
}
// Overlay scrollbars do not take width away from previews or tiles. Scrolling
// itself stays in the browser; this one thumb also supports pointer dragging.
function panelFrame(panel, scrollable = true) {
  const frame = element("div", "panel-frame");
  frame.append(panel);
  if (!scrollable) return frame;
  const thumb = element("div", "scroll-thumb");
  thumb.setAttribute("aria-hidden", "true");
  frame.append(thumb);
  let origin;
  const update = () => {
    if (!panel.clientHeight) {
      thumb.hidden = true;
      return;
    }
    const overflow = panel.scrollHeight - panel.clientHeight;
    thumb.hidden = overflow <= 1;
    const height = Math.max(28, panel.clientHeight ** 2 / panel.scrollHeight);
    thumb.style.height = `${height}px`;
    thumb.style.top = `${overflow > 0 ? (panel.scrollTop / overflow) * (panel.clientHeight - height) : 0}px`;
  };
  panel.addEventListener("scroll", update);
  new ResizeObserver(update).observe(panel);
  new MutationObserver(update).observe(panel, {
    childList: true,
    subtree: true,
  });
  thumb.addEventListener("pointerdown", (e) => {
    origin = [e.clientY, panel.scrollTop];
    thumb.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  thumb.addEventListener("pointermove", (e) => {
    if (thumb.hasPointerCapture(e.pointerId))
      panel.scrollTop =
        origin[1] +
        ((e.clientY - origin[0]) * (panel.scrollHeight - panel.clientHeight)) /
          (panel.clientHeight - thumb.offsetHeight);
  });
  return frame;
}
function commandButton(id, text) {
  const node = button(text, () => dispatch({ type: "invoke", command: id }));
  node.dataset.command = id;
  node.dataset.icon = String(text !== id && text.length <= 2);
  const list = commands.get(id) || [];
  list.push(node);
  commands.set(id, list);
  return node;
}
const icons = new Map();
async function loadIcons() {
  await Promise.all(
    [...catalog.icons, "fullscreen-enter", "fullscreen-exit", "chevron-down"].map(async (name) => {
      const response = await fetch(asset(`./icons/layer-${name}-symbolic.svg`));
      if (!response.ok) throw new Error(`Cannot load icon ${name}`);
      const svg = new DOMParser().parseFromString(
        await response.text(),
        "image/svg+xml",
      ).documentElement;
      svg.dataset.asset = name;
      svg.setAttribute("aria-hidden", "true");
      svg.setAttribute("focusable", "false");
      icons.set(name, svg);
    }),
  );
}
function icon(name) {
  return icons.get(name).cloneNode(true);
}
function iconButton(id) {
  const node = commandButton(id, "");
  node.dataset.icon = "true";
  node.classList.add("tile-button");
  const glyph = icon(state.commands.find((c) => c.id === id).icon);
  if (id === "zen_mode") {
    glyph.style.width = glyph.style.height = `${catalog.zen_icon_size}px`;
  }
  node.append(glyph);
  return node;
}
function draggable(node, item) {
  if (item.kind !== "tile") {
    node.draggable = false;
    node.dataset.workspaceDrag = JSON.stringify({ type: "drag_workspace", item });
    return node;
  }
  node.draggable = true;
  let pointer;
  node.addEventListener("workspace-context-claimed", () => { pointer = null; });
  node.addEventListener("pointerdown", (e) => {
    if (e.pointerType !== "touch" || e.button !== 0) return;
    pointer = { id: e.pointerId, x: e.clientX, y: e.clientY, dragging: false };
    node.setPointerCapture(e.pointerId);
  });
  node.addEventListener("pointermove", (e) => {
    if (pointer?.id !== e.pointerId) return;
    if (!pointer.dragging && Math.hypot(e.clientX - pointer.x, e.clientY - pointer.y) > 8) {
      pointer.dragging = true; dragItem = item; node.classList.add("drag-source"); updateZen();
    }
    if (pointer.dragging) { e.preventDefault(); showDropHint(dropHint(e, item)); }
  });
  const endPointer = (e) => {
    if (pointer?.id !== e.pointerId) return;
    const moved = pointer.dragging; pointer = null;
    if (!moved) return;
    revealPointer = e.pointerId;
    if (e.type === "pointerup") dropItem(item, dropHint(e, item));
    dragItem = null; dropIndicator.hidden = true; node.classList.remove("drag-source"); updateZen();
  };
  for (const event of ["pointerup", "pointercancel", "lostpointercapture"]) node.addEventListener(event, endPointer);
  node.addEventListener("dragstart", (e) => {
    e.dataTransfer.setData("text/layer-dock", JSON.stringify(item));
    e.dataTransfer.effectAllowed = "move";
    dragItem = item;
    updateZen();
  });
  node.addEventListener("dragend", () => {
    dragItem = null;
    dropIndicator.hidden = true;
    updateZen();
  });
  return node;
}
function grip(item) {
  const node = button("", () => {}, "panel-grip");
  node.title = "Drag to move panel";
  node.setAttribute(
    "aria-label",
    item.kind === "group" ? "Move all tabs" : "Move " + (customization?.view(item.panel)?.title || panelNames[item.panel] || "toolbar"),
  );
  node.append(icon("grip"));
  return draggable(node, item);
}
const dropIndicator = element("div", "drop-indicator");
dropIndicator.hidden = true;
workspace.append(dropIndicator);

function dispatch(action) {
  try {
    if (["move_panel", "move_group", "move_tile", "double_click_panel_handle", "reset_column_width"].includes(action.type))
      action = {
        ...action,
        viewport: [workspace.clientWidth, workspace.clientHeight],
      };
    const animated = ["double_click_panel_handle", "select_panel_tab"].includes(action.type) ? groups.get(action.group) : null;
    const before = animated?.getBoundingClientRect();
    applyChange(app.dispatch(action));
    if (before && animated?.classList.contains("floating-panel") && !animated.classList.contains("expanded-panel")
      && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const after = animated.getBoundingClientRect();
      if (before.width !== after.width || before.height !== after.height) {
        animated.getAnimations().forEach(a => a.cancel());
        const frame = r => ({ left: `${r.x}px`, top: `${r.y}px`, width: `${r.width}px`, height: `${r.height}px` });
        animated.animate([frame(before), frame(after)], { duration: catalog.panel_expansion_ms, easing: "cubic-bezier(.2,0,0,1)" });
      }
    }
  } catch (error) {
    message(error);
  }
}
function applyChange(change) {
  if (change.regions) {
    state = app.state();
    update(change.regions);
  }
  if (change.canvas_wake) wake();
  scheduleCursor();
}
let cursorScheduled = false;
function scheduleCursor() {
  if (cursorScheduled || !gpuReady) return;
  cursorScheduled = true;
  requestAnimationFrame(() => {
    cursorScheduled = false;
    const view = app.canvas_cursor();
    for (const kind of ["outline", "marker"])
      for (const node of document.querySelectorAll(
        `#canvas-cursor .cursor-${kind}-back, #canvas-cursor .cursor-${kind}-front`,
      ))
        node.setAttribute("d", view?.[kind] || "");
  });
}
function cursorInput(e) {
  if (!gpuReady) return;
  const onCanvas =
    e &&
    e.pointerType !== "touch" &&
    document.elementFromPoint(e.clientX, e.clientY) === canvas;
  app.cursor_input(
    onCanvas
      ? new Float64Array([
          ...position(e),
          e.pointerType === "pen" ? e.pressure : 1,
          ((e.tiltX || 0) * Math.PI) / 180,
          ((e.tiltY || 0) * Math.PI) / 180,
          ((e.twist || 0) * Math.PI) / 180,
          e.timeStamp,
        ])
      : new Float64Array(),
  );
  scheduleCursor();
}
function wake() {
  if (gpuReady && !scheduled) {
    scheduled = true;
    requestAnimationFrame(frame);
  }
}
function frame(now) {
  scheduled = false;
  try {
    while (pending.length) {
      const batch = pending[0],
        count = app.pen(batch.records, batch.revision);
      if (count * 11 === batch.records.length) pending.shift();
      else {
        batch.records = batch.records.subarray(count * 11);
        break;
      }
    }
    applyChange(app.frame(now, now + 1000 / 120));
    refreshStartup();
    scheduleCompiler();
    if (pending.length) wake();
  } catch (error) {
    message(error);
    console.error(error);
  }
}
function refreshStartup() {
  if (!gpuReady || compilerFailed) return;
  const [documentReady, brushReady, complete] = app.startup_progress();
  const stages = { canvas: app.canvas_presented(), document: documentReady, brush: brushReady, complete };
  for (const [name, ready] of Object.entries(stages)) {
    if (ready && startupTimes[name] === null) {
      startupTimes[name] = performance.now();
      performance.mark(`capy.startup.${name}`);
    }
  }
  if (!startupNotice) {
    startupNotice = element("div", "startup-progress");
    startupNotice.setAttribute("role", "status");
    workspace.append(startupNotice);
  }
  startupNotice.hidden = !stages.canvas || app.brush_ready();
  startupNotice.textContent = documentReady ? "Preparing brush…" : "Preparing canvas…";
}
function scheduleCompiler() {
  if (!gpuReady || compilerScheduled || compilerFailed || !app.shader_work_pending()) return;
  compilerScheduled = true;
  // Start after this display callback can present. The next job is scheduled
  // by a later frame, with input/UI opportunities between each GPU scope.
  setTimeout(async () => {
    try {
      if (!firstCanvasRendered) {
        // A display callback alone does not mean the GPU has rendered paper.
        // Starting document compilation sooner can hold up Chrome's GPU-process
        // command batch, including the pending first canvas presentation.
        await gpuOperation(() => app.wait_for_canvas());
        firstCanvasRendered = true;
        await new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
      }
      await gpuOperation(() => app.compile_startup_step());
      refreshStartup();
      wake();
    } catch (error) {
      compilerFailed = true;
      if (startupNotice) startupNotice.hidden = true;
      message("Shader preparation failed. Reload the page to retry.");
      console.error(error);
    } finally {
      compilerScheduled = false;
    }
  }, 0);
}
function place(node, rect) {
  Object.assign(node.style, {
    left: `${rect.x}px`,
    top: `${rect.y}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  });
}
function tabLabel(tab, view) {
  tab.classList.toggle("icon-only-tab", !view.tab.show_name);
  if (view.tab.show_icon) tab.append(icon(view.icon));
  if (view.tab.show_name) tab.append(element("span", "", view.title));
}
function arrange() {
  if (!app) return;
  layout = app.layout(workspace.clientWidth, workspace.clientHeight);
  workspace.style.setProperty("--tab-bar-height", `${layout.tab_bar_height}px`);
  const live = new Set();
  for (const group of layout.groups) {
    live.add(group.id);
    let node = groups.get(group.id);
    if (!node) {
      node = element("section", "dock-group");
      const clip = element("div", "panel-columns");
      clip.append(element("div", "panel-preview")); node.append(clip);
      groups.set(group.id, node);
      workspace.append(node);
    }
    const key = JSON.stringify([group.panels.map((id) => {
      const view = customization.view(id); return [id, view.title, view.tab, view.icon];
    }), group.active, group.tabs_visible]);
    if (node.dataset.key !== key) {
      node.dataset.key = key;
      node.dataset.panel = group.active;
      node.dataset.group = group.id;
      node.setAttribute("aria-label", customization.view(group.active).title);
      node.classList.toggle("toolbar", !!group.tiles);
      const preview = node.querySelector(".panel-preview");
      const tabs = element("nav", "dock-tabs");
      draggable(tabs, { kind: "group", group: group.id });
      customization.target(tabs, { kind: "group", group: group.id });
      tabs.setAttribute("aria-label", "Panel tabs");
      if (group.tabs_visible) {
        const labels = element("div", "tab-list");
        group.panels.forEach((panel, index) => {
          const tab = button(
            "",
            () =>
              dispatch({ type: "select_panel_tab", group: group.id, panel }),
            "dock-tab",
          );
          tab.dataset.index = index;
          tab.dataset.panel = panel;
          const view = customization.view(panel);
          tab.title = view.title; tab.setAttribute("aria-label", view.title);
          tabLabel(tab, view);
          customization.target(tab, { kind: "panel", panel });
          tab.setAttribute("aria-selected", String(panel === group.active));
          labels.append(draggable(tab, { kind: "panel", panel }));
        });
        tabs.append(labels, grip({ kind: "group", group: group.id }));
        preview.replaceChildren(tabs, panels.get(group.active).parentElement);
      } else {
        preview.replaceChildren(panels.get(group.active).parentElement);
        if (group.footer_grip) {
          const footer = element("div", "panel-footer");
          footer.style.height = `${group.footer_grip.height}px`;
          draggable(footer, { kind: "group", group: group.id });
          customization.target(footer, { kind: "group", group: group.id });
          footer.append(grip({ kind: "group", group: group.id })); preview.append(footer);
        }
      }
    }
    node.classList.toggle("floating-panel", group.floating);
    node.dataset.zIndex = group.floating ? String(100 + layout.groups.indexOf(group) * 2) : "0";
    if (!node.classList.contains("expanded-panel")) node.style.zIndex = node.dataset.zIndex;
    place(node, group.bounds);
    node.style.setProperty("--panel-body-height", `${group.bounds.height - (group.tabs_visible ? layout.tab_bar_height : 0)}px`);
    if (group.tiles) {
      const strip = node.querySelector(".toolbar-controls");
      const geometry = group.tiles;
      strip.dataset.axis = group.axis;
      strip.dataset.standalone = !group.tabs_visible;
      customization.layoutTiles(strip, geometry);
    }
  }
  for (const [id, node] of groups)
    if (!live.has(id)) {
      node.remove();
      groups.delete(id);
    }
  const liveDividers = new Set();
  const handles = [
    ...layout.dividers.map(d => ({ key: `${d.band}:${d.id}`, bounds: d.bounds,
      axis: d.axis, action: { type: "drag_divider", id: d.id } })),
    ...layout.groups.filter(g => g.floating).flatMap(g => g.resize_handles.map(h => ({
      key: `floating:${g.id}:${h.edge}`, bounds: h.bounds, edge: h.edge,
      zIndex: Number(groups.get(g.id).dataset.zIndex) + 1,
      action: { type: "resize_floating", group: g.id, edge: h.edge },
    }))),
  ];
  for (const handle of handles) {
    const { key } = handle;
    liveDividers.add(key);
    let node = dividers.get(key);
    if (!node) {
      node = element("div");
      node.tabIndex = 0;
      node.setAttribute("role", "separator");
      node.setAttribute("aria-label", "Resize dock");
      node.addEventListener("keydown", (e) => {
        if (node.dragAction.type === "drag_divider") keyInput(e, true, node.dragAction.id);
      });
      dividers.set(key, node);
      workspace.append(node);
    }
    node.dragAction = handle.action;
    node.dataset.workspaceDrag = JSON.stringify(handle.action);
    node.className = handle.edge ? "floating-resize" : `divider ${handle.axis}`;
    if (handle.edge) {
      node.dataset.edge = handle.edge; node.style.zIndex = handle.zIndex;
      node.hidden = state.customization.expanded != null && layout.groups.find(g => g.id === handle.action.group)?.panels.includes(state.customization.expanded);
    } else node.setAttribute("aria-orientation", handle.axis === "horizontal" ? "vertical" : "horizontal");
    place(node, handle.bounds);
  }
  for (const [key, node] of dividers)
    if (!liveDividers.has(key)) {
      node.remove();
      dividers.delete(key);
    }
  customization.arrange(layout);
  workspaceChrome?.arrange(layout);
  editor.queuePositions();
  place($("canvas-status"), layout.status);
  // The help occupies the same unobstructed area used for fitting the document.
  // Panels remain native UI siblings above the full-window drawing surface.
  place($("gpu-notice"), layout.work_area);
  resizeCanvas();
  updateZen();
  queuePanelMeasurements();
}
// Measure intrinsic widget content only when its width/copy changes. Rust owns
// tab growth and floating sizes; moving a float reuses these cached DOM facts.
const panelMeasurements = new Map();
let measuringPanels = false;
const measureBox = element("div", "panel-measure");
measureBox.setAttribute("aria-hidden", "true"); workspace.append(measureBox);
function queuePanelMeasurements() {
  if (measuringPanels) return;
  measuringPanels = true;
  requestAnimationFrame(() => {
    measuringPanels = false;
    const measurements = state.workspace.layout.panels.map(config => {
      const view = customization.view(config.id);
      const width = layout.groups.find(g => g.panels.includes(config.id))?.bounds.width || 232;
      const key = JSON.stringify([width, view.title, view.tab, view.icon, view.controls, view.tile_style, state.layers.length]);
      let cached = panelMeasurements.get(config.id);
      if (cached?.key !== key) {
        const tab = element("button", "dock-tab");
        tab.style.width = "max-content";
        tabLabel(tab, view);
        measureBox.style.width = `${width}px`; measureBox.replaceChildren(tab);
        const tabWidth = tab.getBoundingClientRect().width;
        const content = panels.get(config.id).cloneNode(true);
        content.style.height = "auto"; content.style.width = `${width}px`;
        measureBox.replaceChildren(content);
        cached = { key, value: { panel: config.id, tab_width: tabWidth,
          content_height: config.content.kind === "toolbar" ? 0 : content.getBoundingClientRect().height } };
        panelMeasurements.set(config.id, cached); measureBox.replaceChildren();
      }
      return cached.value;
    });
    for (const id of panelMeasurements.keys()) if (!panels.has(id)) panelMeasurements.delete(id);
    // The core returns no change for identical measurements, including after
    // workspace restore. This avoids keeping a second authoritative size cache.
    dispatch({ type: "measure_panels", measurements });
  });
}
function resizeCanvas() {
  const rect = canvas.getBoundingClientRect(),
    scale = devicePixelRatio || 1;
  const width = Math.max(1, Math.round(rect.width * scale)),
    height = Math.max(1, Math.round(rect.height * scale));
  if (canvas.width !== width || canvas.height !== height) {
    canvas.width = width;
    canvas.height = height;
  }
  applyChange(app.viewport(rect.width, rect.height, width, height));
}
function buildPanels() {
  for (const { id: name, kind } of catalog.panels) {
    const panel = element("div", `panel ${name}-panel`);
    if (kind === "tiles") panel.classList.add("tile-panel");
    panels.set(name, panel);
    panelFrame(panel, kind !== "tiles");
  }
  panels.get("brushes").append(editor.control("brushes"));
  for (const [panel, control] of [["tool_settings","tool_settings"],["color","color_wheel"],["navigator","navigator"]])
    panels.get(panel).append(editor.control(control));
  const controls = element("div", "size-controls");
  controls.dataset.control = "brush_size";
  const size = numberField(catalog.brush_size, "Brush size", value => dispatch({ type: "set_brush_size", value }));
  size.id = "size-number"; controls.append(size);
  const grid = element("div", "size-grid");
  grid.dataset.control = "size_presets";
  for (const value of catalog.brush_sizes) {
    const choice = button(
      "",
      () => dispatch({ type: "set_brush_size", value }),
      "size-button",
    );
    choice.title = `${value} px`;
    choice.onpointerenter = () => { choice.title = app.action_tooltip(`${value} px`, { type: "set_brush_size", value }); };
    choice.dataset.size = value;
    const dot = element("span", "size-dot");
    dot.style.width =
      dot.style.height = `${Math.min(27, 2 + Math.sqrt(value) * 1.2)}px`;
    const glyph = element("span", "size-glyph");
    glyph.append(dot);
    choice.append(glyph, element("span", "", String(value)));
    const cell = element("div", "size-cell");
    cell.append(choice);
    grid.append(cell);
    sizeButtons.set(value, choice);
  }
  panels.get("sizes").append(controls, grid);
  layerPanel = createLayerPanel({ app, catalog, state: () => state, panel: panels.get("layers"), element, button, icon, dispatch, applyChange, message, numberField });
  effectPanels = createEffectPanels({app,catalog,state:()=>state,panels,element,button,icon,dispatch,numberField,
    contentChanged:id=>{panelMeasurements.delete(id);queuePanelMeasurements();}});
}
function contentPanel(id) {
  const panel=element("div",`panel ${id}-panel`);
  if(id==="layers") {
    const view=createLayerPanel({app,catalog,state:()=>state,panel,element,button,icon,dispatch,applyChange,message,numberField});
    panel.refreshPanel=view.refresh; panel.disposePanel=view.dispose;
  } else if(["adjustments","properties","stats"].includes(id)) {
    const copies=new Map(["adjustments","properties","stats"].map(name=>[name,name===id?panel:element("div","panel")]));
    const view=createEffectPanels({app,catalog,state:()=>state,panels:copies,element,button,icon,dispatch,numberField,contentChanged:()=>{}});
    panel.refreshPanel=view.refresh; panel.disposePanel=view.dispose;
  } else {
    for(const control of customization.view(id).controls.filter(c=>c.visible_in_panel)) panel.append(customization.field(control.control,control.label));
    panel.refreshPanel=()=>{};
  }
  panel.refreshPanel();return panel;
}
function update(regions) {
  if (regions & (1 | 2 | 4 | 8 | 128)) customization.refresh();
  if (regions & 2) {
    for (const [size, button] of sizeButtons)
      button.setAttribute(
        "aria-pressed",
        String(size === state.brush.diameter),
      );
    $("size-number").update(state.brush.diameter);
  }
  if (regions & 4) {
    const tab = state.tabs[0];
    $("document-title").textContent =
      `${tab.title} · ${tab.width} × ${tab.height}`;
    layerPanel.refresh();
    effectPanels.refresh();
  }
  if (regions & (1 | 2 | 4 | 8 | 16 | 32 | 128)) { editor.refresh(); workspaceChrome?.refresh(); }
  if (regions & (1 | 4 | 128)) arrange();
  if (regions & (1 | 128)) persistWorkspace();
  if (regions & (1 | 4 | 8 | 128)) refreshWorkspaceMenu();
  if (regions & (4 | 8))
    for (const command of state.commands)
      for (const node of commands.get(command.id) || []) {
        node.disabled = !command.enabled || (command.id === "fullscreen" && !document.fullscreenEnabled);
        node.title = command.tooltip;
        node.setAttribute("aria-label", command.label);
        node.setAttribute("aria-pressed", String(command.selected));
        if (node.dataset.icon === "true") {
          const glyph = node.querySelector("svg");
          if (glyph?.dataset.asset !== command.icon) {
            const next = icon(command.icon);
            next.style.cssText = glyph?.style.cssText || "";
            node.replaceChildren(next);
          }
        } else {
          if (node.querySelector(".command-label")) {
            node.querySelector(".command-label").textContent = command.label;
            node.querySelector(".shortcut-hint").textContent = command.shortcut;
          } else node.textContent = command.label;
        }
      }
  if (regions & 16) {
    applyTheme(state.theme, state.palette);
    systemStatus?.setClockVisibility(state.settings.show_clock);
    refreshPreferences(app.preferences());
  }
  if (regions & 32)
    $("view-info").textContent =
      `${Math.round(state.camera.zoom * 100)}% · ${Math.round((state.camera.rotation * 180) / Math.PI)}°`;
  if (regions & (1 | 16)) updateZen();
  if (regions & 64) {
    documents?.refresh();
    if (state.host_error) message(state.host_error);
    // Small applied-settings snapshots only, never per-input/frame writes.
    if (!servicingRequests) {
      servicingRequests = true;
      try {
        for (const request of state.requests) {
          let error = null;
          try {
            if (request.kind.type === "set_fullscreen") {
              if (!fullscreenRequests.has(request.id)) {
                fullscreenRequests.add(request.id);
                systemStatus.setFullscreen(request.kind.fullscreen)
                  .then(() => dispatch({type:"complete_request",id:request.id,error:null}),
                    error => dispatch({type:"complete_request",id:request.id,error:String(error)}))
                  .finally(() => fullscreenRequests.delete(request.id));
              }
              continue;
            }
            else if (request.kind.type === "open_link") { window.open(app.application_link(request.kind.link), "_blank", "noopener"); }
            else if (request.kind.type !== "save_settings") { documents.handle(request); continue; }
            else
            localStorage.setItem(settingsKey, JSON.stringify(request.kind.settings));
          } catch (e) { error = `Cannot save preferences: ${e}`; }
          dispatch({ type: "complete_request", id: request.id, error });
        }
      } finally { servicingRequests = false; }
    }
  }
}

// Rust owns transient interaction policy. These are only DOM event/capture
// records; CSS animates the returned visibility without resizing the canvas.
let revealPointer = null;
let workspaceGesture = null;
function workspaceGestureEvent(phase, e) {
  const drag = workspaceGesture;
  if (!drag) return;
  workspaceChrome?.measureColumnDrawers();
  dispatch({ ...drag.action, phase, position: [e.clientX, e.clientY],
    viewport: [workspace.clientWidth, workspace.clientHeight],
    ...(drag.action.type === "drag_workspace" ? { tabs: tabHits() } : {}),
  });
}
function endWorkspaceGesture(e, cancel = false) {
  const drag = workspaceGesture;
  if (!drag || (e && drag.id !== e.pointerId)) return;
  if (drag.started) workspaceGestureEvent(cancel ? "cancel" : "up", e || drag.last);
  workspaceGesture = null;
  if (workspace.hasPointerCapture(drag.id)) workspace.releasePointerCapture(drag.id);
  dropIndicator.hidden = true;
  if (drag.started) { revealPointer = drag.id; e?.preventDefault(); e?.stopPropagation(); }
  updateZen();
}
workspace.addEventListener("pointerdown", e => {
  if (e.button !== 0 || workspaceGesture) return;
  const node = e.target.closest("[data-workspace-drag]");
  if (!node) return;
  workspaceGesture = { id: e.pointerId, action: JSON.parse(node.dataset.workspaceDrag),
    start: e, last: e, started: false };
  // External resize strips are outside the unselectable panel. Prevent a
  // native text-selection drag from stealing their pointer sequence.
  if (workspaceGesture.action.type !== "drag_workspace") e.preventDefault();
}, { capture: true });
workspace.addEventListener("pointermove", e => {
  const drag = workspaceGesture;
  if (!drag || drag.id !== e.pointerId) return;
  drag.last = e;
  if (!drag.started) {
    const distance = Math.hypot(e.clientX - drag.start.clientX, e.clientY - drag.start.clientY);
    if (distance <= (drag.action.type === "drag_workspace" ? 8 : 0)) return;
    drag.started = true;
    // Capture on the stable workspace before Rust tears off/rebuilds a tab.
    workspace.setPointerCapture(e.pointerId);
    groups.forEach(node => node.getAnimations().forEach(a => a.cancel()));
    workspaceGestureEvent("down", drag.start);
  }
  workspaceGestureEvent("move", e);
  if (drag.action.type === "drag_workspace") showDropHint(dropHint(e, drag.action.item));
  e.preventDefault(); e.stopPropagation();
}, { capture: true });
workspace.addEventListener("pointerup", e => endWorkspaceGesture(e), { capture: true });
workspace.addEventListener("pointercancel", e => endWorkspaceGesture(e, true), { capture: true });
workspace.addEventListener("lostpointercapture", e => {
  // Touch starts with implicit capture on the tab. Transferring capture to the
  // stable workspace releases that child; only losing our own capture cancels.
  if (e.target === workspace) endWorkspaceGesture(e, true);
});
workspace.addEventListener("workspace-context-claimed", () => endWorkspaceGesture(null, true));
workspace.addEventListener("dblclick", e => {
  if (e.target.closest(".dock-tab")) return;
  const node = e.target.closest("[data-workspace-drag]");
  if (!node) return;
  const action = JSON.parse(node.dataset.workspaceDrag);
  if (action.type === "drag_divider" && layout.dividers.some(d =>
    d.id === action.id && d.band && d.axis === "horizontal")) {
    e.preventDefault(); e.stopPropagation();
    endWorkspaceGesture(null, true);
    dispatch({ type: "reset_column_width", id: action.id });
    return;
  }
  if (action.type !== "drag_workspace") return;
  const group = app.panel_handle_target(action.item);
  if (group == null) return;
  e.preventDefault(); e.stopPropagation();
  dispatch({ type: "double_click_panel_handle", group });
});
function input(event) {
  if (!app) return {};
  try {
    const reply = app.input(event);
    workspace.classList.toggle("zen-hidden", reply.chrome_hidden);
    workspace.classList.toggle("zen-hide-floating", reply.hide_floating_panels);
    workspace.classList.toggle("zen-keep-button", reply.keep_zen_button);
    canvas.style.cursor = reply.pan_cursor ? "grab" : "";
    if (reply.dismiss_popups) {
      for (const popup of document.querySelectorAll(
        "details[open], :popover-open",
      )) {
        if (popup.matches("details")) popup.open = false;
        else popup.hidePopover();
      }
    }
    applyChange(reply.change);
    return reply;
  } catch (error) {
    message(error);
    return {};
  }
}
function chromeInput(event) {
  return input({
    type: "chrome",
    event,
    viewport: [workspace.clientWidth, workspace.clientHeight],
    facts: {
      expanded_panel: customization?.placement(),
      ...workspaceChrome?.facts(),
      contact_tab: event.kind === "contact"
        ? document.elementFromPoint(...event.position)?.closest(".dock-tab")?.dataset.panel ?? null
        : null,
      held: chromeHeld,
      dragging: dragItem !== null,
      popup_open:
        !!document.querySelector("details[open], :popover-open, dialog[open]") ||
        !!document.activeElement?.matches("select"),
    },
  });
}
function updateZen() {
  chromeInput({ kind: "refresh" });
  workspaceChrome?.refresh();
  editor?.queuePositions();
}
function buildHeader() {
  const zen = iconButton("zen_mode");
  zen.id = "zen-button"; zen.classList.add("chrome");
  zen.dataset.context = JSON.stringify({ kind: "zen_mode" });
  workspace.prepend(zen);
  $("header-start").append(element("span", "zen-spacer"));
  for (const spec of app.editor_models(workspace.clientWidth, workspace.clientHeight).application_menus) {
    const details = element("details", "header-menu"); details.name = "workspace-menu"; details.dataset.menu = spec.id;
    const summary = element("summary", "", spec.label); summary.setAttribute("aria-label", spec.label);
    const contents = element("div", "popover"); contents.setAttribute("role","menu");
    if(spec.id === "window") contents.id = "workspace-menu";
    details.append(summary,contents);
    details.addEventListener("toggle",()=>{if(details.open) refreshWorkspaceMenu(); updateZen();});
    $("header-start").append(details);
  }
  systemStatus = createSystemStatus({element, changed:fullscreen => {
    if(customization && state.fullscreen !== fullscreen) dispatch({type:"window_fullscreen",fullscreen});
  }});
  $("header-end").append(systemStatus.root, iconButton("fullscreen"), iconButton("settings"));
  $("header-end").querySelector('[data-command="fullscreen"]').id = "fullscreen";
}
function refreshWorkspaceMenu() {
  if(!customization || !document.querySelector(".header-menu[open]")) return;
  for(const spec of app.editor_models(workspace.clientWidth,workspace.clientHeight).application_menus) {
    if (!document.fullscreenEnabled) for (const item of spec.model.sections.flat())
      if (item.action?.type === "invoke" && item.action.command === "fullscreen") item.enabled = false;
    const details = document.querySelector(`[data-menu="${spec.id}"]`);
    if(details?.open) customization.renderMenu(details.querySelector(".popover"),spec.model,()=>{details.open=false;updateZen();});
  }
}
function persistWorkspace() {
  clearTimeout(workspaceSaveTimer);
  workspaceSaveTimer = setTimeout(saveWorkspace, 250);
}
function saveWorkspace() {
  if(!app) return;
  try { const value=JSON.stringify(app.workspace_persistence()); if(value!==savedWorkspace){localStorage.setItem(workspaceKey,value);savedWorkspace=value;} }
  catch(error){message(`Cannot save workspace: ${error}`);}
}
window.addEventListener("pagehide",saveWorkspace);
function pointerStyle(e) {
  // Touch leaves :hover stuck until the next tap; track actual pointer input
  // instead of disabling hover for a whole device that may also have a pen/mouse.
  const touch = e.pointerType === "touch", root = document.documentElement;
  if (root.hasAttribute("data-touch") !== touch) root.toggleAttribute("data-touch", touch);
}
window.addEventListener(
  "pointermove",
  (e) => {
    pointerStyle(e);
    if (!e.buttons) chromeHeld = false;
    chromeInput({ kind: "motion", position: [e.clientX, e.clientY] });
    cursorInput(e);
  },
  { capture: true },
);
document.addEventListener("pointerleave", (e) => {
  cursorInput(null);
  chromeInput({ kind: "leave", touch: e.pointerType === "touch" });
});
window.addEventListener(
  "pointerdown",
  (e) => {
    pointerStyle(e);
    revealPointer = null;
    if (e.target.closest("#header")) chromeHeld = true;
    const reply = chromeInput({
      kind: "contact",
      position: [e.clientX, e.clientY],
      canvas: e.target === canvas,
    });
    if (reply.handled) {
      revealPointer = e.pointerId;
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    for (const menu of document.querySelectorAll("details[open]"))
      if (!menu.contains(e.target)) menu.open = false;
  },
  { capture: true },
);
window.addEventListener(
  "click",
  (e) => {
    // A reveal/dismiss contact must not activate a newly uncovered control.
    if (revealPointer === e.pointerId) {
      revealPointer = null;
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  },
  { capture: true },
);
window.addEventListener(
  "pointercancel",
  () => {
    revealPointer = null;
    chromeHeld = false;
    updateZen();
  },
  { capture: true },
);
window.addEventListener(
  "pointerup",
  () => {
    chromeHeld = false;
    updateZen();
  },
  { capture: true },
);
window.addEventListener("focusout", () => requestAnimationFrame(updateZen));
function position(e) {
  const rect = canvas.getBoundingClientRect();
  return [
    ((e.clientX - rect.left) * canvas.width) / rect.width,
    ((e.clientY - rect.top) * canvas.height) / rect.height,
  ];
}
// DOM IDs are signed 32-bit (Safari can use negative IDs). Preserve their bits
// at the unsigned Rust boundary; DOM pointer capture keeps the original ID.
function corePointerId(e) {
  return e.pointerId >>> 0;
}
function queuePen(e, stage) {
  lastPenEvent = stage === 3 || stage === 4 ? null : e;
  const records = [];
  const history = stage === 2 ? e.getCoalescedEvents?.() || [] : [];
  for (const item of history.length ? history : [e]) {
    const [x, y] = position(item),
      pen = item.pointerType === "pen";
    records.push(
      corePointerId(item),
      stage,
      x,
      y,
      pen ? item.pressure : 1,
      ((item.tiltX || 0) * Math.PI) / 180,
      ((item.tiltY || 0) * Math.PI) / 180,
      ((item.twist || 0) * Math.PI) / 180,
      item.timeStamp,
      2,
      pen ? (item.buttons & 32 ? 2 : 0) : 1,
    );
  }
  const batch = {
    records: new Float64Array(records),
    revision: state.camera.revision,
  };
  // Capture the transform when input arrives, even across later viewport resize.
  if (!pending.length) {
    const count = app.pen(batch.records, batch.revision);
    batch.records = batch.records.subarray(count * 11);
  }
  if (batch.records.length) pending.push(batch);
  wake();
}
function canvasPointer(e, stage) {
  e.preventDefault();
  if (stage === 1) {
    canvas.focus();
    canvas.setPointerCapture(e.pointerId);
  }
  let sample = e;
  const activePen = lastPenEvent?.pointerType === "pen"
    && lastPenEvent.pointerId === e.pointerId;
  // Losing the browser's input stream is not an instruction to erase ink.
  // Tablet lift can end with cancellation/capture loss, or a hover move before
  // pointerup. Finish once, at the last contact sample: termination events may
  // have reset coordinates/pressure or already be outside the drawing surface.
  if (activePen && (stage === 4 ||
      (stage === 2 && !(e.buttons & 33) && e.pressure === 0))) {
    sample = lastPenEvent;
    stage = 3;
  }
  const reply = pointerInput(sample, stage);
  if (reply.paint) queuePen(sample, stage);
  cursorInput(e.type === "pointercancel" || e.type === "lostpointercapture" ? null : e);
}
for (const [name, stage] of [
  ["pointerdown", 1],
  ["pointermove", 2],
  ["pointerup", 3],
  ["pointercancel", 4],
])
  canvas.addEventListener(name, (e) => canvasPointer(e, stage));
canvas.addEventListener("lostpointercapture", (e) => canvasPointer(e, 4));
function pointerInput(e, stage, point = position(e)) {
  return input({
    type: "pointer",
    id: BigInt(corePointerId(e)),
    phase: ["move", "down", "move", "up", "cancel"][stage],
    kind: e.pointerType || "mouse",
    button:
      e.button === 0 || e.button === 5
        ? "primary"
        : e.button === 1 || e.button === 2
          ? "pan"
          : "other",
    position: point,
  });
}
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
canvas.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    const point = position(e),
      unit =
        e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? canvas.clientHeight : 1;
    try {
      applyChange(
        app.scroll(
          ...point,
          e.deltaX * unit,
          e.deltaY * unit,
          canvas.width / canvas.clientWidth,
          (e.ctrlKey ? 1 : 0) | (e.shiftKey ? 2 : 0),
        ),
      );
    } catch (error) {
      message(error);
    }
  },
  { passive: false },
);
function keyInput(e, pressed, divider = null) {
  updateZen();
  const reply = input({
    type: "key",
    key: e.key,
    pressed,
    repeat: e.repeat,
    modifiers: {
      command: e.ctrlKey || e.metaKey,
      shift: e.shiftKey,
      alt: e.altKey,
    },
    editing:
      e.isComposing ||
      (e.target instanceof Element &&
        e.target.matches("input,select,textarea,[contenteditable=true]")),
    divider,
  });
  if (reply.handled) {
    e.preventDefault();
    e.stopPropagation();
  }
}
window.addEventListener("keydown", (e) => keyInput(e, true));
window.addEventListener("keyup", (e) => keyInput(e, false));
window.addEventListener("blur", () => {
  endWorkspaceGesture(null, true);
  cursorInput(null);
  chromeHeld = false;
  if (input({ type: "blur" }).cancel_paint && lastPenEvent)
    queuePen(lastPenEvent, 4);
});
function tabHits() {
  return [...groups.entries()].flatMap(([group, node]) =>
    [...node.querySelectorAll(".dock-tab")].map((tab) => {
      const b = tab.getBoundingClientRect();
      return {
        group,
        index: Number(tab.dataset.index),
        bounds: { x: b.x, y: b.y, width: b.width, height: b.height },
      };
    }),
  ).concat(workspaceChrome?.tabHits() ?? []);
}
function dropHint(e, item) {
  try {
    return app.drop_hint({
      viewport: [workspace.clientWidth, workspace.clientHeight],
      position: [e.clientX, e.clientY],
      tabs: tabHits(),
      item,
      expansion: customization.placement(),
    });
  } catch {
    return null;
  } // Invalid/foreign payloads have no accepted core target.
}
function draggedItem(e) {
  if (dragItem) return dragItem;
  try {
    const item = JSON.parse(e.dataTransfer.getData("text/layer-dock"));
    return item.kind === "tile" ? item : null;
  } catch {
    /* External drags cannot provide data during protected dragover. */
  }
  return null;
}
function showDropHint(hint) {
  dropIndicator.hidden = !hint;
  if (hint) { place(dropIndicator, hint.bounds); dropIndicator.dataset.kind = hint.target.kind; }
}
function dropItem(item, hint) {
  if (hint && item.kind === "tile")
    dispatch({ type: "move_tile", panel: item.panel, tile: item.tile, target: hint.target });
}
workspace.addEventListener("dragover", (e) => {
  if (!e.dataTransfer.types.includes("text/layer-dock")) return;
  e.preventDefault();
  const item = draggedItem(e);
  if (!item) return;
  const hint = dropHint(e, item);
  showDropHint(hint);
  if (hint) {
    e.dataTransfer.dropEffect = "move";
  }
});
workspace.addEventListener("dragleave", (e) => {
  if (!workspace.contains(e.relatedTarget)) dropIndicator.hidden = true;
});
workspace.addEventListener("drop", (e) => {
  e.preventDefault();
  dropIndicator.hidden = true;
  const item = draggedItem(e);
  if (!item) return;
  const hint = dropHint(e, item);
  dropItem(item, hint);
});
try {
  await init();
  canvas.width = 800;
  canvas.height = 600;
  app = WebApp.create(canvas);
  let restoreError;
  try {
    const saved = localStorage.getItem(settingsKey);
    if (saved) app.dispatch({ type: "restore_settings", settings: JSON.parse(saved) });
  } catch (error) { restoreError = `Cannot restore preferences: ${error}`; }
  try {
    const saved = localStorage.getItem(workspaceKey);
    if(saved) { app.dispatch({type:"restore_workspace", workspace:JSON.parse(saved)}); savedWorkspace=saved; }
  } catch(error) { restoreError = `Cannot restore workspace: ${error}`; }
  const themeAction = () => ({
    type: "system_theme_changed",
    theme: systemTheme.matches ? "dark" : "light",
  });
  app.dispatch(themeAction());
  window.addEventListener("storage", (event) => {
    if (event.key !== settingsKey || !event.newValue) return;
    try { dispatch({ type: "restore_settings", settings: JSON.parse(event.newValue) }); }
    catch (error) { message(`Cannot restore preferences: ${error}`); }
  });
  systemTheme.addEventListener("change", () => dispatch(themeAction()));
  state = app.state();
  catalog = app.catalog();
  document.documentElement.style.setProperty("--ui-text-size", `${catalog.text_size_pt}pt`);
  document.title = `${catalog.app_name} — drawing workspace`;
  await loadIcons();
  refreshPreferences = createPreferences({ element, button, icon, numberField, panelFrame, dispatch, view: () => app.preferences() });
  panelNames = Object.fromEntries(catalog.panels.map((p) => [p.id, p.label]));
  editor = createEditorPanels({app,state:()=>state,workspace,canvas,element,button,icon,numberField,dispatch,asset,wake});
  buildHeader();
  buildPanels();
  customization = createCustomization({ app, catalog, state: () => state, workspace, panels, groups,
    element, button, icon, numberField, panelFrame,
    dispatch, draggable, grip, place, updateZen, editor });
  workspaceChrome = createWorkspaceChrome({app,state:()=>state,workspace,element,button,icon,place,dispatch,customization,editor,panelFrame,panels,draggable,grip,contentPanel});
  documents = createDocuments({app,dispatch,applyChange,wake,element,button,numberField,message,gpuOperation});
  update(255);
  systemStatus.sync();
  $("status").textContent = "";
  if (restoreError) message(restoreError);
  new ResizeObserver(arrange).observe(workspace);
  // Test harness accesses the actual Wasm instance and native widgets.
  window.layerApp = { app, dispatch, state: () => app.state(), wake, canvas, loadFilters, startupTimes };
  await startGpu();
} catch (error) {
  $("gpu-notice").replaceChildren(element("h1", "", "Capy Canvas could not load"),
    element("p", "", "Reload the page. If the problem continues, check that the complete app package is being served."), element("pre", "", String(error)));
  $("status").textContent = "";
  console.error(error);
}

async function startGpu() {
  if (gpuStarting || gpuReady) return;
  gpuStarting = true;
  document.body.dataset.gpu = "starting";
  const notice = $("gpu-notice");
  notice.replaceChildren(element("div", "gpu-help", "Starting the canvas…"));
  try {
    if (!isSecureContext) throw new Error("WebGPU requires HTTPS or localhost.");
    if (!navigator.gpu) throw new Error("navigator.gpu is unavailable.");
    app.attach_gpu(await createGpu());
    gpuReady = true;
    document.body.dataset.gpu = "ready";
    notice.hidden = true;
    wake();
    // Resource loading failure never disables the canvas or the working catalog.
    loadFilters(asset("filters/manifest.json"), "merge", name=>asset(`filters/${name}`))
      .catch(error=>console.warn("Using bundled filters:",error))
      .finally(() => { app.startup_catalog_submitted(); wake(); });
  } catch (error) {
    document.body.dataset.gpu = "unavailable";
    showGpuNotice({ container: notice, error, element, button });
    console.warn("GPU canvas unavailable:", error);
  } finally {
    gpuStarting = false;
  }
}

async function createGpu() {
  return gpuOperation(() => WebGpu.create(canvas));
}
async function gpuOperation(operation) {
  // A browser API exception can escape a Wasm future without rejecting its
  // Promise. Scope these handlers to GPU creation or one compilation job so a
  // browser exception becomes a visible error instead of a stuck startup.
  const events = new AbortController();
  try {
    const failure = new Promise((_, reject) => {
      window.addEventListener("error", e => reject(e.error || new Error(e.message)), { signal: events.signal });
      window.addEventListener("unhandledrejection", e => reject(e.reason), { signal: events.signal });
    });
    return await Promise.race([failure, operation()]);
  } finally {
    events.abort();
  }
}

async function loadFilters(url, mode="add", moduleUrl) {
  const change=await fetchFilterPackage(app,new URL(url,location.href),mode,moduleUrl);
  update(change.regions);
  if(change.canvas_wake)wake();
  return app.state().filter_load.request_id;
}
