function infouser(nandha) {
     nandha.command('sticker', ctx => {
         ctx.reply("ctx");
         let inputText = ctx.message.text;
         let arr = inputText.split(" "); 
         arr.shift(); 
         inputText = arr.join(" "); 
         console.log(inputText); 

     });
 }
 


module.exports = (nandha) => ({ infouser: () => infouser(nandha) }); 
 
