

// This Repository made by @NandhaBots
// kindly asking support us




const { Telegraf } = require("telegraf")



const config = require('./config');
const nandha = new Telegraf(config.BOT_TOKEN);


nandha.command("start", async (ctx) => {
        const mention = `[${ctx.from.first_name}](tg://openmessage?id=${message.from.id})`;
        const message_id = ctx.message.message_id // alternative can use `const` as `var`
	try { await ctx.replyWithAnimation(
            { url: "https://graph.org/file/14b56501d51e1ad420a9d.mp4" },
            { caption: config.START_TEXT,
              reply_to_message_id: message_id }
              );
        } catch (err) {
           await ctx.reply(`Error: ${err}`)
        }
});


nandha.help(async (ctx) => {
    const name = ctx.from.first_name
    const message_id = ctx.message.message_id
    await ctx.reply(
      { text: `Hello ${name} We are continuously updating this Bot to add more futures in the near future.`
        , reply_to_message_id: message_id }
    );
});




nandha.launch();
console.log("=> Bot has been launched!")


// Enable graceful stop
process.once('SIGINT', () => nandha.stop('SIGINT'));
process.once('SIGTERM', () => nandha.stop('SIGTERM'));
