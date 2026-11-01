# DADYA IGOR — Batumi Edition (Arcade Prototype)

GitHub-ready browser prototype for the opening arcade/prologue of the game. The project uses the existing pixel-art assets and mechanics discussed for **DADYA IGOR → «В доме напротив»**. It is deliberately a lightweight HTML Canvas build so it can be tested immediately on GitHub Pages; the main planned engine for the full game remains Godot 4.x.

## Run locally

Open `index.html` in a modern browser. For the service worker/offline cache, use a local web server or GitHub Pages. No build step or dependencies are required.

## Publish on GitHub Pages

1. Create a repository and upload the contents of this folder (keep `index.html` at repository root).
2. In **Settings → Pages**, choose deployment from the `main` branch and `/ (root)`.
3. Open the generated Pages URL.

## Current playable flow

- Title screen with the **ИГРАТЬ** button.
- Batumi pixel-art arcade starring thin, ginger Igor, with 5 HP.
- Collect Sarajishvili bottles and lari.
- Batumi dogs give a temporary speed boost.
- Kettlebell marked `32` slows the player.
- Toy restores one HP up to the maximum of 5. After the arcade starts glitching, red glitch fragments can damage HP.
- Bottle 67 triggers the **SIX SEVEN** animation.
- Bottle 69 opens the wardrobe shop (ushanka, black ESSENTIAL hoodie, formal suit, clown nose); the player can buy/equip items and continue the same run.
- At bottle 100, a simulated in-game `SYSTEM ERROR` leads to the dark `პროცესი` loading screen. These effects are only visual game fiction; the prototype does not access or alter the real operating system.

## Controls

- Desktop: arrow keys or WASD; hold up to jump higher; touch/click-and-drag Igor to steer.
- Mobile: on-screen directional buttons or hold and drag Igor.

## Assets and style

Old-school 16-bit pixel-art look with the existing Batumi backgrounds and character/item art in `assets/`. Replace or improve the source images in that folder without changing their filenames to keep the current code working.

## Scope note

This is the **arcade starter**, not the complete Godot game. The visual novel chapter, more detailed glitch sequence, world destruction and full `პროცესი` transition remain future stages. See `MASTER_PROMPT_RU.md` and `GAME_DESIGN_DOCUMENT.md` for the larger design.
