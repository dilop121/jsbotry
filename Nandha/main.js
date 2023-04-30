

// This Repository made by @NandhaBots
// were kindly asking please support us




const { Telegraf } = require("telegraf")



const config = require('./config');
const nandha = new Telegraf(config.BOT_TOKEN);



nandha.start((message) => {
  message.reply('Hello ' + message.from.first_name + '!');
});


nandha.help((message) => {
    const name = message.from.first_name
    message.reply(
      `Hello ${name} We are continuously updating this Bot to add more futures in the near future.`);
})


nandha.launch();

// Enable graceful stop
process.once('SIGINT', () => nandha.stop('SIGINT'));
process.once('SIGTERM', () => nandha.stop('SIGTERM'));
