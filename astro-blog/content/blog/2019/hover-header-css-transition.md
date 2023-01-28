---
external: false
title: マウスホバーすると表示されて、ホバーを外すして少ししたら消えるヘッダーの作り方
date: 2019-05-27
---

画像のプレビューなどでよくホバーすると表示されて、ホバーを外して少し時間がたったら消えるヘッダーを作ることになったのでメモ。

![facebookの画像プレビュー画面](https://i.imgur.com/2MnkHyx.gif)

## 実装方法

1. ヘッダーのopacityを通常時は0、ホバーした時は1にする
2. 通常時とホバーした時それぞれのスタイルに`transition: opacity 秒数`を追加する
3. 通常時に`transition-delay`を指定する

<iframe src="https://codesandbox.io/embed/static-l00tu?fontsize=14" title="static" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>

面白いのが`transition`を通常時とホバーした時それぞれに書くところ。両方に書くことでそれぞれの場合で`transition`を書き分けることができる。

本当は初回の読み込み時は表示して一定時間たったら消えるようにしたかった。サンプルコードでは初回読み込み時は表示されない。
どうやらcssのみでは実現できず、jsで処理を書く必要があるみたい。

### 参考

[シュッとしてジワーッと戻るCSS transitionの例](https://qiita.com/nantekkotai/items/ded6d92d2b688eec9cee)
