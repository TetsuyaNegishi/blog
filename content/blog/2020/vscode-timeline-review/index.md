---
title: VSCodeのタイムライン機能を試した
date: "2020-04-12"
---

VSCodeのv1.44にタイムラインという機能が追加されました。

VSCodeをv1.44以上にアップデートしてサイドバーを開くとタイムラインというセクションが表示されます。

![タイムライン](timeline.png)

タイムラインには今開いているファイルのコミット履歴が表示されます。
また、コミット履歴をクリックするとコミットのdiffが開きます。

![diff](diff.png)

Gitの履歴を確認するときは[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)を使うのが定番でした。
ちょっとした確認はタイムラインを使って、がっつり調べるときはGitLensを使うと良さそうです。
