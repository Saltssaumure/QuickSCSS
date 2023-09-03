[pnpm]:     https://pnpm.io/installation
[bd]:       https://betterdiscord.app
[rp]:       https://replugged.dev
[vc]:       https://vencord.dev
[quickcss]: https://github.com/Saltssaumure/QuickCSS

[license]:  https://github.com/Saltssaumure/QuickSCSS/blob/main/LICENSE

[gibbu]:    https://github.com/Gibbu
[bd-scss]:  https://github.com/Gibbu/bd-scss

# QuickSCSS

QuickSCSS simultaneously compiles SCSS to Custom/Quick CSS of the most popular Discord desktop client mods.

## Requires
- [pnpm][pnpm] (or npm, or yarn)
- One or more of the following client mods:
  - [BetterDiscord][bd]
  - [Replugged][rp]
  - [Vencord][vc]

## Setup
### Quick
Use the [QuickCSS][quickcss] template.

### Manual
1. Create a folder, eg. `my-customisations`
2. Go into the folder: `cd my-customisations`
3. Setup with pnpm: `pnpm init -y && pnpm add quickscss && pnpm i`
4. Create a `scss` folder with a `main.scss` file inside.
```
my-customisations/
└─ scss/
   └─ main.scss
```

## Usage
- `pnpm compile` to compile `scss/main.scss` once.
- `pnpm watch` to watch and compile changes in `scss` folder.

## License
[MIT License][license]
- <span title="Too long; didn't read; not a lawyer">TL;DR;NAL</span>: Do whatever you want with this module, just include the original license.

## Credits
- Thanks to [Gibbu][gibbu]'s [bd-scss][bd-scss] for inspiration and code.