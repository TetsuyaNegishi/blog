---
external: false
title: parcelを使ってemotionをビルドする
date: 2020-07-02
---

parcelで[emotion](https://emotion.sh/)を使うにはとくに設定をする必要はない。
`@emotion/core`と`@emotion/styled`を`yarn add`でインストールすればよい。

```shell
yarn add @emotion/core @emotion/styled
```

僕はstyled-componentsよりもemotionのほうが好きだ。
理由は[css prop](https://emotion.sh/docs/css-prop)が使えるから。

css propを使うにはbabelのpresetを入れる必要がある。
しかし、parcelでbabelを入れる方法がよくわからない。残念。

<!-- textlint-disable ja-technical-writing/ja-no-weak-phrase -->
parcelで.babelrcが使えるのだろうけど(実際.babelrcを使ってビルドしているコードも見つけた)、独自のconfigを書かないといけないなら諦めたほうがよいのかもしれない。
<!-- textlint-enable ja-technical-writing/ja-no-weak-phrase -->

[Parcelを使ったらその魅力は「Configを書かなくても良い」ではなく「Configを書かせない」なのだと気づいた](https://medium.com/@terrierscript/parcel-config-6f942da4d199)
