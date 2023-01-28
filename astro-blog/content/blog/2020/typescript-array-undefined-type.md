---
external: false
title: TypeScriptで配列にアクセスして要素がなかったときにundefinedを返すけど型チェックできない
date: 2020-04-17
---

タイトルの通りTypeScriptで配列にアクセスするときには罠がある。

配列へアクセスしたときに要素がなかった場合はundefinedが返ってくる。
しかし、型エラーを出してくれず、実行時エラーになってしまう。

```ts
const example = ['a', 'b'];
example[100].split('aa');
// example[100]はstring型と解釈されてしまう。
// 実行時にundefined.split('aa')となりエラーが発生
```

配列の要素にundefinedが含まれることを宣言すると型を正しくチェックできる。
このとき型アサーションをしない場合は型エラーになる。

```ts
const example: (string | undefined)[] = ['a', 'b'];

example[100].split('aa');  // 型エラー

if (typeof example[100] === 'string') {
    example[100].split('aa'); // エラーにならない
}
```

上のようにするとundefinedでエラーが発生することは避けられる。
しかし、型推論のうまみも消してしまっているのでもっと良い方法を見つけたい。
