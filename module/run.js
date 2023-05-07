

const qs = require('qs');
const axios = require('axios');




async function run_code(nandha) {
  nandha.command("run", async (ctx) => {
    
    const list = ["py", "java", "go", "js"];
    
    text = ctx.message.text
    let lang = "";
    let code = "";
    try {
        lang = text.split(" ")[1];
        code = text.split(lang)[1];
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
        if ( response.data.output ) {
             let string = `\n
➤ language: ${response.data.info}
➤ Input: \n${code}

➤ Output: \n${response.data.output}`;
             return await ctx.reply(string);
        } else {
           let string = `\n
➤ language: ${response.data.info}
➤ Input: \n${code}

➤ Output: \n${response.data.error}`;
           return await ctx.reply(string);
        }
                      
    } catch (error) {
      await ctx.reply(`Error: ${error.toString()}`);
    }
  });
}







module.exports = (nandha) => ({
    run_code: () => run_code(nandha)
});
