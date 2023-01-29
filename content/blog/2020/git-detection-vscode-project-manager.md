---
external: false
title: VSCode Project Managerのgit detectionが最高だった
date: 2020-07-05
---

VSCodeの[Project Manager](https://github.com/alefragnani/vscode-project-manager)という拡張があるが、インストールしただけであまり使いこなせてなかった。
知らない間に`git detection`という機能が追加されていて、使ってみたら最高だった。

サイドバーから`Project Manager`のタブを開くとGITというセクションが追加されている。

![GITセクションのデフォルトの状態](https://i.imgur.com/ebFXg8m.png)

`Open Settings`をクリックすると`settings.json`が開く。
"projectManager.git.baseFolders"にはgitプロジェクトを検出したいディレクトリのpathを入力する。

自分は[ghq](https://github.com/x-motemen/ghq)でgitのプロジェクトを管理していて、`~/ghq`配下にプロジェクトが置かれるようにしている。
なので`~/ghq`をpathに設定した。

設定後はgitのプロジェクトの一覧が表示されるようになって、ここからワークスペースに追加したり、新しいwindowで開いたりできるようになる。

![GITセクションがプロジェクトを読むようになった状態](https://i.imgur.com/bUggRgS.png)

いろいろなプロジェクトへVSCode上から移動できてかなり便利になった。
