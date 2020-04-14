---
title: git switch/restoreの用法
date: "2020-04-14"
---

最近Gitに追加された`switch`と`restore`の使い方についてまとめる。

## ブランチ操作に使うswitch

### ブランチを切り替えるとき

```sh
git switch <branch>
```

### ブランチを新しく作る

```sh
git switch -c <branch> # cはcreateの意味
```

### ブランチを新しく作って、そのブランチに切り替える

```sh
git switch -C <branch>
```

## ファイル変更に使うrestore

### ローカルの変更を消す

```sh
git restore <fine>
```

### addしたファイルをもとに戻す

```sh
git restore -S <file>
```

## switchとrestoreで使わなくなるコマンド

```sh
git checkout <branch>
git branch <branch>
git checkout -b <branch>

git checkout <file>
git reset
```
