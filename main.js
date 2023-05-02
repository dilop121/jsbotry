//This repo is owned by t.me/Nandhabots if u ever copy or use it, kindly give us credits and Thanks for using this repo 



const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(info => `[Katsuki] ${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new winston.transports.File({ filename: 'logs.txt' }),
    new winston.transports.Console()
  ]
});



const config = require('./config');
const { Telegraf } = require("telegraf");
const nandha = new Telegraf(config.BOT_TOKEN);
const fs = require('fs');


const { infouser, lmao } = require('./module/info.js')(nandha); // pass nandha as parameter

infouser();
lmao("bye")



bot.command('logs', (ctx) => {
  // read the logs.txt file and send it as a document
  const document = fs.readFileSync('logs.txt');
  ctx.replyWithDocument({ source: document, filename: 'logs.txt' });
});


nandha.command("start", async (ctx) => {
    const message_id = ctx.message.message_id;
    try {
        await ctx.replyWithAnimation(
            { url: "https://graph.org/file/14b56501d51e1ad420a9d.mp4" },
            { caption: config.START_TEXT, reply_to_message_id: message_id }
        );
    } catch (err) {
        await ctx.reply(`Error: ${err}`)
    }
});

nandha.help(async (ctx) => {
    const name = ctx.from.first_name;
    const message_id = ctx.message.message_id;
    await ctx.reply(
      { text: `Hello ${name} We are continuously updating this Bot to add more futures in the near future.`,
        reply_to_message_id: message_id }
    );
});

nandha.launch();
console.log("=> GABIMARU-BOT has been Launched!");

// Enable graceful stop
process.once('SIGINT', () => nandha.stop('SIGINT'));
process.once('SIGTERM', () => nandha.stop('SIGTERM'));
