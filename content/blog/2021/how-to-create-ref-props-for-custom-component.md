---
external: false
title: カスタムコンポーネントにref propsを作る方法
date: 2021-01-09
---

## TL;DR
- `React.forwardRef()`にref propsを作りたいカスタムコンポーネントを渡す
- カスタムコンポーネントはpropsとして受け取ったrefをDOMに渡す

## うまくいかない例

下のようなinputタグをラップしたInputコンポーネントを作ったとします。

```tsx
const Input = () => (
	<div>
		<input />
	</div>
)
```

このコンポーネントに対して、focusを当てたい場合はどうすればよいでしょうか？
inputタグの場合は下のように`React.createRef`で生成したrefをinputのref propsに渡せばよいです。

```tsx
const Example= () => {
  const ref = React.createRef();
  return (
    <>
      <input ref={ref} />
      <button onClick={() => ref.current?.focus()} />
    </>
  );
}
```

Inputコンポーネントもpropsにrefを追加して、受け取ったrefをinputタグへ渡せば良さそうですが、実はうまくいきません。
propsにrefを渡しても`undefined`になってしまうのです。

```tsx
// うまくいかない例
const Input = ({ref}) => (
	<div>
		<input ref={ref} />
	</div>
)

const Example= () => {
  const ref = React.createRef();
  return (
    <>
      <input ref={ref} />
      <button onClick={() => ref.current?.focus()} /> // ref.currentはundefinedになってしまう
    </>
  );
}
```

## React.forwardRef を使った方法

ではどうすればよいかというと`React.forwardRef`を使います。
`React.forwardRef`から受け取った`ref`を参照したい要素に渡します。
こうすることでカスタムコンポーネントでもJSXの要素と同じようにrefを実装できます。

```tsx
const Input = React.forwardRef((props, ref) => (
	<div>
		<input ref={ref} />
	</div>
))
```
