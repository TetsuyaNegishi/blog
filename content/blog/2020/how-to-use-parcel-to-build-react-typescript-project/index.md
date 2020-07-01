---
title: parcelを使ってReact+TypeScriptをビルドするまでの手順まとめ
date: "2020-07-01"
---

ゼロからparcelを使ってReact+TypeScriptをビルドするまでの手順をまとめておく。

## TypeScriptのセットアップ

TypeScriptを`yarn add`で入れる。

```shell
yarn add -D typescript
```

tscコマンドを使ってtsconfig.jsonを生成する。

```shell
yarn tsc --init
```

デフォルトのtsconfig.jsonはjsxに対応していないので設定を変える。
"compileOptions"の中の"jsx"を下のようにする。
その他のキーはデフォルトのままでよい。

```json
{
  "compilerOptions": {
    "jsx": "react"
  }
}
```

## parcelの導入

まずparcelを`yarn add`で入れる。

```shell
yarn add -D parcel
```

適当なhtmlファイルを作ってparcelが動くか試してみる。

以下のようなsrc/index.htmlを作る。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Page Title</title>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
  </body>
</html>
```

htmlファイルをビルドする。
以下のコマンドを叩くとビルドが成功して`http://localhost:1234`にアクセスできる。
index.htmlには何も書いていないので真っ白な画面が表示されるはず。

```shell
yarn parcel src/index.html
```

## Reactをビルドする

ReactをTypeScriptで動かすために必要なものを入れる。

```shell
yarn add react react-dom @types/react @types/react-dom
```

Reactマウント先とエントリーポイントを`index.html`に追加する。
Reactのエントリーファイルは`src/main.tsx`に書く。
エントリーファイルのパスは相対パスで書いておけば良い。
ビルド時にparcelがパス解決してくれる。

```html
<body>
  <div id="app"></div> <!-- Reactアプリのマウント先 -->
  <script src="./main.tsx"></script> <!-- Reactアプリのエントリーポイント -->
</body>
```

`src/main.tsx`を以下のような内容で作成する。

```tsx
import React from 'react';
import { render } from 'react-dom';

render(<div>test</div>, document.getElementById('app'));
```

`yarn parcel src/index.html`でアプリケーションを立ち上げて"test"と表示されれば成功。

## 所感

parcelを使うとconfigをほぼ書かずにReactを立ち上げることができた。webpackだったら`webpack.config.js`を作って、loaderを入れないといけない。parcelは楽。

今までは簡単なアプリでもcreate-react-appからプロジェクトを作成していた。
reate-react-appは簡単に作れるがsvg-loaderとかpwa関連のものとか、いらないものも入ってしまう。
簡単なアプリを作るときはparcelを使ってサクッと立ち上げるのが良いと思った。
