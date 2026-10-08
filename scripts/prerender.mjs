/**
 * Bakes the rendered page into dist/index.html so search engines and link
 * previews get real content without running JavaScript. React then hydrates it.
 */
import { readFile, rm, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const { render } = await import(pathToFileURL(path.resolve("dist-server/entry-server.js")).href);

const file = "dist/index.html";
const html = await readFile(file, "utf8");
const marker = '<div id="root"></div>';
if (!html.includes(marker)) throw new Error(`prerender: ${marker} not found in ${file}`);

await writeFile(file, html.replace(marker, `<div id="root">${render()}</div>`));
await rm("dist-server", { recursive: true, force: true });
console.log("prerender: wrote", file);
