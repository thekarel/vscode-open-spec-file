# VSCode Open Spec File

A Visual Studio Code extension to simplify your TDD workflow by creating and opening the .spec file next to the source with one command.

## Purpose

The extension will create an empty file next to the current one with the exact base name plus the suffix `.spec`. So if you're editing `/home/You/module.js` and run the Open Spec File command you VSCode will open `/home/You/module.spec.js` in the second column (so you can work on the source and spec side-by-side).

## Usage

You can use the Command Palette: `> Open Spec File`, or the default key binding: `⌘+K ⌘+K` / `CTRL-K CTRL-K`

![Open Spec File demonstration](http://i.imgur.com/K8ju9Oe.gif)