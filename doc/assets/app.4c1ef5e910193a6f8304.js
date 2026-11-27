import {hasModalDialog,watchModalDialogs} from './dialog-host.3c011c1583a283bef6c1.js';
import { addScrollbar } from "./scrollbars.4afff20abf66f8e418f6.js";
import { observeButtonFeedback } from "./button-feedback.562c21ab56f615252e23.js";
import { edgeContactClass, edgeResetClass } from "./edge-reach.cbd7cbe3154942044e16.js";
import { brushSizeGrid } from "./brush-sizes.964142ec1d0ad9621f25.js";
import init, { WebApp, WebGpu, configure_raster_worker, configure_store_transport, configure_gpu_diagnostics } from "./pkg/layer_web.129fca5b279c892174f5.js";
import {createStoreWorker} from './store-worker-client.8c2d4afc543b9c130670.js';
import { createRasterWorker } from "./raster-worker-client.03349c75aef1d060aea7.js";
import { createPaintPairIcon } from './color-controls.5cc15575c104d8dc246d.js';
import { chooseColor, configureColorEditor, refreshColorEditors } from './color-editor.c3a3c1edbcd276c7da9c.js';
import { refreshTextureDialogs } from './paper-picker.4ef54b96e51e1b7a93ff.js';
import { workspaceStore, modulePromise, setWorkspaceWake } from "./workspace-preload.1bc8cdbf01ef50e3ed9d.js";
import { createWorkspaceManager } from "./workspace-manager.5ce79398272fdddb7797.js";
import { createPreferences } from "./preferences.228df1f442d8754bb9c5.js";
import {createPenResponse} from "./pen-response.9fd1811c99d99a9faba8.js";
import {observePenInput,paintToolKind,browserDeviceClass} from "./pen-input.6727f06936ccf7929a1b.js";
import { createCommandBar } from "./command-bar.fe5888a10703a75f3fce.js";
import { createLaunchCover, showGpuNotice } from "./gpu.76fa32eba6de427273fc.js";
import { createGpuDiagnostics, gpuErrorText, gpuReportDetails, suspendGpuForReport } from './gpu-diagnostics.c6618d663b65579d2167.js';
import { createCustomization } from "./customization.286ab28d8fa6f3d1c75b.js";
import {createDropdown} from './dropdown.dcd369e2e4f58b9dec8a.js';
import { createCanvasBar } from "./canvas-bar.cff74a713a4b8b021091.js";
import { createNotice } from "./notice.829706e3ecaf42ac9252.js";
import { createZoomReadout } from "./zoom-readout.7d55fb18cee723a17619.js";
import { createScreenStatus } from "./screen-status.e271e507041603c4491c.js";
import { screenInfo } from "./new-drawing.8007da7f910c2fd58fa4.js";
import { createEditorPanels } from "./editor-panels.c7d3b8b8ec7ac7558480.js";
import { createWorkspaceChrome, tabHover, releaseTabSurfaces, prepareTabPreview, orderPanelTabs } from "./workspace-chrome.7306230de5432bc64f24.js";
import { createGlass } from "./glass.2253450f1143c63eb9b4.js";
import { createPanelVectors } from "./panel-vectors.4dc3e29b0251ebf6bb78.js";
import { createBubbles } from "./bubbles.32e93c750cec3bc5ba32.js";
import { createDocuments } from "./documents.5a1e7c1d09be77dbd461.js";
import { createSystemStatus } from "./system-status.0b65cd2ebafa25dc9cf0.js";
import { createHeader } from "./header.aaf0e1c060bb8cb3f2b9.js";
import { createPhone } from "./phone.a793769d4e1b2216b448.js";
import { createNumberField } from "./numeric.cc99d15499d5b92dbeb4.js";
import { captureTextComposition, composingKey, compositionBusy, latinKey } from "./text-input.821066b4c3204772eddd.js";
import { createSelectionUi } from "./selection-masks.bbe75cf6e3eddb6895c1.js";
import { createPreviewPanel } from "./preview-panel.b59eafba7b8635118dc3.js";
import { createFillGesture } from "./fill-gesture.a3a5518c9d41494ff5b2.js";
import { createCanvasSizeUi } from "./canvas-size.b1930af5e6670acba064.js";
import { createImageSizeUi } from "./image-size.db6802c4147570a44389.js";
import { createLayerPanel } from "./layers.12ebc0e07b30ef30cfed.js";
import { createPalettes } from "./palettes.feafc4155e5b9bd7095e.js";
import { createEffectPanels } from "./effects.fd17c07f8f30b70f05fd.js";
import { installTooltips } from "./tooltips.444cfc41f0eee651ee98.js";
import { installPenScrolling, browserDragThreshold } from "./pen-scroll.eca71eff48a2c188fc25.js";
import { bindCopy, liveCopy, refreshBindings, refreshCopy } from "./localization.feed520889eb8a39d851.js";

// The static packager fills this map with fingerprinted resource filenames.
const assetPaths = {"brush-previews/1-dark.webp":"brush-previews/1-dark.1fcae18dae4dff5848f7.webp","brush-previews/1-light.webp":"brush-previews/1-light.3dd6f481c3f9c558eaf1.webp","brush-previews/10-dark.webp":"brush-previews/10-dark.3813f1657d89fe6b067c.webp","brush-previews/10-light.webp":"brush-previews/10-light.9e0eb53b0373e9640c76.webp","brush-previews/11-dark.webp":"brush-previews/11-dark.982569308a7233abb614.webp","brush-previews/11-light.webp":"brush-previews/11-light.efad07814c1e1864d8df.webp","brush-previews/12-dark.webp":"brush-previews/12-dark.e17043a8228ab3cb3f72.webp","brush-previews/12-light.webp":"brush-previews/12-light.fe3079557ecfa4e84ac3.webp","brush-previews/13-dark.webp":"brush-previews/13-dark.ca27da89f7d79ba04347.webp","brush-previews/13-light.webp":"brush-previews/13-light.ae422c830b26253e9b13.webp","brush-previews/14-dark.webp":"brush-previews/14-dark.be3f89b2f9d396e2c040.webp","brush-previews/14-light.webp":"brush-previews/14-light.de9d21275235e3b9380e.webp","brush-previews/15-dark.webp":"brush-previews/15-dark.b7f080ead2ec14d26e61.webp","brush-previews/15-light.webp":"brush-previews/15-light.250ea0f658d5e33ab46d.webp","brush-previews/16-dark.webp":"brush-previews/16-dark.292e5d09595d496bab50.webp","brush-previews/16-light.webp":"brush-previews/16-light.97deca463336c11779b9.webp","brush-previews/17-dark.webp":"brush-previews/17-dark.5b6c873cb21156a51b1c.webp","brush-previews/17-light.webp":"brush-previews/17-light.e39abff213b45f235236.webp","brush-previews/18-dark.webp":"brush-previews/18-dark.5d561100702c337632d5.webp","brush-previews/18-light.webp":"brush-previews/18-light.efb7529b860dafc566ac.webp","brush-previews/19-dark.webp":"brush-previews/19-dark.c957cd4894df1414554a.webp","brush-previews/19-light.webp":"brush-previews/19-light.45f9e6e474009b31e4b6.webp","brush-previews/2-dark.webp":"brush-previews/2-dark.b2710f9ee6ab324b0dd7.webp","brush-previews/2-light.webp":"brush-previews/2-light.37c99ba078b2b2e48939.webp","brush-previews/20-dark.webp":"brush-previews/20-dark.afeda0a9b1a358cac6ee.webp","brush-previews/20-light.webp":"brush-previews/20-light.cdeee69451f1d3f8c94e.webp","brush-previews/21-dark.webp":"brush-previews/21-dark.36d139cace2d6f18965c.webp","brush-previews/21-light.webp":"brush-previews/21-light.ef5b2e53f8ac6e4236be.webp","brush-previews/22-dark.webp":"brush-previews/22-dark.c10d44c90bc7c97f48f3.webp","brush-previews/22-light.webp":"brush-previews/22-light.1f6e31cd3568322e525d.webp","brush-previews/23-dark.webp":"brush-previews/23-dark.a8617aecf8cc86bfd3dc.webp","brush-previews/23-light.webp":"brush-previews/23-light.0b5563b19bfae8349293.webp","brush-previews/24-dark.webp":"brush-previews/24-dark.1ffc067dccdc861ca21f.webp","brush-previews/24-light.webp":"brush-previews/24-light.138ac72c41eefd8ee23d.webp","brush-previews/25-dark.webp":"brush-previews/25-dark.1095cd06b09c0c0b4c8b.webp","brush-previews/25-light.webp":"brush-previews/25-light.992f6bf71aa33df7f6d3.webp","brush-previews/26-dark.webp":"brush-previews/26-dark.a77b0bbe9895287d7a26.webp","brush-previews/26-light.webp":"brush-previews/26-light.aec346a90d703092452e.webp","brush-previews/27-dark.webp":"brush-previews/27-dark.23768a0b0b0024e9f5bf.webp","brush-previews/27-light.webp":"brush-previews/27-light.7a578d3601c7bd111dd8.webp","brush-previews/28-dark.webp":"brush-previews/28-dark.7f4145bfedb16d67b6f8.webp","brush-previews/28-light.webp":"brush-previews/28-light.54321d399f0d23bfecc4.webp","brush-previews/29-dark.webp":"brush-previews/29-dark.dcd3bd402ed0ffd053d2.webp","brush-previews/29-light.webp":"brush-previews/29-light.a52f1c5766a8c2911ce5.webp","brush-previews/3-dark.webp":"brush-previews/3-dark.9f853d56d92276a3414f.webp","brush-previews/3-light.webp":"brush-previews/3-light.1b2725f144c6b79e844c.webp","brush-previews/30-dark.webp":"brush-previews/30-dark.c3757f4457b78d7c413e.webp","brush-previews/30-light.webp":"brush-previews/30-light.ddbca265955dbe319dd1.webp","brush-previews/31-dark.webp":"brush-previews/31-dark.5af59ed5ccce6f17a538.webp","brush-previews/31-light.webp":"brush-previews/31-light.f47bcc0799002b5f43a5.webp","brush-previews/32-dark.webp":"brush-previews/32-dark.d0fd63f3c2fbc8d0bbe1.webp","brush-previews/32-light.webp":"brush-previews/32-light.7a017f4786f1e00715b0.webp","brush-previews/33-dark.webp":"brush-previews/33-dark.e3a4d49c50d9c65aed58.webp","brush-previews/33-light.webp":"brush-previews/33-light.b38da28c594947cc3856.webp","brush-previews/34-dark.webp":"brush-previews/34-dark.a115ff8da242d4589ebc.webp","brush-previews/34-light.webp":"brush-previews/34-light.4136105500ce6ab0cb06.webp","brush-previews/35-dark.webp":"brush-previews/35-dark.4cc17ebc111085554b94.webp","brush-previews/35-light.webp":"brush-previews/35-light.b89282a6fc3d146769ae.webp","brush-previews/36-dark.webp":"brush-previews/36-dark.0695b1d0c524b50c853f.webp","brush-previews/36-light.webp":"brush-previews/36-light.d439fba48de16d38ef3a.webp","brush-previews/37-dark.webp":"brush-previews/37-dark.7ad3613cedbd479df7d8.webp","brush-previews/37-light.webp":"brush-previews/37-light.d460ae4b89ed97eec46a.webp","brush-previews/38-dark.webp":"brush-previews/38-dark.b9cd538672f367aee12b.webp","brush-previews/38-light.webp":"brush-previews/38-light.5b731cbea6c6d65cc50c.webp","brush-previews/39-dark.webp":"brush-previews/39-dark.2d88cd33ef2adbaf711a.webp","brush-previews/39-light.webp":"brush-previews/39-light.e3e74d07e87c4b1d7d9a.webp","brush-previews/4-dark.webp":"brush-previews/4-dark.6824232bbbbd4aa2fc6a.webp","brush-previews/4-light.webp":"brush-previews/4-light.675fcb5ececd6ca668f2.webp","brush-previews/40-dark.webp":"brush-previews/40-dark.e4dcaebc90b2046c3265.webp","brush-previews/40-light.webp":"brush-previews/40-light.139f394bb4ca6f4b4d79.webp","brush-previews/41-dark.webp":"brush-previews/41-dark.9cd7366ecdf72b82dbd8.webp","brush-previews/41-light.webp":"brush-previews/41-light.f137f996e1ee43a472e9.webp","brush-previews/42-dark.webp":"brush-previews/42-dark.df77a0737bcff02ccd87.webp","brush-previews/42-light.webp":"brush-previews/42-light.c799445e789a5657231a.webp","brush-previews/43-dark.webp":"brush-previews/43-dark.68cb17056e275fa07a21.webp","brush-previews/43-light.webp":"brush-previews/43-light.ced68a4d20c0d427465d.webp","brush-previews/44-dark.webp":"brush-previews/44-dark.b4637a03ecf2d0c9e8cf.webp","brush-previews/44-light.webp":"brush-previews/44-light.d21da68dfedab8eb2570.webp","brush-previews/45-dark.webp":"brush-previews/45-dark.a9d8c1aa09d001e31402.webp","brush-previews/45-light.webp":"brush-previews/45-light.83725fa25184ec938799.webp","brush-previews/46-dark.webp":"brush-previews/46-dark.3e992c2925c9dc16cc50.webp","brush-previews/46-light.webp":"brush-previews/46-light.287a7470b52be5a46f3e.webp","brush-previews/47-dark.webp":"brush-previews/47-dark.1a5a521453d5345555af.webp","brush-previews/47-light.webp":"brush-previews/47-light.33b4c01b2b19d16f881e.webp","brush-previews/48-dark.webp":"brush-previews/48-dark.dff2c49bb11ef6ebf401.webp","brush-previews/48-light.webp":"brush-previews/48-light.b97e4dcbb17362b58010.webp","brush-previews/49-dark.webp":"brush-previews/49-dark.41fbe9a1d33cf4e67294.webp","brush-previews/49-light.webp":"brush-previews/49-light.b75820819a2524d0bafe.webp","brush-previews/5-dark.webp":"brush-previews/5-dark.810885aeedf999e0a1b5.webp","brush-previews/5-light.webp":"brush-previews/5-light.d1ffdd51128fc17cec53.webp","brush-previews/50-dark.webp":"brush-previews/50-dark.66db7eb2e0f3ccb49d92.webp","brush-previews/50-light.webp":"brush-previews/50-light.9dc5cf32cd1771dd3c8f.webp","brush-previews/51-dark.webp":"brush-previews/51-dark.274c796368dec9848383.webp","brush-previews/51-light.webp":"brush-previews/51-light.2d78c7b107a0c8aa4cd6.webp","brush-previews/52-dark.webp":"brush-previews/52-dark.b184251383a625032fc9.webp","brush-previews/52-light.webp":"brush-previews/52-light.3fe35a2bb203c86b656d.webp","brush-previews/53-dark.webp":"brush-previews/53-dark.817177c8f7e0670392c3.webp","brush-previews/53-light.webp":"brush-previews/53-light.4cba96994bc4c633d2ec.webp","brush-previews/55-dark.webp":"brush-previews/55-dark.f28c02ec01c96ae3c2b4.webp","brush-previews/55-light.webp":"brush-previews/55-light.ffc44601a5b48721f7d3.webp","brush-previews/56-dark.webp":"brush-previews/56-dark.1abb80d054beb9beb463.webp","brush-previews/56-light.webp":"brush-previews/56-light.c2697712002621abda8d.webp","brush-previews/57-dark.webp":"brush-previews/57-dark.d200363ef397d2d5e76b.webp","brush-previews/57-light.webp":"brush-previews/57-light.670b52e9a960847e197e.webp","brush-previews/58-dark.webp":"brush-previews/58-dark.9f75ba3ad76f656a886c.webp","brush-previews/58-light.webp":"brush-previews/58-light.9094b1335effdafbb463.webp","brush-previews/59-dark.webp":"brush-previews/59-dark.7de08c3ea060414184f9.webp","brush-previews/59-light.webp":"brush-previews/59-light.665a8b9e06460788b9b1.webp","brush-previews/6-dark.webp":"brush-previews/6-dark.b663bf8028715b27dab8.webp","brush-previews/6-light.webp":"brush-previews/6-light.76d789dfacbbb26392cd.webp","brush-previews/60-dark.webp":"brush-previews/60-dark.82b4d12fd49a10cc7cd3.webp","brush-previews/60-light.webp":"brush-previews/60-light.91499da6d698851cfb84.webp","brush-previews/61-dark.webp":"brush-previews/61-dark.605a483f4f0fdbba57ee.webp","brush-previews/61-light.webp":"brush-previews/61-light.4548f13f65cb5e5af0c8.webp","brush-previews/62-dark.webp":"brush-previews/62-dark.8ef69a535731ff13a41a.webp","brush-previews/62-light.webp":"brush-previews/62-light.d80990236da401684483.webp","brush-previews/63-dark.webp":"brush-previews/63-dark.8978f8970a8411aad9d3.webp","brush-previews/63-light.webp":"brush-previews/63-light.473c751d462fa5d92668.webp","brush-previews/64-dark.webp":"brush-previews/64-dark.76e9c330c49f1bebd509.webp","brush-previews/64-light.webp":"brush-previews/64-light.97fdd17de958ff5569c2.webp","brush-previews/65-dark.webp":"brush-previews/65-dark.1b057225ca5701955aa0.webp","brush-previews/65-light.webp":"brush-previews/65-light.a660d533328db12ec6c2.webp","brush-previews/66-dark.webp":"brush-previews/66-dark.789e511e6657471fc0a7.webp","brush-previews/66-light.webp":"brush-previews/66-light.ee69b37d301cbbb758c8.webp","brush-previews/7-dark.webp":"brush-previews/7-dark.57068c36621839d5e834.webp","brush-previews/7-light.webp":"brush-previews/7-light.750e77d728637644851d.webp","brush-previews/8-dark.webp":"brush-previews/8-dark.f8e0ff258ccf2e04bc45.webp","brush-previews/8-light.webp":"brush-previews/8-light.87e9a4f5249d817ba220.webp","brush-previews/9-dark.webp":"brush-previews/9-dark.78537887b87922309544.webp","brush-previews/9-light.webp":"brush-previews/9-light.8a90e902b326cb0e2470.webp","filter-previews/black_white.webp":"filter-previews/black_white.a500f21ca22fda5ef9c3.webp","filter-previews/bloom.webp":"filter-previews/bloom.e3d73732d5e067e2f70f.webp","filter-previews/brightness_contrast.webp":"filter-previews/brightness_contrast.d2efe9988e30c2b01548.webp","filter-previews/brightness_to_opacity.webp":"filter-previews/brightness_to_opacity.c2c5acf54831c4806bce.webp","filter-previews/channel_mixer.webp":"filter-previews/channel_mixer.3a58ffa28b58368735ba.webp","filter-previews/chromatic_aberration.webp":"filter-previews/chromatic_aberration.2c035eb777768c51e062.webp","filter-previews/clarity.webp":"filter-previews/clarity.5f92e830ab489f78f462.webp","filter-previews/color_balance.webp":"filter-previews/color_balance.ce9cac27b991e184cef6.webp","filter-previews/color_lookup.webp":"filter-previews/color_lookup.abcc48657b6c92ad9441.webp","filter-previews/crosshatch.webp":"filter-previews/crosshatch.5d41b6ca644376bc2699.webp","filter-previews/crt.webp":"filter-previews/crt.c4ee2da0b5e8c0f8cb70.webp","filter-previews/crystallize.webp":"filter-previews/crystallize.1467bdc4f56e4bc8ceb3.webp","filter-previews/curves.webp":"filter-previews/curves.53043bd406f78c69d5c3.webp","filter-previews/dehaze.webp":"filter-previews/dehaze.090838ccffc76c2b3f10.webp","filter-previews/denoise.webp":"filter-previews/denoise.e8ef4d8e45ab5bdc8915.webp","filter-previews/desaturate.webp":"filter-previews/desaturate.b49fe2378a97881f03fa.webp","filter-previews/dither_spread.webp":"filter-previews/dither_spread.2e975675f58f45b6b663.webp","filter-previews/domain_warp.webp":"filter-previews/domain_warp.4ea63e5c2fdb81b5dd78.webp","filter-previews/edge_detect.webp":"filter-previews/edge_detect.99bfebac1988392775ea.webp","filter-previews/emboss.webp":"filter-previews/emboss.5c6099f36398d2d96373.webp","filter-previews/exposure.webp":"filter-previews/exposure.d23147a5bf978fb01df4.webp","filter-previews/film_grain.webp":"filter-previews/film_grain.e6bca87a373858632908.webp","filter-previews/gaussian_blur.webp":"filter-previews/gaussian_blur.8a1b102c8831892f7037.webp","filter-previews/glass.webp":"filter-previews/glass.1c2e1baf3251cd66e78e.webp","filter-previews/gradient_fill.webp":"filter-previews/gradient_fill.21fda69c4269c013423d.webp","filter-previews/gradient_map.webp":"filter-previews/gradient_map.11a750f2269199d935c6.webp","filter-previews/halftone.webp":"filter-previews/halftone.f24f6acd3955449b928f.webp","filter-previews/heat_haze.webp":"filter-previews/heat_haze.3f1d3ebcaa03b67cf9e3.webp","filter-previews/high_pass.webp":"filter-previews/high_pass.1020a34de994e227e15f.webp","filter-previews/hue_saturation.webp":"filter-previews/hue_saturation.0c46b53a62af05665858.webp","filter-previews/invert.webp":"filter-previews/invert.421122744329ab384bc3.webp","filter-previews/iridescence.webp":"filter-previews/iridescence.cb2a85bb73d53a9f0d38.webp","filter-previews/kaleidoscope.webp":"filter-previews/kaleidoscope.66ad217f3257b1b3b81f.webp","filter-previews/levels.webp":"filter-previews/levels.b16a065fdb8086976d44.webp","filter-previews/motion_blur.webp":"filter-previews/motion_blur.364fee0d2caac0f5278c.webp","filter-previews/painterly.webp":"filter-previews/painterly.7fa822ab0733f837b518.webp","filter-previews/paper.webp":"filter-previews/paper.24e2ead8bd164e16a9a3.webp","filter-previews/pencil.webp":"filter-previews/pencil.5b0fb8bfd4be2a1addd7.webp","filter-previews/photo_filter.webp":"filter-previews/photo_filter.d5a66f4ddc28804b7c99.webp","filter-previews/pixel_mosaic.webp":"filter-previews/pixel_mosaic.90fc5cf6f0dc8f43349d.webp","filter-previews/posterize.webp":"filter-previews/posterize.7401e3c442d73de4756a.webp","filter-previews/rainy_glass.webp":"filter-previews/rainy_glass.94348165f54a6c2361cd.webp","filter-previews/ripple.webp":"filter-previews/ripple.f535efd20e8d91e1fff5.webp","filter-previews/scatter.webp":"filter-previews/scatter.66f7d03f644f00b7a1e4.webp","filter-previews/selective_color.webp":"filter-previews/selective_color.f944cd1572b95a019496.webp","filter-previews/shadows_highlights.webp":"filter-previews/shadows_highlights.2aa6efe71bfa86b3c007.webp","filter-previews/soft_focus.webp":"filter-previews/soft_focus.219c15f715da4343f1b6.webp","filter-previews/solarize.webp":"filter-previews/solarize.5baf1963b560c050d3bf.webp","filter-previews/solid_color.webp":"filter-previews/solid_color.69b7bf0bf1448667dcd3.webp","filter-previews/split_tone.webp":"filter-previews/split_tone.907e738ef4b9fbd78ceb.webp","filter-previews/swirl.webp":"filter-previews/swirl.9dad3d105061612ab5f2.webp","filter-previews/threshold.webp":"filter-previews/threshold.12d932455a1e4d73e951.webp","filter-previews/unsharp_mask.webp":"filter-previews/unsharp_mask.fb34d0b46cd837c73a96.webp","filter-previews/vhs.webp":"filter-previews/vhs.2be3e74c080ebc4e5c47.webp","filter-previews/vibrance.webp":"filter-previews/vibrance.0fa4dff4cb3bd78c2641.webp","filter-previews/vignette.webp":"filter-previews/vignette.3896fdce9b63d66a9d30.webp","filter-previews/white_balance.webp":"filter-previews/white_balance.5368ec141380f1bffa36.webp","icon-180.png":"icon-180.7992eea20c5a9fbdaba3.png","icon-192.png":"icon-192.94264b880c7f42aa4610.png","icon-32.png":"icon-32.3a5271c440d92a7f42e7.png","icon-512.png":"icon-512.0f7dbabae7b0b5cb3a7e.png","icons/layer-actual-pixels-symbolic.svg":"icons/layer-actual-pixels-symbolic.bf94b99f8c5f873fe704.svg","icons/layer-add-filter-symbolic.svg":"icons/layer-add-filter-symbolic.d5d01d4cfb8df42a94f0.svg","icons/layer-add-layer-symbolic.svg":"icons/layer-add-layer-symbolic.9285ee04bdb4cbd833a1.svg","icons/layer-add-vector-layer-symbolic.svg":"icons/layer-add-vector-layer-symbolic.570635ad28356c191a19.svg","icons/layer-adjustments-symbolic.svg":"icons/layer-adjustments-symbolic.6a81fc4ab3bb948a4c38.svg","icons/layer-airbrush-symbolic.svg":"icons/layer-airbrush-symbolic.91ad992953309f445734.svg","icons/layer-alpha-lock-symbolic.svg":"icons/layer-alpha-lock-symbolic.ed3a94b7158e488752fd.svg","icons/layer-angle-symbolic.svg":"icons/layer-angle-symbolic.b96d712d4207295442ff.svg","icons/layer-animation-symbolic.svg":"icons/layer-animation-symbolic.e365d19fd8c8edd71af2.svg","icons/layer-appearance-symbolic.svg":"icons/layer-appearance-symbolic.effffbd0832cde145d56.svg","icons/layer-aspect-ratio-symbolic.svg":"icons/layer-aspect-ratio-symbolic.3aa27596fb13966ce381.svg","icons/layer-auto-select-symbolic.svg":"icons/layer-auto-select-symbolic.332992e18e98a96ae918.svg","icons/layer-average-pickup-symbolic.svg":"icons/layer-average-pickup-symbolic.a00b60712528fe0c548d.svg","icons/layer-back-symbolic.svg":"icons/layer-back-symbolic.13316926b7d26a1fc2b6.svg","icons/layer-black_white-symbolic.svg":"icons/layer-black_white-symbolic.bfb700412b6783b82213.svg","icons/layer-bleed-distance-symbolic.svg":"icons/layer-bleed-distance-symbolic.a8f9bcbef32b7243b846.svg","icons/layer-blend-lightness-symbolic.svg":"icons/layer-blend-lightness-symbolic.519698bb972c99992e12.svg","icons/layer-blend-symbolic.svg":"icons/layer-blend-symbolic.d53b1afc875cdf0076fb.svg","icons/layer-bloom-symbolic.svg":"icons/layer-bloom-symbolic.082aaf62b867d530dfdb.svg","icons/layer-blur-symbolic.svg":"icons/layer-blur-symbolic.6eb2a615920c7268bdfd.svg","icons/layer-brightness_contrast-symbolic.svg":"icons/layer-brightness_contrast-symbolic.da27d13927b58c4d4c3c.svg","icons/layer-brightness-to-opacity-symbolic.svg":"icons/layer-brightness-to-opacity-symbolic.58b394af09c34008a670.svg","icons/layer-bring-to-front-symbolic.svg":"icons/layer-bring-to-front-symbolic.c795edf20b2c243f6142.svg","icons/layer-bristle-scale-symbolic.svg":"icons/layer-bristle-scale-symbolic.9b066376b5331f04bd02.svg","icons/layer-brush-size-symbolic.svg":"icons/layer-brush-size-symbolic.0f230af65638921029ea.svg","icons/layer-brush-spacing-symbolic.svg":"icons/layer-brush-spacing-symbolic.6a34356c1f233f0a69fa.svg","icons/layer-brush-symbolic.svg":"icons/layer-brush-symbolic.ef96cdc37531f8bf2df2.svg","icons/layer-canvas-size-symbolic.svg":"icons/layer-canvas-size-symbolic.1862da5308af4ccaf41e.svg","icons/layer-channel_mixer-symbolic.svg":"icons/layer-channel_mixer-symbolic.d6e203b2b7b23aabe709.svg","icons/layer-check-symbolic.svg":"icons/layer-check-symbolic.ee42a3e6be05b2a036e0.svg","icons/layer-chevron-down-symbolic.svg":"icons/layer-chevron-down-symbolic.68da7053e2f57c63a593.svg","icons/layer-chromatic-aberration-symbolic.svg":"icons/layer-chromatic-aberration-symbolic.2805c454c81c8d9b8043.svg","icons/layer-clarity-symbolic.svg":"icons/layer-clarity-symbolic.fa44924d34e79758d5d2.svg","icons/layer-clear-outside-symbolic.svg":"icons/layer-clear-outside-symbolic.8b7e62df316b32914bd9.svg","icons/layer-clear-selection-symbolic.svg":"icons/layer-clear-selection-symbolic.1b57a4986583f18235d1.svg","icons/layer-clear-symbolic.svg":"icons/layer-clear-symbolic.623997b36b5648036421.svg","icons/layer-clip-symbolic.svg":"icons/layer-clip-symbolic.4ba4337176ed940da0f5.svg","icons/layer-clone-symbolic.svg":"icons/layer-clone-symbolic.60255eef55fbe11f7a60.svg","icons/layer-close-document-symbolic.svg":"icons/layer-close-document-symbolic.c5f4a987705b56027b0d.svg","icons/layer-close-gap-symbolic.svg":"icons/layer-close-gap-symbolic.762e5eed0ae8e33b556f.svg","icons/layer-close-path-symbolic.svg":"icons/layer-close-path-symbolic.5c472a1509f99a35c093.svg","icons/layer-close-symbolic.svg":"icons/layer-close-symbolic.30f582a44542b0021f17.svg","icons/layer-color_balance-symbolic.svg":"icons/layer-color_balance-symbolic.dfef11fb4553fef16570.svg","icons/layer-color_lookup-symbolic.svg":"icons/layer-color_lookup-symbolic.fd1b511da141bfa0c2fe.svg","icons/layer-color-circle-symbolic.svg":"icons/layer-color-circle-symbolic.a5a672c40f32e2fd92a8.svg","icons/layer-color-mix-classic-symbolic.svg":"icons/layer-color-mix-classic-symbolic.c6ea7ef772e659234124.svg","icons/layer-color-mix-linear-symbolic.svg":"icons/layer-color-mix-linear-symbolic.d12480b4163236eed49a.svg","icons/layer-color-mix-oklab-symbolic.svg":"icons/layer-color-mix-oklab-symbolic.bc5bb5428ef055103519.svg","icons/layer-color-picker-symbolic.svg":"icons/layer-color-picker-symbolic.1783d211f13839aef90d.svg","icons/layer-color-pickup-symbolic.svg":"icons/layer-color-pickup-symbolic.832524fce2428c1a5558.svg","icons/layer-color-select-symbolic.svg":"icons/layer-color-select-symbolic.6515da3dd9e775651b1e.svg","icons/layer-color-square-symbolic.svg":"icons/layer-color-square-symbolic.94ad3ef34848bb1f49e9.svg","icons/layer-color-swap-symbolic.svg":"icons/layer-color-swap-symbolic.0c3fc36cf32e1377d17e.svg","icons/layer-color-symbolic.svg":"icons/layer-color-symbolic.d57e12a7c6f7ac8f7046.svg","icons/layer-color-triangle-symbolic.svg":"icons/layer-color-triangle-symbolic.5e632d4bdb3f1efbdeb2.svg","icons/layer-colors-symbolic.svg":"icons/layer-colors-symbolic.5313ce28aaf5619e2a3f.svg","icons/layer-copy-merged-symbolic.svg":"icons/layer-copy-merged-symbolic.baecd6b7e9b7dc4bc23c.svg","icons/layer-copy-symbolic.svg":"icons/layer-copy-symbolic.3bfee32fdddf3d0a65f0.svg","icons/layer-copy-to-layer-symbolic.svg":"icons/layer-copy-to-layer-symbolic.6e189d2f753f64c2ff42.svg","icons/layer-crop-delete-symbolic.svg":"icons/layer-crop-delete-symbolic.651cc10a9280fd212a2c.svg","icons/layer-crop-guides-symbolic.svg":"icons/layer-crop-guides-symbolic.c8abd04ebbdb98b7dd49.svg","icons/layer-crop-symbolic.svg":"icons/layer-crop-symbolic.5fdd8ee68a1eebd4cd1a.svg","icons/layer-crosshatch-symbolic.svg":"icons/layer-crosshatch-symbolic.759064ee9b372a22d271.svg","icons/layer-crt-symbolic.svg":"icons/layer-crt-symbolic.11ad84534f7dbb53af4e.svg","icons/layer-crystallize-symbolic.svg":"icons/layer-crystallize-symbolic.e9c18b8055db2f065d4a.svg","icons/layer-cursor-brush-cross-symbolic.svg":"icons/layer-cursor-brush-cross-symbolic.e932b73a7dd77fd27b20.svg","icons/layer-cursor-brush-dot-symbolic.svg":"icons/layer-cursor-brush-dot-symbolic.f7846dc4f475f6b2a4c4.svg","icons/layer-cursor-brush-single-pixel-dot-symbolic.svg":"icons/layer-cursor-brush-single-pixel-dot-symbolic.dfb46e586962009a7821.svg","icons/layer-cursor-brush-symbolic.svg":"icons/layer-cursor-brush-symbolic.96c0c320dacaab52c886.svg","icons/layer-cursor-cross-symbolic.svg":"icons/layer-cursor-cross-symbolic.7ffa8c37e62cf6dde425.svg","icons/layer-cursor-dot-symbolic.svg":"icons/layer-cursor-dot-symbolic.b7637d4367e227ce4384.svg","icons/layer-cursor-none-symbolic.svg":"icons/layer-cursor-none-symbolic.b0b167dbd699d2b240fa.svg","icons/layer-cursor-sight-symbolic.svg":"icons/layer-cursor-sight-symbolic.e41423587e91751b8827.svg","icons/layer-cursor-single-pixel-dot-symbolic.svg":"icons/layer-cursor-single-pixel-dot-symbolic.58cab81040e64e06dd6f.svg","icons/layer-cursor-tool-brush-symbolic.svg":"icons/layer-cursor-tool-brush-symbolic.edcb8b20daa1fccd3a1c.svg","icons/layer-cursor-tool-symbolic.svg":"icons/layer-cursor-tool-symbolic.26aa7319d66ee0034428.svg","icons/layer-cursor-triangle-symbolic.svg":"icons/layer-cursor-triangle-symbolic.c475d4ba25f578d2aacf.svg","icons/layer-curves-symbolic.svg":"icons/layer-curves-symbolic.50e3408021b4d38b9f97.svg","icons/layer-cut-symbolic.svg":"icons/layer-cut-symbolic.985d2712bc8011ba4856.svg","icons/layer-cut-to-layer-symbolic.svg":"icons/layer-cut-to-layer-symbolic.cb8d8b88ef0dc3242b05.svg","icons/layer-decoration-symbolic.svg":"icons/layer-decoration-symbolic.43d6f1314f1ffb2a271e.svg","icons/layer-dehaze-symbolic.svg":"icons/layer-dehaze-symbolic.53089581e889237021d9.svg","icons/layer-delete-symbolic.svg":"icons/layer-delete-symbolic.a3fa02a0625da34c3343.svg","icons/layer-denoise-symbolic.svg":"icons/layer-denoise-symbolic.5648770158f62093c71b.svg","icons/layer-desaturate-symbolic.svg":"icons/layer-desaturate-symbolic.af8101ec154b184cd8f7.svg","icons/layer-deselect-symbolic.svg":"icons/layer-deselect-symbolic.92f8ddd43f739cac8515.svg","icons/layer-dilution-symbolic.svg":"icons/layer-dilution-symbolic.c38ed3d72746864c426b.svg","icons/layer-distort-symbolic.svg":"icons/layer-distort-symbolic.86e4186cd5cd814bb429.svg","icons/layer-dither-spread-symbolic.svg":"icons/layer-dither-spread-symbolic.37f12c32c486ac990d4c.svg","icons/layer-dodge-burn-symbolic.svg":"icons/layer-dodge-burn-symbolic.4639af7efdcd9e7ca482.svg","icons/layer-domain-warp-symbolic.svg":"icons/layer-domain-warp-symbolic.0bc35e1036be6115ee8f.svg","icons/layer-down-symbolic.svg":"icons/layer-down-symbolic.2077aefc6f508c80c30b.svg","icons/layer-drawing-tools-symbolic.svg":"icons/layer-drawing-tools-symbolic.b05231bd9196dcb61a05.svg","icons/layer-dry-bleed-symbolic.svg":"icons/layer-dry-bleed-symbolic.95b455955aeea90ec669.svg","icons/layer-edge-detect-symbolic.svg":"icons/layer-edge-detect-symbolic.24dd8b00b870e4266fc5.svg","icons/layer-edge-keeping-symbolic.svg":"icons/layer-edge-keeping-symbolic.d612c952efc571a79078.svg","icons/layer-edge-smooth-symbolic.svg":"icons/layer-edge-smooth-symbolic.9fe24000e634fc10b22f.svg","icons/layer-edge-strength-symbolic.svg":"icons/layer-edge-strength-symbolic.a0819ec087d8005dee41.svg","icons/layer-edge-width-symbolic.svg":"icons/layer-edge-width-symbolic.57f93413e0514a0cdfba.svg","icons/layer-edit-points-symbolic.svg":"icons/layer-edit-points-symbolic.536463709211ac677b37.svg","icons/layer-effect-link-symbolic.svg":"icons/layer-effect-link-symbolic.c2c69080fe36fd797a5c.svg","icons/layer-ellipse-both-symbolic.svg":"icons/layer-ellipse-both-symbolic.c04e2ab09aacaa99d565.svg","icons/layer-ellipse-fill-symbolic.svg":"icons/layer-ellipse-fill-symbolic.8f5ef9c39514868c0eed.svg","icons/layer-ellipse-select-symbolic.svg":"icons/layer-ellipse-select-symbolic.273bb5a9245e42774f77.svg","icons/layer-ellipse-symbolic.svg":"icons/layer-ellipse-symbolic.9eb9346888bfd11b5c13.svg","icons/layer-emboss-symbolic.svg":"icons/layer-emboss-symbolic.26d48eeec7184770505a.svg","icons/layer-erase-to-intersection-symbolic.svg":"icons/layer-erase-to-intersection-symbolic.1f6f3e267e61ffb5e18f.svg","icons/layer-erase-touched-part-symbolic.svg":"icons/layer-erase-touched-part-symbolic.ad04e14c6b639e0392a8.svg","icons/layer-erase-whole-path-symbolic.svg":"icons/layer-erase-whole-path-symbolic.2d776684e890fb93dcce.svg","icons/layer-eraser-symbolic.svg":"icons/layer-eraser-symbolic.21b340783fe1619f368d.svg","icons/layer-expand-symbolic.svg":"icons/layer-expand-symbolic.6bc033f424dd6156ce05.svg","icons/layer-export-document-symbolic.svg":"icons/layer-export-document-symbolic.b2d892ca422bf976c9af.svg","icons/layer-exposure-symbolic.svg":"icons/layer-exposure-symbolic.cac47e7f0798970a64b8.svg","icons/layer-eye-hidden-symbolic.svg":"icons/layer-eye-hidden-symbolic.2e56d9fe2fc0e50d4439.svg","icons/layer-eye-symbolic.svg":"icons/layer-eye-symbolic.4281ba422fcdf3d6003e.svg","icons/layer-eyedropper-symbolic.svg":"icons/layer-eyedropper-symbolic.399ff357d0c436d08868.svg","icons/layer-feather-symbolic.svg":"icons/layer-feather-symbolic.41c2d7380d5d92ef4152.svg","icons/layer-figure-symbolic.svg":"icons/layer-figure-symbolic.f589e38a8bd494a1681f.svg","icons/layer-fill-selection-symbolic.svg":"icons/layer-fill-selection-symbolic.6554e498194c39481fd0.svg","icons/layer-fill-symbolic.svg":"icons/layer-fill-symbolic.fd10b68e366aeeaccb4e.svg","icons/layer-finger-draw-symbolic.svg":"icons/layer-finger-draw-symbolic.3118b4237f88240cdf59.svg","icons/layer-fit-content-symbolic.svg":"icons/layer-fit-content-symbolic.0badc1fc40fbb50256d2.svg","icons/layer-fit-symbolic.svg":"icons/layer-fit-symbolic.ac6a0b9c390c32598367.svg","icons/layer-flatten-symbolic.svg":"icons/layer-flatten-symbolic.eda70e09875ad6f0c938.svg","icons/layer-flip-horizontal-symbolic.svg":"icons/layer-flip-horizontal-symbolic.e8736e08b28af37ce741.svg","icons/layer-flip-vertical-symbolic.svg":"icons/layer-flip-vertical-symbolic.e6b2396971afcb8a2ec1.svg","icons/layer-flow-symbolic.svg":"icons/layer-flow-symbolic.4b5f61a3ebc2ab9a5d0c.svg","icons/layer-folder-open-symbolic.svg":"icons/layer-folder-open-symbolic.3a694dfc26ae41dfc059.svg","icons/layer-folder-symbolic.svg":"icons/layer-folder-symbolic.70891c5b72c3426dc84d.svg","icons/layer-frequency-separation-symbolic.svg":"icons/layer-frequency-separation-symbolic.4263cbfc664f697c921a.svg","icons/layer-fullscreen-enter-symbolic.svg":"icons/layer-fullscreen-enter-symbolic.21583f12193d5121f8c2.svg","icons/layer-fullscreen-exit-symbolic.svg":"icons/layer-fullscreen-exit-symbolic.d70383f540802d1c1c13.svg","icons/layer-glass-symbolic.svg":"icons/layer-glass-symbolic.7ddf01fcb0cad7deeb9a.svg","icons/layer-go-next-symbolic.svg":"icons/layer-go-next-symbolic.623758d7961cdb1f3cfd.svg","icons/layer-go-previous-symbolic.svg":"icons/layer-go-previous-symbolic.b6debc5e811c321a1ec0.svg","icons/layer-gradient_map-symbolic.svg":"icons/layer-gradient_map-symbolic.9eaa2b1aae4b17a07f35.svg","icons/layer-gradient-radial-symbolic.svg":"icons/layer-gradient-radial-symbolic.8824e69cee455af8f06b.svg","icons/layer-gradient-reflected-symbolic.svg":"icons/layer-gradient-reflected-symbolic.d526a32257ab0117e9bd.svg","icons/layer-gradient-symbolic.svg":"icons/layer-gradient-symbolic.bcaf41ea8e236aec0516.svg","icons/layer-grain-symbolic.svg":"icons/layer-grain-symbolic.0cd9f1a0ce90f9f365b4.svg","icons/layer-grip-symbolic.svg":"icons/layer-grip-symbolic.76d116fe9a1a1c37abfa.svg","icons/layer-grit-symbolic.svg":"icons/layer-grit-symbolic.a8e6a37d025eb9c5ccc7.svg","icons/layer-group-pass-through-symbolic.svg":"icons/layer-group-pass-through-symbolic.c300456f97eb55fa26f9.svg","icons/layer-halftone-symbolic.svg":"icons/layer-halftone-symbolic.e686d1aed3cc2a8701a3.svg","icons/layer-hand-symbolic.svg":"icons/layer-hand-symbolic.041855c275d56ce39b29.svg","icons/layer-hardness-symbolic.svg":"icons/layer-hardness-symbolic.9fb365cb84c15bc00641.svg","icons/layer-heal-symbolic.svg":"icons/layer-heal-symbolic.768ffcde415aca7ec24e.svg","icons/layer-heat-haze-symbolic.svg":"icons/layer-heat-haze-symbolic.b74d2060fdfdb4dc3980.svg","icons/layer-height-symbolic.svg":"icons/layer-height-symbolic.40c536e3944bd6118e13.svg","icons/layer-high-pass-symbolic.svg":"icons/layer-high-pass-symbolic.7122d950296d05e93c9c.svg","icons/layer-hue_saturation-symbolic.svg":"icons/layer-hue_saturation-symbolic.ced9639d6d8f61fe6a71.svg","icons/layer-image-flip-horizontal-symbolic.svg":"icons/layer-image-flip-horizontal-symbolic.d072131a3983ae105d4b.svg","icons/layer-image-flip-vertical-symbolic.svg":"icons/layer-image-flip-vertical-symbolic.9e50e7a186884b2de7ed.svg","icons/layer-image-rotate-180-symbolic.svg":"icons/layer-image-rotate-180-symbolic.b8c1eacfa6b10a1c3c54.svg","icons/layer-image-rotate-left-symbolic.svg":"icons/layer-image-rotate-left-symbolic.6e29b3032928fa54fbd1.svg","icons/layer-image-rotate-right-symbolic.svg":"icons/layer-image-rotate-right-symbolic.97857aa3329f6935bf48.svg","icons/layer-image-size-symbolic.svg":"icons/layer-image-size-symbolic.e37b67b38e664f835a4b.svg","icons/layer-image-symbolic.svg":"icons/layer-image-symbolic.17ed1890abf8cc4b049c.svg","icons/layer-info-symbolic.svg":"icons/layer-info-symbolic.de87224179edc68417bb.svg","icons/layer-invert-selection-symbolic.svg":"icons/layer-invert-selection-symbolic.ca3f49d543dfa80a3675.svg","icons/layer-invert-symbolic.svg":"icons/layer-invert-symbolic.ecbfeacae329dcbb0fb0.svg","icons/layer-iridescence-symbolic.svg":"icons/layer-iridescence-symbolic.35bd3a4a958140c94a78.svg","icons/layer-join-paths-symbolic.svg":"icons/layer-join-paths-symbolic.5e59ec498f4f91f30638.svg","icons/layer-kaleidoscope-symbolic.svg":"icons/layer-kaleidoscope-symbolic.19735bd9676fe700c6f6.svg","icons/layer-keyboard-symbolic.svg":"icons/layer-keyboard-symbolic.807feffcdae0b3ec077a.svg","icons/layer-lanczos-symbolic.svg":"icons/layer-lanczos-symbolic.e1a67165862cef3baf4b.svg","icons/layer-landscape-symbolic.svg":"icons/layer-landscape-symbolic.660875bbab8e637f5b88.svg","icons/layer-lasso-fill-symbolic.svg":"icons/layer-lasso-fill-symbolic.4e0782fee830ac6d2373.svg","icons/layer-lasso-symbolic.svg":"icons/layer-lasso-symbolic.e623236322bb908bfe36.svg","icons/layer-layers-symbolic.svg":"icons/layer-layers-symbolic.7d7df15ac93c1be01025.svg","icons/layer-leave-copy-symbolic.svg":"icons/layer-leave-copy-symbolic.dd044c19a0beddb050d1.svg","icons/layer-levels-symbolic.svg":"icons/layer-levels-symbolic.e6f9efb0b2ede62e62d9.svg","icons/layer-line-symbolic.svg":"icons/layer-line-symbolic.ba6adc86c9adf7fed0f1.svg","icons/layer-link-symbolic.svg":"icons/layer-link-symbolic.3469625892cc7cb0923a.svg","icons/layer-liquify-symbolic.svg":"icons/layer-liquify-symbolic.6c3412784399da0232bc.svg","icons/layer-lock-symbolic.svg":"icons/layer-lock-symbolic.34e461bf87f9ce3e599b.svg","icons/layer-make-compound-path-symbolic.svg":"icons/layer-make-compound-path-symbolic.831c05f9c52143ffc8a8.svg","icons/layer-marker-symbolic.svg":"icons/layer-marker-symbolic.fd6dce3cd46fa3b76eb9.svg","icons/layer-mask-symbolic.svg":"icons/layer-mask-symbolic.89966f2ae567821888db.svg","icons/layer-material-hardness-symbolic.svg":"icons/layer-material-hardness-symbolic.7418cd0584d47648a8ae.svg","icons/layer-menu-symbolic.svg":"icons/layer-menu-symbolic.3162891262ac586b6742.svg","icons/layer-merge-down-symbolic.svg":"icons/layer-merge-down-symbolic.d6b21be7fd24f84901c1.svg","icons/layer-merge-group-symbolic.svg":"icons/layer-merge-group-symbolic.fd32be11259ac9c9197b.svg","icons/layer-merge-visible-symbolic.svg":"icons/layer-merge-visible-symbolic.f0fa8e538550c2621cff.svg","icons/layer-minus-symbolic.svg":"icons/layer-minus-symbolic.7deca782c8516d2be808.svg","icons/layer-more-small-symbolic.svg":"icons/layer-more-small-symbolic.16acc12a8c967cebea95.svg","icons/layer-more-symbolic.svg":"icons/layer-more-symbolic.408368ba9f12967c0f51.svg","icons/layer-mosaic-symbolic.svg":"icons/layer-mosaic-symbolic.ef35d0df50eea8ff4843.svg","icons/layer-motion-blur-symbolic.svg":"icons/layer-motion-blur-symbolic.36ffc8ebbe4ef1af6c7c.svg","icons/layer-move-symbolic.svg":"icons/layer-move-symbolic.5c548c38d2f97598d382.svg","icons/layer-navigator-symbolic.svg":"icons/layer-navigator-symbolic.fa82f16c08e5a6b61148.svg","icons/layer-new-document-symbolic.svg":"icons/layer-new-document-symbolic.35e83352ab2f4d16825c.svg","icons/layer-new-toolbar-symbolic.svg":"icons/layer-new-toolbar-symbolic.b810142bd120a102e816.svg","icons/layer-new-window-symbolic.svg":"icons/layer-new-window-symbolic.1111bcf77190c7e92f93.svg","icons/layer-none-symbolic.svg":"icons/layer-none-symbolic.c6dd6e383baed1461867.svg","icons/layer-oil-paint-symbolic.svg":"icons/layer-oil-paint-symbolic.e09be2d83a15e4b78658.svg","icons/layer-opacity-symbolic.svg":"icons/layer-opacity-symbolic.4723f12783d40aa72aea.svg","icons/layer-open-document-symbolic.svg":"icons/layer-open-document-symbolic.3a694dfc26ae41dfc059.svg","icons/layer-paint-flow-symbolic.svg":"icons/layer-paint-flow-symbolic.655a7cd408a7efb369bb.svg","icons/layer-paint-load-symbolic.svg":"icons/layer-paint-load-symbolic.f7b22c991c9012bd8142.svg","icons/layer-paint-symbolic.svg":"icons/layer-paint-symbolic.33f6a7c95a3b1085602c.svg","icons/layer-palette-symbolic.svg":"icons/layer-palette-symbolic.bf8172d3175edd54e939.svg","icons/layer-paper-symbolic.svg":"icons/layer-paper-symbolic.c35334ef0d7e5cc59d0c.svg","icons/layer-paste-in-place-symbolic.svg":"icons/layer-paste-in-place-symbolic.d6119b7fffb0070e516c.svg","icons/layer-paste-into-symbolic.svg":"icons/layer-paste-into-symbolic.ffe4e5d33ee86b629197.svg","icons/layer-paste-symbolic.svg":"icons/layer-paste-symbolic.1ab0305b4cf2c229cd2b.svg","icons/layer-pastel-symbolic.svg":"icons/layer-pastel-symbolic.c67ff809546956690a5c.svg","icons/layer-path-both-symbolic.svg":"icons/layer-path-both-symbolic.e31f0efc5da66708eafb.svg","icons/layer-path-fill-symbolic.svg":"icons/layer-path-fill-symbolic.7a76021744f2dea80c79.svg","icons/layer-path-symbolic.svg":"icons/layer-path-symbolic.39a2ba32be1d3e18c82e.svg","icons/layer-pen-symbolic.svg":"icons/layer-pen-symbolic.a3bf085d22d7625e6184.svg","icons/layer-pencil-symbolic.svg":"icons/layer-pencil-symbolic.26aa7319d66ee0034428.svg","icons/layer-persistence-symbolic.svg":"icons/layer-persistence-symbolic.28085e97993a67ccf996.svg","icons/layer-perspective-symbolic.svg":"icons/layer-perspective-symbolic.bc9009a4f4a237970d2a.svg","icons/layer-photo_filter-symbolic.svg":"icons/layer-photo_filter-symbolic.6da66d29f44034c9e5d2.svg","icons/layer-pin-outline-symbolic.svg":"icons/layer-pin-outline-symbolic.e58ab56bd8854ff2274b.svg","icons/layer-pin-symbolic.svg":"icons/layer-pin-symbolic.6e006cd17ecacc7a825b.svg","icons/layer-plus-symbolic.svg":"icons/layer-plus-symbolic.d5bcbc365c42d903955d.svg","icons/layer-polygon-both-symbolic.svg":"icons/layer-polygon-both-symbolic.1955f8ff545343dfd2ec.svg","icons/layer-polygon-fill-symbolic.svg":"icons/layer-polygon-fill-symbolic.02a7ab1e633d110d6cc1.svg","icons/layer-polygon-select-symbolic.svg":"icons/layer-polygon-select-symbolic.11bac21c45de1322f081.svg","icons/layer-polygon-symbolic.svg":"icons/layer-polygon-symbolic.e064c7ea28420b1e3311.svg","icons/layer-portrait-symbolic.svg":"icons/layer-portrait-symbolic.557952bd4c5790a59567.svg","icons/layer-position-x-symbolic.svg":"icons/layer-position-x-symbolic.0ca98992d22b32b49e7e.svg","icons/layer-position-y-symbolic.svg":"icons/layer-position-y-symbolic.8c179a6732bf04157d52.svg","icons/layer-posterize-symbolic.svg":"icons/layer-posterize-symbolic.6270a0eb95f722595759.svg","icons/layer-pressure-refill-symbolic.svg":"icons/layer-pressure-refill-symbolic.1371e42c50eabe2d8312.svg","icons/layer-properties-symbolic.svg":"icons/layer-properties-symbolic.040eb007e4ad1e0190d8.svg","icons/layer-rainy-glass-symbolic.svg":"icons/layer-rainy-glass-symbolic.c3353f37d3c7c8707ad4.svg","icons/layer-rectangle-both-symbolic.svg":"icons/layer-rectangle-both-symbolic.566ff083998fdad8ce63.svg","icons/layer-rectangle-fill-symbolic.svg":"icons/layer-rectangle-fill-symbolic.57b1455c593796cc9cfe.svg","icons/layer-rectangle-select-symbolic.svg":"icons/layer-rectangle-select-symbolic.272f8969c86ab6d5661d.svg","icons/layer-rectangle-symbolic.svg":"icons/layer-rectangle-symbolic.584e910cd12f8f9e240e.svg","icons/layer-redo-symbolic.svg":"icons/layer-redo-symbolic.d6c2966e05601e4c9496.svg","icons/layer-reference-symbolic.svg":"icons/layer-reference-symbolic.018c4d47a9e794efa36f.svg","icons/layer-release-compound-path-symbolic.svg":"icons/layer-release-compound-path-symbolic.6bc9a2d6a1f2999e785a.svg","icons/layer-reset-layout-symbolic.svg":"icons/layer-reset-layout-symbolic.b536b038c49be3808680.svg","icons/layer-reset-symbolic.svg":"icons/layer-reset-symbolic.e136e3255ae4807c7e65.svg","icons/layer-reveal-all-symbolic.svg":"icons/layer-reveal-all-symbolic.c47872f0815e0bdea589.svg","icons/layer-reverse-path-symbolic.svg":"icons/layer-reverse-path-symbolic.4d3434e740c8fa66939a.svg","icons/layer-ripple-symbolic.svg":"icons/layer-ripple-symbolic.a311b868210b21244194.svg","icons/layer-rotate-left-symbolic.svg":"icons/layer-rotate-left-symbolic.508e77c22c5b490cf651.svg","icons/layer-rotate-right-symbolic.svg":"icons/layer-rotate-right-symbolic.41bb4bb6c84097d9ff72.svg","icons/layer-rotation-variation-symbolic.svg":"icons/layer-rotation-variation-symbolic.ec3cb153bf8b9089e1d3.svg","icons/layer-ruler-parallel-symbolic.svg":"icons/layer-ruler-parallel-symbolic.3da39e680ef233d328fc.svg","icons/layer-ruler-radial-symbolic.svg":"icons/layer-ruler-radial-symbolic.a93909a534e85020e981.svg","icons/layer-ruler-snap-symbolic.svg":"icons/layer-ruler-snap-symbolic.a38e148c68a7bb7c8206.svg","icons/layer-ruler-symbolic.svg":"icons/layer-ruler-symbolic.a7616c3ddcf6b41726d7.svg","icons/layer-save-as-symbolic.svg":"icons/layer-save-as-symbolic.7d3df194409c8f4865a4.svg","icons/layer-save-document-symbolic.svg":"icons/layer-save-document-symbolic.def04f2ed0e7c603482c.svg","icons/layer-scatter-symbolic.svg":"icons/layer-scatter-symbolic.3fba48d5bfc366bdb737.svg","icons/layer-sculpt-symbolic.svg":"icons/layer-sculpt-symbolic.ef101ddb2e0f7c76bfad.svg","icons/layer-search-symbolic.svg":"icons/layer-search-symbolic.cc37a9ab4ef49461ff8a.svg","icons/layer-select-all-symbolic.svg":"icons/layer-select-all-symbolic.0a976c0bdbcdd08ab0bd.svg","icons/layer-select-symbolic.svg":"icons/layer-select-symbolic.5750686f74d77adb7cec.svg","icons/layer-selection-add-symbolic.svg":"icons/layer-selection-add-symbolic.6b4ee399ba7af8c55197.svg","icons/layer-selection-border-symbolic.svg":"icons/layer-selection-border-symbolic.02c6f7db9a89012b5739.svg","icons/layer-selection-brush-symbolic.svg":"icons/layer-selection-brush-symbolic.d4f390ebff7a9ad3e6aa.svg","icons/layer-selection-checked-symbolic.svg":"icons/layer-selection-checked-symbolic.cb46fcf370ac812ec902.svg","icons/layer-selection-empty-symbolic.svg":"icons/layer-selection-empty-symbolic.3b1d5aaabc8a9e0426b7.svg","icons/layer-selection-grow-symbolic.svg":"icons/layer-selection-grow-symbolic.3b6dfb99d0b1fc39a7d6.svg","icons/layer-selection-intersect-symbolic.svg":"icons/layer-selection-intersect-symbolic.f1c2af5cc0c7b2324b44.svg","icons/layer-selection-load-symbolic.svg":"icons/layer-selection-load-symbolic.f602797214e5b2ccb70b.svg","icons/layer-selection-new-symbolic.svg":"icons/layer-selection-new-symbolic.bb8b4b181ff9d7b94c56.svg","icons/layer-selection-shrink-symbolic.svg":"icons/layer-selection-shrink-symbolic.01320f0e13c41b9754b8.svg","icons/layer-selection-subtract-symbolic.svg":"icons/layer-selection-subtract-symbolic.62715014377c5f48cb1b.svg","icons/layer-selective_color-symbolic.svg":"icons/layer-selective_color-symbolic.06b445432cfd7b6a5c56.svg","icons/layer-send-to-back-symbolic.svg":"icons/layer-send-to-back-symbolic.38c142ed505a8d970bd3.svg","icons/layer-settings-symbolic.svg":"icons/layer-settings-symbolic.792d51cf281148198e77.svg","icons/layer-shadows-highlights-symbolic.svg":"icons/layer-shadows-highlights-symbolic.1d9d2d4358a3504cc0e8.svg","icons/layer-sharpen-symbolic.svg":"icons/layer-sharpen-symbolic.3069633f500a3b966d8e.svg","icons/layer-size-symbolic.svg":"icons/layer-size-symbolic.25002ebc368eefcb7969.svg","icons/layer-size-variation-symbolic.svg":"icons/layer-size-variation-symbolic.88086a3c7c369d61c1d0.svg","icons/layer-soft-focus-symbolic.svg":"icons/layer-soft-focus-symbolic.db0834f6ee7dca3da9d9.svg","icons/layer-solarize-symbolic.svg":"icons/layer-solarize-symbolic.61c6b00247e783d117c7.svg","icons/layer-solid-symbolic.svg":"icons/layer-solid-symbolic.4a46183cf198f873c3da.svg","icons/layer-source-code-symbolic.svg":"icons/layer-source-code-symbolic.5eded6af3883c0a51cf1.svg","icons/layer-split-path-symbolic.svg":"icons/layer-split-path-symbolic.29df54a721cc4d4dfaf6.svg","icons/layer-split-tone-symbolic.svg":"icons/layer-split-tone-symbolic.265518082dc7ac3162dc.svg","icons/layer-spot-heal-symbolic.svg":"icons/layer-spot-heal-symbolic.09f944a4722a7bf6047a.svg","icons/layer-spray-symbolic.svg":"icons/layer-spray-symbolic.560bee252632c9558528.svg","icons/layer-spread-symbolic.svg":"icons/layer-spread-symbolic.a7538e407862d4819131.svg","icons/layer-stamp-visible-symbolic.svg":"icons/layer-stamp-visible-symbolic.7a4ddd861899c0b30ebd.svg","icons/layer-star-both-symbolic.svg":"icons/layer-star-both-symbolic.80078614d7a8a9c6f77e.svg","icons/layer-star-fill-symbolic.svg":"icons/layer-star-fill-symbolic.5b5448e6027d0ba262b5.svg","icons/layer-star-symbolic.svg":"icons/layer-star-symbolic.207693f3d43c0a96ab38.svg","icons/layer-stats-symbolic.svg":"icons/layer-stats-symbolic.5381ed753736936f7f45.svg","icons/layer-straighten-symbolic.svg":"icons/layer-straighten-symbolic.052b8c531ad9802d0684.svg","icons/layer-streaks-symbolic.svg":"icons/layer-streaks-symbolic.48e35f267383dd54a6a9.svg","icons/layer-strength-symbolic.svg":"icons/layer-strength-symbolic.4ec1b32161e38db72bde.svg","icons/layer-stretch-symbolic.svg":"icons/layer-stretch-symbolic.daf7e2b844a0cf160cce.svg","icons/layer-swap-orientation-symbolic.svg":"icons/layer-swap-orientation-symbolic.8870fb3e097c3e79876e.svg","icons/layer-swap-sides-symbolic.svg":"icons/layer-swap-sides-symbolic.7cd673852bed1a40c268.svg","icons/layer-swap-symbolic.svg":"icons/layer-swap-symbolic.41e20700834a3444ad8d.svg","icons/layer-swirl-size-symbolic.svg":"icons/layer-swirl-size-symbolic.70ad3a2f8ff2d2d4a325.svg","icons/layer-swirl-symbolic.svg":"icons/layer-swirl-symbolic.9a29647438b11b0f4c29.svg","icons/layer-taper-auto-symbolic.svg":"icons/layer-taper-auto-symbolic.f1f1e6af4202e75f5c24.svg","icons/layer-taper-fixed-symbolic.svg":"icons/layer-taper-fixed-symbolic.790be29a12658cd7eac9.svg","icons/layer-taper-proportional-symbolic.svg":"icons/layer-taper-proportional-symbolic.a367921fc683b56182bd.svg","icons/layer-threshold-symbolic.svg":"icons/layer-threshold-symbolic.ef6df6c317a990cef399.svg","icons/layer-tonal-bright-hdr-symbolic.svg":"icons/layer-tonal-bright-hdr-symbolic.8fb429b38c9d087aa21f.svg","icons/layer-tonal-custom-symbolic.svg":"icons/layer-tonal-custom-symbolic.6af5e88e1bada59d389b.svg","icons/layer-tonal-highlights-symbolic.svg":"icons/layer-tonal-highlights-symbolic.c2671f7a04719e920895.svg","icons/layer-tonal-mid-highlights-symbolic.svg":"icons/layer-tonal-mid-highlights-symbolic.8a77365373af65d75c12.svg","icons/layer-tonal-mid-shadows-symbolic.svg":"icons/layer-tonal-mid-shadows-symbolic.5e594bc7c6813bd537bb.svg","icons/layer-tonal-midtones-symbolic.svg":"icons/layer-tonal-midtones-symbolic.3817f18eac143a5fd115.svg","icons/layer-tonal-select-symbolic.svg":"icons/layer-tonal-select-symbolic.c40acb40ff4efa48d193.svg","icons/layer-tonal-shadows-symbolic.svg":"icons/layer-tonal-shadows-symbolic.59804d8c1053e5366d77.svg","icons/layer-tone-symbolic.svg":"icons/layer-tone-symbolic.ae641c7ebdfc353b0ce2.svg","icons/layer-tool-group-symbolic.svg":"icons/layer-tool-group-symbolic.4b66fddb613afec18387.svg","icons/layer-tool-set-symbolic.svg":"icons/layer-tool-set-symbolic.734b4ac10916038a9e8c.svg","icons/layer-tool-settings-symbolic.svg":"icons/layer-tool-settings-symbolic.218d8c6e6c6e70eaf542.svg","icons/layer-toolbar-symbolic.svg":"icons/layer-toolbar-symbolic.c28184cc043bd3145ceb.svg","icons/layer-transform-outline-symbolic.svg":"icons/layer-transform-outline-symbolic.17ecef886f4007e7cc97.svg","icons/layer-transform-symbolic.svg":"icons/layer-transform-symbolic.5c27906aa92c60fc396f.svg","icons/layer-transparent-symbolic.svg":"icons/layer-transparent-symbolic.8f71dee9bd80d0c8972b.svg","icons/layer-trim-symbolic.svg":"icons/layer-trim-symbolic.26aaa4010190084adb92.svg","icons/layer-undo-symbolic.svg":"icons/layer-undo-symbolic.04adc640c989dc473065.svg","icons/layer-unlink-symbolic.svg":"icons/layer-unlink-symbolic.88bb2dddf67ffb4441bc.svg","icons/layer-up-symbolic.svg":"icons/layer-up-symbolic.83375c5cd82ab6cde565.svg","icons/layer-vhs-symbolic.svg":"icons/layer-vhs-symbolic.a6f4c576a2cb071a911f.svg","icons/layer-vibrance-symbolic.svg":"icons/layer-vibrance-symbolic.fb602db2ad7f0c790e75.svg","icons/layer-vignette-symbolic.svg":"icons/layer-vignette-symbolic.03f4becb08cf79268aa3.svg","icons/layer-warning-symbolic.svg":"icons/layer-warning-symbolic.b946d3842841eaa117bc.svg","icons/layer-warp-symbolic.svg":"icons/layer-warp-symbolic.3b00828188f84dbd94a8.svg","icons/layer-water-symbolic.svg":"icons/layer-water-symbolic.b556b619687cf3c88579.svg","icons/layer-watercolor-symbolic.svg":"icons/layer-watercolor-symbolic.7ec40350a4539ad43303.svg","icons/layer-waveform-symbolic.svg":"icons/layer-waveform-symbolic.f63275554e7d11b31f0c.svg","icons/layer-website-symbolic.svg":"icons/layer-website-symbolic.b94a5974cd92ed44ab14.svg","icons/layer-wet-bleed-symbolic.svg":"icons/layer-wet-bleed-symbolic.39cda87368089b71c9ae.svg","icons/layer-white-balance-symbolic.svg":"icons/layer-white-balance-symbolic.061febd389681d6ce389.svg","icons/layer-width-symbolic.svg":"icons/layer-width-symbolic.2818492be09f480db198.svg","icons/layer-window-close-symbolic.svg":"icons/layer-window-close-symbolic.01690cd059deafda11c9.svg","icons/layer-zen-bathing-symbolic.svg":"icons/layer-zen-bathing-symbolic.a638473e74f9e05000d7.svg","icons/layer-zen-facing-forward-symbolic.svg":"icons/layer-zen-facing-forward-symbolic.06a3a282919298af5baf.svg","icons/layer-zen-looking-up-symbolic.svg":"icons/layer-zen-looking-up-symbolic.36d21b7e6ceb685b7b9e.svg","icons/layer-zen-sleeping-symbolic.svg":"icons/layer-zen-sleeping-symbolic.adc886ce0a33f63e8896.svg","icons/layer-zoom-area-symbolic.svg":"icons/layer-zoom-area-symbolic.2930985bc10bac51f306.svg","icons/layer-zoom-in-symbolic.svg":"icons/layer-zoom-in-symbolic.38e6dc7a34c0a1817cf7.svg","icons/layer-zoom-no-drag-symbolic.svg":"icons/layer-zoom-no-drag-symbolic.95c7cb140a5ac37a0339.svg","icons/layer-zoom-out-symbolic.svg":"icons/layer-zoom-out-symbolic.d47367b02a57352a3e90.svg","icons/layer-zoom-scrub-horizontal-symbolic.svg":"icons/layer-zoom-scrub-horizontal-symbolic.1fcdd60f75529db43a09.svg","icons/layer-zoom-scrub-vertical-symbolic.svg":"icons/layer-zoom-scrub-vertical-symbolic.dbe10fd569bcf5155c64.svg","icons.svg":"icons.ccffa0e4fcf136279f88.svg","launch.css":"launch.dbbcde9271404c5d2a85.css","pkg/layer_web_bg.wasm":"pkg/layer_web_bg.a1b2913f98aa076dbc93.wasm"};
const asset = (path) => new URL(assetPaths[path.replace(/^\.\//, "")] || path, import.meta.url).href;

const panels = new Map(),
  groups = new Map(),
  dividers = new Map();
const $ = (id) =>
  document.getElementById(id) ||
  [...panels.values()]
    .map((panel) => panel.querySelector(`#${id}`))
    .find(Boolean);
captureTextComposition(document, event => { if (state) keyInput(event, false); });
const workspace = $("workspace"),
  canvas = $("canvas"),
  center = $("center");
// Workspace extent changes only with its viewport, not with panel content.
// Retain it so chrome notifications do not force style/layout after DOM writes.
let workspaceViewport = [workspace.clientWidth, workspace.clientHeight];
const commands = new Map();
let sizePresets;
let app,
  catalog,
  bootstrap,
  delivery,
  panelNames,
  state,
  scheduled = false,
  layout,
  lastPenEvent = null,
  heldPointers = new Map(),
  dragItem = null,
  statusTimer,
  statusError = null,
  shownHostError = null;
let penResponse, refreshPreferences, customization, layerPanel, effectPanels, palettes, editor, selectionUi, frequencySeparationUi, canvasSizeUi, imageSizeUi, workspaceChrome, panelVectors, glass, documents, systemStatus, header, canvasBar, notice, zoomReadout, screenStatus;
let commandBar, paintPairView, fillGesture, phone;
let bubbles;
observeButtonFeedback(window);
const compilerContacts = new Set();
for (const type of ['pointerdown', 'pointermove', 'pointerup', 'pointercancel', 'keydown', 'wheel']) {
  window.addEventListener(type, event => {
    if (event.isTrusted && type === 'pointerdown') compilerContacts.add(event.pointerId);
    if (event.isTrusted && (type === 'pointerup' || type === 'pointercancel')) compilerContacts.delete(event.pointerId);
    deferOptionalCompiler();
  }, { capture: true, passive: true });
}
for (const type of ["pointerdown", "pointermove"]) window.addEventListener(type, pointerStyle, true);
window.addEventListener(
  "pointercancel",
  e => {
    heldPointers.delete(e.pointerId);
    updateZen();
  },
  { capture: true },
);
for (const name of ["pointerup", "lostpointercapture"]) window.addEventListener(
  name,
  e => {
    const owner=heldPointers.get(e.pointerId);if(!owner)return;
    setTimeout(()=>{
      if(heldPointers.get(e.pointerId)!==owner)return;
      heldPointers.delete(e.pointerId);updateZen();
    },0);
  },
  { capture: true },
);
for (const type of ['pointerdown','pointermove','pointerup','pointercancel','lostpointercapture','contextmenu','click','dblclick'])
  window.addEventListener(type,e=>{if(!e.target.closest?.('.utility-panel'))bubbles?.handle(e);},{capture:true,passive:false});
const fullscreenRequests = new Set(), colorSlotRequests = new Set();
let gpuStarting = false;
let gpuReady = false;
let compilerScheduled = false, compilerFailed = false, compilerEpoch = 0;
let compilerResumeTimer;
const startupTimes = { canvas: null, document: null, brush: null, complete: null };
installTooltips();
installPenScrolling();
const launchCover = createLaunchCover({ container: $("gpu-notice"), asset });
let launchPresentation;
watchModalDialogs(() => { if (launchCover.pending) { refreshStartup(); wake(); } });
for (const type of ['keydown', 'keyup']) window.addEventListener(type, event => {
  if (launchCover.blocking) event.stopImmediatePropagation();
}, {capture: true});
const gpuDiagnostics=createGpuDiagnostics();
let wasmMemory;
let servicingRequests = false;
const settingsKey = "layer.preferences.v1";
let workspaceManager;
const pending = [];
const systemTheme = matchMedia("(prefers-color-scheme: dark)");
const systemMotion = matchMedia("(prefers-reduced-motion: reduce)");
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
  const rgba = color => `rgb(${color.slice(0, 3).map(v => v * 255).join(" ")} / ${color[3]})`;
  if (palette) for (const [name, color] of Object.entries(palette.glass)) {
    if (Array.isArray(color)) document.body.style.setProperty(`--glass-${name.replaceAll("_", "-")}`, rgba(color));
  }
  if (palette) {
    for(const [name,color]of Object.entries(palette.controls))document.body.style.setProperty(`--widget-${name.replaceAll('_','-')}`,rgba(color));
    document.body.style.setProperty('--dialog-scrim',rgba(palette.dialogs.scrim));
    document.body.style.setProperty('--dialog-press-shade',rgba(palette.dialogs.press_shade));
    document.body.style.setProperty('--link-color',`oklab(${palette.link_oklab.join(' ')})`);
    document.body.style.setProperty('--dialog-destructive',`oklab(${palette.dialogs.destructive_oklab.join(' ')})`);
    document.body.style.setProperty("--control-fill", rgba(palette.control_fill));
    const { settings, panel, sidebar_border } = palette.lines;
    for (const [name, color] of [["card-shade", settings.card_shade], ["sidebar-edge", sidebar_border], ["menu-divider", panel.border], ["popover-border", palette.lines.popover_border]]) {
      document.body.style.setProperty(`--${name}`, rgba(color));
    }
    document.body.style.setProperty("--card-shadow", `0 0 0 1px ${rgba(settings.card_ring)}, 0 1px 3px 1px ${rgba(settings.card_shadow)}, 0 2px 6px 2px ${rgba(settings.card_far_shadow)}`);
  }
  glass?.queue();
  document.querySelector('meta[name="theme-color"]').content = palette?.bg || (theme === "dark" ? "#333333" : "#b8b8b8");
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (typeof text === "function") bindCopy(node, text);
  else if (text != null) node.textContent = text;
  return node;
}
function message(error) {
  statusError = error;
  refreshMessage();
  clearTimeout(statusTimer);
  statusTimer = setTimeout(() => {
    statusError = null;
    $("status").textContent = "";
  }, 7000);
}
function refreshMessage() {
  if(statusError!==null)$("status").textContent=typeof statusError==="function"?statusError():app.color_feature_error_copy(statusError);
}
function answerNotice(id, accept, action = null) {
  if (accept) return dispatch({ type: "notice", id, accept, action });
  try { applyChange(app.dispatch({ type: "notice", id, accept, action })); } catch {}
}
function button(text, action, className = "") {
  const node = element("button", className, text);
  node.type = "button";
  node.addEventListener("click", action);
  return node;
}
function dropdown(label,change) { return createDropdown({element,button,icon,openMenu:node=>customization.openMenu(node)},label,change); }
function numberField(control, label, onChange, inline = false, valueOnly = false, panel = true) {
  const read = typeof label === "function" ? label : null;
  const number = createNumberField({ control, label:read ? read() : label, labels:next => app.numeric_labels(next), onChange, inline, valueOnly, panel, icon, resolve: request => app.number_input(request), errorCaption: reason => app.native_caption({type:"numeric_error",reason}) });
  if(read){Object.defineProperty(number,"localizedLabel",{set:next=>number.relabel(next)});bindCopy(number,read,"localizedLabel");}
  return number;
}
function panelFrame(panel, scrollable = true) {
  const frame = element("div", "panel-frame");
  if (scrollable) {
    frame.classList.add("scrollable");
    const viewport = element("div", "panel-viewport"); viewport.append(panel); frame.append(viewport);
    addScrollbar(viewport, frame, panel);
  } else frame.append(panel);
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
function icon(name, live = false) {
  name=name.replace(/^layer-(.*)-symbolic$/,'$1');
  const svg = icons.get(name).cloneNode(true);
  return live && name === 'colors' ? createPaintPairIcon(svg, paintPairView) : svg;
}
function iconButton(id) {
  const node = commandButton(id, "");
  node.dataset.icon = "true";
  node.classList.add("tile-button");
  const glyph = icon(state.commands.find((c) => c.id === id).icon);
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
  bindCopy(node,()=>delivery.drag_panel,"title");
  if (item.kind === "panel") {
    let retainedTitle;
    node.updatePanelTitle = title => {
      if (retainedTitle === title) return;
      retainedTitle = title;
      node.setAttribute("aria-label", app.document_delivery_message({type:"move_panel",name:title}));
    };
    node.updatePanelTitle(customization.view(item.panel).title);
  } else bindCopy(node,()=>item.kind === "column" ? delivery.move_column : delivery.move_group,"ariaLabel");
  node.append(icon("grip"));
  return draggable(node, item);
}
const dropIndicator = element("div", "drop-indicator");
dropIndicator.hidden = true;
workspace.append(dropIndicator);

function dispatch(action) {
  try {
    if(documents?.interactionBusy()&&!app.allowed_during_document_interaction(action))return;
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
let languageTimer;
function queueLanguage() {
  if (languageTimer) return;
  languageTimer = setTimeout(() => {
    languageTimer = null;
    const change = app.prepare_language(compositionBusy() || !!workspaceGesture || heldPointers.size > 0 || compilerContacts.size > 0);
    if (change) applyChange(change);
    if (app.language_pending()) queueLanguage();
  }, 4);
}
function publishAppName(tag = bootstrap?.active_tag ?? 'en') {
  document.title = catalog.app_name;
  document.querySelector('meta[name="apple-mobile-web-app-title"]')?.setAttribute('content', catalog.app_name);
  document.querySelector('link[rel="manifest"]')?.setAttribute('href', tag === 'en' ? './manifest.webmanifest' : `./manifest.${tag}.webmanifest`);
}
function publishLanguage(patch) {
  if (!patch.localization) return false;
  refreshCopy(app);
  refreshStartup();
  refreshMessage();
  document.documentElement.lang = patch.localization.tag;
  publishAppName(patch.localization.tag);
  for (const [id, key] of [["workspace","drawing_workspace"],["canvas","drawing_canvas"],["gpu-notice","canvas_availability"],["header-start","application_menus"],["header-end","workspace_controls"],["canvas-status","canvas_status"]]) $(id)?.setAttribute("aria-label", bootstrap[key]);
  canvas.setAttribute("aria-description", bootstrap.drawing_canvas_help);
  $("size-number")?.relabel(catalog.native_copy.color.brush_size);
  documents?.localize();
  workspaceManager?.localize();
  refreshBindings();
  return true;
}
function applyChange(change) {
  if (launchPresentation || launchCover.pending) refreshStartup();
  if (app.language_pending()) queueLanguage();
  if (change.regions & 512) {
    state.command_search = app.command_search();
    commandBar?.refresh(state.command_search);
    if (change.regions === 512) { if (change.canvas_wake) wake(); return; }
  }
  if(change.regions & 256) { fillGesture?.refresh(app.color_preview().fill_gesture); editor?.refreshColorPreview(); phone?.refresh(); refreshColorEditors(); }
  if(change.regions===256){bubbles?.refresh();if(change.canvas_wake)wake();return;}
  if (change.regions & (1 | 2 | 4 | 8 | 128)) workspaceManager?.observe();
  if (change.regions) {
    const presentation = app.workspace_update();
    if(change.regions & (1 | 2 | 4 | 8 | 16 | 128 | 256 | 8192)
      && ((change.regions&(1|2|4|8|16|128|256|8192))!==129||workspaceModelRevision!==presentation.model_revision))bubbles?.refresh();
    canvasBar?.apply(presentation.canvas_bar);
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
        const languageChanged = publishLanguage(patch);
        // A concurrent model change rebases retained placement too.
        if (!moving && !(change.regions & ~(16 | 128)) &&
            Object.keys(patch).every(key => key === "revision" || key === "settings_open")) {
          // Opening, closing, searching and navigating Settings do not change
          // the workspace behind it. Keep its controls and geometry intact.
          refreshPreferences(app.preferences_cached());
          updateZen();
        } else update(languageChanged ? 32767 : change.regions | (moving ? 1 : 0));
        if (reopeningCanvas) {
          deferOptionalCompiler();
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
  if (change.regions) { refreshColorEditors(); refreshTextureDialogs(); }
  if (change.canvas_wake) wake();
  if (change.regions && !workspaceGesture?.started) wake();
  scheduleFrameTimer();
}
let frameTimer = null;
function scheduleFrameTimer() {
  clearTimeout(frameTimer);
  frameTimer = null;
  const delay = app.next_frame_ms();
  if (delay > 0) frameTimer = setTimeout(() => { frameTimer = null; wake(); }, Math.ceil(delay));
}
document.addEventListener('visibilitychange', () => { app?.set_window_hidden(document.hidden); if (!document.hidden) wake(); });
let canvasCursorActive = false;
function cursorInput(e) {
  if (!gpuReady) return;
  const onCanvas =
    e &&
    !workspaceGesture?.started &&
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
    if (bubbles?.tick(frameTime)) wake();
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
function launchChromeReady() { return !!layout && workspaceLayoutReady() && !workspacePresentation; }
function refreshStartup() {
  if (!app || !bootstrap) return;
  const launch = app.launch_state(launchChromeReady(), compilerFailed || document.body.dataset.gpu === 'unavailable', hasModalDialog());
  if (launch.frame == null || launchPresentation && launchPresentation[0] !== launch.frame) launchPresentation = null;
  launchCover.update(launch, bootstrap);
  if (!gpuReady || compilerFailed) return;
  const [documentReady, brushReady, complete] = app.startup_progress();
  if (launch.finished && statusError === null) {
    const notice = app.canvas_notice();
    $("status").textContent = notice === null ? "" : bootstrap[`preparing_${notice}`];
  }
  const stages = { canvas: app.canvas_presented(), document: documentReady, brush: brushReady, complete };
  for (const [name, ready] of Object.entries(stages)) {
    if (ready && startupTimes[name] === null) {
      startupTimes[name] = performance.now();
      performance.mark(`capy.startup.${name}`);
    }
  }
  const frame = app.launch_frame();
  if (!frame) launchPresentation = null;
  if (frame && (!launchPresentation || frame[0] !== launchPresentation[0] || frame[1] !== launchPresentation[1])) {
    const epoch = compilerEpoch;
    launchPresentation = frame;
    app.wait_for_canvas().then(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve)))).then(() => {
      if (epoch !== compilerEpoch || launchPresentation !== frame) return;
      app.launch_presented(BigInt(frame[0]), BigInt(frame[1]), launchChromeReady(), hasModalDialog());
      if (launchPresentation === frame) launchPresentation = null;
      refreshStartup();
      wake();
    }).catch(error => { if (epoch === compilerEpoch && launchPresentation === frame) stopGpu(error); });
  }
  if (launch.frame != null && (!frame || frame[0] !== launch.frame)) wake();
}
// Host timing and contacts govern admission; Rust also checks queued input,
// strokes, gestures and unfinished edits. Required jobs always retain priority.
function deferOptionalCompiler() {
  if (!app) return;
  app.shader_input();
  compilerResumeTimer ??= setTimeout(resumeOptionalCompiler, Math.ceil(app.shader_wait_ms()));
}
function resumeOptionalCompiler() {
  const remaining = app.shader_wait_ms();
  compilerResumeTimer = remaining > 0 ? setTimeout(resumeOptionalCompiler, Math.ceil(remaining)) : null;
  if (compilerResumeTimer === null) wake();
}
function optionalCompilerReady() {
  return !compilerContacts.size && !pending.length
    && !documents?.busy()
    && !hasModalDialog() && !document.querySelector('#header details[open],:popover-open:not(.hover-tooltip)');
}
window.addEventListener('blur', () => { compilerContacts.clear(); deferOptionalCompiler(); });
document.addEventListener('visibilitychange', () => { if (!document.hidden) deferOptionalCompiler(); });
document.addEventListener('toggle', deferOptionalCompiler, true);
document.addEventListener('close', deferOptionalCompiler, true);
function scheduleCompiler() {
  if (!gpuReady || document.hidden || state.settings_open || compilerScheduled || compilerFailed) return;
  const remaining = app.shader_wait_ms();
  if (remaining > 0) compilerResumeTimer ??= setTimeout(resumeOptionalCompiler, Math.ceil(remaining));
  if (!app.shader_work_pending(optionalCompilerReady())) return;
  compilerScheduled = true;
  const epoch=compilerEpoch;
  // Start after this display callback can present. The next job is scheduled
  // by a later frame, with input/UI opportunities between each GPU scope.
  setTimeout(async () => {
    try {
      if(epoch!==compilerEpoch || document.hidden || state.settings_open)return;
      await gpuOperation(() => app.compile_startup_step(optionalCompilerReady()));
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
  for (const [property,value] of Object.entries({
    left: `${rect.x}px`,
    top: `${rect.y}px`,
    width: `${rect.width}px`,
    height: `${rect.height}px`,
  })) if (node.style[property] !== value) node.style[property] = value;
  glass?.queue();
}
function tabLabel(tab, view, presentation) {
  tabHover(tab,presentation);
  tab.classList.toggle("icon-only-tab", !presentation.show_name);
  if (presentation.show_icon) tab.append(icon(view.icon, true));
  if (presentation.show_name) tab.append(element("span", "", view.title));
}
function releaseTabs(root) { releaseTabSurfaces(root); }
function arrange(nextLayout, layoutOnly = false) {
  if (!app || !panelVectors) return;
  const resolved=layoutOnly?nextLayout:app.layout(...workspaceViewport);
  const request=++workspaceLayoutRequested;
  panelVectors.schedule(resolved,layoutOnly,(resolved,result,only)=>{
    presentWorkspaceLayout(resolved,only);
    panelVectors.apply(resolved,result);
    workspaceLayoutFinished=request;finishWorkspaceTabDrop();
    if(workspaceLatestPresentation?.model_revision===workspaceModelRevision) {
      workspacePresentation=workspaceLatestPresentation;flushWorkspacePresentation();
    }
  });
}
function presentWorkspaceLayout(resolved,layoutOnly) {
  clearWorkspacePlacement();
  if (workspaceGesture) workspaceGesture.hits = null;
  layout=resolved;
  phone?.layout(resolved);
  const tabBarHeight=`${layout.tab_bar_height}px`;
  if(workspace.style.getPropertyValue("--tab-bar-height")!==tabBarHeight)
    workspace.style.setProperty("--tab-bar-height",tabBarHeight);
  const live = new Set();
  for (const group of layout.groups) {
    live.add(group.id);
    let node = groups.get(group.id);
    const body = panels.get(group.active).closest(".panel-frame");
    if (!layoutOnly || !node) {
      if (!node) {
        node = element("section", "dock-group");
        const clip = element("div", "panel-columns");
        clip.append(element("div", "panel-preview")); node.append(clip);
        groups.set(group.id, node);
        workspace.append(node);
      }
      node.classList.toggle("zen-kept", group.zen_kept);
      const tabStyle = app.group_tab_style(group.id);
      const key = JSON.stringify([[...group.panels].sort(), group.tabs_visible, !!group.footer_grip, tabStyle]);
      if (node.dataset.key !== key) {
        node.dataset.key = key;
        node.dataset.panel = group.active;
        node.dataset.group = group.id;
        node.classList.toggle("toolbar", !!group.tiles);
        const preview = node.querySelector(".panel-preview");
        releaseTabs(preview);
        const tabs = element("nav", "dock-tabs");
        draggable(tabs, { kind: "group", group: group.id });
        customization.target(tabs, { kind: "group", group: group.id });
        tabs.setAttribute("aria-label", delivery.panel_tabs);
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
            tab.dataset.group = group.id;
            const view = customization.view(panel);
            tab.title = view.title; tab.setAttribute("aria-label", view.title);
            customization.target(tab, { kind: "panel", panel });
            tab.setAttribute("aria-selected", String(panel === group.active));
            labels.append(draggable(tab, { kind: "panel", panel }));
          });
          tabs.append(labels, grip({ kind: "group", group: group.id }));
          preview.replaceChildren(tabs, body);
        } else {
          preview.replaceChildren(body);
          if (group.footer_grip) {
            const footer = element("div", "panel-footer");
            footer.style.height = `${group.footer_grip.height}px`;
            draggable(footer, { kind: "group", group: group.id });
            customization.target(footer, { kind: "group", group: group.id });
            footer.append(grip({ kind: "group", group: group.id })); preview.append(footer);
          }
        }
      }
      const preview = node.querySelector(".panel-preview");
      const strip=preview.querySelector('.tab-list');
      orderPanelTabs(strip,group.panels);
      const previous = preview.querySelector(":scope > .panel-frame");
      if (previous !== body) previous ? previous.replaceWith(body) : preview.append(body);
      node.dataset.panel = group.active;
      node.classList.toggle("toolbar", !!group.tiles);
      node.setAttribute("aria-label", customization.view(group.active).title);
      for(const tab of node.querySelectorAll('.dock-tab')) {
        const view=customization.view(tab.dataset.panel),title=view.title;
        tab.setAttribute('aria-selected',String(tab.dataset.panel===group.active));
        const presentation=group.tab_presentations[group.panels.indexOf(tab.dataset.panel)];
        tabHover(tab,presentation);
        const labelKey=JSON.stringify([view.title,view.icon,presentation]);
        if(tab.dataset.labelKey===labelKey)continue;
        tab.dataset.labelKey=labelKey;tab.replaceChildren();tabLabel(tab,view,presentation);
        tab.title=title;tab.setAttribute('aria-label',title);
        const label=tab.querySelector('span');if(label)label.textContent=title;
      }
      node.classList.toggle("floating-panel", group.floating);
      node.classList.toggle("tool-strip", !!group.tiles && !group.tabs_visible);
      node.dataset.zIndex = group.floating ? String(100 + layout.groups.indexOf(group) * 2) : "1";
      if (!node.classList.contains("expanded-panel")) node.style.zIndex = node.dataset.zIndex;
    }
    place(node, group.bounds);
    if (group.tiles) node.style.setProperty("--tile-radius", `${group.tiles.tile_corner_radius}px`);
    const bodyHeight = Math.max(0, group.bounds.height - (group.tabs_visible ? layout.tab_bar_height : 0) - (group.footer_grip?.height || 0));
    body.classList.toggle("body-scroll", !group.tiles && group.min_body_height > bodyHeight + .01);
    const minimumBody = `${group.min_body_height || 0}px`;
    if (node.style.getPropertyValue("--panel-min-body-height") !== minimumBody)
      node.style.setProperty("--panel-min-body-height", minimumBody);
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
      node.setAttribute("aria-label", delivery.resize_dock);
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
  workspaceManager?.layout(layout,workspaceViewport);
  editor.queuePositions();
  place($("canvas-status"), layout.status);
  // The help occupies the same unobstructed area used for fitting the document.
  // Panels remain native UI siblings above the full-window drawing surface.
  place($("gpu-notice"), layout.work_area);
  workspace.style.setProperty('--work-area-center',`${layout.work_area.x+layout.work_area.width/2}px`);
  workspace.style.setProperty('--work-area-bottom',`${Math.max(0,workspace.clientHeight-layout.work_area.y-layout.work_area.height)}px`);
  if (!layoutOnly) {
    resizeCanvas();
    updateZen();
  }
  canvasBar?.measure();
  selectionUi?.place();
  frequencySeparationUi?.place();
  notice?.place();
  queuePanelMeasurements();
}
// Measure intrinsic widget content only when its width/copy changes. Rust owns
// tab growth and floating sizes; moving a float reuses these cached DOM facts.
const panelMeasurements = new Map();
let measuringPanels = false;
let panelMetricContext, panelFontGeneration = 0, lastPanelReport;
function panelMetrics() {
  const scale = devicePixelRatio || 1;
  const style = `web:${getComputedStyle(workspace).font}:${panelFontGeneration}`;
  if (!panelMetricContext || panelMetricContext.scale !== scale || panelMetricContext.style !== style) {
    panelMetricContext = {generation: (panelMetricContext?.generation || 0) + 1, scale, text_scale: 1, style};
  }
  return panelMetricContext;
}
document.fonts.addEventListener("loadingdone", () => { panelFontGeneration++; canvasBar?.measure(); queuePanelMeasurements(); });
const measureBox = element("div", "panel-measure");
measureBox.hidden = true;
measureBox.inert = true;
measureBox.setAttribute("aria-hidden", "true"); workspace.append(measureBox);
// An isolated tree retains measurement controls without exposing duplicate IDs
// to application lookup. It uses the same CSS and inherits the workspace theme.
const measurementRoot = measureBox.attachShadow({mode:"closed"});
const measurementStyle = $("workspace-style").cloneNode();
measurementStyle.removeAttribute("id");
await new Promise((resolve,reject)=>{
  measurementStyle.addEventListener("load",resolve,{once:true});
  measurementStyle.addEventListener("error",reject,{once:true});
  measurementRoot.append(measurementStyle);
});
function invalidatePanelMeasurement(id) {
  const cached=panelMeasurements.get(id);
  if(cached){releaseTabs(cached.root);cached.root.remove();}
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
  const pending = [], context = panelMetrics();
  const requests = new Map((layout.measurement_requests || []).map(request => [request.panel, request]));
  // Batch writes before reads. Intrinsic measurement keeps one offscreen DOM
  // copy per intrinsic content change, so width changes reflow it without cloning.
  for (const config of state.workspace.layout.panels) {
    const view = customization.view(config.id);
    const request = requests.get(config.id);
    if (!request) continue;
    const width = request.width;
    // Model publication also advances for numeric values and canvas poses.
    // Intrinsic copies change only with panel structure/copy, appearance or
    // available width; each content widget invalidates its own schema below.
    const key = JSON.stringify([request.tab, request.body, request.split_filters, context]);
    let cached = panelMeasurements.get(config.id);
    if (cached?.key !== key) {
      invalidatePanelMeasurement(config.id);
      const root = element("div");
      const tab = element("button", "dock-tab");
      tab.style.width = "max-content";
      tabLabel(tab, view, {show_icon:true,show_name:true,hover_bottom:[0,0]});
      root.append(tab);
      const content = config.content.kind === "toolbar" ? null : panels.get(config.id).cloneNode(true);
      if (content) {
        content.style.height = "auto"; content.style.width = "100%";
        root.append(content);
      }
      cached = { key, root, tab, content, request: structuredClone(request), context };
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
      const list = cached.content?.querySelector(".layer-rows, .filter-picker-list, .palette-scroll, .navigator-overview");
      const row = id === "layers" ? cached.content?.querySelector(".layer-row-unit") : list?.querySelector(".filter-row, .palette-tile");
      const scroll = cached.content && !["color","proof","histogram","waveform"].includes(id) ? {
        fixed_height: list ? Math.max(0, content_height - list.getBoundingClientRect().height) : 0,
        unit_height: row ? row.getBoundingClientRect().height + (row.matches(".palette-tile") ? 4 : 0) : 0,
      } : null;
      cached.value = {
        request: {...cached.request, width: cached.width}, context: cached.context,
        tab_widths: [cached.tab.getBoundingClientRect().width, 36],
        body: {actual_width: cached.content?.getBoundingClientRect().width || cached.width, content_height, scroll},
      };
    }
  } finally { measureBox.hidden = true; }
  for (const id of panelMeasurements.keys()) if (!panels.has(id)) invalidatePanelMeasurement(id);
  const reports = [...requests.keys()].map(id => panelMeasurements.get(id)?.value).filter(Boolean);
  const measurements = {context, reports};
  const encoded = JSON.stringify(measurements);
  if (encoded !== lastPanelReport) {
    lastPanelReport = encoded;
    dispatch({type: "measure_panels", measurements});
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
    panelFrame(panel, kind !== "tiles" && name !== "layers");
  }
  panels.get("brushes").append(editor.control("brushes"));
  for (const [panel, control] of [["brush_sets","brush_sets"],["sculpt_sets","sculpt_sets"],["tools","tools"],["tool_settings","tool_settings"],["color","color_wheel"],["navigator","navigator"],["histogram","histogram"],["waveform","waveform"]])
    panels.get(panel).append(editor.control(control));
  const controls = element("div", "size-controls");
  controls.dataset.control = "brush_size";
  const size = numberField(catalog.brush_size, catalog.native_copy.color.brush_size, value => dispatch({ type: "set_brush_size", value }));
  size.onReset = () => dispatch({ type: "reset_tool_setting", id: "size" });
  size.id = "size-number"; controls.append(size);
  const grid = brushSizeGrid({ app, catalog, state: () => state, dispatch, element, button });
  grid.dataset.control = "size_presets";
  sizePresets = grid;
  panels.get("sizes").append(controls, grid);
  palettes.mount(panels.get("palettes"));
  layerPanel = createLayerPanel({ app, catalog, state: () => state, panel: panels.get("layers"), element, button, icon,dropdown, dispatch, applyChange, message, numberField, wake, dismissContext: () => customization.dismissContext(), openMenu: node => customization.openMenu(node), contentChanged: panelContentChanged });
  effectPanels = createEffectPanels({app,wake,catalog,state:()=>state,panels,element,button,icon,dropdown,dispatch,numberField,message,asset,
    contentChanged:panelContentChanged});
}
function contentPanel(id, splitPicker=false, readToolSet=null) {
  const panel=element("div",`panel ${id}-panel`);
  if(["brushes","brush_sets","sculpt_sets","tools"].includes(id)) {
    const control=editor.control(id,readToolSet);panel.append(control);panel.refreshPanel=control.refreshEditor;panel.arrangePanel=()=>control.arrangeEditor?.();
  } else if(id==="proof") {
    panel.disposePanel=documents.mountProof(panel);panel.refreshPanel=()=>{};
  } else if(id==="palettes") {
    const view=palettes.mount(panel);panel.refreshPanel=view.refresh;panel.arrangePanel=view.arrange;panel.disposePanel=view.dispose;
  } else if(id==="layers") {
    const view=createLayerPanel({app,catalog,state:()=>state,panel,element,button,icon,dropdown,dispatch,applyChange,message,numberField,wake,dismissContext:()=>customization.dismissContext(),openMenu:node=>customization.openMenu(node)});
    panel.refreshPanel=view.refresh; panel.disposePanel=view.dispose; panel.measureUnit=view.measureUnit;
  } else if(["filter_types","adjustments","properties","stats"].includes(id)) {
    const copies=new Map(["filter_types","adjustments","properties","stats"].map(name=>[name,name===id?panel:element("div","panel")]));
    const view=createEffectPanels({app,wake,catalog,state:()=>state,panels:copies,element,button,icon,dropdown,dispatch,numberField,message,asset,contentChanged:()=>{},splitPicker});
    panel.refreshPanel=view.refresh; panel.disposePanel=view.dispose;
  } else {
    for(const control of customization.view(id).controls.filter(c=>c.visible_in_panel)) panel.append(customization.field(control.control,control.label));
    panel.refreshPanel=()=>{};
  }
  panel.refreshPanel();return panel;
}
function update(regions) {
  fillGesture?.refresh(app.color_preview().fill_gesture);
  const themeChanged = !!(regions & 16) && document.body.dataset.theme !== state.theme;
  document.body.toggleAttribute("data-workspace-ready", state.workspace_ready);
  if(regions & (4096 | 16384 | 16)) penResponse?.refresh();
  commandBar?.refresh(state.command_search);
  if (regions & (1 | 2 | 4 | 8 | 16 | 128)) paintPairView = app.paint_pair();
  // Canvas-based controls read these colors while refreshing their pixels.
  if (regions & 16) applyTheme(state.theme, state.palette);
  if (regions & (1 | 2 | 4 | 8 | 16 | 128)) customization.refresh();
  if (regions & 2) {
    sizePresets.refresh();
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
  if (regions & (1 | 2 | 4 | 8 | 16 | 128 | 256)) phone?.refresh();
  if (regions & (4 | 8)) documents?.refresh();
  if (regions & (2 | 4 | 16)) palettes.refresh(regions);
  if (regions & 16) effectPanels.refresh();
  if (regions & 2048) effectPanels.refreshHistograms();
  if (regions & (1 | 2 | 4 | 8 | 16 | 32 | 128 | 2048)) { editor.refresh(); selectionUi.refresh(); frequencySeparationUi.refresh(); canvasSizeUi.refresh(); imageSizeUi.refresh(); workspaceChrome?.refresh(); }
  if (regions & (1 | 4 | 128) || themeChanged) arrange();
  if (regions & (1 | 8 | 1024)) canvasBar?.refresh(state.canvas_bar);
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
  if (regions & (16 | 32)) zoomReadout?.refresh(state.camera);
  if (regions & (1 | 16)) updateZen();
  editor.flushPaint();
  if (regions & 64) {
    documents?.refresh();
    notice?.publish(state.notice);
    screenStatus?.refresh(state.screen);
    if (state.host_error && state.host_error !== shownHostError) message(state.host_error);
    shownHostError = state.host_error;
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
            else if (request.kind.type === "export_keymap") {
              const link = Object.assign(document.createElement("a"), {
                href: URL.createObjectURL(new Blob([request.kind.text], { type: "application/json" })),
                download: request.kind.name,
              });
              link.click(); setTimeout(() => URL.revokeObjectURL(link.href), 0);
            }
            else if (request.kind.type === "import_keymap") {
              const input = Object.assign(document.createElement("input"), { type: "file", accept: ".capykeys" });
              input.addEventListener("change", async () => {
                const file = input.files?.[0];
                if (!file) return;
                if (file.size > 1 << 20) { message(delivery.keymap_too_large); return; }
                dispatch({ type: "preferences", action: { type: "import_keymap", text: await file.text() } });
              });
              input.click();
            }
            else if (request.kind.type === "color_slot") {
              if (!colorSlotRequests.has(request.id)) {
                colorSlotRequests.add(request.id);
                const slot=request.kind.slot, epoch=state.document_file.epoch;
                chooseColor({app,slot,element,button}).then(selected=>{
                  if(selected && app.state().document_file.epoch===epoch)dispatch({type:'color',action:selected.intensity==null?{op:'set_slot',slot,color:selected.color}:{op:'set_slot_intensity',slot,color:selected.color,stops:selected.intensity}});
                  dispatch({type:'complete_request',id:request.id,error:null});
                },error=>dispatch({type:'complete_request',id:request.id,error:String(error)}))
                  .finally(()=>colorSlotRequests.delete(request.id));
              }
              continue;
            }
            else if (request.kind.type === "workspace") { workspaceManager?.wake(); continue; }
            else if (request.kind.type !== "save_settings") { documents.handle(request); continue; }
            else
            localStorage.setItem(settingsKey, JSON.stringify(request.kind.settings));
          } catch (e) { console.error(e); error = app.document_delivery_message({type:"save_preferences",detail:String(e)}); }
          dispatch({ type: "complete_request", id: request.id, error });
        }
      } finally { servicingRequests = false; }
    }
  }
}

// Rust owns transient interaction policy. These are only DOM event/capture
// records; CSS animates the returned visibility without resizing the canvas.
let workspaceGesture = null,workspaceTabDrop = null,workspaceLayoutRequested=0,workspaceLayoutFinished=0;
function workspaceLayoutReady(){return !workspaceLayoutPending&&workspaceLayoutFinished===workspaceLayoutRequested;}
function clearWorkspaceTabDrop(){
  if(workspaceTabDrop)clearTabSlide(workspaceTabDrop);
  workspaceTabDrop=null;
}
function finishWorkspaceTabDrop(){
  if(!workspaceTabDrop||!workspaceLayoutReady())return;
  clearWorkspaceTabDrop();
}
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
  const owner = drag.node.closest('.panel-preview,.content-drawer');
  if (owner) {
    const bounds = owner.getBoundingClientRect(), style = getComputedStyle(owner);
    if (Math.abs(bounds.left - clip.x) < 1 && Math.abs(bounds.top - clip.y) < 1)
      overlay.style.borderTopLeftRadius = style.borderTopLeftRadius;
    if (Math.abs(bounds.right - clip.x - clip.width) < 1 && Math.abs(bounds.top - clip.y) < 1)
      overlay.style.borderTopRightRadius = style.borderTopRightRadius;
  }
  overlay.setAttribute("aria-hidden", "true"); overlay.inert = true;
  // Freeze insertion geometry; only these noninteractive copies move.
  const tabs = grabbed.map(({ source, hit }) => {
    const bounds = hit.bounds, preview = source.cloneNode(true);
    prepareTabPreview(preview);
    for (const name of [...preview.attributes].map(a => a.name)) {
      if (name.startsWith("data-") || name === "id") preview.removeAttribute(name);
    }
    const dragged = source === drag.node, hole = source.matches(".tab-list > [aria-selected=true]");
    preview.classList.add(dragged ? "dragged-tab-preview" : "neighbor-tab-preview", ...(hole ? ["docked-tab-preview"] : []));
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
  for (const { source } of drag.tabSlide.tabs) {
    source.classList.remove("dragged-tab-source");
  }
  drag.tabSlide.overlay.remove();
  drag.tabSlide = null;
}
function updateTabSlide(drag, presentation) {
  const slide = drag.tabSlide;
  if (!slide || drag.finishing) return;
  const preview = presentation?.preview;
  if (!preview) { clearTabSlide(drag); return; }
  for (const tab of slide.tabs) {
    const offset = tab.source === drag.node ? preview.bounds.x - presentation.source.x
      : preview.offsets.find(o => Number(o.index) === tab.hit.index)?.x || 0;
    const x = `${deviceAligned(offset)}px`;
    tab.preview.style.transform = `translateX(${x})`;
  }
}
let workspaceCapture = null;
function workspacePointer() {
  const drag = workspaceGesture, edge = edgeContact;
  const capture = edge?.cursor ? edge.pointerId : drag?.started || drag?.held ? drag.id : null;
  const previous = workspaceCapture;
  workspaceCapture = capture;
  if (previous !== capture && previous != null && workspace.hasPointerCapture(previous)) workspace.releasePointerCapture(previous);
  if (capture != null && previous !== capture && !workspace.hasPointerCapture(capture)) workspace.setPointerCapture(capture);
  const cursor = edge?.cursor ?? (drag?.started ? drag.tile || drag.action.type === "drag_workspace" ? "grabbing" : drag.cursor
    : drag?.waitForHold && drag.held && ["mouse", "pen"].includes(drag.start.pointerType) ? "grab" : null);
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
let workspaceModelRevision, workspaceContentRevision, workspaceLatestPresentation, workspacePresentation, workspacePresentationFrame = 0;
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
    canvasBar?.apply(update.canvas_bar);
    arrange(packet.layout, true);
    queueWorkspacePresentation(update);
  });
}
workspace.addEventListener("scroll", () => { if (workspaceGesture) workspaceGesture.hits = null; }, true);
const workspacePlacements = new Map();
const deviceAligned = value => Math.round(value * devicePixelRatio) / devicePixelRatio;
function clearWorkspacePlacement() {
  if (workspacePlacements.size) glass?.queue();
  for (const [node, original] of workspacePlacements) {
    node.style.removeProperty("transform");
    node.style.width = original.width;
    node.style.height = original.height;
  }
  workspacePlacements.clear();
}
function queueWorkspacePresentation(presentation) {
  workspaceLatestPresentation=presentation;
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
  if(!update.drag){
    if(!workspaceLayoutReady()){workspacePresentation=update;return false;}
    finishWorkspaceTabDrop();
  }
  const drag = update.drag, moving = drag?.group;
  if (moving) {
    const group = layout.groups.find(g => g.id === moving.id), base = group?.bounds;
    if (base) {
      const dw = moving.bounds.width - base.width, dh = moving.bounds.height - base.height;
      const nodes = [groups.get(moving.id), ...[...dividers.values()].filter(n => n.dragAction.group === moving.id)];
      for (const node of nodes.filter(Boolean)) {
        if (!workspacePlacements.has(node)) workspacePlacements.set(node, {
          width: node.style.width, height: node.style.height,
        });
        const original = workspacePlacements.get(node), edge = node.dataset.edge;
        const x = deviceAligned(moving.bounds.x) - base.x + (edge?.includes("right") ? dw : 0);
        const y = deviceAligned(moving.bounds.y) - base.y + (edge?.includes("bottom") ? dh : 0);
        const transform = `translate(${x}px, ${y}px)`;
        if (node.style.transform !== transform) { node.style.transform = transform; glass?.queue(); }
        // Freeze native allocation too, without scaling the retained controls.
        const width = `${parseFloat(original.width) + (!edge || edge === "top" || edge === "bottom" ? dw : 0)}px`;
        const height = `${parseFloat(original.height) + (!edge || edge === "left" || edge === "right" ? dh : 0)}px`;
        if (node.style.width !== width) { node.style.width = width; glass?.queue(); }
        if (node.style.height !== height) { node.style.height = height; glass?.queue(); }
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
  drag.finishing=true;
  if (drag.started) {
    if (drag.tile) {
      const point=e||drag.last;
      if (!cancel && !bubbles?.takeTile(drag.action.item,[point.clientX,point.clientY])) dropItem(drag.action.item, dropHint(point, drag.action.item));
      dragItem = null; drag.node.classList.remove("drag-source");
    } else workspaceGestureEvent(cancel ? "cancel" : "up", e || drag.last);
  }
  if (cancel && drag.context) customization.dismissContext();
  if (!cancel && !drag.started && drag.selectTab) dispatch(drag.selectTab);
  workspaceGesture = null;
  if(!cancel&&drag.tabSlide){
    workspaceTabDrop=drag;finishWorkspaceTabDrop();
  }else clearTabSlide(drag);
  workspacePointer();
  dropIndicator.hidden = true;
  if (!cancel && (drag.started || drag.held || drag.context)) { e?.preventDefault(); e?.stopPropagation(); }
  updateZen();
}
let edgeContact = null, edgeContacts = 0, lastPointerKind = "mouse";
function edgeReply(reply, ended = false) {
  const edge = edgeContact;
  if (!edge) return;
  edge.cursor = ended ? null : reply.edge_cursor ?? null;
  edge.hold = !!reply.edge_hold || !!reply.edge_select_on_release;
  edge.selectOnRelease = !!reply.edge_select_on_release;
  if (ended || reply.edge_retired || !edge.cursor && !reply.edge_pending) edgeContact = null;
  workspacePointer();
}
function edgeInput(phase, e, contact = "free") {
  const reply = input({ type: "edge_contact", id: BigInt(edgeContact.id), phase, kind: e.pointerType || "mouse", contact,
    position: [e.clientX, e.clientY], viewport: workspaceViewport, time_ns: BigInt(Math.round(performance.now() * 1e6)) });
  edgeReply(reply, phase === "up" || phase === "cancel");
  return reply;
}
function endEdgeContact(e, phase) {
  const edge = edgeContact;
  if (!edge || !e.isTrusted || edge.pointerId !== e.pointerId) return;
  const claimed = !!edge.cursor;
  edgeInput(phase, e);
  if (!claimed) return;
  e.preventDefault(); e.stopImmediatePropagation();
}
workspace.addEventListener("pointerdown", e => {
  if (!e.isTrusted) return;
  lastPointerKind = e.pointerType || "mouse";
  if (e.button !== 0) return;
  if (edgeContact) {
    if (!edgeContact.cursor && e.pointerType === "touch") edgeInput("cancel", e);
    return;
  }
  const contact = e.isPrimary ? edgeContactClass(e.target, canvas) : null;
  if (!contact) return;
  edgeContact = { id: ++edgeContacts, pointerId: e.pointerId, canvas: e.target === canvas, cursor: null, hold: false };
  edgeInput("down", e, contact);
}, { capture: true });
workspace.addEventListener("pointermove", e => {
  const edge = edgeContact;
  if (!edge || !e.isTrusted || edge.pointerId !== e.pointerId) return;
  if (!edge.cursor && (workspaceGesture?.started || workspaceGesture?.held)) { edgeInput("cancel", e); return; }
  const claimed = !!edge.cursor;
  const reply = edgeInput("move", e);
  if (!edgeContact) return;
  if (edge.cursor && !claimed) {
    if (workspaceGesture && !workspaceGesture.started) endWorkspaceGesture(null, true);
    customization.dismissContext();
    if (edge.canvas) canvas.dispatchEvent(new PointerEvent("pointercancel", { pointerId: e.pointerId, pointerType: e.pointerType, clientX: e.clientX, clientY: e.clientY, bubbles: true }));
  }
  if (reply.edge_cursor || reply.edge_hold) { e.preventDefault(); e.stopImmediatePropagation(); }
}, { capture: true });
window.addEventListener("pointerup", e => endEdgeContact(e, "up"), { capture: true });
window.addEventListener("pointercancel", e => endEdgeContact(e, "cancel"), { capture: true });
workspace.addEventListener("pointerdown", e => {
  if (e.button !== 0 || !e.isPrimary || workspaceGesture) return;
  const node = e.target.closest("[data-workspace-drag]");
  if (!node) return;
  const tab=node.matches('.dock-tab[data-group]')?{type:"select_panel_tab",group:Number(node.dataset.group),panel:node.dataset.panel}:null;
  if(workspaceTabDrop){if(tab&&!edgeContact?.selectOnRelease)dispatch(tab);return;}
  workspaceGesture = { id: e.pointerId, action: JSON.parse(node.dataset.workspaceDrag),
    start: e, last: e, started: false, node, parent: node.parentNode,
    waitForHold: node.dataset.dragPickup === "hold", cursor: getComputedStyle(node).cursor };
  workspaceGesture.tile = workspaceGesture.action.item?.kind === "tile";
  if (workspaceGesture.waitForHold)
    workspaceGestureSourceObserver.observe(workspace, { childList: true, subtree: true });
  if (tab) {
    if (edgeContact?.selectOnRelease) workspaceGesture.selectTab = tab;
    else dispatch(tab);
  }
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
    if (distance <= 8) return;
    if (drag.waitForHold && !drag.held) { endWorkspaceGesture(e, true); return; }
    customization.dismissContext();
    drag.started = true;
    workspaceGestureSourceObserver.disconnect();
    workspacePointer();
    groups.forEach(node => node.getAnimations().forEach(a => a.cancel()));
    if (drag.tile) {
      dragItem = drag.action.item; drag.node.classList.add("drag-source"); updateZen();
    } else {
      grabTabSlide(drag);
      startTabSlide(drag);
      workspaceGestureEvent("down", drag.start);
      if (drag.tabSlide) app.begin_tab_drag(drag.tabSlide.tabs.map(t => t.hit), drag.tabSlide.clip);
    }
  }
  if (drag.tile) showDropHint(dropHint(e, drag.action.item));
  else workspaceGestureEvent("move", e);
  workspacePointer();
  e.preventDefault(); e.stopPropagation();
}, { capture: true });
workspace.addEventListener("touchmove", e => {
  if ((workspaceGesture?.context || edgeContact?.hold || edgeContact?.cursor) && e.touches.length === 1 && e.cancelable) e.preventDefault();
}, { passive: false });
window.addEventListener("pointerup", e => endWorkspaceGesture(e), { capture: true });
window.addEventListener("pointercancel", e => endWorkspaceGesture(e, true), { capture: true });
workspace.addEventListener("lostpointercapture", e => {
  if (e.target === workspace && edgeContact?.pointerId === e.pointerId) endEdgeContact(e, "cancel");
  // Touch starts with implicit capture on the tab. Transferring capture to the
  // stable workspace releases that child; only losing our own capture cancels.
  if (e.target === workspace || (!workspace.hasPointerCapture(e.pointerId)
    && workspaceGesture?.node.contains(e.target))) endWorkspaceGesture(e, true);
});
function armWorkspaceDrag(drag) {
  drag.held = true;
  workspacePointer();
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
  if (!node) {
    const contact = edgeResetClass(e.target, canvas);
    if (contact && input({ type: "edge_double_press", kind: lastPointerKind, contact, position: [e.clientX, e.clientY], viewport: workspaceViewport }).handled) {
      e.preventDefault(); e.stopPropagation();
      endWorkspaceGesture(null, true);
    }
    return;
  }
  const action = JSON.parse(node.dataset.workspaceDrag);
  if (action.type === "drag_divider" && layout.dividers.some(d =>
    d.id === action.id && d.owner_side && d.axis === "horizontal")) {
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
    if (reply.cancel_paint && lastPenEvent) queuePen(lastPenEvent, 4);
    workspace.classList.toggle("zen-hidden", reply.chrome_hidden);
    header?.interaction(reply);
    const cursor = ({pan:"grab", zoom:"zoom-in", zoom_out:"zoom-out", rotate:"crosshair"})[reply.navigation_cursor] ?? "";
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
  return input({
    type: "chrome",
    event,
    viewport: workspaceViewport,
    facts: {
      expanded_panel: customization?.placement(),
      ...workspaceChrome?.facts(),
      contact_tab: event.kind === "contact"
        ? document.elementFromPoint(...event.position)?.closest(".dock-tab")?.dataset.panel ?? null
        : null,
      held: heldPointers.size > 0,
      dragging: dragItem !== null,
      popup_open:
        hasModalDialog() || !!(document.querySelector("details[open]") || document.querySelector(":popover-open:not(.hover-tooltip)")) ||
        (CSS.supports("selector(select:open)") && !!document.querySelector("select:open")),
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
function closeMenusOutside(target) {
  for (const menu of document.querySelectorAll("details[open]"))
    if (!menu.contains(target)) menu.open = false;
}
function persistWorkspace() {
  workspaceManager?.observe();
}
function pointerStyle(e) {
  // Touch leaves :hover stuck until the next tap; track actual pointer input
  // instead of disabling hover for a whole device that may also have a pen/mouse.
  const touch = e.pointerType === "touch", root = document.documentElement;
  root.toggleAttribute("data-mouse", e.pointerType === "mouse");
  if (root.hasAttribute("data-touch") !== touch) root.toggleAttribute("data-touch", touch);
}
window.addEventListener(
  "pointermove",
  (e) => {
    if (e.target.closest?.("dialog[open]")) return;
    if(e.target.closest?.('.utility-panel')){cursorInput(e);return;}
    if (!e.buttons) heldPointers.delete(e.pointerId);
    if (workspaceGesture?.started && workspaceGesture.id === e.pointerId) {
      cursorInput(null);
      return;
    }
    // A captured paint contact cannot reveal chrome. The canvas listener owns
    // its samples/cursor; querying popups and hit-testing here duplicates work
    // and can force layout between input and the next drawing submission.
    if (!(e.target === canvas && lastPenEvent?.pointerId === e.pointerId))
      chromeInput({ kind: "motion" });
    if (e.target !== canvas) cursorInput(e);
  },
  { capture: true },
);
document.addEventListener("pointerleave", () => {
  cursorInput(null);
  chromeInput({ kind: "refresh" });
});
window.addEventListener(
  "pointerdown",
  (e) => {
    // Native DOM modals own their contacts. Workspace transitions deliberately
    // consume editor input, so forwarding a dialog contact would swallow its
    // buttons before the DOM click handler can run.
    if (e.target.closest("dialog[open]")) return closeMenusOutside(e.target);
    if(e.target.closest('.utility-panel'))return closeMenusOutside(e.target);
    if (e.target === canvas && e.pointerType === "pen" && !(e.buttons & 33)) {
      e.preventDefault();
      return;
    }
    if (e.target.closest("#header") || e.target.closest("#zen-capy") && !workspace.classList.contains("zen-hidden")) heldPointers.set(e.pointerId,e);
    const reply = chromeInput({
      kind: "contact",
      position: [e.clientX, e.clientY],
      canvas: e.target === canvas,
    });
    if (reply.handled) {
      workspace.setPointerCapture(e.pointerId);
      heldPointers.delete(e.pointerId);
      updateZen();
      e.preventDefault();
      e.stopImmediatePropagation();
    }
    closeMenusOutside(e.target);
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
      paintToolKind(item),
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
    try {
      batch.records = batch.records.subarray(app.pen(batch.records, batch.revision) * 11);
    } catch (error) {
      message(error);
      return;
    }
  }
  if (batch.records.length) pending.push(batch);
  wake();
}
// Use raw updates only for the captured painting contact. UI rows, touch
// navigation and hover keep their ordinary pointermove arbitration. Observe
// actual raw delivery, so browsers/devices without it still paint via moves.
let rawPenPointer = null;
const canvasPenContacts = new Set();
let pickerHold=null;
function cancelPickerHold(){if(pickerHold)clearTimeout(pickerHold.timer);pickerHold=null;}
window.addEventListener('blur',cancelPickerHold);
function pickerTouch(e,stage){
  if(stage===1){
    cancelPickerHold();
    if(e.pointerType==='touch'){
      pickerHold={id:e.pointerId,x:e.clientX,y:e.clientY,timer:setTimeout(()=>{
        pickerHold=null;
        const scale=canvas.width/canvas.getBoundingClientRect().width;
        input({type:'color_picker_hold',id:corePointerId(e),position:position(e),offset:app.finger_loupe_offset(scale)});
      },app.touch_hold_ms())};
    }
  } else if(stage===2&&pickerHold?.id===e.pointerId&&Math.hypot(e.clientX-pickerHold.x,e.clientY-pickerHold.y)>browserDragThreshold)cancelPickerHold();
  else if(stage===3||stage===4)cancelPickerHold();
}

const penSideButtons = new Map();
window.addEventListener("blur", () => penSideButtons.clear());
function penButtons(e) {
  if (e.pointerType !== "pen") return;
  const next = e.buttons & 6, previous = penSideButtons.get(e.pointerId) ?? 0;
  if (next === previous) return;
  penSideButtons.set(e.pointerId, next);
  for (const [bit, button] of [[2, "primary"], [4, "secondary"]])
    if ((next ^ previous) & bit) input({ type: "pen_button", button, pressed: !!(next & bit) });
}
function canvasPointer(e, stage) {
  penButtons(e);
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
    notice?.hide();
  }
  let sample = e;
  const activePen = lastPenEvent?.pointerType === "pen"
    && lastPenEvent.pointerId === e.pointerId;
  if (activePen && ((stage === 4 && e.type !== "pointercancel") ||
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
const pressButtons = new Map();
function pointerInput(e, stage, point = position(e)) {
  const id = corePointerId(e);
  const button = (stage === 3 && pressButtons.get(id)) || (
    e.pointerType === "pen" || e.button === 0 || e.button === 5 || !!(e.buttons & 1)
      ? "primary"
      : e.button === 1 || e.button === 2 || !!(e.buttons & 6)
        ? "pan"
        : "other");
  if (stage === 1) pressButtons.set(id, button);
  else if (stage === 3 || stage === 4) pressButtons.delete(id);
  return input({
    type: "pointer",
    id: BigInt(id),
    phase: ["move", "down", "move", "up", "cancel"][stage],
    kind: e.pointerType || "mouse",
    button,
    position: point,
    time_ns: BigInt(Math.round((e.timeStamp || 0) * 1e6)),
  });
}
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
let trackpadGesture = null;
canvas.addEventListener("gesturestart", e => {
  e.preventDefault();
  trackpadGesture = {point: position(e), scale: e.scale, rotation: e.rotation};
  app.begin_view_gesture();
}, {passive: false});
canvas.addEventListener("gesturechange", e => {
  if (!trackpadGesture) return;
  e.preventDefault();
  const point = position(e), previous = trackpadGesture;
  if (e.scale > 0 && Number.isFinite(e.rotation)) {
    applyChange(app.gesture(...previous.point, ...point, e.scale / previous.scale, (e.rotation - previous.rotation) * Math.PI / 180));
    trackpadGesture = {point, scale: e.scale, rotation: e.rotation};
  }
}, {passive: false});
canvas.addEventListener("gestureend", e => { e.preventDefault(); trackpadGesture = null; }, {passive: false});
window.addEventListener("blur", () => { trackpadGesture = null; });
window.addEventListener(
  "wheel",
  (e) => {
    if (document.elementFromPoint(e.clientX, e.clientY) !== canvas) return;
    e.preventDefault();
    if (trackpadGesture) return;
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
  { capture: true, passive: false },
);
function keyInput(e, pressed, divider = null, fromDialog = false) {
  if (pressed && (e.defaultPrevented || hasModalDialog() && !fromDialog)) return;
  updateZen();
  const reply = input({
    type: "key",
    key: e.key,
    latin: latinKey(e),
    pressed,
    repeat: e.repeat,
    modifiers: {
      command: e.ctrlKey || e.metaKey,
      shift: e.shiftKey,
      alt: e.altKey,
    },
    editing:
      composingKey(e) ||
      (e.target instanceof Element &&
        (!!e.target.closest("input,select,textarea,[contenteditable]:not([contenteditable=false])") ||
          (!!e.target.closest("button,summary") && app.control_takes_key(e.key, e.ctrlKey || e.metaKey, e.altKey, keyboardFocused.has(e.target))))),
    divider,
  });
  if (reply.handled && !composingKey(e)) {
    if(!documents?.allowNativePaste())e.preventDefault();
    e.stopPropagation();
  }
}
const keyboardFocused = new WeakSet();
let keyboardModality = false;
window.addEventListener("pointerdown", () => { keyboardModality = false; keyboardFocused.delete(document.activeElement); }, { capture: true });
window.addEventListener("keydown", e => { if (!["Shift", "Control", "Alt", "Meta"].includes(e.key)) keyboardModality = true; }, { capture: true });
document.addEventListener("focusin", e => { if (keyboardModality) keyboardFocused.add(e.target); else keyboardFocused.delete(e.target); }, { capture: true });
window.addEventListener("keydown", e => {
  if (!composingKey(e) && e.key === "Escape" && workspaceGesture) { endWorkspaceGesture(null, true); e.preventDefault(); e.stopPropagation(); }
}, {capture:true});
window.addEventListener("keydown", (e) => {
  if(documents?.key(e,()=>keyInput(e,true)))return;
  keyInput(e, true);
});
window.addEventListener("keyup", (e) => keyInput(e, false));
const GAMEPAD_BUTTONS = ["a", "b", "x", "y", "l1", "r1", "l2", "r2", "select", "start", "l3", "r3", "up", "down", "left", "right", "home"];
const gamepads = new Map();
let gamepadFrame = 0;
function gamepadKey(name, pressed, repeat) {
  input({ type: "key", key: `gamepad_${name}`, pressed, repeat, modifiers: { command: false, shift: false, alt: false }, editing: false, divider: null });
}
function releaseGamepad(index) {
  const pad = gamepads.get(index);
  if (!pad) return;
  for (const [button, held] of pad.held) { clearTimeout(held); gamepadKey(GAMEPAD_BUTTONS[button], false, false); }
  pad.held.clear();
  if (pad.axes) input({ type: "axes", pan: [0, 0], zoom: 0 });
  pad.axes = null;
}
function pollGamepads() {
  gamepadFrame = 0;
  for (const pad of navigator.getGamepads?.() ?? []) {
    if (!pad?.connected || pad.mapping !== "standard") continue;
    const state = gamepads.get(pad.index) ?? { held: new Map(), axes: null };
    gamepads.set(pad.index, state);
    pad.buttons.slice(0, GAMEPAD_BUTTONS.length).forEach((button, index) => {
      const name = GAMEPAD_BUTTONS[index];
      if (button.pressed && !state.held.has(index)) {
        gamepadKey(name, true, false);
        const repeat = () => { gamepadKey(name, true, true); state.held.set(index, setTimeout(repeat, 50)); };
        state.held.set(index, setTimeout(repeat, 500));
      } else if (!button.pressed && state.held.has(index)) {
        clearTimeout(state.held.get(index));
        state.held.delete(index);
        gamepadKey(name, false, false);
      }
    });
    const axes = [pad.axes[0] ?? 0, pad.axes[1] ?? 0, -(pad.axes[3] ?? 0)].map(v => Math.round(Math.max(-1, Math.min(1, v)) * 100) / 100);
    if (String(axes) !== String(state.axes)) {
      state.axes = axes;
      input({ type: "axes", pan: axes.slice(0, 2), zoom: axes[2] });
    }
  }
  if (gamepads.size) gamepadFrame = requestAnimationFrame(pollGamepads);
}
window.addEventListener("gamepadconnected", () => { gamepadFrame ||= requestAnimationFrame(pollGamepads); });
window.addEventListener("gamepaddisconnected", (e) => {
  releaseGamepad(e.gamepad.index);
  gamepads.delete(e.gamepad.index);
});
window.addEventListener("blur", () => {
  for (const pad of gamepads.values()) { for (const held of pad.held.values()) clearTimeout(held); pad.held.clear(); pad.axes = null; }
});
window.addEventListener("blur", () => {
  endWorkspaceGesture(null, true);
  cursorInput(null);
  heldPointers.clear();
  const reply = input({ type: "blur" });
  edgeReply(reply);
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
  }
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
  const wasmInstance=await init({module_or_path: wasmModule});
  wasmMemory=wasmInstance.memory;
  configure_gpu_diagnostics(event=>gpuDiagnostics.record(event));
  performance.mark("capy.startup.wasm");
  // Let the browser start the worker while the main thread builds controls.
  await new Promise(resolve => setTimeout(resolve, 0));
  const storageWorker=createStoreWorker(wake);
  const fileWorker = createRasterWorker(wasmModule,event=>gpuDiagnostics.record(event),storageWorker);
  const rasterWorker = async request=>{
    try{return await fileWorker(request);}
    finally{if(request.operation==='image-decode'||request.operation==='package-normalize'||request.operation==='nearest-coordinates'||request.operation==='encode')wake();}
  };
  configure_raster_worker(rasterWorker);
  configure_store_transport(storageWorker,wake,(metadata,bytes)=>rasterWorker({operation:'package-normalize',metadata,buffers:[bytes]}));
  canvas.width = 800;
  canvas.height = 600;
  let savedPreferences, restoreError;
  try { savedPreferences = localStorage.getItem(settingsKey); }
  catch (error) { restoreError = error; }
  const preferredLanguages = Array.from(navigator.languages ?? []);
  const mobileBrowser = navigator.userAgentData?.mobile || /Android|iPhone|iPad|iPod/.test(navigator.userAgent)
    || (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  app = WebApp.create(canvas, savedPreferences, preferredLanguages, screenInfo(), mobileBrowser);
  app.device_class(browserDeviceClass(matchMedia('(pointer: coarse)').matches,screen));
  bootstrap = liveCopy(app, "bootstrap_view");
  delivery = liveCopy(app, "document_delivery_copy");
  document.documentElement.lang = bootstrap.active_tag;
  for (const [id, label] of [["workspace", bootstrap.drawing_workspace], ["canvas", bootstrap.drawing_canvas], ["gpu-notice", bootstrap.canvas_availability], ["header-start", bootstrap.application_menus], ["header-end", bootstrap.workspace_controls], ["canvas-status", bootstrap.canvas_status]]) $(id).setAttribute("aria-label", label);
  $("canvas").setAttribute("aria-description", bootstrap.drawing_canvas_help);
  refreshStartup();
  $("status").textContent = bootstrap.starting_webgpu;
  app.prediction_availability(typeof globalThis.PointerEvent?.prototype.getPredictedEvents === "function");
  const themeAction = () => ({
    type: "system_theme_changed",
    theme: systemTheme.matches ? "dark" : "light",
  });
  app.dispatch(themeAction());
  window.addEventListener("storage", (event) => {
    if (event.key !== settingsKey) return;
    try { dispatch({ type: "restore_saved_settings", saved: localStorage.getItem(settingsKey) ?? "{}" }); }
    catch (error) { console.error(error); message({document_host_error:{type:"delivery",reason:{type:"restore_preferences",detail:String(error)}}}); }
  });
  systemTheme.addEventListener("change", () => dispatch(themeAction()));
  window.addEventListener("languagechange", () => { app.preferred_languages(Array.from(navigator.languages ?? [])); queueLanguage(); });
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) return;
    app.preferred_languages(Array.from(navigator.languages ?? []));
    try { const saved = localStorage.getItem(settingsKey); if (saved) dispatch({type:"restore_saved_settings",saved}); } catch {}
    queueLanguage();
  });
  state = app.state_update();
  catalog = liveCopy(app, "catalog");
  performance.mark("capy.startup.model");
  document.documentElement.style.setProperty("--ui-text-size", `${catalog.text_size_pt}pt`);
  for(const [key,value] of Object.entries(catalog.panel_metrics))document.documentElement.style.setProperty(`--panel-${key.replaceAll("_","-")}`,`${value}${key.endsWith('_chars')?'ch':'px'}`);
  for(const [key,value] of Object.entries(app.divider_metrics()))document.documentElement.style.setProperty(`--divider-${key}`,`${value}px`);
  publishAppName();
  fillGesture=createFillGesture({workspace,canvas,element,glassChanged:()=>glass?.queue()});
  fillGesture.refresh(app.color_preview().fill_gesture);
  const motionChanged=()=>dispatch({type:'system_motion_changed',reduced:systemMotion.matches});
  systemMotion.addEventListener('change',motionChanged);motionChanged();
  penResponse=createPenResponse({app,state:()=>state,workspace,element,button,icon,numberField,dispatch});
  observePenInput({workspace,canvas,dispatch,position,owner:()=>state.document_file.epoch});
  refreshPreferences = createPreferences({ onKey:event=>keyInput(event,true,null,true), app, element, button, icon, dropdown, numberField, panelFrame, dispatch, nativeCopy: catalog.native_copy, view: () => app.preferences_cached() });
  commandBar = createCommandBar({app,element, button, icon, dispatch, style:catalog.command_search_style, nativeCopy:catalog.native_copy, canvas, layoutChanged:() => glass?.queue()});
  panelNames = Object.fromEntries(catalog.panels.map((p) => [p.id, p.label]));
  // Issue the first storage request before constructing panel controls. Replies
  // run in later tasks, after this synchronous UI construction is complete.
  workspaceManager = createWorkspaceManager({ app, store: workspaceStore, applyChange, element, button, icon, dropdown, message, openMenu: node => customization.openMenu(node) });
  selectionUi = createSelectionUi({app,state:()=>state,element,button,icon,dropdown,numberField,dispatch,workspace});
  const separate=action=>dispatch({type:'frequency_separation',action});
  frequencySeparationUi = createPreviewPanel({app,name:'frequency-separation',view:()=>state.layer_tools.frequency_separation,kind:v=>v.label,
    value:radius=>separate({op:'radius',radius}),apply:()=>separate({op:'apply'}),cancel:()=>separate({op:'cancel'}),
    element,button,icon,numberField,workspace});
  canvasSizeUi = createCanvasSizeUi({app,state:()=>state,element,button,dropdown,icon,numberField,resolve:request=>app.number_input(request),dispatch});
  imageSizeUi = createImageSizeUi({app,state:()=>state,element,button,dropdown,icon,numberField,resolve:request=>app.number_input(request),dispatch});
  configureColorEditor({dispatch,icon,wasmModule});
  editor = createEditorPanels({selectionUi,app,wasmModule,state:()=>state,workspace,canvas,element,button,icon,dropdown,numberField,dispatch,asset,wake,applyChange,contentChanged:panelContentChanged,showContext:(node,point)=>customization.showContext(node,point)});
  palettes = createPalettes({ app, state: () => state, workspace, element, button, icon, panelFrame, applyChange, rasterWorker,
    dismissContext: () => customization?.dismissContext(), contentChanged: panelContentChanged });
  buildHeader();
  buildPanels();
  paintPairView = app.paint_pair();
  customization = createCustomization({ app, rasterWorker, catalog, state: () => state, paintPair: () => paintPairView, workspace, panels, groups,
    element, button, icon,dropdown, numberField, panelFrame,
    dispatch, draggable, grip, place, updateZen, editor });
  workspaceChrome = createWorkspaceChrome({app,frameInterval:()=>displayInterval,state:()=>state,workspace,element,button,icon,place,dispatch,customization,editor,panelFrame,panels,draggable,grip,contentPanel,tabLabel,releaseTabs,queueGlass:()=>glass?.queue()});
  bubbles = createBubbles({app,workspace,element,button,icon,state:()=>state,dispatch,applyChange,wake,glassChanged:()=>glass?.queueBubbles(),customization,contentPanel,rasterWorker,asset,cancelWorkspace:()=>endWorkspaceGesture(null,true),viewport:()=>workspaceViewport,leaveCanvas:()=>cursorInput(null)});
  panelVectors=createPanelVectors({workspace,groups,place,
    project:metadata=>rasterWorker({operation:'panel-vectors',metadata,buffers:[]}),
    changed:()=>glass?.queue(),failed:error=>{workspaceLayoutFinished=workspaceLayoutRequested;clearWorkspaceTabDrop();message(error.message);}});
  glass = createGlass({app,canvas,workspace,connections:()=>workspaceChrome.connections(),vectors:()=>panelVectors.glass(),bubbles:()=>bubbles.glass(),enabled:()=>state.palette?.glass.transparency!=="off",wake});
  documents = createDocuments({app,bootstrap,delivery,state:()=>state,canvas,canvasReady:()=>gpuReady,dispatch,applyChange,wake,element,button,icon,dropdown,numberField,message,gpuOperation,rasterWorker,resumeCanvas:resumeDocumentCanvas,contentChanged:panelContentChanged,refreshInputContext:()=>chromeInput({kind:"refresh"}),showMenu:page=>workspaceChrome.openMenu(page)});
  documents.mountProof(panels.get("proof"));
  const capy = button("",()=>dispatch(app.capy_action()),"tile-button");
  capy.id = "zen-capy"; capy.hidden = true;
  customization.target(capy, {kind:"zen_mode"});workspace.append(capy);
  header = createHeader({app,state:()=>state,paintPair:()=>paintPairView,workspace,element,button,icon,place,dispatch,customization,systemStatus,updateZen,documents,capy});
  phone = createPhone({app,state:()=>state,workspace,capy,header,element,button,icon,dropdown,place,dispatch,rasterWorker,customization,changed:()=>glass?.queue()});
  canvasBar = createCanvasBar({ app, workspace, element, button, icon, marker: customization.variationMarker, dispatch, glass, reappearMs: catalog.canvas_bar_reappear_ms, metrics: () => `${devicePixelRatio}:${panelFontGeneration}:${catalog.text_size_pt}`,
    openMenu: node => customization.openMenu(node), presented: () => { selectionUi.place(); frequencySeparationUi.place(); notice?.place(); } });
  notice = createNotice({ above:(notice,bar)=>app.notice_above(notice,bar), arrangement: request => app.toolbar_ui(request), workspace, element, button, glass, tiles: app.toolbar_ui({ type: "style", style: "small" }), answer: answerNotice, layout: () => layout, bar: () => selectionUi.bounds() ?? frequencySeparationUi.bounds() ?? canvasBar.bounds() });
  zoomReadout = createZoomReadout({ root: $("view-info"), workspace, canvas, element, button, icon, numberField, catalog,
    menu: () => app.zoom_menu(), renderMenu: customization.renderMenu, refreshMenu: customization.refreshMenu,
    dispatch, camera: () => state.camera, toggled: updateZen });
  const screenChip = element("button", "proof-status");
  screenChip.id = "screen-status";
  $("canvas-status").insertBefore(screenChip, $("view-info"));
  screenStatus = createScreenStatus({ root: screenChip, workspace, canvas, element, icon, dispatch, nativeCopy:catalog.native_copy });
  performance.mark("capy.startup.controls");
  update(255);
  systemStatus.sync();
  $("status").textContent = "";
  if (restoreError) { console.error(restoreError); message({document_host_error:{type:"delivery",reason:{type:"restore_preferences",detail:String(restoreError)}}}); }
  new ResizeObserver(() => {
    workspaceViewport = [workspace.clientWidth, workspace.clientHeight];
    arrange();
  }).observe(workspace);
  // Test harness accesses the actual Wasm instance and native widgets.
  window.layerApp = { app, dispatch, state: () => app.state(), wake, canvas, startupTimes, documents, restartGpu };
  performance.mark("capy.startup.ui");
  await workspaceManager.ready;
  documents.startRecovery().catch(error => {const detail=String(error);message(()=>app.document_recovery_unavailable(detail));});
  performance.mark("capy.startup.gpu");
  await startGpu();
  documents.loadPapers().catch(error => message(String(error)));
  if (window.launchQueue?.setConsumer) {
    let launches=Promise.resolve();
    window.launchQueue.setConsumer(params=>{
      const files=params.files??[];
      launches=launches.then(async()=>{
        if(!files.length)return;
        const deadline=performance.now()+240000;
        while(launchCover.blocking||documents.busy()||!app.document_park_ready()||hasModalDialog()) {
          if(performance.now()>deadline)throw Error(delivery.open_drawings_operation);
          await new Promise(resolve=>setTimeout(resolve,50));
        }
        const selected=[];for(const handle of files)selected.push({file:await handle.getFile(),handle});
        await documents.openFiles(selected);
      }).catch(error=>message(String(error)));
    });
  }
} catch (error) {
  launchCover.diagnostic();
  $("gpu-notice").replaceChildren(element("h1", "", bootstrap?.application_start_failed??"Capy Canvas"), element("pre", "", String(error)));
  $("status").textContent = "";
  console.error(error);
}

function stopGpu(error) {
  // A retired device may finish compilation late, or never settle its Promise.
  // Neither case may hold the new renderer’s compilation lane or stop it.
  compilerEpoch++;compilerScheduled=false;
  gpuReady=false;pending.length=0;
  const report=gpuDiagnostics.capture(error,()=>({
    ...app.gpu_diagnostics(),user_agent:navigator.userAgent,device_memory_gib:navigator.deviceMemory??null,
    main_wasm_bytes:wasmMemory?.buffer.byteLength??null,
    navigation:performance.getEntriesByType('navigation')[0]?.type??null,
  }));
  suspendGpuForReport(report,()=>applyChange(app.suspend_gpu()));
  launchCover.diagnostic();
  const notice=$("gpu-notice");notice.hidden=false;
  notice.replaceChildren(element("p","",report.recovery_error?bootstrap.canvas_recovery_failed:bootstrap.canvas_stopped),
    element('p','diagnostic-detail',report.error),button(bootstrap.restart_canvas,()=>restartGpu()),
    gpuReportDetails({report,diagnostics:gpuDiagnostics,copy:bootstrap,element,button,clipboard:navigator.clipboard}));
  document.body.dataset.gpu="unavailable";
  return !report.recovery_error;
}
setInterval(()=>{if(gpuReady){const error=app.gpu_failure();if(error)stopGpu(error);}},1000);
async function restartGpu() {
  if(!stopGpu(bootstrap.restarting_canvas))return;
  compilerFailed=false;
  for(const key of Object.keys(startupTimes))startupTimes[key]=null;
  await startGpu();
}

function documentGpuCurrent(owner) {
  const current = app.state().document_file;
  return owner.epoch === current.epoch && owner.revision === current.revision;
}

async function resumeDocumentCanvas() {
  compilerEpoch++;compilerScheduled=false;compilerFailed=false;
  gpuReady=app.gpu_ready();pending.length=0;
  for(const key of Object.keys(startupTimes))startupTimes[key]=null;
  if(!gpuReady){
    const owner=app.state().document_file;
    try{
      await app.await_document_backing();
      if(!documentGpuCurrent(owner))return;
      const gpu=await gpuOperation(()=>app.resume_document_gpu());
      if(!documentGpuCurrent(owner)){gpu?.free();return;}
      if(gpu)app.attach_gpu(gpu);
      gpuReady=app.gpu_ready();
    }catch(error){if(documentGpuCurrent(owner))stopGpu(error);return;}
  }
  if(!gpuReady)await startGpu();
  else {document.body.dataset.gpu='ready';if(!$('gpu-notice').hasAttribute('data-launch'))$('gpu-notice').hidden=true;refreshStartup();wake();}
  // Renderer replacement refreshes shared command availability. Publish that
  // change after attachment so retained controls do not keep their parked state.
  if(gpuReady){update(255);wake();}
}

async function startGpu() {
  if (gpuStarting || gpuReady) return;
  gpuStarting = true;
  document.body.dataset.gpu = "starting";
  const notice = $("gpu-notice");
  refreshStartup();
  try {
    if (!isSecureContext) throw new Error("WebGPU requires HTTPS or localhost.");
    if (!navigator.gpu) throw new Error("navigator.gpu is unavailable.");
    while(!gpuReady){
      const owner=app.state().document_file;
      let gpu;
      try{
        await app.await_document_backing();
        if(!documentGpuCurrent(owner))continue;
        gpu=await createGpu();
      }catch(error){if(!documentGpuCurrent(owner))continue;throw error;}
      if(!documentGpuCurrent(owner)){gpu.free();continue;}
      app.attach_gpu(gpu);
      gpuReady=true;
    }
    document.body.dataset.gpu = "ready";
    if (!notice.hasAttribute("data-launch")) notice.hidden = true;
    refreshStartup();
    wake();
  } catch (error) {
    document.body.dataset.gpu = "unavailable";
    launchCover.diagnostic();
    showGpuNotice({ container: notice, error, restart: restartGpu, restartLabel: bootstrap.restart_canvas });
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
