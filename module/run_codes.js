

const qs = require('qs');
const axios = require('axios');




async function run_code(nandha) {
  nandha.command("run", async (ctx) => {
    
    const list = ["py", "java", "go", "js"];
    
    text = ctx.message.text
    let code = "";
    let lang = "";
    try {
        //  code = text.split(text.slice(0, 4))[1];
        lang = text.split(text.slice(0,5))[1].split("-")[0];
        code = text.split("-")[1];
    } catch (error) {
        return await ctx.reply({text: error.toString(), reply_to_message_id: message_id});
    }
    
    format = `\n
/run py-
print(2828)

lang codes:
(js/py/go/java)
`;
    if (!list.includes(lang)) {
        return ctx.reply({ text: format, reply_to_message_id: message_id});
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
➤ Input: \n${code.trim()}

➤ Output: \n${response.data.output}`;
             return await ctx.reply({text: string, reply_to_message_id: message_id});
        } else {
           let string = `\n
➤ language: ${response.data.info}
➤ Input: \n${code.trim()}

➤ Output: \n${response.data.error}`;
           return await ctx.reply({text: string, reply_to_message_id: message_id});
        }
                      
    } catch (error) {
      await ctx.reply({text: `Error: ${error.toString()}`, reply_to_message_id: message_id});
    }
  });
}







module.exports = (nandha) => ({
    run_code: () => run_code(nandha)
});
