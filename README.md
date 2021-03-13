# Obsidian Zettelkasten command plugin

This plugin for Obsidian (https://obsidian.md) adds a command to insert a Zettel ID at the cursor position. This can be useful when creating links in the text to new notes. (The Obsidian Zettelkasten prefixer core plugin also adds a Zettel ID on creation of a new note, but this does not work when creating a note from a link in the note text.)

## Usage

Invoke the command 'Insert Zettel ID' via the command palette or the hotkey, by default `Ctrl+Shift+U `. You can change the hotkey via Obsidian settings.

The Zettel ID has the following format: yyyyMMddHHmm. Example of a Zettel ID: 202103132006.

## How to develop this plugin

- Clone this repo.
- `npm i` or `yarn` to install dependencies
- `npm run dev` to start compilation in watch mode.

## Manually installing the plugin

- Copy over `main.js`, `styles.css`, `manifest.json` to your vault `VaultFolder/.obsidian/plugins/your-plugin-id/`.
