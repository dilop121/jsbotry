
const fs = require('fs');



function get_id(nandha) {
     nandha.command("id", async (ctx) => {

          let user_id = ctx.message.from.id;
          let chat_id = ctx.chat.id;
          let message_id = ctx.message.message_id;

          try { let replies = ctx.message.reply_to_message 
          } catch (error) {
             // no code for passing the error
          }
          
          if ( Boolean(replies) ) {
                   return ctx.reply({ text: `Your telegram I'd: ${user_id}\nMessage Chat I'd: ${chat_id}\nUser telegram I'd: ${replies.from.id}`,
                      reply_to_message_id: message_id });
          } else {
               return ctx.reply({ text: `Your telegram I'd: ${user_id}\nMessage Chat I'd: ${chat_id}`,
                      reply_to_message_id: message_id });
          }

});

}         
          


function get_json(nandha) {
      nandha.command("json", async (ctx) => {
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
 





module.exports = {
  get_json: nandha => get_json(nandha),
  get_id: nandha => get_id(nandha)
};
