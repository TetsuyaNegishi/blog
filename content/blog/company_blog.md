# コンポーネント設計で気をつけている n 個のこと

あああ。

## 対象読者

- ReactやVueなどフロントエンドフレームワークで開発している方
- コンポーネントの設計に自身がない方
- 拡張性の高いコンポーネントを作りたいと思っている方

## Propsの名前を揃える 5

```tsx
const Button: React.FC<Props> = ({click, children}) => (
  <button>{}</button>
)

interface Props {
  click: () => {}
}
```

例えばページ内でスタイルをあわせるために`Button`コンポーネントを作ったとしましょう。

`Button`コンポーネントがクリックされたときに関数を呼び出したいとき、どうやって関数をpropsに渡しますか?
多くのひとがonClick propsに渡そうするでしょう。

もしclick propsに渡す必要があったら驚くでしょう。
なぜならば標準DOM要素`<button>`の場合はonClickに渡せばよいから。

```js
const handleClick = () => alert('click');

<Button onClick={handleClick}>ボタン</Button>
```

## 標準DOM要素のラッパーコンポーネントのpropsは標準DOM要素に合わせる 4

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

## Propsはより抽象なものに依存させる 3

- 依存性逆転
- 特別な理由がなければ表示にかかわるものはelementをpropsにわたすようにする
  - 無駄な開発コストが増えるわけではない

## レイアウトをコンポーネントに切り出す（重要度 4)

2つのページ
2カラムのページ

- レイアウトをコンポーネント化

  - 要素をpropsに取る

- テクニックが必要
- Badパターン
- Goodパターン

## インタラクティブなアクションもコンポーネント切り出す 3

- クリックしてバルーンを表示するみたいな

## 単一責任を意識してコンポーネントを作る 3

- レイアウト・アクションと関連
- レイアウトと要素を組み合わせることを責務
- Badパターン

```jsx
const a = () => (
  <Container>
    <Block>testes</Block>
    <Block></>
  </Container>
)
```

- Goodパターン

## スタイルクローズド 4

- 開放閉鎖の原則
- このコンポーネントが持つべきスタイルはなにか
- 外から注入すべきcss
  - Position
  - Margin

## コンポーネントに階層構造をつくる 4

- Atomic designの階層構造
  - Atom
  - Molecule
  - Organizm
  - Page

## コンポーネントの粒度を揃える 2

- returnするelementの粒度を揃える
- a

## 下位のコンポーネントから共通化させる 4

- インタフェース分離の原則違反になる可能性が高い
-

## 無理に共通化させない 3

```tsx
const Product: React.FC<Props> = ({name, description, price, isCampaign}) => {
  return (
    <Box>
      <Name>{name}</Name>
      <Description>{description}</Description>
      <Price>{price}</Price>
    </Box>
  )
}

interface Props {
  name: string;
  description: React.Element;
  price: number;
  discountRate:
}
```

- インタフェース分離の原則

## タグに名前をつける 1

## 役割に着目してコンポーネントを分割する 3
