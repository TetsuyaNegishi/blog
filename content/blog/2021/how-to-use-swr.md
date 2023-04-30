---
external: false
title: useSWRと従来のHTTPクライアントとの違い
date: 2021-01-03
---

## SWRとは

[SWR](https://swr.vercel.app/)とはデータ取得のための React Hooks ライブラリーです。
ざっくりというとfetch関数のhookバージョンと思ってもらえればよいです。

SWRは`useSWR`というhookを提供しています。
この`useSWR`を使うことでAPIのデータ取得を宣言的に書くことができるようになります。

## 基本的な使い方

`useSWR`は第一引数にURLを渡すことでデータ取得できます。
サンプルとして[時刻を取得するAPI](`http://www.nict.go.jp/JST/http.html`)を叩いて見ます。

```tsx
import React from "react"
import useSWR from "swr"

export default function App() {
  const { data } = useSWR<{st: number}>("https://ntp-b1.nict.go.jp/cgi-bin/json")  // ①
  if(!data) { // ②
    return <div>initial loading</div>
  }

  const dateTime = new Date(data.st * 1000).toString()
  return (
    <div>
      {dateTime}
    </div>
  )
}
```

プレビューは[こちら](https://codesandbox.io/s/useswr-sample-3ysbj?file=/src/App.tsx)。

取得したデータは`useSWR`が返すオブジェクトのdataプロパティに格納されます(①)。
また、②でdataの値があるかチェックしているのは、dataの初期値がundefinedのためです。

## 従来のHTTPクライアントとの違い

axiosなど従来のHTTPクライアントは関数を呼び出すことでデータを取得します。
そのため、最新のデータに更新したい場合は、再度データ取得の関数を呼び出す必要があります。

一方、`useSWR`は関数を呼び出す必要はなく、データ取得のタイミングなどはすべてライブラリ側が管理します。

以下のことは従来のHTTPクライアントは自前で管理する必要がありました。
`useSWR`ではすべてライブラリ側が管理してくれるので、利用者が意識する必要はありません。

- いつデータを取得するか
- データのキャッシュ
- どうやってデータを再取得して更新するか
- エラーが発生した場合、どうやってリトライするか

[プレビュー](https://codesandbox.io/s/useswr-sample-3ysbj?file=/src/App.tsx)で画面にフォーカスを当てたり外したりすると、データの再取得が確認できます。
