import init, { WebApp, WebGpu, configure_raster_worker, automatic_tab_names } from "./pkg/layer_web.3f4440aefa565762e195.js";
import { createRasterWorker } from "./raster-worker-client.d7c86594fdf45ad77e2a.js";
import { createDocumentStorage } from "./document-storage.0cd79375ad1454702a49.js";
import { workspaceStore, modulePromise, setWorkspaceWake } from "./workspace-preload.eb2e93a84df26dc04e30.js";
import { createWorkspaceManager } from "./workspace-manager.7b00bf70037a1f4daf90.js";
import { createPreferences } from "./preferences.9226b8cb428dfc627160.js";
import { showGpuNotice } from "./gpu.974d8febbbb3582fae28.js";
import { createCustomization } from "./customization.41a0913a646cdd6aa2bf.js";
import { createEditorPanels } from "./editor-panels.a687ff5dfe596b6f74f8.js";
import { createWorkspaceChrome } from "./workspace-chrome.66fdb44deff83d680274.js";
import { createGlass } from "./glass.a83bb020ce4640f5d8ce.js";
import { createDocuments } from "./documents.a5c73cc059fc15cd97dc.js";
import { createSystemStatus } from "./system-status.0b65cd2ebafa25dc9cf0.js";
import { createHeader } from "./header.2427959938a1bc12f7aa.js";
import { createNumberField } from "./numeric.beb99a7a1a251cb3dbee.js";
import { createSelectionUi } from "./selection-masks.89e1ad7acda733f7ab3d.js";
import { createLayerPanel } from "./layers.2fc4bc36677c2a802203.js";
import { createPalettes } from "./palettes.a52d6af3c8b2ca1a50b7.js";
import { createEffectPanels, fetchFilterPackage } from "./effects.c5cc0f7411a3b90ffd4e.js";
import { installTooltips } from "./tooltips.349fe11a12ec28f16e5f.js";
import { installPenScrolling } from "./pen-scroll.18dffed11bf488d1a322.js";

// The static packager fills this map with fingerprinted resource filenames.
const assetPaths = {"brush-previews/1-dark.png":"brush-previews/1-dark.77ee146647534933e2ef.png","brush-previews/1-light.png":"brush-previews/1-light.a9b987b5ca050d2f5336.png","brush-previews/10-dark.png":"brush-previews/10-dark.e47579a59864f7970777.png","brush-previews/10-light.png":"brush-previews/10-light.e47579a59864f7970777.png","brush-previews/11-dark.png":"brush-previews/11-dark.047f67c3f13a9a6eb99b.png","brush-previews/11-light.png":"brush-previews/11-light.f842bb41f2e36e1e9ea9.png","brush-previews/12-dark.png":"brush-previews/12-dark.fc5c25b87ebece789b7a.png","brush-previews/12-light.png":"brush-previews/12-light.fc5c25b87ebece789b7a.png","brush-previews/13-dark.png":"brush-previews/13-dark.7878ec28e845590266dd.png","brush-previews/13-light.png":"brush-previews/13-light.7878ec28e845590266dd.png","brush-previews/14-dark.png":"brush-previews/14-dark.a6cc6398ba846ed2333b.png","brush-previews/14-light.png":"brush-previews/14-light.12144ad5d9bbce9369ad.png","brush-previews/15-dark.png":"brush-previews/15-dark.5458d30800c4da9c1545.png","brush-previews/15-light.png":"brush-previews/15-light.6afbd60c5f66689c056f.png","brush-previews/16-dark.png":"brush-previews/16-dark.6fac7ba24240a4fd0a58.png","brush-previews/16-light.png":"brush-previews/16-light.a604fdfd4d866a979608.png","brush-previews/17-dark.png":"brush-previews/17-dark.da227d0b5145bdc58b5e.png","brush-previews/17-light.png":"brush-previews/17-light.bdc124bf88934e611913.png","brush-previews/18-dark.png":"brush-previews/18-dark.cbed83f4c2b48d46d26c.png","brush-previews/18-light.png":"brush-previews/18-light.328d2e717788f183bdae.png","brush-previews/19-dark.png":"brush-previews/19-dark.5d5f0fd9dd9891d5c858.png","brush-previews/19-light.png":"brush-previews/19-light.d713d171dc4c957f4f9b.png","brush-previews/2-dark.png":"brush-previews/2-dark.357ebddb4222e263071d.png","brush-previews/2-light.png":"brush-previews/2-light.99d96570321307d70b77.png","brush-previews/20-dark.png":"brush-previews/20-dark.9661fe431beac189e49f.png","brush-previews/20-light.png":"brush-previews/20-light.834923c53af902867019.png","brush-previews/21-dark.png":"brush-previews/21-dark.e2e7bbdc9631e95121ba.png","brush-previews/21-light.png":"brush-previews/21-light.fd6bd04e2feee4c3bfe7.png","brush-previews/22-dark.png":"brush-previews/22-dark.242fa7e13844c69eba87.png","brush-previews/22-light.png":"brush-previews/22-light.ee6205c9e076bff465bb.png","brush-previews/23-dark.png":"brush-previews/23-dark.861181594623a794928e.png","brush-previews/23-light.png":"brush-previews/23-light.8cf65e3d783b829d8014.png","brush-previews/24-dark.png":"brush-previews/24-dark.85b74930aee61a192265.png","brush-previews/24-light.png":"brush-previews/24-light.85b74930aee61a192265.png","brush-previews/25-dark.png":"brush-previews/25-dark.6a9e6b5bd8c8f6cbb048.png","brush-previews/25-light.png":"brush-previews/25-light.15e8ece8eb61d1d16130.png","brush-previews/26-dark.png":"brush-previews/26-dark.eb34f8854e5af16f5930.png","brush-previews/26-light.png":"brush-previews/26-light.2767508782aa0133e41e.png","brush-previews/27-dark.png":"brush-previews/27-dark.b807ad88f970ebc727a5.png","brush-previews/27-light.png":"brush-previews/27-light.ba67ea0389b52eb55b25.png","brush-previews/28-dark.png":"brush-previews/28-dark.d0d6c94be6da311474f0.png","brush-previews/28-light.png":"brush-previews/28-light.8c9b9c8fbcb86ef56cc4.png","brush-previews/29-dark.png":"brush-previews/29-dark.a7f37b24be93985b59be.png","brush-previews/29-light.png":"brush-previews/29-light.78090be93ad957436459.png","brush-previews/3-dark.png":"brush-previews/3-dark.e4190213e18ad0c90c78.png","brush-previews/3-light.png":"brush-previews/3-light.e4190213e18ad0c90c78.png","brush-previews/30-dark.png":"brush-previews/30-dark.431b44225ac010dc142d.png","brush-previews/30-light.png":"brush-previews/30-light.a237cd224505d5ae0881.png","brush-previews/31-dark.png":"brush-previews/31-dark.9535c6200fe7bdd57e73.png","brush-previews/31-light.png":"brush-previews/31-light.b2adab6759e10e384f0f.png","brush-previews/32-dark.png":"brush-previews/32-dark.29789deba13e40ff30ed.png","brush-previews/32-light.png":"brush-previews/32-light.143bfe3ffb54cfd125fd.png","brush-previews/33-dark.png":"brush-previews/33-dark.e3d8501c4eea83f9d7cd.png","brush-previews/33-light.png":"brush-previews/33-light.ac43ec68f83abe7512d8.png","brush-previews/34-dark.png":"brush-previews/34-dark.f5f71c44402125731956.png","brush-previews/34-light.png":"brush-previews/34-light.ba58f2d7372f34a0eaf6.png","brush-previews/4-dark.png":"brush-previews/4-dark.5800de4355ae039a3bc2.png","brush-previews/4-light.png":"brush-previews/4-light.4c19bc1f0ea2dabc3127.png","brush-previews/5-dark.png":"brush-previews/5-dark.65f2b9fc447f2cdbbf2d.png","brush-previews/5-light.png":"brush-previews/5-light.5cd08ed93f1bdaa69679.png","brush-previews/6-dark.png":"brush-previews/6-dark.3442a23d66984b101b67.png","brush-previews/6-light.png":"brush-previews/6-light.25926b61bdd9b2e9536f.png","brush-previews/7-dark.png":"brush-previews/7-dark.03675f16205c23394553.png","brush-previews/7-light.png":"brush-previews/7-light.0a84514d678d7cb3a5eb.png","brush-previews/8-dark.png":"brush-previews/8-dark.c135f645abd4c57da6ab.png","brush-previews/8-light.png":"brush-previews/8-light.ca572e4f089f67af6f3a.png","brush-previews/9-dark.png":"brush-previews/9-dark.4609551d2240598560f3.png","brush-previews/9-light.png":"brush-previews/9-light.e782c2d1201096becd32.png","filters/effects.wgsl":"filters/effects.587ba6468dbe614205f0.wgsl","filters/filter_library.wgsl":"filters/filter_library.1b284b9433fc163ffcb3.wgsl","filters/gaussian-prepare.wgsl":"filters/gaussian-prepare.b65389202b05796620e5.wgsl","filters/manifest.json":"filters/manifest.ec58c922ee224516060c.json","icons/layer-add-layer-symbolic.svg":"icons/layer-add-layer-symbolic.9285ee04bdb4cbd833a1.svg","icons/layer-adjustments-symbolic.svg":"icons/layer-adjustments-symbolic.def92718dc8189a67697.svg","icons/layer-airbrush-symbolic.svg":"icons/layer-airbrush-symbolic.91ad992953309f445734.svg","icons/layer-alpha-lock-symbolic.svg":"icons/layer-alpha-lock-symbolic.ed3a94b7158e488752fd.svg","icons/layer-angle-symbolic.svg":"icons/layer-angle-symbolic.b96d712d4207295442ff.svg","icons/layer-animation-symbolic.svg":"icons/layer-animation-symbolic.e365d19fd8c8edd71af2.svg","icons/layer-appearance-symbolic.svg":"icons/layer-appearance-symbolic.effffbd0832cde145d56.svg","icons/layer-auto-select-symbolic.svg":"icons/layer-auto-select-symbolic.332992e18e98a96ae918.svg","icons/layer-back-symbolic.svg":"icons/layer-back-symbolic.13316926b7d26a1fc2b6.svg","icons/layer-black_white-symbolic.svg":"icons/layer-black_white-symbolic.bfb700412b6783b82213.svg","icons/layer-blend-symbolic.svg":"icons/layer-blend-symbolic.d53b1afc875cdf0076fb.svg","icons/layer-bloom-symbolic.svg":"icons/layer-bloom-symbolic.082aaf62b867d530dfdb.svg","icons/layer-blur-symbolic.svg":"icons/layer-blur-symbolic.6eb2a615920c7268bdfd.svg","icons/layer-brightness_contrast-symbolic.svg":"icons/layer-brightness_contrast-symbolic.da27d13927b58c4d4c3c.svg","icons/layer-brush-size-symbolic.svg":"icons/layer-brush-size-symbolic.3811f18ff4b4e0099255.svg","icons/layer-brush-spacing-symbolic.svg":"icons/layer-brush-spacing-symbolic.6a34356c1f233f0a69fa.svg","icons/layer-brush-symbolic.svg":"icons/layer-brush-symbolic.ef96cdc37531f8bf2df2.svg","icons/layer-check-symbolic.svg":"icons/layer-check-symbolic.ee42a3e6be05b2a036e0.svg","icons/layer-chevron-double-left-symbolic.svg":"icons/layer-chevron-double-left-symbolic.d4afb39b3bdad692ac12.svg","icons/layer-chevron-double-right-symbolic.svg":"icons/layer-chevron-double-right-symbolic.aa08d60eef1fb27827b1.svg","icons/layer-chevron-down-symbolic.svg":"icons/layer-chevron-down-symbolic.68da7053e2f57c63a593.svg","icons/layer-chromatic-aberration-symbolic.svg":"icons/layer-chromatic-aberration-symbolic.2805c454c81c8d9b8043.svg","icons/layer-clear-symbolic.svg":"icons/layer-clear-symbolic.623997b36b5648036421.svg","icons/layer-clip-symbolic.svg":"icons/layer-clip-symbolic.4ba4337176ed940da0f5.svg","icons/layer-close-document-symbolic.svg":"icons/layer-close-document-symbolic.c5f4a987705b56027b0d.svg","icons/layer-close-gap-symbolic.svg":"icons/layer-close-gap-symbolic.762e5eed0ae8e33b556f.svg","icons/layer-close-symbolic.svg":"icons/layer-close-symbolic.30f582a44542b0021f17.svg","icons/layer-color_balance-symbolic.svg":"icons/layer-color_balance-symbolic.dfef11fb4553fef16570.svg","icons/layer-color-circle-symbolic.svg":"icons/layer-color-circle-symbolic.a5a672c40f32e2fd92a8.svg","icons/layer-color-picker-symbolic.svg":"icons/layer-color-picker-symbolic.1783d211f13839aef90d.svg","icons/layer-color-select-symbolic.svg":"icons/layer-color-select-symbolic.6515da3dd9e775651b1e.svg","icons/layer-color-square-symbolic.svg":"icons/layer-color-square-symbolic.94ad3ef34848bb1f49e9.svg","icons/layer-color-swap-symbolic.svg":"icons/layer-color-swap-symbolic.0c3fc36cf32e1377d17e.svg","icons/layer-color-symbolic.svg":"icons/layer-color-symbolic.d57e12a7c6f7ac8f7046.svg","icons/layer-color-triangle-symbolic.svg":"icons/layer-color-triangle-symbolic.5e632d4bdb3f1efbdeb2.svg","icons/layer-colors-symbolic.svg":"icons/layer-colors-symbolic.5313ce28aaf5619e2a3f.svg","icons/layer-column-expand-symbolic.svg":"icons/layer-column-expand-symbolic.e027ec5c354b026bd642.svg","icons/layer-crosshatch-symbolic.svg":"icons/layer-crosshatch-symbolic.759064ee9b372a22d271.svg","icons/layer-crt-symbolic.svg":"icons/layer-crt-symbolic.11ad84534f7dbb53af4e.svg","icons/layer-cursor-brush-cross-symbolic.svg":"icons/layer-cursor-brush-cross-symbolic.e932b73a7dd77fd27b20.svg","icons/layer-cursor-brush-dot-symbolic.svg":"icons/layer-cursor-brush-dot-symbolic.f7846dc4f475f6b2a4c4.svg","icons/layer-cursor-brush-single-pixel-dot-symbolic.svg":"icons/layer-cursor-brush-single-pixel-dot-symbolic.dfb46e586962009a7821.svg","icons/layer-cursor-brush-symbolic.svg":"icons/layer-cursor-brush-symbolic.96c0c320dacaab52c886.svg","icons/layer-cursor-cross-symbolic.svg":"icons/layer-cursor-cross-symbolic.7ffa8c37e62cf6dde425.svg","icons/layer-cursor-dot-symbolic.svg":"icons/layer-cursor-dot-symbolic.b7637d4367e227ce4384.svg","icons/layer-cursor-none-symbolic.svg":"icons/layer-cursor-none-symbolic.b0b167dbd699d2b240fa.svg","icons/layer-cursor-sight-symbolic.svg":"icons/layer-cursor-sight-symbolic.e41423587e91751b8827.svg","icons/layer-cursor-single-pixel-dot-symbolic.svg":"icons/layer-cursor-single-pixel-dot-symbolic.58cab81040e64e06dd6f.svg","icons/layer-cursor-triangle-symbolic.svg":"icons/layer-cursor-triangle-symbolic.c475d4ba25f578d2aacf.svg","icons/layer-curves-symbolic.svg":"icons/layer-curves-symbolic.50e3408021b4d38b9f97.svg","icons/layer-decoration-symbolic.svg":"icons/layer-decoration-symbolic.43d6f1314f1ffb2a271e.svg","icons/layer-delete-symbolic.svg":"icons/layer-delete-symbolic.a3fa02a0625da34c3343.svg","icons/layer-denoise-symbolic.svg":"icons/layer-denoise-symbolic.5648770158f62093c71b.svg","icons/layer-deselect-symbolic.svg":"icons/layer-deselect-symbolic.92f8ddd43f739cac8515.svg","icons/layer-dilution-symbolic.svg":"icons/layer-dilution-symbolic.c38ed3d72746864c426b.svg","icons/layer-domain-warp-symbolic.svg":"icons/layer-domain-warp-symbolic.0bc35e1036be6115ee8f.svg","icons/layer-down-symbolic.svg":"icons/layer-down-symbolic.2077aefc6f508c80c30b.svg","icons/layer-drawing-tools-symbolic.svg":"icons/layer-drawing-tools-symbolic.b05231bd9196dcb61a05.svg","icons/layer-dry-bleed-symbolic.svg":"icons/layer-dry-bleed-symbolic.95b455955aeea90ec669.svg","icons/layer-edge-detect-symbolic.svg":"icons/layer-edge-detect-symbolic.24dd8b00b870e4266fc5.svg","icons/layer-edge-smooth-symbolic.svg":"icons/layer-edge-smooth-symbolic.9fe24000e634fc10b22f.svg","icons/layer-edge-strength-symbolic.svg":"icons/layer-edge-strength-symbolic.6be56d71a81adc4d384b.svg","icons/layer-edge-width-symbolic.svg":"icons/layer-edge-width-symbolic.cf818efbfa29bae26c98.svg","icons/layer-ellipse-both-symbolic.svg":"icons/layer-ellipse-both-symbolic.c04e2ab09aacaa99d565.svg","icons/layer-ellipse-fill-symbolic.svg":"icons/layer-ellipse-fill-symbolic.8f5ef9c39514868c0eed.svg","icons/layer-ellipse-select-symbolic.svg":"icons/layer-ellipse-select-symbolic.273bb5a9245e42774f77.svg","icons/layer-ellipse-symbolic.svg":"icons/layer-ellipse-symbolic.9eb9346888bfd11b5c13.svg","icons/layer-emboss-symbolic.svg":"icons/layer-emboss-symbolic.26d48eeec7184770505a.svg","icons/layer-eraser-symbolic.svg":"icons/layer-eraser-symbolic.21b340783fe1619f368d.svg","icons/layer-expand-symbolic.svg":"icons/layer-expand-symbolic.6bc033f424dd6156ce05.svg","icons/layer-export-document-symbolic.svg":"icons/layer-export-document-symbolic.b2d892ca422bf976c9af.svg","icons/layer-exposure-symbolic.svg":"icons/layer-exposure-symbolic.cac47e7f0798970a64b8.svg","icons/layer-eye-hidden-symbolic.svg":"icons/layer-eye-hidden-symbolic.2e56d9fe2fc0e50d4439.svg","icons/layer-eye-symbolic.svg":"icons/layer-eye-symbolic.4281ba422fcdf3d6003e.svg","icons/layer-eyedropper-symbolic.svg":"icons/layer-eyedropper-symbolic.399ff357d0c436d08868.svg","icons/layer-feather-symbolic.svg":"icons/layer-feather-symbolic.41c2d7380d5d92ef4152.svg","icons/layer-figure-symbolic.svg":"icons/layer-figure-symbolic.f589e38a8bd494a1681f.svg","icons/layer-fill-selection-symbolic.svg":"icons/layer-fill-selection-symbolic.6554e498194c39481fd0.svg","icons/layer-fill-symbolic.svg":"icons/layer-fill-symbolic.fd10b68e366aeeaccb4e.svg","icons/layer-fit-symbolic.svg":"icons/layer-fit-symbolic.ac6a0b9c390c32598367.svg","icons/layer-flip-horizontal-symbolic.svg":"icons/layer-flip-horizontal-symbolic.e8736e08b28af37ce741.svg","icons/layer-flip-vertical-symbolic.svg":"icons/layer-flip-vertical-symbolic.e6b2396971afcb8a2ec1.svg","icons/layer-folder-open-symbolic.svg":"icons/layer-folder-open-symbolic.3a694dfc26ae41dfc059.svg","icons/layer-folder-symbolic.svg":"icons/layer-folder-symbolic.70891c5b72c3426dc84d.svg","icons/layer-fullscreen-enter-symbolic.svg":"icons/layer-fullscreen-enter-symbolic.21583f12193d5121f8c2.svg","icons/layer-fullscreen-exit-symbolic.svg":"icons/layer-fullscreen-exit-symbolic.d70383f540802d1c1c13.svg","icons/layer-glass-symbolic.svg":"icons/layer-glass-symbolic.7ddf01fcb0cad7deeb9a.svg","icons/layer-gradient_map-symbolic.svg":"icons/layer-gradient_map-symbolic.9eaa2b1aae4b17a07f35.svg","icons/layer-gradient-radial-symbolic.svg":"icons/layer-gradient-radial-symbolic.8824e69cee455af8f06b.svg","icons/layer-gradient-radial-transparent-symbolic.svg":"icons/layer-gradient-radial-transparent-symbolic.edba6c7bd8ac8e8960d9.svg","icons/layer-gradient-symbolic.svg":"icons/layer-gradient-symbolic.bcaf41ea8e236aec0516.svg","icons/layer-gradient-transparent-symbolic.svg":"icons/layer-gradient-transparent-symbolic.78cb957515459b4ca657.svg","icons/layer-grain-symbolic.svg":"icons/layer-grain-symbolic.0cd9f1a0ce90f9f365b4.svg","icons/layer-grip-symbolic.svg":"icons/layer-grip-symbolic.258f461bcfa33a125d89.svg","icons/layer-halftone-symbolic.svg":"icons/layer-halftone-symbolic.e686d1aed3cc2a8701a3.svg","icons/layer-hand-symbolic.svg":"icons/layer-hand-symbolic.041855c275d56ce39b29.svg","icons/layer-hardness-symbolic.svg":"icons/layer-hardness-symbolic.9fb365cb84c15bc00641.svg","icons/layer-heat-haze-symbolic.svg":"icons/layer-heat-haze-symbolic.b74d2060fdfdb4dc3980.svg","icons/layer-height-symbolic.svg":"icons/layer-height-symbolic.40c536e3944bd6118e13.svg","icons/layer-high-pass-symbolic.svg":"icons/layer-high-pass-symbolic.7122d950296d05e93c9c.svg","icons/layer-hue_saturation-symbolic.svg":"icons/layer-hue_saturation-symbolic.ced9639d6d8f61fe6a71.svg","icons/layer-image-symbolic.svg":"icons/layer-image-symbolic.17ed1890abf8cc4b049c.svg","icons/layer-info-symbolic.svg":"icons/layer-info-symbolic.de87224179edc68417bb.svg","icons/layer-invert-selection-symbolic.svg":"icons/layer-invert-selection-symbolic.ca3f49d543dfa80a3675.svg","icons/layer-iridescence-symbolic.svg":"icons/layer-iridescence-symbolic.35bd3a4a958140c94a78.svg","icons/layer-kaleidoscope-symbolic.svg":"icons/layer-kaleidoscope-symbolic.19735bd9676fe700c6f6.svg","icons/layer-keyboard-symbolic.svg":"icons/layer-keyboard-symbolic.807feffcdae0b3ec077a.svg","icons/layer-lasso-fill-symbolic.svg":"icons/layer-lasso-fill-symbolic.4e0782fee830ac6d2373.svg","icons/layer-lasso-symbolic.svg":"icons/layer-lasso-symbolic.e623236322bb908bfe36.svg","icons/layer-layers-symbolic.svg":"icons/layer-layers-symbolic.7d7df15ac93c1be01025.svg","icons/layer-levels-symbolic.svg":"icons/layer-levels-symbolic.e6f9efb0b2ede62e62d9.svg","icons/layer-line-symbolic.svg":"icons/layer-line-symbolic.ba6adc86c9adf7fed0f1.svg","icons/layer-link-symbolic.svg":"icons/layer-link-symbolic.4cd2d7081664ed727f16.svg","icons/layer-liquify-symbolic.svg":"icons/layer-liquify-symbolic.6c3412784399da0232bc.svg","icons/layer-lock-symbolic.svg":"icons/layer-lock-symbolic.34e461bf87f9ce3e599b.svg","icons/layer-marker-symbolic.svg":"icons/layer-marker-symbolic.fd6dce3cd46fa3b76eb9.svg","icons/layer-mask-symbolic.svg":"icons/layer-mask-symbolic.89966f2ae567821888db.svg","icons/layer-menu-symbolic.svg":"icons/layer-menu-symbolic.3162891262ac586b6742.svg","icons/layer-minus-symbolic.svg":"icons/layer-minus-symbolic.7deca782c8516d2be808.svg","icons/layer-more-symbolic.svg":"icons/layer-more-symbolic.83a3457d1575caee0305.svg","icons/layer-mosaic-symbolic.svg":"icons/layer-mosaic-symbolic.ef35d0df50eea8ff4843.svg","icons/layer-motion-blur-symbolic.svg":"icons/layer-motion-blur-symbolic.36ffc8ebbe4ef1af6c7c.svg","icons/layer-move-symbolic.svg":"icons/layer-move-symbolic.14633d1eaa7e8adef343.svg","icons/layer-navigator-symbolic.svg":"icons/layer-navigator-symbolic.fa82f16c08e5a6b61148.svg","icons/layer-new-document-symbolic.svg":"icons/layer-new-document-symbolic.35e83352ab2f4d16825c.svg","icons/layer-new-toolbar-symbolic.svg":"icons/layer-new-toolbar-symbolic.b810142bd120a102e816.svg","icons/layer-new-window-symbolic.svg":"icons/layer-new-window-symbolic.1111bcf77190c7e92f93.svg","icons/layer-oil-paint-symbolic.svg":"icons/layer-oil-paint-symbolic.e09be2d83a15e4b78658.svg","icons/layer-opacity-symbolic.svg":"icons/layer-opacity-symbolic.4723f12783d40aa72aea.svg","icons/layer-open-document-symbolic.svg":"icons/layer-open-document-symbolic.3a694dfc26ae41dfc059.svg","icons/layer-paint-flow-symbolic.svg":"icons/layer-paint-flow-symbolic.655a7cd408a7efb369bb.svg","icons/layer-paint-load-symbolic.svg":"icons/layer-paint-load-symbolic.9f48419d5386c9fd8aa9.svg","icons/layer-paint-symbolic.svg":"icons/layer-paint-symbolic.33f6a7c95a3b1085602c.svg","icons/layer-paper-symbolic.svg":"icons/layer-paper-symbolic.b169dd33faec37f4337b.svg","icons/layer-pastel-symbolic.svg":"icons/layer-pastel-symbolic.c67ff809546956690a5c.svg","icons/layer-pen-symbolic.svg":"icons/layer-pen-symbolic.a3bf085d22d7625e6184.svg","icons/layer-pencil-symbolic.svg":"icons/layer-pencil-symbolic.26aa7319d66ee0034428.svg","icons/layer-pin-symbolic.svg":"icons/layer-pin-symbolic.6e006cd17ecacc7a825b.svg","icons/layer-plus-symbolic.svg":"icons/layer-plus-symbolic.d5bcbc365c42d903955d.svg","icons/layer-polygon-select-symbolic.svg":"icons/layer-polygon-select-symbolic.11bac21c45de1322f081.svg","icons/layer-position-x-symbolic.svg":"icons/layer-position-x-symbolic.0ca98992d22b32b49e7e.svg","icons/layer-position-y-symbolic.svg":"icons/layer-position-y-symbolic.8c179a6732bf04157d52.svg","icons/layer-posterize-symbolic.svg":"icons/layer-posterize-symbolic.6270a0eb95f722595759.svg","icons/layer-properties-symbolic.svg":"icons/layer-properties-symbolic.040eb007e4ad1e0190d8.svg","icons/layer-rainy-glass-symbolic.svg":"icons/layer-rainy-glass-symbolic.c3353f37d3c7c8707ad4.svg","icons/layer-rectangle-both-symbolic.svg":"icons/layer-rectangle-both-symbolic.566ff083998fdad8ce63.svg","icons/layer-rectangle-fill-symbolic.svg":"icons/layer-rectangle-fill-symbolic.57b1455c593796cc9cfe.svg","icons/layer-rectangle-select-symbolic.svg":"icons/layer-rectangle-select-symbolic.272f8969c86ab6d5661d.svg","icons/layer-rectangle-symbolic.svg":"icons/layer-rectangle-symbolic.584e910cd12f8f9e240e.svg","icons/layer-redo-symbolic.svg":"icons/layer-redo-symbolic.d6c2966e05601e4c9496.svg","icons/layer-reference-symbolic.svg":"icons/layer-reference-symbolic.018c4d47a9e794efa36f.svg","icons/layer-reset-layout-symbolic.svg":"icons/layer-reset-layout-symbolic.b536b038c49be3808680.svg","icons/layer-reset-symbolic.svg":"icons/layer-reset-symbolic.e136e3255ae4807c7e65.svg","icons/layer-ripple-symbolic.svg":"icons/layer-ripple-symbolic.a311b868210b21244194.svg","icons/layer-rotate-left-symbolic.svg":"icons/layer-rotate-left-symbolic.508e77c22c5b490cf651.svg","icons/layer-rotate-right-symbolic.svg":"icons/layer-rotate-right-symbolic.41bb4bb6c84097d9ff72.svg","icons/layer-rotation-variation-symbolic.svg":"icons/layer-rotation-variation-symbolic.ec3cb153bf8b9089e1d3.svg","icons/layer-ruler-parallel-symbolic.svg":"icons/layer-ruler-parallel-symbolic.3da39e680ef233d328fc.svg","icons/layer-ruler-radial-symbolic.svg":"icons/layer-ruler-radial-symbolic.a93909a534e85020e981.svg","icons/layer-ruler-snap-symbolic.svg":"icons/layer-ruler-snap-symbolic.a38e148c68a7bb7c8206.svg","icons/layer-ruler-symbolic.svg":"icons/layer-ruler-symbolic.a7616c3ddcf6b41726d7.svg","icons/layer-save-as-symbolic.svg":"icons/layer-save-as-symbolic.7d3df194409c8f4865a4.svg","icons/layer-save-document-symbolic.svg":"icons/layer-save-document-symbolic.def04f2ed0e7c603482c.svg","icons/layer-sculpt-symbolic.svg":"icons/layer-sculpt-symbolic.ef101ddb2e0f7c76bfad.svg","icons/layer-search-symbolic.svg":"icons/layer-search-symbolic.083808e07e9068e1f81a.svg","icons/layer-select-all-symbolic.svg":"icons/layer-select-all-symbolic.0a976c0bdbcdd08ab0bd.svg","icons/layer-select-symbolic.svg":"icons/layer-select-symbolic.5750686f74d77adb7cec.svg","icons/layer-selection-add-symbolic.svg":"icons/layer-selection-add-symbolic.6b4ee399ba7af8c55197.svg","icons/layer-selection-brush-symbolic.svg":"icons/layer-selection-brush-symbolic.d4f390ebff7a9ad3e6aa.svg","icons/layer-selection-checked-symbolic.svg":"icons/layer-selection-checked-symbolic.cb46fcf370ac812ec902.svg","icons/layer-selection-empty-symbolic.svg":"icons/layer-selection-empty-symbolic.3b1d5aaabc8a9e0426b7.svg","icons/layer-selection-intersect-symbolic.svg":"icons/layer-selection-intersect-symbolic.f1c2af5cc0c7b2324b44.svg","icons/layer-selection-load-symbolic.svg":"icons/layer-selection-load-symbolic.f602797214e5b2ccb70b.svg","icons/layer-selection-new-symbolic.svg":"icons/layer-selection-new-symbolic.bb8b4b181ff9d7b94c56.svg","icons/layer-selection-subtract-symbolic.svg":"icons/layer-selection-subtract-symbolic.62715014377c5f48cb1b.svg","icons/layer-settings-symbolic.svg":"icons/layer-settings-symbolic.792d51cf281148198e77.svg","icons/layer-sharpen-symbolic.svg":"icons/layer-sharpen-symbolic.3069633f500a3b966d8e.svg","icons/layer-size-symbolic.svg":"icons/layer-size-symbolic.25002ebc368eefcb7969.svg","icons/layer-soft-focus-symbolic.svg":"icons/layer-soft-focus-symbolic.db0834f6ee7dca3da9d9.svg","icons/layer-solarize-symbolic.svg":"icons/layer-solarize-symbolic.61c6b00247e783d117c7.svg","icons/layer-source-code-symbolic.svg":"icons/layer-source-code-symbolic.5eded6af3883c0a51cf1.svg","icons/layer-split-tone-symbolic.svg":"icons/layer-split-tone-symbolic.265518082dc7ac3162dc.svg","icons/layer-spray-symbolic.svg":"icons/layer-spray-symbolic.560bee252632c9558528.svg","icons/layer-stats-symbolic.svg":"icons/layer-stats-symbolic.5381ed753736936f7f45.svg","icons/layer-strength-symbolic.svg":"icons/layer-strength-symbolic.4ec1b32161e38db72bde.svg","icons/layer-swap-symbolic.svg":"icons/layer-swap-symbolic.41e20700834a3444ad8d.svg","icons/layer-tonal-bright-hdr-symbolic.svg":"icons/layer-tonal-bright-hdr-symbolic.8fb429b38c9d087aa21f.svg","icons/layer-tonal-custom-symbolic.svg":"icons/layer-tonal-custom-symbolic.6af5e88e1bada59d389b.svg","icons/layer-tonal-highlights-symbolic.svg":"icons/layer-tonal-highlights-symbolic.c2671f7a04719e920895.svg","icons/layer-tonal-mid-highlights-symbolic.svg":"icons/layer-tonal-mid-highlights-symbolic.8a77365373af65d75c12.svg","icons/layer-tonal-mid-shadows-symbolic.svg":"icons/layer-tonal-mid-shadows-symbolic.5e594bc7c6813bd537bb.svg","icons/layer-tonal-midtones-symbolic.svg":"icons/layer-tonal-midtones-symbolic.3817f18eac143a5fd115.svg","icons/layer-tonal-select-symbolic.svg":"icons/layer-tonal-select-symbolic.c40acb40ff4efa48d193.svg","icons/layer-tonal-shadows-symbolic.svg":"icons/layer-tonal-shadows-symbolic.59804d8c1053e5366d77.svg","icons/layer-toolbar-symbolic.svg":"icons/layer-toolbar-symbolic.c28184cc043bd3145ceb.svg","icons/layer-transform-symbolic.svg":"icons/layer-transform-symbolic.5c27906aa92c60fc396f.svg","icons/layer-undo-symbolic.svg":"icons/layer-undo-symbolic.04adc640c989dc473065.svg","icons/layer-up-symbolic.svg":"icons/layer-up-symbolic.83375c5cd82ab6cde565.svg","icons/layer-vhs-symbolic.svg":"icons/layer-vhs-symbolic.a6f4c576a2cb071a911f.svg","icons/layer-vibrance-symbolic.svg":"icons/layer-vibrance-symbolic.fb602db2ad7f0c790e75.svg","icons/layer-vignette-symbolic.svg":"icons/layer-vignette-symbolic.03f4becb08cf79268aa3.svg","icons/layer-water-symbolic.svg":"icons/layer-water-symbolic.b556b619687cf3c88579.svg","icons/layer-watercolor-symbolic.svg":"icons/layer-watercolor-symbolic.7ec40350a4539ad43303.svg","icons/layer-website-symbolic.svg":"icons/layer-website-symbolic.b94a5974cd92ed44ab14.svg","icons/layer-wet-bleed-symbolic.svg":"icons/layer-wet-bleed-symbolic.39cda87368089b71c9ae.svg","icons/layer-white-balance-symbolic.svg":"icons/layer-white-balance-symbolic.061febd389681d6ce389.svg","icons/layer-width-symbolic.svg":"icons/layer-width-symbolic.2818492be09f480db198.svg","icons/layer-zen-bathing-symbolic.svg":"icons/layer-zen-bathing-symbolic.a638473e74f9e05000d7.svg","icons/layer-zen-facing-forward-symbolic.svg":"icons/layer-zen-facing-forward-symbolic.06a3a282919298af5baf.svg","icons/layer-zen-looking-up-symbolic.svg":"icons/layer-zen-looking-up-symbolic.36d21b7e6ceb685b7b9e.svg","icons/layer-zen-sleeping-symbolic.svg":"icons/layer-zen-sleeping-symbolic.adc886ce0a33f63e8896.svg","icons.svg":"icons.5f5c51eac9dff3f91e3c.svg","pkg/layer_web_bg.wasm":"pkg/layer_web_bg.69f8ff7d9e1409f4d8e0.wasm","workspace-worker.js":"workspace-worker.a1748e9ac4ec06af8f08.js"};
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
// Workspace extent changes only with its viewport, not with panel content.
// Retain it so chrome notifications do not force style/layout after DOM writes.
let workspaceViewport = [workspace.clientWidth, workspace.clientHeight];
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
let refreshPreferences, customization, layerPanel, effectPanels, palettes, editor, selectionUi, workspaceChrome, glass, documents, systemStatus, header;
const fullscreenRequests = new Set();
let gpuStarting = false;
let gpuReady = false;
let compilerScheduled = false, compilerFailed = false, compilerEpoch = 0;
let compilerResumeAt = 0, compilerResumeTimer;
const startupTimes = { canvas: null, document: null, brush: null, complete: null };
installTooltips();
installPenScrolling();
let startupNotice;
let firstCanvasRendered = false;
let servicingRequests = false;
const settingsKey = "layer.preferences.v1", workspaceKey = "layer.workspace.v1";
let savedWorkspace = "";
let workspaceManager;
const pending = [];
const systemTheme = matchMedia("(prefers-color-scheme: dark)");
let appliedTheme;
applyTheme(systemTheme.matches ? "dark" : "light");

function applyTheme(theme, palette) {
  const key = JSON.stringify([theme, palette]);
  if (key === appliedTheme) return;
  appliedTheme = key;
  document.body.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  document.querySelector('meta[name="color-scheme"]').content = theme;
  if (palette) for (const [name, color] of Object.entries(palette)) {
    if (typeof color === "string") document.body.style.setProperty(`--${name.replaceAll("_", "-")}`, name === "button" ? `${color}0d` : color);
  }
  if (palette) for (const [name, color] of Object.entries(palette.glass)) {
    if (Array.isArray(color)) document.body.style.setProperty(`--glass-${name.replaceAll("_", "-")}`, `rgb(${color.slice(0, 3).map(v => v * 255).join(" ")} / ${color[3]})`);
  }
  glass?.queue();
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
// Read all dirty scrollbar geometry before changing any thumb. Mutation and
// resize observers can report several panels in one update.
const dirtyScrollbars = new Set();
let scrollbarFrame;
function queueScrollbar(read) {
  dirtyScrollbars.add(read);
  if (scrollbarFrame) return;
  scrollbarFrame = requestAnimationFrame(() => {
    scrollbarFrame = null;
    const writes = [...dirtyScrollbars].map(read => read());
    dirtyScrollbars.clear();
    for (const write of writes) write();
  });
}
function panelFrame(panel, scrollable = true) {
  const frame = element("div", "panel-frame");
  frame.append(panel);
  if (!scrollable) return frame;
  const thumb = element("div", "scroll-thumb");
  thumb.setAttribute("aria-hidden", "true");
  frame.append(thumb);
  let origin;
  const read = () => {
    const visible = panel.clientHeight, total = panel.scrollHeight, top = panel.scrollTop;
    const overflow = total - visible;
    const height = total ? Math.max(28, visible ** 2 / total) : 0;
    return () => {
      thumb.hidden = !visible || overflow <= 1;
      thumb.style.height = `${height}px`;
      thumb.style.top = `${overflow > 0 ? (top / overflow) * (visible - height) : 0}px`;
    };
  };
  const update = () => queueScrollbar(read);
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
  const response = await fetch(asset("icons.svg"));
  if (!response.ok) throw new Error("Cannot load application icons");
  const document = new DOMParser().parseFromString(await response.text(), "image/svg+xml");
  if (document.querySelector("parsererror")) throw new Error("Invalid application icons");
  for (const svg of document.documentElement.children) {
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    icons.set(svg.dataset.asset, svg);
  }
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
function draggable(node, item, pickup = item.kind === "tile" ? "hold" : "immediate") {
  // All workspace contacts share stable capture, including mouse tile reorders.
  // Classify the visible source separately from its Rust docking payload.
  node.draggable = false;
  node.dataset.workspaceDrag = JSON.stringify({ type: "drag_workspace", item });
  node.dataset.dragPickup = pickup;
  return node;
}
function grip(item) {
  const node = button("", () => {}, "panel-grip");
  node.title = "Drag to move panel";
  node.setAttribute(
    "aria-label",
    item.kind === "column" ? "Move column" : item.kind === "group" ? "Move all tabs" : "Move " + (customization?.view(item.panel)?.title || panelNames[item.panel] || "toolbar"),
  );
  node.append(icon("grip"));
  return draggable(node, item);
}
const dropIndicator = element("div", "drop-indicator");
dropIndicator.hidden = true;
workspace.append(dropIndicator);

function dispatch(action) {
  try {
    if(documents?.busy()&&!['complete_request','measure_panels','measure_titlebar','measure_workspace_bottom','measure_column_drawers','measure_drawer_tiles','measure_column_scroll'].includes(action.type))return;
    if (action.type === "measure_column_drawers" && workspaceGesture) workspaceGesture.hits = null;
    if (["move_panel", "move_group", "move_tile", "double_click_panel_handle", "reset_column_width"].includes(action.type))
      action = {
        ...action,
        viewport: workspaceViewport,
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
  if(change.regions & 256) editor?.refreshColorPreview();
  if(change.regions===256){if(change.canvas_wake)wake();return;}
  if (change.regions & (1 | 2 | 4 | 128)) workspaceManager?.observe();
  if (change.regions) {
    const presentation = app.workspace_update();
    if (workspaceModelRevision !== presentation.model_revision) {
      if (workspaceContentRevision === presentation.content_revision) {
        queueWorkspaceLayout(presentation);
      } else {
        const moving = presentation.drag || workspacePresentation?.drag;
        workspaceModelRevision = presentation.model_revision;
        workspaceContentRevision = presentation.content_revision;
        workspaceLayoutPending = null;
        workspacePresentation = null;
        const patch = app.state_update();
        const reopeningCanvas = state.settings_open && patch.settings_open === false;
        Object.assign(state, patch);
        // A concurrent model change rebases retained placement too.
        if (!moving && !(change.regions & ~(16 | 128)) &&
            Object.keys(patch).every(key => key === "revision" || key === "settings_open")) {
          // Opening, closing, searching and navigating Settings do not change
          // the workspace behind it. Keep its controls and geometry intact.
          refreshPreferences(app.preferences_cached());
          updateZen();
        } else update(change.regions | (moving ? 1 : 0));
        if (reopeningCanvas && startupTimes.complete === null) {
          // Let dismissal paint and a burst of UI interactions finish before
          // admitting another shader job. Drawing frames remain independent.
          compilerResumeAt = performance.now() + 500;
          clearTimeout(compilerResumeTimer);
          compilerResumeTimer = setTimeout(wake, 500);
          wake();
        }
      }
    } else if (change.regions & 32) {
      // Camera-only publications intentionally retain the model revision.
      state.camera = app.camera();
      update(32);
    }
    if (workspaceModelRevision === presentation.model_revision)
      queueWorkspacePresentation(presentation);
  }
  if (change.canvas_wake) wake();
  if (change.regions && !workspaceGesture?.started) wake();
}
let canvasCursorActive = false;
function cursorInput(e) {
  if (!gpuReady) return;
  const onCanvas =
    e &&
    e.pointerType !== "touch" &&
    ((e.target === canvas && lastPenEvent?.pointerId === e.pointerId) ||
      document.elementFromPoint(e.clientX, e.clientY) === canvas);
  // Clear once on exit; ordinary UI hover must not redraw the GPU viewport.
  if (!onCanvas && !canvasCursorActive) return;
  canvasCursorActive = !!onCanvas;
  if(!onCanvas){applyChange(app.input({type:"cursor_leave"}).change);return;}
  app.cursor_input(
    onCanvas
      ? new Float64Array([
          ...position(e),
          e.pointerType === "pen" ? e.pressure : 1,
          ((e.tiltX || 0) * Math.PI) / 180,
          ((e.tiltY || 0) * Math.PI) / 180,
          ((e.twist || 0) * Math.PI) / 180,
          e.timeStamp, e.pointerId, e.buttons, e.pointerType === "pen" ? ((e.buttons & 32) ? 2 : 0) : 1,
          (e.buttons & 1 ? 2 : 0) | (e.buttons & 2 ? 4 : 0),
        ])
      : new Float64Array(),
  );
  // Cursor geometry is drawn with the canvas by the shared GPU presenter.
  wake();
}
function wake() {
  if (gpuReady && !scheduled) {
    scheduled = true;
    requestAnimationFrame(frame);
  }
}
const frameIntervals = [];
let previousFrameTime;
let displayInterval = 1000 / 60;
function frame(frameTime) {
  scheduled = false;
  if (previousFrameTime !== undefined) {
    const interval = frameTime - previousFrameTime;
    if (interval > 250) frameIntervals.length = 0;
    else if (interval >= 4 && interval < 50) {
      frameIntervals.push(interval);
      if (frameIntervals.length > 32) frameIntervals.shift();
      // Missed callbacks are multiples of the display interval. Use the lower
      // tail, and let the bounded window follow a changed monitor/refresh rate.
      const sorted = frameIntervals.toSorted((a, b) => a - b);
      displayInterval = sorted[Math.floor((sorted.length - 1) * .1)];
    }
  }
  previousFrameTime = frameTime;
  // During startup the modal editor owns interaction. Resume preparation on
  // dismissal instead of competing with Settings for the UI thread/GPU.
  if (state.settings_open && startupTimes.complete === null) return;
  try {
    flushWorkspacePresentation();
    glass?.flush();
    while (pending.length) {
      const batch = pending[0],
        count = app.pen(batch.records, batch.revision);
      if (count * 11 === batch.records.length) pending.shift();
      else {
        batch.records = batch.records.subarray(count * 11);
        break;
      }
    }
    // rAF's timestamp can precede the newest input by an entire display tick.
    // Model against current time and the next estimated display opportunity.
    const now = performance.now();
    const elapsedTicks = Math.floor(Math.max(0, now - frameTime) / displayInterval);
    const presentation = frameTime + (elapsedTicks + 1) * displayInterval;
    applyChange(app.frame(now, presentation));
    refreshStartup();
    scheduleCompiler();
    if (pending.length) wake();
  } catch (error) { stopGpu(error); }
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
  const hidden = !stages.canvas || app.brush_ready();
  const text = documentReady ? "Preparing brush…" : "Preparing canvas…";
  if (startupNotice.hidden !== hidden) startupNotice.hidden = hidden;
  if (startupNotice.textContent !== text) startupNotice.textContent = text;
}
function scheduleCompiler() {
  if (!gpuReady || state.settings_open || performance.now() < compilerResumeAt || compilerScheduled || compilerFailed || !app.shader_work_pending()) return;
  compilerScheduled = true;
  const epoch=compilerEpoch;
  // Start after this display callback can present. The next job is scheduled
  // by a later frame, with input/UI opportunities between each GPU scope.
  setTimeout(async () => {
    try {
      if(epoch!==compilerEpoch || state.settings_open || performance.now()<compilerResumeAt)return;
      if (!firstCanvasRendered) {
        // A display callback alone does not mean the GPU has rendered paper.
        // Starting document compilation sooner can hold up Chrome's GPU-process
        // command batch, including the pending first canvas presentation.
        await gpuOperation(() => app.wait_for_canvas());
        if(epoch!==compilerEpoch)return;
        firstCanvasRendered = true;
        await new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
      }
      if(epoch!==compilerEpoch || state.settings_open || performance.now()<compilerResumeAt)return;
      await gpuOperation(() => app.compile_startup_step());
      if(epoch!==compilerEpoch)return;
      refreshStartup();
      wake();
    } catch (error) {
      if(epoch===compilerEpoch){compilerFailed = true;stopGpu(error);}
    } finally {
      if(epoch===compilerEpoch)compilerScheduled = false;
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
  glass?.queue();
}
function tabLabel(tab, view, automatic = false) {
  tab.classList.toggle("icon-only-tab", !view.tab.show_name);
  if (view.tab.show_icon || automatic) tab.append(icon(view.icon));
  if (view.tab.show_name || automatic) { const label = element("span", "", view.title); label.hidden = !view.tab.show_name; tab.append(label); }
}
const fullTabWidths = new Map(), pendingTabFits = new Set();
let tabFitFrame = 0;
const tabFit = new ResizeObserver(entries => {
  for (const { target } of entries) pendingTabFits.add(target);
  tabFitFrame ||= requestAnimationFrame(fitTabs);
});
function automaticTabs(list) { list.dataset.automatic = "true"; tabFit.observe(list); }
function releaseTabs(root) { for (const list of root.querySelectorAll("[data-automatic]")) tabFit.unobserve(list); }
function fitTabs() {
  tabFitFrame = 0;
  const lists = [...pendingTabFits].filter(list => list.isConnected && list.dataset.automatic); pendingTabFits.clear();
  const size = document.documentElement.style.getPropertyValue("--ui-text-size");
  const key = tab => `${tab.dataset.panel}\n${tab.getAttribute("aria-label")}\n${size}`;
  const missing = lists.flatMap(list => [...list.children]).filter(tab => !fullTabWidths.has(key(tab)));
  for (const tab of missing) { tab.classList.remove("icon-only-tab"); tab.lastElementChild.hidden = false; }
  for (const tab of missing) fullTabWidths.set(key(tab), tab.getBoundingClientRect().width);
  const fits = lists.map(list => [list, list.clientWidth]).filter(([, width]) => width > 0).map(([list, width]) => {
    const tabs = [...list.children];
    return [tabs, automatic_tab_names(width, new Float32Array(tabs.flatMap(tab => [fullTabWidths.get(key(tab)), 36])))];
  });
  for (const [tabs, names] of fits) tabs.forEach((tab, i) => { tab.classList.toggle("icon-only-tab", !names[i]); tab.lastElementChild.hidden = !names[i]; });
}
function arrange(nextLayout, layoutOnly = false) {
  if (!app) return;
  clearWorkspacePlacement();
  if (workspaceGesture) workspaceGesture.hits = null;
  layout = layoutOnly ? nextLayout : app.layout(...workspaceViewport);
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
    const tabStyle = app.group_tab_style(group.id);
    const key = JSON.stringify([group.panels.map((id) => {
      const view = customization.view(id); return [id, view.title, view.tab, view.icon];
    }), group.active, group.tabs_visible, tabStyle]);
    if (node.dataset.key !== key) {
      node.dataset.key = key;
      node.dataset.panel = group.active;
      node.dataset.group = group.id;
      node.setAttribute("aria-label", customization.view(group.active).title);
      node.classList.toggle("toolbar", !!group.tiles);
      const preview = node.querySelector(".panel-preview");
      releaseTabs(preview);
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
          tabLabel(tab, view, tabStyle === "automatic");
          customization.target(tab, { kind: "panel", panel });
          tab.setAttribute("aria-selected", String(panel === group.active));
          labels.append(draggable(tab, { kind: "panel", panel }));
        });
        if (tabStyle === "automatic") automaticTabs(labels);
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
    node.classList.toggle("tool-strip", !!group.tiles && !group.tabs_visible);
    if (group.tiles) node.style.setProperty("--tile-radius", `${customization.view(group.active).tile_corner_radius}px`);
    node.dataset.zIndex = group.floating ? String(100 + layout.groups.indexOf(group) * 2) : "1";
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
      releaseTabs(node);
      node.remove();
      groups.delete(id);
    }
  const liveDividers = new Set();
  const handles = [
    ...layout.dividers.filter(d => !d.fixed).map(d => ({ key: `${d.band}:${d.id}`, bounds: d.bounds,
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
  if (!layoutOnly) {
    customization.arrange(layout);
  }
  workspaceChrome?.arrange(layout,layoutOnly);
  if (layoutOnly) {
    if (editor.flushPositions() && gpuReady && app.reflow_navigators()) wake();
  } else editor.queuePositions();
  place($("canvas-status"), layout.status);
  // The help occupies the same unobstructed area used for fitting the document.
  // Panels remain native UI siblings above the full-window drawing surface.
  place($("gpu-notice"), layout.work_area);
  if (!layoutOnly) {
    resizeCanvas();
    updateZen();
  }
  queuePanelMeasurements();
}
// Measure intrinsic widget content only when its width/copy changes. Rust owns
// tab growth and floating sizes; moving a float reuses these cached DOM facts.
const panelMeasurements = new Map();
let measuringPanels = false;
const measureBox = element("div", "panel-measure");
measureBox.hidden = true;
measureBox.inert = true;
measureBox.setAttribute("aria-hidden", "true"); workspace.append(measureBox);
// An isolated tree retains measurement controls without exposing duplicate IDs
// to application lookup. It uses the same CSS and inherits the workspace theme.
const measurementRoot = measureBox.attachShadow({mode:"closed"});
const measurementStyle = new CSSStyleSheet();
measurementStyle.replaceSync([...$("workspace-style").sheet.cssRules].map(rule=>rule.cssText).join("\n"));
measurementRoot.adoptedStyleSheets = [measurementStyle];
function invalidatePanelMeasurement(id) {
  panelMeasurements.get(id)?.root.remove();
  panelMeasurements.delete(id);
}
function panelContentChanged(id) {
  invalidatePanelMeasurement(id);
  queuePanelMeasurements();
}
function queuePanelMeasurements() {
  if (measuringPanels) return;
  measuringPanels = true;
  requestAnimationFrame(() => {
    measuringPanels = false;
    measurePanels();
  });
}
function measurePanels() {
  const pending = [];
  // Batch writes before reads. Intrinsic measurement keeps one offscreen DOM
  // copy per intrinsic content change, so width changes reflow it without cloning.
  for (const config of state.workspace.layout.panels) {
    const view = customization.view(config.id);
    const width = layout.groups.find(g => g.panels.includes(config.id))?.bounds.width || 232;
    // Model publication also advances for numeric values and canvas poses.
    // Intrinsic copies change only with panel structure/copy, appearance or
    // available width; each content widget invalidates its own schema below.
    const key = JSON.stringify([state.theme, view.title, view.tab, view.icon, view.controls, view.tile_style]);
    let cached = panelMeasurements.get(config.id);
    if (cached?.key !== key) {
      invalidatePanelMeasurement(config.id);
      const root = element("div");
      const tab = element("button", "dock-tab");
      tab.style.width = "max-content";
      tabLabel(tab, view);
      root.append(tab);
      const content = config.content.kind === "toolbar" ? null : panels.get(config.id).cloneNode(true);
      if (content) {
        content.style.height = "auto"; content.style.width = "100%";
        root.append(content);
      }
      cached = { key, root, tab, content };
      panelMeasurements.set(config.id, cached); measurementRoot.append(root);
    }
    // Toolbar intrinsic height is fixed at zero and its tab width is
    // independent of the available column width.
    if (cached.value && !cached.content) continue;
    if (cached.width !== width) {
      cached.width = width; cached.root.style.width = `${width}px`;
      pending.push([config.id, cached]);
    }
  }
  // Retain the copies and their measured values, but lay them out only when
  // measuring. An always-laid-out shadow tree also joins modal style/layout.
  if (pending.length) measureBox.hidden = false;
  try {
    for (const [id, cached] of pending) {
      const content_height = cached.content?.getBoundingClientRect().height || 0;
      // The unconstrained copy lays out every row, including offscreen rows.
      // Subtract the list itself to keep headers/footers outside the scroll budget.
      const list = cached.content?.querySelector(".layer-rows, .filter-picker-list, .palette-scroll");
      const row = list?.querySelector(".layer-row, .filter-row, .palette-tile");
      cached.value = {
        panel: id,
        tab_width: cached.value?.tab_width ?? cached.tab.getBoundingClientRect().width,
        content_height,
        ...(cached.content && id !== "color" ? { scroll: {
          fixed_height: list ? Math.max(0, content_height - list.getBoundingClientRect().height) : 0,
          unit_height: row ? row.getBoundingClientRect().height + (row.matches(".palette-tile") ? 4 : 0) : 0,
        }} : {}),
      };
    }
  } finally { measureBox.hidden = true; }
  for (const id of panelMeasurements.keys()) if (!panels.has(id)) invalidatePanelMeasurement(id);
  const measurements = state.workspace.layout.panels.map(config => panelMeasurements.get(config.id).value);
  // Compare against the shared publication, not a second authoritative cache.
  // Measurements are transient and deliberately omitted from saved workspace
  // state. Read Rust's live values rather than repeatedly publishing because a
  // freshly serialized full state lacks that field.
  const current = app.panel_measurements();
  if (!current || current.length !== measurements.length || measurements.some((m, i) =>
    m.panel !== current[i].panel || m.tab_width !== current[i].tab_width || m.content_height !== current[i].content_height ||
    m.scroll?.fixed_height !== current[i].scroll?.fixed_height || m.scroll?.unit_height !== current[i].scroll?.unit_height)) {
    dispatch({ type: "measure_panels", measurements });
  }
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
  for (const [panel, control] of [["brush_sets","brush_sets"],["sculpt_sets","sculpt_sets"],["tools","tools"],["tool_settings","tool_settings"],["color","color_wheel"],["navigator","navigator"]])
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
  palettes.mount(panels.get("palettes"));
  layerPanel = createLayerPanel({ app, catalog, state: () => state, panel: panels.get("layers"), element, button, icon, dispatch, applyChange, message, numberField, wake, dismissContext: () => customization.dismissContext(), contentChanged: panelContentChanged });
  effectPanels = createEffectPanels({app,catalog,state:()=>state,panels,element,button,icon,dispatch,numberField,message,
    contentChanged:panelContentChanged});
}
function contentPanel(id, splitPicker=false) {
  const panel=element("div",`panel ${id}-panel`);
  if(id==="proof") {
    panel.disposePanel=documents.mountProof(panel);panel.refreshPanel=()=>{};
  } else if(id==="palettes") {
    const view=palettes.mount(panel);panel.refreshPanel=view.refresh;panel.disposePanel=view.dispose;
  } else if(id==="layers") {
    const view=createLayerPanel({app,catalog,state:()=>state,panel,element,button,icon,dispatch,applyChange,message,numberField,wake,dismissContext:()=>customization.dismissContext()});
    panel.refreshPanel=view.refresh; panel.disposePanel=view.dispose;
  } else if(["filter_types","adjustments","properties","stats"].includes(id)) {
    const copies=new Map(["filter_types","adjustments","properties","stats"].map(name=>[name,name===id?panel:element("div","panel")]));
    const view=createEffectPanels({app,catalog,state:()=>state,panels:copies,element,button,icon,dispatch,numberField,message,contentChanged:()=>{},splitPicker});
    panel.refreshPanel=view.refresh; panel.disposePanel=view.dispose;
  } else {
    for(const control of customization.view(id).controls.filter(c=>c.visible_in_panel)) panel.append(customization.field(control.control,control.label));
    panel.refreshPanel=()=>{};
  }
  panel.refreshPanel();return panel;
}
function update(regions) {
  // Canvas-based controls read these colors while refreshing their pixels.
  if (regions & 16) applyTheme(state.theme, state.palette);
  if (regions & (1 | 2 | 4 | 8 | 16 | 128)) customization.refresh();
  if (regions & 2) {
    for (const [size, button] of sizeButtons) {
      const pressed = String(size === state.brush.diameter);
      if (button.getAttribute("aria-pressed") !== pressed) button.setAttribute("aria-pressed", pressed);
    }
    $("size-number").update(state.brush.diameter);
  }
  if (regions & 4) {
    const tab = state.tabs[0];
    const title = `${tab.title} · ${tab.width} × ${tab.height}`;
    if ($("document-title").textContent !== title) $("document-title").textContent = title;
    layerPanel.refresh();
    effectPanels.refresh();
  }
  if (regions & (1 | 2 | 4 | 8 | 16 | 128)) header?.refresh();
  if (regions & (4 | 8)) documents?.refresh();
  if (regions & (2 | 4 | 16)) palettes.refresh(regions);
  if (regions & (1 | 2 | 4 | 8 | 16 | 32 | 128)) { editor.refresh(); selectionUi.refresh(); workspaceChrome?.refresh(); }
  if (regions & (1 | 4 | 128)) arrange();
  if (regions & (1 | 128)) persistWorkspace();
  if (regions & (1 | 4 | 8 | 128)) refreshWorkspaceMenu();
  if (regions & (4 | 8))
    for (const command of state.commands)
      for (const node of commands.get(command.id) || []) {
        const disabled = !command.enabled || (command.id === "fullscreen" && !document.fullscreenEnabled);
        if (node.disabled !== disabled) node.disabled = disabled;
        if (node.title !== command.tooltip) node.title = command.tooltip;
        if (node.getAttribute("aria-label") !== command.label) node.setAttribute("aria-label", command.label);
        const pressed = String(command.selected);
        if (node.getAttribute("aria-pressed") !== pressed) node.setAttribute("aria-pressed", pressed);
        if (node.dataset.icon === "true") {
          const glyph = node.querySelector("svg");
          if (glyph?.dataset.asset !== command.icon) {
            const next = icon(command.icon);
            next.style.cssText = glyph?.style.cssText || "";
            node.replaceChildren(next);
          }
        } else {
          const label = node.querySelector(".command-label");
          if (label) {
            const shortcut = node.querySelector(".shortcut-hint");
            if (label.textContent !== command.label) label.textContent = command.label;
            if (shortcut.textContent !== command.shortcut) shortcut.textContent = command.shortcut;
          } else if (node.textContent !== command.label) node.textContent = command.label;
        }
      }
  if (regions & 16) {
    systemStatus?.sync();
    refreshPreferences(app.preferences_cached());
  }
  if (regions & 32) {
    const info = `${Math.round(state.camera.zoom * 100)}% · ${Math.round((state.camera.rotation * 180) / Math.PI)}°`;
    if ($("view-info").textContent !== info) $("view-info").textContent = info;
  }
  if (regions & (1 | 16)) updateZen();
  editor.flushPaint();
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
            else if (request.kind.type === "workspace") { workspaceManager?.handle(request); }
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
// Watch only until pickup: an invalidated held tile must not leave a grab cursor.
// Disconnect before dragging, when shared updates may deliberately reparent it.
const workspaceGestureSourceObserver = new MutationObserver(() => {
  const drag = workspaceGesture;
  if (drag && (!drag.node.isConnected || drag.node.parentNode !== drag.parent))
    endWorkspaceGesture(null, true);
});
function grabTabSlide(drag) {
  if (!drag.node.matches(".dock-tab")) return;
  const strip = drag.node.parentElement;
  if (!strip.matches(".tab-list, .drawer-tab-strip")) return;
  const group = JSON.parse(strip.parentElement.dataset.workspaceDrag).item.group;
  const rect = node => {
    const b = node.getBoundingClientRect();
    return { x: b.x, y: b.y, width: b.width, height: b.height };
  };
  drag.tabGrab = { clip: rect(strip), tabs: [...strip.children].map((source, index) =>
    ({ source, hit: { group, index, bounds: rect(source) } })) };
}
function startTabSlide(drag) {
  if (!drag.tabGrab) return;
  const { clip, tabs: grabbed } = drag.tabGrab;
  drag.tabGrab = null;
  const overlay = element("div", "tab-slide-overlay");
  Object.assign(overlay.style, { left: `${clip.x}px`, top: `${clip.y}px`,
    width: `${clip.width}px`, height: `${clip.height}px` });
  overlay.setAttribute("aria-hidden", "true"); overlay.inert = true;
  // Freeze insertion geometry; only these noninteractive copies move.
  const tabs = grabbed.map(({ source, hit }) => {
    const bounds = hit.bounds, preview = source.cloneNode(true);
    for (const name of [...preview.attributes].map(a => a.name)) {
      if (name.startsWith("data-") || name === "id") preview.removeAttribute(name);
    }
    preview.classList.add(source === drag.node ? "dragged-tab-preview" : "neighbor-tab-preview");
    Object.assign(preview.style, { left: `${bounds.x - clip.x}px`, top: `${bounds.y - clip.y}px`,
      width: `${bounds.width}px`, height: `${bounds.height}px`, font: getComputedStyle(source).font, transform: "translateX(0px)" });
    source.classList.add("dragged-tab-source");
    overlay.append(preview);
    return { source, preview, hit };
  });
  workspace.append(overlay);
  overlay.getBoundingClientRect(); // Establish the neighbors' transition starting positions.
  drag.tabSlide = { tabs, clip, overlay };
}
function clearTabSlide(drag) {
  if (!drag.tabSlide) return;
  for (const tab of drag.tabSlide.tabs) tab.source.classList.remove("dragged-tab-source");
  drag.tabSlide.overlay.remove();
  drag.tabSlide = null;
}
function updateTabSlide(drag, presentation) {
  const slide = drag.tabSlide;
  if (!slide) return;
  const preview = presentation?.preview;
  if (!preview) { clearTabSlide(drag); return; }
  for (const tab of slide.tabs) {
    const offset = tab.source === drag.node ? preview.bounds.x - presentation.source.x
      : preview.offsets.find(o => Number(o.index) === tab.hit.index)?.x || 0;
    tab.preview.style.transform = `translateX(${deviceAligned(offset)}px)`;
  }
}
function workspaceCursor(cursor) {
  if ((workspace.dataset.workspaceCursor || null) === (cursor || null)) return;
  if (cursor) {
    workspace.dataset.workspaceCursor = cursor;
    workspace.style.setProperty("--workspace-cursor", cursor);
  } else {
    delete workspace.dataset.workspaceCursor;
    workspace.style.removeProperty("--workspace-cursor");
  }
}
// Shared workspace_update publication: retain content at content_revision and
// apply layout-only reflow once per display frame. Geometry-only dragging still
// retains models at model_revision, without layout or measurement work.
// Dispatch every input to Rust; replace only pending absolute presentation and
// apply it on the display clock. No scaled textures or per-motion DOM rebuilds.
let workspaceModelRevision, workspaceContentRevision, workspacePresentation, workspacePresentationFrame = 0;
let workspaceLayoutPending, workspaceLayoutFrame = 0;
function queueWorkspaceLayout(presentation) {
  workspaceLayoutPending = presentation;
  if (!workspaceLayoutFrame) workspaceLayoutFrame = requestAnimationFrame(function presentWorkspaceLayout() {
    workspaceLayoutFrame = 0;
    if (!workspaceLayoutPending) return;
    workspaceLayoutPending = null;
    // Fetch only the latest absolute layout, after all queued input reached Rust.
    const packet = app.layout_update(...workspaceViewport);
    const update = packet.workspace_update;
    if (update.content_revision !== workspaceContentRevision) return;
    workspaceModelRevision = update.model_revision;
    state.revision = update.revision;
    state.camera = packet.camera;
    Object.assign(state.workspace.layout, packet.workspace_layout);
    state.workspace.layout.measurements = packet.panel_measurements;
    arrange(packet.layout, true);
    queueWorkspacePresentation(update);
  });
}
workspace.addEventListener("scroll", () => { if (workspaceGesture) workspaceGesture.hits = null; }, true);
const workspacePlacements = new Map();
const deviceAligned = value => Math.round(value * devicePixelRatio) / devicePixelRatio;
function clearWorkspacePlacement() {
  for (const [node, original] of workspacePlacements) {
    node.style.removeProperty("transform");
    node.style.width = original.width;
    node.style.height = original.height;
    node.style.setProperty("--panel-body-height", original.bodyHeight);
  }
  workspacePlacements.clear();
}
function queueWorkspacePresentation(presentation) {
  workspacePresentation = presentation;
  if (!presentation.drag) {
    flushWorkspacePresentation();
  } else if (!workspacePresentationFrame) {
    workspacePresentationFrame = requestAnimationFrame(function presentWorkspaceFrame() {
      workspacePresentationFrame = 0;
      flushWorkspacePresentation();
    });
  }
}
function flushWorkspacePresentation() {
  const update = workspacePresentation;
  workspacePresentation = null;
  if (!update || update.model_revision !== workspaceModelRevision) return false;
  const drag = update.drag, moving = drag?.group;
  if (moving) {
    const group = layout.groups.find(g => g.id === moving.id), base = group?.bounds;
    if (base) {
      const dw = moving.bounds.width - base.width, dh = moving.bounds.height - base.height;
      const nodes = [groups.get(moving.id), ...[...dividers.values()].filter(n => n.dragAction.group === moving.id)];
      for (const node of nodes.filter(Boolean)) {
        if (!workspacePlacements.has(node)) workspacePlacements.set(node, {
          width: node.style.width, height: node.style.height,
          bodyHeight: node.style.getPropertyValue("--panel-body-height"),
        });
        const original = workspacePlacements.get(node), edge = node.dataset.edge;
        const x = deviceAligned(moving.bounds.x) - base.x + (edge?.includes("right") ? dw : 0);
        const y = deviceAligned(moving.bounds.y) - base.y + (edge?.includes("bottom") ? dh : 0);
        const transform = `translate(${x}px, ${y}px)`;
        if (node.style.transform !== transform) node.style.transform = transform;
        // Freeze native allocation too, without scaling the retained controls.
        const width = `${parseFloat(original.width) + (!edge || edge === "top" || edge === "bottom" ? dw : 0)}px`;
        const height = `${parseFloat(original.height) + (!edge || edge === "left" || edge === "right" ? dh : 0)}px`;
        if (node.style.width !== width) node.style.width = width;
        if (node.style.height !== height) node.style.height = height;
        if (!edge) {
          const bodyHeight = `${moving.bounds.height - (group.tabs_visible ? layout.tab_bar_height : 0)}px`;
          if (node.style.getPropertyValue("--panel-body-height") !== bodyHeight) node.style.setProperty("--panel-body-height", bodyHeight);
        }
      }
    }
  } else clearWorkspacePlacement();
  if (workspaceGesture) updateTabSlide(workspaceGesture, drag?.tab);
  showDropHint(drag?.drop_hint);
}
function workspaceGestureEvent(phase, e) {
  const drag = workspaceGesture;
  if (!drag) return;
  if (phase === "down" || phase === "up") {
    workspaceChrome?.measureColumnDrawers();
    if (phase === "up") measurePanels();
    drag.hits = null;
  }
  dispatch({ ...drag.action, phase, position: [e.clientX, e.clientY],
    viewport: workspaceViewport,
    ...(drag.action.type === "drag_workspace" ? { tabs: drag.hits ??= tabHits() } : {}),
  });
}
function endWorkspaceGesture(e, cancel = false) {
  const drag = workspaceGesture;
  if (!drag || (e && drag.id !== e.pointerId)) return;
  workspaceGestureSourceObserver.disconnect();
  if (drag.started) {
    if (drag.tile) {
      if (!cancel) dropItem(drag.action.item, dropHint(e || drag.last, drag.action.item));
      dragItem = null; drag.node.classList.remove("drag-source");
    } else workspaceGestureEvent(cancel ? "cancel" : "up", e || drag.last);
  }
  if (cancel && drag.context) customization.dismissContext();
  workspaceGesture = null;
  clearTabSlide(drag);
  workspaceCursor(null);
  if (workspace.hasPointerCapture(drag.id)) workspace.releasePointerCapture(drag.id);
  dropIndicator.hidden = true;
  if (drag.started || drag.held || drag.context) { revealPointer = drag.id; e?.preventDefault(); e?.stopPropagation(); }
  updateZen();
}
workspace.addEventListener("pointerdown", e => {
  if (e.button !== 0 || !e.isPrimary || workspaceGesture) return;
  const node = e.target.closest("[data-workspace-drag]");
  if (!node) return;
  workspaceGesture = { id: e.pointerId, action: JSON.parse(node.dataset.workspaceDrag),
    start: e, last: e, started: false, node, parent: node.parentNode,
    waitForHold: node.dataset.dragPickup === "hold", cursor: getComputedStyle(node).cursor };
  workspaceGesture.tile = workspaceGesture.action.item?.kind === "tile";
  if (workspaceGesture.waitForHold)
    workspaceGestureSourceObserver.observe(workspace, { childList: true, subtree: true });
  grabTabSlide(workspaceGesture);
  // External resize strips are outside the unselectable panel. Prevent a
  // native text-selection drag from stealing their pointer sequence.
  if (workspaceGesture.action.type !== "drag_workspace") e.preventDefault();
}, { capture: true });
workspace.addEventListener("pointermove", e => {
  const drag = workspaceGesture;
  if (!drag || drag.id !== e.pointerId) return;
  drag.last = e;
  if (!drag.started) {
    if (!drag.node.isConnected || drag.node.parentNode !== drag.parent) {
      endWorkspaceGesture(e, true); return;
    }
    const distance = Math.hypot(e.clientX - drag.start.clientX, e.clientY - drag.start.clientY);
    if (distance <= (drag.action.type === "drag_workspace" ? 8 : 0)) return;
    if (drag.waitForHold && !drag.held) { endWorkspaceGesture(e, true); return; }
    customization.dismissContext();
    drag.started = true;
    workspaceGestureSourceObserver.disconnect();
    // Capture on the stable workspace before Rust tears off/rebuilds a tab.
    workspace.setPointerCapture(e.pointerId);
    groups.forEach(node => node.getAnimations().forEach(a => a.cancel()));
    if (drag.tile) {
      dragItem = drag.action.item; drag.node.classList.add("drag-source"); updateZen();
    } else {
      startTabSlide(drag);
      workspaceGestureEvent("down", drag.start);
      if (drag.tabSlide) app.begin_tab_drag(drag.tabSlide.tabs.map(t => t.hit), drag.tabSlide.clip);
    }
  }
  if (drag.tile) showDropHint(dropHint(e, drag.action.item));
  else workspaceGestureEvent("move", e);
  if (drag.action.type === "drag_workspace") {
    workspaceCursor("grabbing");
  } else {
    workspaceCursor(drag.cursor);
  }
  e.preventDefault(); e.stopPropagation();
}, { capture: true });
workspace.addEventListener("touchmove", e => {
  if (workspaceGesture?.context && e.touches.length === 1) e.preventDefault();
}, { passive: false });
window.addEventListener("pointerup", e => endWorkspaceGesture(e), { capture: true });
window.addEventListener("pointercancel", e => endWorkspaceGesture(e, true), { capture: true });
workspace.addEventListener("lostpointercapture", e => {
  // Touch starts with implicit capture on the tab. Transferring capture to the
  // stable workspace releases that child; only losing our own capture cancels.
  if (e.target === workspace || (!workspace.hasPointerCapture(e.pointerId)
    && workspaceGesture?.node.contains(e.target))) endWorkspaceGesture(e, true);
});
function armWorkspaceDrag(drag) {
  drag.held = true;
  if (drag.waitForHold && ["mouse", "pen"].includes(drag.start.pointerType))
    workspaceCursor("grab");
  // Keep this contact even when a context menu covers the original tile/tab.
  workspace.setPointerCapture(drag.id);
}
workspace.addEventListener("workspace-context-claimed", e => {
  const drag = workspaceGesture;
  if (drag && (drag.node.contains(e.target) || e.target.contains(drag.node))) {
    // A late native contextmenu event must not interrupt an existing drag.
    if (drag.started) { e.preventDefault(); return; }
    drag.context = true;
    armWorkspaceDrag(drag);
  } else endWorkspaceGesture(null, true);
});
workspace.addEventListener("workspace-drag-held", e => {
  const drag = workspaceGesture;
  if (drag?.waitForHold && !drag.started && drag.node.contains(e.target)) {
    armWorkspaceDrag(drag);
  }
});
workspace.addEventListener("dblclick", e => {
  const column = e.target.closest(".collapsed-column");
  if (column && !e.target.closest("button")) {
    e.preventDefault(); e.stopPropagation();
    dispatch({ type: "customize", action: {
      type: "set_column_collapsed", group: Number(column.dataset.column), collapsed: false,
    } });
    return;
  }
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
    const capy = $("zen-capy");
    if (capy && capy.hidden !== !reply.keep_zen_button)
      capy.hidden = !reply.keep_zen_button;
    const cursor = reply.pan_cursor ? "grab" : "";
    if (canvas.style.cursor !== cursor) canvas.style.cursor = cursor;
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
  const capy = $("zen-capy");
  const capyBounds = capy && !capy.hidden ? capy.getBoundingClientRect() : null;
  return input({
    type: "chrome",
    event,
    viewport: workspaceViewport,
    facts: {
      zen_button: capyBounds ? {x:capyBounds.x,y:capyBounds.y,width:capyBounds.width,height:capyBounds.height} : null,
      expanded_panel: customization?.placement(),
      ...workspaceChrome?.facts(),
      contact_tab: event.kind === "contact"
        ? document.elementFromPoint(...event.position)?.closest(".dock-tab")?.dataset.panel ?? null
        : null,
      held: chromeHeld,
      dragging: dragItem !== null,
      popup_open:
        !!(document.querySelector("dialog[open], details[open]") || document.querySelector(":popover-open:not(.hover-tooltip)")) ||
        !!document.activeElement?.matches("select"),
    },
  });
}
function updateZen() {
  const hidden = workspace.classList.contains("zen-hidden");
  chromeInput({ kind: "refresh" });
  if (hidden !== workspace.classList.contains("zen-hidden")) {
    workspaceChrome?.refresh();
    editor?.queuePositions();
    glass?.queue();
  }
}
function buildHeader() {
  systemStatus = createSystemStatus({element, changed:fullscreen => {
    if(customization && state.fullscreen !== fullscreen) dispatch({type:"window_fullscreen",fullscreen});
    header?.queue();
  }});
}
function refreshWorkspaceMenu() {
  for(const menu of document.querySelectorAll('#header details[open]')) menu.refreshMenu?.();
}
function persistWorkspace() {
  workspaceManager?.observe();
}
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
    if (e.target.closest?.("dialog[open]")) return;
    if (!e.buttons) chromeHeld = false;
    // A captured paint contact cannot reveal chrome. The canvas listener owns
    // its samples/cursor; querying popups and hit-testing here duplicates work
    // and can force layout between input and the next drawing submission.
    if (!(e.target === canvas && lastPenEvent?.pointerId === e.pointerId))
      chromeInput({ kind: "motion", position: [e.clientX, e.clientY] });
    if (e.target !== canvas) cursorInput(e);
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
    // Native DOM modals own their contacts. Workspace transitions deliberately
    // consume editor input, so forwarding a dialog contact would swallow its
    // buttons before the DOM click handler can run.
    if (e.target.closest("dialog[open]")) return;
    if (e.target === canvas && e.pointerType === "pen" && !(e.buttons & 33)) {
      e.preventDefault();
      return;
    }
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
function position(e, rect = canvas.getBoundingClientRect()) {
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
function queuePen(e, stage, predictionsOnly = false) {
  const predict = state.settings.feedback && state.settings.platform_prediction;
  if (predictionsOnly && !predict) return;
  if (!predictionsOnly) {
    lastPenEvent = stage === 3 || stage === 4 ? null : e;
    if (stage !== 2) rawPenPointer = null;
  }
  const records = [];
  const rect = canvas.getBoundingClientRect();
  const append = (item, predicted) => {
    const [x, y] = position(item, rect),
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
      predicted ? 3 : 2,
      pen ? (item.buttons & 32 ? 2 : 0) : 1,
    );
  };
  if (!predictionsOnly) {
    const history = stage === 2 ? e.getCoalescedEvents?.() || [] : [];
    for (const item of history.length ? history : [e]) append(item, false);
  }
  if (stage === 2 && e.pointerType === "pen" && predict) {
    const latestActualTime = Math.max(e.timeStamp, lastPenEvent?.timeStamp ?? 0);
    for (const item of e.getPredictedEvents?.() || []) {
      if (item.timeStamp > latestActualTime) append(item, true);
    }
  }
  if (!records.length) return;
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
// Use raw updates only for the captured painting contact. UI rows, touch
// navigation and hover keep their ordinary pointermove arbitration. Observe
// actual raw delivery, so browsers/devices without it still paint via moves.
let rawPenPointer = null;
const canvasPenContacts = new Set();
const canvasFingers=new Set();
let pickerHold=null;
function cancelPickerHold(){if(pickerHold)clearTimeout(pickerHold.timer);pickerHold=null;}
window.addEventListener('blur',()=>{cancelPickerHold();canvasFingers.clear();});
function pickerTouch(e,stage){
  if(e.pointerType!=='touch')return;
  if(stage===1){
    canvasFingers.add(e.pointerId);cancelPickerHold();
    if(canvasFingers.size===1){
      pickerHold={id:e.pointerId,x:e.clientX,y:e.clientY,timer:setTimeout(()=>{
        pickerHold=null;
        applyChange(app.input({type:'color_picker_hold',id:corePointerId(e),position:position(e),offset:44*(devicePixelRatio||1)}).change);
      },500)};
    }
  } else if(stage===2&&pickerHold?.id===e.pointerId&&Math.hypot(e.clientX-pickerHold.x,e.clientY-pickerHold.y)>8)cancelPickerHold();
  else if(stage===3||stage===4){canvasFingers.delete(e.pointerId);cancelPickerHold();}
}

function canvasPointer(e, stage) {
  pickerTouch(e,stage);
  if (e.cancelable) e.preventDefault();
  if (e.pointerType === "pen") {
    const active = canvasPenContacts.has(e.pointerId), touching = !!(e.buttons & 33);
    // DOM button chording reports tip down/up as pointermove while a barrel
    // button is held. Only tip/eraser contact starts drawing or navigation.
    if (stage === 1 && !touching) return;
    if (stage === 2 && !active && touching && (e.button === 0 || e.button === 5)) stage = 1;
    if (stage === 2 && active && !touching &&
        (e.pressure === 0 || e.button === 0 || e.button === 5)) stage = 3;
    if (stage === 1) canvasPenContacts.add(e.pointerId);
  }
  if (stage === 3 || stage === 4) canvasPenContacts.delete(e.pointerId);
  if (
    stage === 2 && e.type === "pointermove" && rawPenPointer === e.pointerId &&
    ((e.buttons & 33) || e.pressure !== 0)
  ) {
    // The real samples were already delivered by pointerrawupdate. Chrome's
    // native predictions usually arrive only with the matching pointermove.
    queuePen(e, stage, true);
    return;
  }
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
      (e.type !== "pointerup" && stage === 3))) {
    sample = lastPenEvent;
    stage = 3;
  }
  const reply = pointerInput(sample, stage);
  if (reply.paint) queuePen(sample, stage);
  // Normal release drops capture after pointerup already restored hover.
  if (e.type === "lostpointercapture" && !reply.handled) return;
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
if ("onpointerrawupdate" in globalThis) {
  canvas.addEventListener("pointerrawupdate", e => {
    if (lastPenEvent?.pointerId !== e.pointerId || e.pointerType !== "pen") return;
    rawPenPointer = e.pointerId;
    canvasPointer(e, 2);
  }, { passive: true });
}
function pointerInput(e, stage, point = position(e)) {
  return input({
    type: "pointer",
    id: BigInt(corePointerId(e)),
    phase: ["move", "down", "move", "up", "cancel"][stage],
    kind: e.pointerType || "mouse",
    button:
      e.pointerType === "pen" || e.button === 0 || e.button === 5
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
  if (e.target instanceof Element && e.target.closest("dialog[open]:not(#settings, #shortcut-capture, #shortcut-editor)")) return;
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
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && workspaceGesture) { endWorkspaceGesture(null, true); e.preventDefault(); return; }
  if(documents?.key(e))return;
  keyInput(e, true);
});
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
    [...node.querySelectorAll(".dock-tab")].flatMap(tab => {
      const b = tab.getBoundingClientRect(), clip = tab.parentElement.getBoundingClientRect();
      const x = Math.max(b.x, clip.x), y = Math.max(b.y, clip.y);
      const width = Math.min(b.right, clip.right) - x, height = Math.min(b.bottom, clip.bottom) - y;
      return width > 0 && height > 0 ? [{ group, index: Number(tab.dataset.index),
        bounds: { x, y, width, height } }] : [];
    }),
  ).concat(workspaceChrome?.tabHits() ?? []);
}
function dropHint(e, item) {
  try {
    return app.drop_hint({
      viewport: workspaceViewport,
      position: [e.clientX, e.clientY],
      tabs: tabHits(),
      item,
      expansion: customization.placement(),
    });
  } catch {
    return null;
  } // Invalid/foreign payloads have no accepted core target.
}
function showDropHint(hint) {
  dropIndicator.hidden = !hint;
  if (hint) {
    place(dropIndicator, hint.bounds);
    dropIndicator.dataset.kind = hint.target.kind;
    dropIndicator.classList.toggle("drop-body", hint.target.kind === "tab" && hint.bounds.width > 3 && hint.bounds.height > 3);
  }
}
function dropItem(item, hint) {
  if (hint && item.kind === "tile")
    dispatch({ type: "move_tile", panel: item.panel, tile: item.tile, target: hint.target });
}
try {
  // Compile once and share the immutable module with workspace storage. Its
  // independent instance keeps validation off the UI thread without fetching
  // and compiling the whole application a second time.
  performance.mark("capy.startup.module");
  setWorkspaceWake(() => workspaceManager?.wake());
  const [wasmModule] = await Promise.all([modulePromise, loadIcons()]);
  workspaceStore.initialize(wasmModule);
  await init({module_or_path: wasmModule});
  performance.mark("capy.startup.wasm");
  // Let the browser start the worker while the main thread builds controls.
  await new Promise(resolve => setTimeout(resolve, 0));
  const fileWorker = createRasterWorker(),documentStorage=createDocumentStorage();
  const rasterWorker = request=>request.operation.startsWith('tab-')?documentStorage(request):fileWorker(request);
  configure_raster_worker(rasterWorker);
  canvas.width = 800;
  canvas.height = 600;
  app = WebApp.create(canvas);
  app.prediction_availability(typeof globalThis.PointerEvent?.prototype.getPredictedEvents === "function");
  let restoreError, workspaceRestoreError;
  try {
    const saved = localStorage.getItem(settingsKey);
    if (saved) app.dispatch({ type: "restore_settings", settings: JSON.parse(saved) });
  } catch (error) { restoreError = `Cannot restore preferences: ${error}`; }
  try {
    const saved = localStorage.getItem(workspaceKey);
    if(saved) { app.dispatch({type:"restore_workspace", workspace:JSON.parse(saved)}); savedWorkspace=saved; }
  } catch(error) { restoreError = workspaceRestoreError = `Cannot restore workspace: ${error}`; }
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
  state = app.state_update();
  catalog = app.catalog();
  performance.mark("capy.startup.model");
  document.documentElement.style.setProperty("--ui-text-size", `${catalog.text_size_pt}pt`);
  document.title = `${catalog.app_name} — drawing workspace`;
  refreshPreferences = createPreferences({ app, element, button, icon, numberField, panelFrame, dispatch, view: () => app.preferences_cached() });
  panelNames = Object.fromEntries(catalog.panels.map((p) => [p.id, p.label]));
  // Issue the first storage request before constructing panel controls. Replies
  // run in later tasks, after this synchronous UI construction is complete.
  workspaceManager = createWorkspaceManager({ app, store: workspaceStore, applyChange, element, button, icon, message, dispatch, hasLegacy: !!savedWorkspace || !!workspaceRestoreError, legacyError: workspaceRestoreError });
  selectionUi = createSelectionUi({app,state:()=>state,element,button,icon,numberField,dispatch});
  editor = createEditorPanels({selectionUi,app,state:()=>state,workspace,canvas,element,button,icon,numberField,dispatch,asset,wake,applyChange,contentChanged:panelContentChanged});
  palettes = createPalettes({ app, state: () => state, workspace, element, button, icon, panelFrame, applyChange, rasterWorker,
    dismissContext: () => customization?.dismissContext(), contentChanged: panelContentChanged });
  buildHeader();
  buildPanels();
  customization = createCustomization({ app, catalog, state: () => state, workspace, panels, groups,
    element, button, icon, numberField, panelFrame,
    dispatch, draggable, grip, place, updateZen, editor });
  workspaceChrome = createWorkspaceChrome({app,state:()=>state,workspace,element,button,icon,place,dispatch,customization,editor,panelFrame,panels,draggable,grip,contentPanel,tabLabel,automaticTabs,releaseTabs});
  glass = createGlass({app,canvas,workspace,connections:()=>workspaceChrome.connections(),enabled:()=>state.palette?.glass.transparency!=="off",wake});
  documents = createDocuments({app,state:()=>state,canvas,dispatch,applyChange,wake,element,button,icon,numberField,message,gpuOperation,rasterWorker,resumeCanvas:resumeDocumentCanvas});
  documents.mountProof(panels.get("proof"));
  header = createHeader({app,state:()=>state,workspace,element,button,icon,place,dispatch,customization,systemStatus,updateZen,documents});
  const capy = iconButton("zen_mode");
  capy.id = "zen-capy"; capy.hidden = true;
  customization.target(capy, {kind:"zen_mode"});
  workspace.append(capy);
  performance.mark("capy.startup.controls");
  update(255);
  systemStatus.sync();
  $("status").textContent = "";
  if (restoreError) message(restoreError);
  new ResizeObserver(() => {
    workspaceViewport = [workspace.clientWidth, workspace.clientHeight];
    arrange();
  }).observe(workspace);
  // Test harness accesses the actual Wasm instance and native widgets.
  window.layerApp = { app, dispatch, state: () => app.state(), wake, canvas, loadFilters, startupTimes, documents, restartGpu };
  performance.mark("capy.startup.ui");
  // Present the controls and let storage replies run before GPU setup starts.
  await new Promise(resolve => requestAnimationFrame(() => setTimeout(resolve, 0)));
  // Adopt the saved UI before competing with initial GPU allocation. A storage
  // failure must still allow canvas startup and the workspace recovery UI.
  await Promise.race([workspaceManager.ready, new Promise(resolve => setTimeout(resolve, 1000))]);
  performance.mark("capy.startup.gpu");
  await startGpu();
  if (window.launchQueue?.setConsumer) {
    let launches=Promise.resolve();
    window.launchQueue.setConsumer(params=>{
      const files=params.files??[];
      launches=launches.then(async()=>{
        if(!files.length)return;
        const deadline=performance.now()+240000;
        while(documents.busy()||!app.document_park_ready()||document.querySelector('dialog[open]')) {
          if(performance.now()>deadline)throw Error('Finish the current operation, then open the files again.');
          await new Promise(resolve=>setTimeout(resolve,50));
        }
        const selected=[];for(const handle of files)selected.push({file:await handle.getFile(),handle});
        await documents.openFiles(selected);
      }).catch(error=>message(String(error)));
    });
  }
} catch (error) {
  $("gpu-notice").replaceChildren(element("h1", "", "Capy Canvas could not load"),
    element("p", "", "Reload the page. If the problem continues, check that the complete app package is being served."), element("pre", "", String(error)));
  $("status").textContent = "";
  console.error(error);
}

function stopGpu(error) {
  // A retired device may finish compilation late, or never settle its Promise.
  // Neither case may hold the new renderer’s compilation lane or stop it.
  compilerEpoch++;compilerScheduled=false;
  gpuReady=false;pending.length=0;
  applyChange(app.suspend_gpu());
  if(startupNotice)startupNotice.hidden=true;
  const notice=$("gpu-notice");notice.hidden=false;
  notice.replaceChildren(element("p","",String(error)),button("Restart Canvas",()=>restartGpu()));
  document.body.dataset.gpu="unavailable";
}
setInterval(()=>{if(gpuReady){const error=app.gpu_failure();if(error)stopGpu(error);}},1000);
async function restartGpu() {
  if(gpuReady)stopGpu("Restarting canvas…");
  compilerFailed=false;firstCanvasRendered=false;
  for(const key of Object.keys(startupTimes))startupTimes[key]=null;
  await startGpu();
}

async function resumeDocumentCanvas() {
  compilerEpoch++;compilerScheduled=false;compilerFailed=false;
  gpuReady=app.gpu_ready();firstCanvasRendered=false;pending.length=0;
  for(const key of Object.keys(startupTimes))startupTimes[key]=null;
  if(!gpuReady){
    try{gpuReady=app.resume_document_gpu();}
    catch(error){stopGpu(error);return;}
  }
  if(!gpuReady)await startGpu();
  else {document.body.dataset.gpu='ready';$('gpu-notice').hidden=true;wake();}
  // Renderer replacement refreshes shared command availability. Publish that
  // change after attachment so retained controls do not keep their parked state.
  if(gpuReady){update(255);wake();}
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
    // A catalog refresh cannot change the document. Explicit package imports
    // still use the migrating path; making startup use it locks workspace
    // adoption and consumes all input until the entire catalog has compiled.
    loadFilters(asset("filters/manifest.json"), "merge", name=>asset(`filters/${name}`), true)
      .catch(error=>console.warn("Using bundled filters:",error))
      .finally(() => { app.startup_catalog_submitted(); wake(); });
  } catch (error) {
    document.body.dataset.gpu = "unavailable";
    showGpuNotice({ container: notice, error, element, button });
    console.warn("GPU canvas unavailable:", error?.message ?? error);
  } finally {
    gpuStarting = false;
  }
}

async function createGpu() {
  return gpuOperation(() => WebGpu.create(canvas, app.document_color()));
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

async function loadFilters(url, mode="add", moduleUrl, libraryOnly=false) {
  const change=await fetchFilterPackage(app,new URL(url,location.href),mode,moduleUrl,libraryOnly);
  update(change.regions);
  if(change.canvas_wake)wake();
  return app.state().filter_load.request_id;
}
