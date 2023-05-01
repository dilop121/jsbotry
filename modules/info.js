// test



const { nandha } = require('./main');


nandha.ok(async (ctx) => {   
     const message_id = ctx.message.message_id;
     await ctx.reply(
          {text: 'yes?', reply_to_message_id: message_id}
);
});
    
