import path from "path";

export const getLocation = (clientMod: string) => {
    let os = process.platform;
    let file: string;
    let relFolder: string;
    let folder: string;
    let darwinLoc: string;
    let linuxLoc: string;
    let toLower = false;

    switch (clientMod) {
        case "BetterDiscord":
            file = "custom.css";
            relFolder = "data/stable";
            darwinLoc = "Library/Application Support";
            break;
        case "Replugged":
            file = "main.css";
            relFolder = "quickcss";
            darwinLoc = "Library/Application Support";
            toLower = true;
            break;
        case "Vencord":
            file = "quickCss.css";
            relFolder = "settings";
            darwinLoc = "Library/Application Support";
            break;
        case "Vesktop":
            file = "quickCss.css";
            relFolder = "VencordDesktop/settings";
            darwinLoc = "Library/Application Support";
            clientMod = "VencordDesktop";
            break;
        default:
            throw new Error(`${clientMod} is not a supported client mod.`);
    }

    switch (os) {
        case "win32":
            folder = path.resolve(process.env.APPDATA!, clientMod, relFolder);
            break;
        case "darwin":
            folder = path.resolve(process.env.HOME!, darwinLoc, clientMod, relFolder);
            break;
        case "linux":
            folder = path.resolve(process.env.HOME!, ".config", toLower ? clientMod.toLowerCase() : clientMod, relFolder);
            break;
        default:
            throw new Error(`${os} is not a supported operating system.`);
    }

    return [folder, file];
};

/**
 * Transforms the given value to an absolute path.
 */
export const getPath = (...val: string[]) => {
    return path.resolve(...[...val].flat(42));
};
