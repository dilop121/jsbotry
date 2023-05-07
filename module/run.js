




fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));




function run_code(nandha) {
     nandha.command("run", async (ctx) => {
          const text = ctx.message.text;
          var lang_code = ["py","java","js","go"];
          let SplitString = text.split(" ");

          let language = "py";
          let code = "print('hello')";
         
          response = fetch(`https://codex-rest.onrender.com/?language=${language}&code=${code}`); 
          .then(response => response.json())
          .then(data => return ctx.reply(data.toString()));
          .catch(error => return ctx.reply(error.toString());
          

});

}







module.exports = (nandha) => ({
    run_code: () => run_code(nandha)
});
