# VSCode Open Spec File

A Visual Studio Code extension to simplify your TDD workflow by creating and opening the .spec file next to the source with one command.

## Purpose

The extension will create an empty file next to the current one with the existing base name plus the suffix `.spec` (configurable). If you're editing `/home/You/module.js` and run the Open Spec File command VSCode will open `/home/You/module.spec.js` in the second column (so you can work on the source and spec side-by-side).
You can set up a "reverse" matching, for example to open a `.html` file based on a `.css` file.

![Open Spec File demonstration](https://i.imgur.com/K8ju9Oe.gif)

## Usage

You can use the Command Palette: `> Open Spec File`, or the default key binding: `⌘+K ⌘+K` / `CTRL-K CTRL-K`

## Configuration

Using VS Code's preferences, you can set the map of suffixes: 

```
"openSpecFile.suffixMap": {
    ".js": ".spec.js",
    ".html": ".css",
    ".css": ".html",
}
```

The mapping is one-way only, meaning you need to set up "reverse" pairs manually if you want to go from 
extension1 to extension2 and vice versa.

Icon by [Freepik](https://www.flaticon.com/free-icon/link_282100) CC 3.0 BY
