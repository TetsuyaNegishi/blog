---
external: false
title: react-hook-formのバリデーションにはどのライブラリを使うべきか
date: 2021-01-17
---

## TL;DR
- もっともポピュラーな[yup](https://github.com/jquense/yup)の使い勝手が一番よかった。

## react-hook-formのバリデーション

react-hook-formでは`useForm()`を始めに呼び出す。
`useForm()`はいろいろな引数を受け取ることができる。
その中の`resolver`はフォームのバリデーション条件を定義する。

`resolver`は外部のバリデーションライブラリーをサポートしている。
例えば`yup`の場合は下のように書く。

```tsx
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const resolver = yupResolver(yup.object().shape({
  name: yup.string().required(),
  age: yup.number().required(),
}));
```

## バリデーションライブラリの比較

react-hook-formの公式には5つのライブラリを使用した例が紹介されている[(https://react-hook-form.com/jp/api#useForm)](https://react-hook-form.com/jp/api#useForm)。
その中で今回は[yup](https://www.npmjs.com/package/yup), [zod](https://www.npmjs.com/package/zod), [vest](https://www.npmjs.com/package/vest)を使用して比較した。
比較に使ったコードは↓。

<iframe src="https://codesandbox.io/embed/react-hook-form-resolvers-sample-x6uih?fontsize=14&hidenavigation=1&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="react-hook-form-resolvers-sample"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

### コードの簡潔さ

yupとzodはほとんど記法が変わらず、どちらもシンプルにバリデーションの定義を書くことができた。
vestはテストのような記法を採用しているが、フォームのバリデーションに使うのには冗長な感じがした。
また、vestはemailやurlを判定するメソッドが用意されておらず、自分でバリデーションの定義を書く必要があった。

### 型の扱い

react-hook-formではinputに入力したデータは基本的にstring型で保存される。
type属性にnumberが指定されていてもstring型になってしまう。

yupは`yup.number()`を使って型を定義すると、フォームに入力した値も自動的にstringからnumberで変換してくれるようだ。
おそらく`yupResolver`がバリデーションの定義によって変換していると思われる。

zodとvestを使用した場合は変換してくれない。
zodとvestを使ってnumberを扱う場合は、`register()`に`valueAsNumber`をセットする必要がある。

```tsx
<input name="test" type="number" ref={register({valueAsNumber: true})}/>
```

## まとめ

<!-- textlint-disable ja-technical-writing/ja-no-mixed-period -->
結論：yupが一番優れている
<!-- textlint-able ja-technical-writing/ja-no-mixed-period -->
