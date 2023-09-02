import { Processor } from "postcss";
import * as sass from "sass";
import autoprefixer from "autoprefixer";
import fs from "fs";
import path from "path";

import { getLocation, getPath } from "./location.js";
import log from "./log.js";

export default async () => {
    const startTime = performance.now();

    // Compile scss
    let target = "scss/main.scss";
    if (!fs.existsSync(target)) throw new Error("SCSS file not found");

    const css = sass.compile(target, {
        style: "expanded",
        charset: false,
        loadPaths: ["node_modules"]
    }).css;
    const postcss = new Processor([autoprefixer]).process(css);
    const result = postcss.css;

    if (!result) {
        log.error("Could not generate file");
        return;
    }

    const endTime = performance.now();
    log.success(`Built in ${(endTime - startTime).toFixed()}ms`);

    // Write to disk
    const mods = ["BetterDiscord", "Replugged", "Vencord"];

    mods.forEach((mod) => {
        const location = getLocation(mod);
        if (!fs.existsSync(getPath(location[0]))) {
            log.warning(`${mod} folder not found.`);
            return;
        }
        fs.writeFileSync(path.join(location[0], location[1]), css);
        log.success(`Wrote to ${mod} folder`);
    });
};
