---
external: false
title: node:プレフィックスについて調べた
date: 2023-05-07
---

```ts
import fs from 'node:fs'
```

Node.jsのコアモジュールをインポートする際、`node:fs`のように`node:`というプレフィックスを付けた書き方をよく目にします。
なぜ`node:`を付けるような書き方をしているのか理解していなかったので、調べてみました。

## コアモジュールとは

コアモジュールとは、Node.jsが提供している組み込みモジュールのことを指します。つまり、`npm install`で追加しなくても使えるモジュールのことです。
ファイルを扱う`fs`やイベントエミッターを提供する`events`、ファイルパスを操作する`path`などがあります。

コアモジュールは[Node.jsのプロジェクトの`lib`](https://github.com/nodejs/node/tree/main/lib)に実装されています。
これらの関数はブラウザには実装されていませんが、バンドルツールが`lib`を参照することによってフロントエンドのプロジェクトでも使うことが可能です。

## node:プレフィックスはいつから使えるようになったのか？

[Node.jsの最新のドキュメント](https://nodejs.org/dist/latest-v20.x/docs/api/)を見ると、どれも`node:`プレフィックスを付けてコアモジュールが読み込まれています。
導入されたのは結構前で、v14の時から使えるようになったようです（[リリースノート](https://github.com/nodejs/node/blob/main/doc/changelogs/CHANGELOG_V14.md#2021-09-28-version-14180-fermium-lts-targos)）。

## 導入の背景

`node:`プレフィックスが導入された目的は、コアモジュールとサードパーティのモジュールを明確に区別するためです。
コアモジュールには`querystring`というパッケージがありますが、npmにも同じ名前のパッケージが存在しており、ややこしい状況になっていました。

また、`node:`プレフィックスが導入されたことによって、コアモジュールのパッケージ名の選択肢が広がっています。
Node.jsのv18から提供されている`node:test`パッケージは、`test`という一般的な名前がパッケージ名に付けられています。
これは、`node:`プレフフィックスが導入され、コアモジュールであることを明示的に示せるようになったことが影響しています。

今後追加されるパッケージは、`node:`プレフィックスを付けないとインポートできないとされています。
`node:`プレフィックスが使える環境でコアモジュールをインポートする際は、デメリットがないので、基本的に`node:`プレフィックスを付けた方が好ましいです。

## 参考リンク
- [Add support for node:‑prefixed imports of built‑in modules to require(…)](https://github.com/nodejs/node/issues/36098)
- [Node.js 18 Introduces Prefix-Only Core Modules](https://stateful.com/blog/node-18-prefix-only-modules)
- [Node.js コアモジュールの import/require には `node` schemeがつけられる](https://yosuke-furukawa.hatenablog.com/entry/2021/12/27/003424)
