



function run_code(nandha) {
     nandha.command("run", async (ctx) => {
          const text = ctx.message.text;
          var lang_code = ["py","java","js","go"];
          let SplitString = text.split(" ");

          let language = "py";
          let code = "print('hello')";
          
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
