---
external: false
title: node:プレフィックスについて調べた
date: 2023-05-07
---

```ts
import fs from 'node:fs'
```

node.jsのコアモジュールをimportするとき、`node:fs`のような`node:`というプレフィックスをつけた書き方をよく目にする。
なぜ`node:`をつけるような書き方をしているのか理解していなかったので調べてみた。

## コアモジュールとは

コアモジュールとはnode.jsが提供している組み込みモジュールのことを指す。
要は`npm install`で追加しなくても使えるモジュールのこと。
ファイルを扱う`fs`やイベントエミッターを提供する`events`、ファイルパスを操作する`path`などがある。

コアモジュールは[node.jsのプロジェクトの`lib`](https://github.com/nodejs/node/tree/main/lib)に実装されている。
これらの関数はブラウザには実装されていないが、バンドルツールが`lib`を参照することによってフロントエンドのプロジェクトでも使うことは可能。

## `node:`プレフィックスはいつから使えるようになったのか？

[node.jsの最新のドキュメント](https://nodejs.org/dist/latest-v20.x/docs/api/)を見るとどれも`node:js`プレフィックスをつけてコアモジュールは読み込まれている。
導入されたのは結構前でv14のときから使えたようである([リリースノート](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V14.md#2021-09-28-version-14180-fermium-lts-targos))。

## 導入の背景

`node:`プレフィックスが導入された目的はコアモジュールと3rd partyのモジュールを明確に区別するため。
コアモジュールには`querystring`というパッケージがあるが、npmからも同じ名前のパッケージが存在していてややこしい事になっていた。

また、`node:`プレフィックスが導入されたことによってコアモジュールのパッケージ名の選択の幅が広がっている。
node.jsのv18から提供されている`node:test`パッケージは`test`というありふれた名前がパッケージ名につけられている。
これは`node:`プレフィックスが導入されコアモジュールであることを明示的に示せるようになったことが影響している。

今後追加されるパッケージは`node:`プレフィックスをつけないとimportできないらしい。
`node:`プレフィックスが使える環境でコアモジュールをimportするときは、デメリットがないので基本的に`node:`プレフィックスをつけたほうが好ましい。

## 参考リンク
- [Add support for node:‑prefixed imports of built‑in modules to require(…)](https://github.com/nodejs/node/issues/36098)
- [Node.js 18 Introduces Prefix-Only Core Modules](https://stateful.com/blog/node-18-prefix-only-modules)
- [Node.js コアモジュールの import/require には `node` schemeがつけられる](https://yosuke-furukawa.hatenablog.com/entry/2021/12/27/003424)
