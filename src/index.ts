import compile from "./compile.js";
import sade from "sade";
import chokidar from "chokidar";
import log from "./log.js";

const prog = sade("quickscss");

prog.command("compile")
    .describe("Compile scss to css")
    .action(async () => {
        try {
            await compile();
        } catch (error) {
            log.error(error);
        }
    });

prog.command("watch")
    .describe("Watch the scss folder for changes and autocompile them to the respective theme folders.")
    .action(async () => {
        chokidar
            .watch("scss", { usePolling: true })
            .on("ready", () => {
                log.info("Watching scss folder for changes...");
            })
            .on("change", async () => {
                try {
                    await compile();
                } catch (error) {
                    log.error(error);
                }
            });
    });

prog.parse(process.argv);
