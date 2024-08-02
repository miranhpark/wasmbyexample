// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import wasmInit from "./pkg/hello_world.js";

const runWasm = async () => {
    // Instantiate our wasm module
    const rustWasm = await wasmInit(
      "./pkg/hello_world_bg.wasm"
    );
  
    // Run the exported function
    rustWasm.console_log_from_wasm(); // Should log "This console.log is from wasm!"
  };
  runWasm();