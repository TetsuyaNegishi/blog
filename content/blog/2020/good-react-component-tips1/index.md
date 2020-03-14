---
title: 可読性の高いReactコンポーネントを作るためのTips1
date: "2020-03-08"
---

可読性が高くて使いやすいReactコンポーネントを作るために、普段気をつけていることをまとめておく。

## atom層のコンポーネントのpropsは標準DOM要素がもつpropsと型合わせよう

例えばページ内でスタイルをあわせるために`Button`コンポーネントを作ったとしましょう。

`Button`コンポーネントがクリックされたときに関数を呼び出したいとき、どうやって関数をpropsに渡しますか?
多くのひとがonClick propsに渡そうするでしょう。

もしclick propsに渡す必要があったら驚くでしょう。
なぜならば標準DOM要素`<button>`の場合はonClickに渡せばよいから。

```js
const handleClick = () => alert('click');

<Button onClick={handleClick}>ボタン</Button>
```

atom層のコンポーネントは標準DOM要素と同じ役割をもつケースが多いです。
そのときは追加で必要になるprops以外は標準DOM要素のpropsと合わせましょう。

スプレッド演算子を使うと簡単にpropsを合わせることができます。

```jsx
const Button = props => {
	return <button style={{background: 'red'}} {...props} />
}
```

TypeScriptの場合は`JSX.IntrinsicElements`から標準DOM要素のpropsの型を取得してReact.FCに渡せば良いです。

```tsx
const Button: React.FC<JSX.IntrinsicElements['button']> = props => {
	return <button style={{background: 'red'}} {...props} />
}
```

styled-componentやemotionなどで使える`styled`を使うとより簡単です。

```js
// Buttonはbuttonのpropsを継承する
const Button = styled.button`
  background: red;
`
```
