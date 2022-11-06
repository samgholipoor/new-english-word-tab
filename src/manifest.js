import fs from "fs-extra";
import { r } from "../scripts/utils";

export async function getManifest() {
  const pkg = await fs.readJson(r("package.json"));

  const manifest = {
    manifest_version: 2,
    name: pkg.name,
    description: pkg.description,
    version: pkg.version,

    chrome_url_overrides: {
      newTab: "./index.html",
    },
  };

  return manifest;
}
