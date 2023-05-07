





function run_code(nandha) {
     nandha.command("run", async (ctx) => {         

          let language = "py";
          let code = "print('hello')";
         
          response = fetch(`https://codex-rest.onrender.com/?language=${language}&code=${code}`) 
          .then(response => response.json())
          .then(data => await ctx.reply(data.toString()));
          .catch(error => await ctx.reply(error.toString());
          

});

}







module.exports = (nandha) => ({
    run_code: () => run_code(nandha)
});
