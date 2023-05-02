
const fs = require('fs');



function getjson(nandha) {
      nandha.command("getjson", async (ctx) => {
          let user_id = ctx.message.from.id
          if ( user_id !== 5696053228) {
               return await ctx.reply("You don't have access for do this!");
          }
          let text = JSON.stringify(ctx);
          fs.writeFileSync("json.txt", text);
          try {
               return await ctx.replyWithDocument(
          { source: "json.txt", filename: "json.txt"}, 
               { reply_to_message_id: ctx.message.message_id });
          } catch (error) {
               return await ctx.reply(error.toString());
         }
         fs.unlinkSync("json.txt");
});
     
 }
 






module.exports = (nandha) => ({ getjson: () => getjson(nandha) }); 
 
