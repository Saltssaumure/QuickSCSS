import path from "path";

export const getLocation = (clientMod: string) => {
    let os = process.platform;
    let file: string;
    let relFolder: string;
    let folder: string;

    switch (clientMod) {
        case "BetterDiscord":
            file = "custom.css";
            relFolder = "data/stable";
            switch (os) {
                case "win32":
                    folder = path.resolve(process.env.APPDATA!, clientMod, relFolder);
                    break;
                case "darwin":
                    folder = path.resolve(process.env.HOME!, "Library", "Application Support", clientMod, relFolder);
                    break;
                case "linux":
                    folder = path.resolve(process.env.HOME!, ".local", "share", clientMod, relFolder);
                    break;
                default:
                    throw new Error("OS not supported.");
            }
            break;
        case "Replugged":
            file = "main.css";
            relFolder = "quickcss";
            switch (os) {
                case "win32":
                    folder = path.resolve(process.env.APPDATA!, clientMod, relFolder);
                    break;
                case "darwin":
                    folder = path.resolve(process.env.HOME!, "Library", "Application Support", clientMod, relFolder);
                    break;
                case "linux":
                    folder = path.resolve(process.env.HOME!, ".config", clientMod, relFolder);
                    break;
                default:
                    throw new Error("OS not supported.");
            }
            break;
        case "Vencord":
            file = "quickCss.css";
            relFolder = "settings";
            switch (os) {
                case "win32":
                    folder = path.resolve(process.env.APPDATA!, clientMod, relFolder);
                    break;
                case "darwin":
                    folder = path.resolve(process.env.HOME!, "Library", "Application Support", clientMod, relFolder);
                    break;
                case "linux":
                    folder = path.resolve(process.env.HOME!, ".config", clientMod, relFolder);
                    break;
                default:
                    throw new Error("OS not supported.");
            }
            break;
        default:
            throw new Error("Client mod not supported.");
    }

    return [folder, file];
};

/**
 * Transforms the given value to an absolute path.
 */
export const getPath = (...val: string[]) => {
    return path.resolve(...[...val].flat(42));
};
