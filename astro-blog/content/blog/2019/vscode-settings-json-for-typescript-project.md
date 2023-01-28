---
external: false
title: VSCodeでTypeScriptのコードを書くときに置いているsettings.json
date: 2019-05-02
---

普段はVSCodeを使ってプログラムを書いている。

VSCodeはプロジェクトの直下に`.vscode/settings.json`を置くと、そのプロジェクト固有のVSCodeの設定を書くことができる。

TypeScriptのプロジェクトには以下のようなsettings.jsonをいつも置いている。

```json
{
  "files.autoSave": "off",
  "editor.tabSize": 2,
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.tslint": true
  }
}
```

オートセーブ時にtslintを走らせるようにしている。
tslintを走らせることで適当に書いてもインデントが整うので非常に便利。
