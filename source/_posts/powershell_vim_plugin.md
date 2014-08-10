title: powershell vim plugin
date: 2013-10-13
tags:
  - powershell
  - vim
  - plugin
---

*powershell script* を vim で書くためのプラグイン

```vim
NeoBundleLazy 'PProvost/vim-ps1', {
      \   'autoload' : {'filetypes': ['ps1']}
      \ }
```