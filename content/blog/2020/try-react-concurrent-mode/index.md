---
title: ReactのConcurrent Modeを触った所感
date: "2020-04-13"
---

## ざっくりとしたSuspenseの使い方

Suspenseを使うと非同期処理でデータ取得の待機を意識せずにコンポーネントを書くことができる。

```tsx
const Test:React.FC = () => (
	<Suspense fallback={<Loading />}>
		<Profile />
	</Suspense>
)
```

上のコードではProfileコンポーネント内でデータを取得させる。
Profileがpromiseをthrowしているときは`<Loading />`がレンダリングされ、そうではない場合に`<Profile />`がレンダリングされる。

## 気になる点

- コンポーネントがpromiseをthrowしているところ
  - ぱっとコーディングできないのは慣れていないからだろうか
	- おそらくうまくラップしたライブラリが出て、みんなそれを使うことになりそう
- APIからデータを取得するときはなるべくrootに近いレイヤーのコンポーネントで行っていたが、その戦略は取れなくなりそう
  - 役割ごとにコンポーネントを分けて、APIからデータを取得するのがよい？
  - コンポーネントの設計に大きな影響がでそう

## 参考にしたもの

- [React公式ドキュメントのConcurrent Modeのセクション](https://ja.reactjs.org/docs/concurrent-mode-intro.html)
- [Concurrent Mode時代のReact設計論](https://qiita.com/uhyo/items/4a6315bfccf387407631)
