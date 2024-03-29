---
external: false
title: VSCodeのタイムライン機能を試した
date: 2020-04-12
---

VSCodeのv1.44にタイムラインという機能が追加されました。

VSCodeをv1.44以上にアップデートしてサイドバーを開くとタイムラインというセクションが表示されます。

![タイムライン](https://i.imgur.com/jtLhpE6.png)

タイムラインには今開いているファイルのコミット履歴が表示されます。
また、コミット履歴をクリックするとコミットのdiffが開きます。

![diff](https://i.imgur.com/8DhJNZ1.png)

Gitの履歴を確認するときは[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)を使うのが定番でした。
ちょっとした確認はタイムラインを使って、がっつり調べるときはGitLensを使うと良さそうです。
