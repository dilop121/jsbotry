

const qs = require('qs');
const axios = require('axios');


async function run_code(nandha) {
  nandha.command("run", async (ctx) => {
    var data = qs.stringify({
      'code': 'print("hello")',
      'language': 'py',
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
