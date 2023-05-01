function infouser(nandha) {
     nandha.command('sticker', ctx => {
         ctx.reply("ctx");
         let inputText = ctx.message.text;
         let arr = inputText.split(" "); // convert string to array
         arr.shift(); // remove first element of array
         inputText = arr.join(" "); // convert array back to string
         console.log(inputText); // output: "I am fine"

     });
 }
 
 function lmao(x) {
     console.log(x);
 }
 
 module.exports = (nandha) => ({ infouser: () => infouser(nandha), lmao }); 
 
