// Import our outputted wasm ES6 module
// Which, export default's, an initialization function
import wasmInit, {
    add_wasm_by_example_to_string
  } from "./pkg/hello_world.js";

const runWasm = async () => {
    // Instantiate our wasm module
    const rustWasm = await wasmInit("./pkg/hello_world_bg.wasm");
  
    // Call our exported function
    const helloString = add_wasm_by_example_to_string("Hello from ");
  
    // Log the result to the console
    console.log(helloString);
    document.body.textContent = `Hello World! ${helloString}`;
};
runWasm();