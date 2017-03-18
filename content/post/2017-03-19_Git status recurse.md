+++
Description = ""
Categories = [
	"golang",
]
title = "Git status recurse"
date = "2017-03-19T00:00:07+09:00"
Tags = [
	"golang",
	"git",
]

+++

`git status` を再帰的に全Gitディレクトリで実行したい。

と思ったので作りました。

[yukimemi/gsr](https://github.com/yukimemi/gsr)

`go get` でインストールできます。

(バイナリファイルもそのうち用意する)


```sh
$ go get github.com/yukimemi/gsr
```

使い方は簡単で

```sh
$ gsr [再帰的にチェックしたいディレクトリ]
```

とすると、 `git status` で変更のあるディレクトリだけ出力されます。
デフォルトでは、ディレクトリ名だけが出力されます。

```sh
$ gsr --status [再帰的にチェックしたいディレクトリ]
```

と、オプションをつけると、 `git status --short` の出力結果も出力されます。

ちなみに、 [再帰的にチェックしたいディレクトリ] を指定しなかった場合、
`ghq root` を対象にチェックします。

[motemen/ghq](https://github.com/motemen/ghq) を使っている人には便利です。


デフォルトの出力がディレクトリ名なのは、pecoとか使って移動したいからです。

例えば、 `.zshrc` に、こんな設定を書いてやると、

```zsh
function __filter() {
  peco | while read line
  do
    echo "Exec: [$@ $line]"
    $@ $line
  done
}
alias gsrl='gsr | __filter cd'
alias ghl='gsr --all | __filter cd'
```

`gsrl` で、変更のあるgitディレクトリに移動出来るようになり、 `ghl` で `ghq` で管理されたディレクトリに移動出来るようになります。

非常にべんり。


