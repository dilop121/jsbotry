

const qs = require('qs');
const axios = require('axios');


You can do this in Node.js by defining the list and x variables, and then using the includes() method to check if x is in list:

```


if (!list.includes(x)) {
  return false;
} else {
  return true;
}
```

This code will return true if "py" is in the list, and false if it is not.



async function run_code(nandha) {
  nandha.command("run", async (ctx) => {
    var data = qs.stringify({
      'code': 'print("hello")',
      'language': 'py',
      'input': ''
    });

    const list = ["py", "java", "go", "js"];
    
    text = ctx.message.text

    let lang = text.split(" ")[1];
    

    if (!list.includes(lang)) {
         return await ctx.reply("Enter valid language code!")
    }

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
