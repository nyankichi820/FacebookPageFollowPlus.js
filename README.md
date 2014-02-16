FacebookPageFollowPlus.js
=========================

これはFacebookページのプラグインにフォローを行ったら,自動で別のページへ遷移させる機能を追加するpluginです。


外部サイトからページへの流入時に事前にフォローさせてから遷移させたい場合などに利用が可能です。
拡張はHTML5でのpluginコードのみに対応しています。


機能
----
* フォローボタン押下後、自動で別のページへ遷移
* 既にフォロー済みの場合に別のHTMLタグを表示


利用方法
----
まずは、下記をみてpluginコードを生成し,ページへ配置します。
https://developers.facebook.com/docs/plugins/follow-button

加えて、pluginのjsも同ページから読み込んでおきます.
```HTML
<script type="text/javascript" src="facebook_page_follow_plus.js"></script>
```

例えば例として以下のような、タグを配置するとします
```HTML
  <div class="fb-follow" data-href="http://www.facebook.com/facebook" data-colorscheme="light" data-layout="standard" data-show-faces="true"></div>
```
  
このタグに以下の属性を追加します

`id="fb-follow-plus"`

このidがセットされているものに機能を追加します

`data-followed-element-id="すでにフォロー済みの場合に出したいHTMLタグのid"`

すでにフォロー済みの場合plugin以外のタグを表示します。(optional)

`data-followed-jump-href="フォロー完了後に遷移したいURL"`

この属性の値を元にフォロー後に別のページへ遷移します

注意事項
----
pluginの表示ロジックが変更になった場合は動かなくなる場合がありますのでご注意ください

