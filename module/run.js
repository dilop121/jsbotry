



function run_code(nandha) {
     nandha.command("run", async (ctx) => {
          const text = ctx.message.text;
          var lang_code = ["py","java","js","go"];
          let SplitString = text.split(" ");

          let language;
          let code;
          try {
             let code = SplitString.slice(2).join(' ');
             let language = SplitString[1];
          } catch (error) {
              return await ctx.reply('example:\n/run py print("hello")');
          }        

          if (!language.includes(lang_code)) {
               return await ctx.reply('Invalid language code!');
          }
          
          try {
              response = fetch(`https://codex-rest.onrender.com/?language=${language}&code=${code}`); 
              const data = response.json();
              let output = data['output'];
          } catch (error) {
              return ctx.reply(error.toString())
          }
          return ctx.reply(output);

});

}







module.exports = (nandha) => ({
    run_code: () => run_code(nandha)
});
