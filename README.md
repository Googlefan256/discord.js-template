# discord.js-template
sample code for discord.js bots.  
for ALL OS which node works.
# installation
nodejs and npm**must** be installed.  
the package you need for working is **discord.js**  
you can install by this:
```
$ npm install discord.js
```
# starting
please change **config.json.example** to **config.json**  
in the **config.json** write your bot's token and prefix.  
change codes in **main.js** like this:
```js
try{
 command.execute(/*execute options*/);
}catch(error){

            ↓

try{
 command.execute(message);
}catch(error){
```
# discord.js-テンプレート
discord.jsのマルチファイルbotのサンプルコードです。  
このサンプルコードはnodejsが動く**すべての**プラットフォームで利用が可能です。(windows7,10,macOS10.7~11.0,ubuntuOS,termuxでの動作を検証済みです。)
# 環境セットアップ
**まずはnodejsをインストールしてください。**  
**discord.js**が必要なので以下のコマンドでインストールしてください:
```
$ npm install discord.js
```
# セットアップ
**config.json.example** を **config.json**に変えてください。
**config.json**にbotのトークンとprefixを書いてください。  
**main.js** の一部のコードを以下のように書き換えてください:
```js
try{
 command.execute(/*execute options*/);
}catch(error){

            ↓

try{
 command.execute(message);
}catch(error){
```
