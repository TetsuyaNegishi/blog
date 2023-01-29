---
external: false
title: TypeScriptのunknown型
date: 2020-04-16
---

TypeScriptのunknown型はどんな型でも代入できるが、型アサーションを使わないと利用できない型。

## 代入するときの例

any型と同じように何でも代入できる。

```ts
const a:unknown = 1;
const b:unknown = 'abc';
const a:unknown = {
	a: 1,
	b: 2,
};
```

## 利用するときの例

型アサーション(型をチェックする)して利用する。型アサーションがないと型エラーになる。

```ts
const a: unknown = 1;

if (typeof a === 'number') {
    console.log(a + 1)
}

if (typeof a === 'string') {
    const b = a.split(',')
}

a.split(',') // 型エラー
```
