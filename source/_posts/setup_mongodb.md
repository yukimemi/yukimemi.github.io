title: Mac OSX Mountain Lion MongoDB セットアップ
date: 2013-06-16
tags:
  - mac
  - mountainlion
  - setup
  - mongodb
---

mongodb をいれてみた。

    $ brew install mongodb

これでインストール完了。簡単。

自動起動する設定も書いてあるからそれを実行するだけ。

    $ ln -sfv /usr/local/opt/mongodb/*.plist ~/Library/LaunchAgents
    $ launchctl load ~/Library/LaunchAgents/homebrew.mxcl.mongodb.plist

これで自動起動される。

手動で起動するには、次のようにする。

    $ launchctl start homebrew.mxcl.mongodb

#### 参考:

[LaunchDaemons (launchctl, launchd.plist) の使い方 - maruko2
Note.](http://www.maruko2.com/mw/LaunchDaemons_(launchctl,_launchd.plist)_%E3%81%AE%E4%BD%BF%E3%81%84%E6%96%B9#launchctl_.E3.81.AE.E4.BD.BF.E7.94.A8.E4.BE.8B)