import path from "path";
import { fileURLToPath } from "url";
import pc from "picocolors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const r = (...args) => path.resolve(__dirname, "..", ...args);

export function log(name, message) {
  console.log(pc.cyan(`[${name}]`), message);
}
