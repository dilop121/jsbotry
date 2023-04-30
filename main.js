

// This Repository made by @NandhaBots
// were kindly asking please support us




const { Telegraf } = require("telegraf")



const config = require('./config');
const nandha = new Telegraf(config.BOT_TOKEN);


nandha.command("start", async (message) => {
        var mention = "[${message.from.first_name}](tg://openmessage?id=${message.from.id})";
	try { await message.replyWithAnimation(
            { url: "https://graph.org/file/14b56501d51e1ad420a9d.mp4" },
            { caption: config.START_TEXT }
              );
        } catch (err) {
           await message.reply(`Error: ${err}`)
        }
});


nandha.help(async (message) => {
    const name = message.from.first_name
    await message.reply(
      `Hello ${name} We are continuously updating this Bot to add more futures in the near future.`
    );
});




nandha.launch();
console.log("=> Bot has been launched!")

// Enable graceful stop
process.once('SIGINT', () => nandha.stop('SIGINT'));
process.once('SIGTERM', () => nandha.stop('SIGTERM'));
