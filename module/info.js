

const config = require('./config');


const { Telegraf } = require("telegraf")
const nandha = new Telegraf(config.BOT_TOKEN);


// If you send /info bot reply: "your info"

nandha.info(async (ctx) => {   
     const message_id = ctx.message.message_id;
     await ctx.reply(
          {text: 'your info', reply_to_message_id: message_id}
);
});
    
