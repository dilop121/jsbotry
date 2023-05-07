//This repo is owned by t.me/Nandhabots if u ever copy or use it, kindly give us credits and Thanks for using this repo 

const config = require('./config');
const { Telegraf } = require("telegraf");
const nandha = new Telegraf(config.BOT_TOKEN);

const fs = require('fs');


const { get_json, get_id } = require('./module/misc.js')(nandha);
const { information } = require('./module/information.js')(nandha); 
const { run_code } = require('./module/run_codes.js')(nandha);

get_json();
get_id();
information();
run_code();







nandha.command("start", async (ctx) => {
    let message_id = ctx.message.message_id;
    try {
        await ctx.replyWithAnimation(
            { url: "https://graph.org/file/14b56501d51e1ad420a9d.mp4" },
            { caption: config.START_TEXT, reply_to_message_id: message_id }
        );
    } catch (err) {
        await ctx.reply(`Error: ${err}`)
    }
});


nandha.command("help", async (ctx) => {
    let name = ctx.from.first_name;
    let message_id = ctx.message.message_id;
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
