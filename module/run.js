

const qs = require('qs');
const axios = require('axios');




async function run_code(nandha) {
  nandha.command("run", async (ctx) => {
    
    const list = ["py", "java", "go", "js"];
    
    text = ctx.message.text
    try {
        let lang = text.split(" ")[1];
        let code = text.split(" ").slice(2).join(' ');
    } catch (error) {
        return await ctx.reply(error.toString());
   }

    if (!list.includes(lang)) {
         return await ctx.reply("Enter valid language code!")
    }

    var data = qs.stringify({
      'code': code,
      'language': lang,
      'input': ''
    });


    var config = {
      method: 'post',
      url: 'https://api.codex.jaagrav.in',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: data
    };

    try {
      const response = await axios(config);
      await ctx.reply(response.data.output);
    } catch (error) {
      await ctx.reply(error.toString());
    }
  });
}







module.exports = (nandha) => ({
    run_code: () => run_code(nandha)
});
