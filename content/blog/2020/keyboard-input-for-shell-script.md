---
external: false
title: シェルスクリプトでreadを使って入力を受け付ける
date: 2020-04-15
---

シェルスクリプトで入力を受け付けたい場合は`read`コマンドを使えば良い。

`read`コマンドは引数に変数名を与える。
引数に与えた変数は入力した値が保持される。

```sh
read test
echo $test
```

複数の入力値を受け付けたい場合は引数も複数にする。

```sh
read test1 test2
echo $test1
echo $test2
```

文字列を表示したい場合は`-p`オプションを付ける。

```sh
read -p '何か入力してください: ' test
echo $test
```

※ `-p`オプションはzshでは正しく動作しないらしい。
