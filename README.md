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
```
 ↓
```js
try{
 command.execute(message);
}catch(error){
```
