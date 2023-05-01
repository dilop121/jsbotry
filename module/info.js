

const config = require('./config');


const { Telegraf } = require("telegraf")
const nandha = new Telegraf(config.BOT_TOKEN);


nandha.ok(async (ctx) => {   
     const message_id = ctx.message.message_id;
     await ctx.reply(
          {text: 'yes?', reply_to_message_id: message_id}
);
});
    
