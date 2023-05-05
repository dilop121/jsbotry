



function information(nandha) {
      nandha.command('info', async (ctx) => {
      let user_id = ctx.message.from.id;
      let message_id = ctx.message.message_id;
      const photos = await nandha.telegram.getUserProfilePhotos(user_id);
      const profile_id = JSON.stringify(photos["photos"][0][0]["file_id"]);
      return await ctx.replyWithPhoto({ file_id: fileId , 
         reply_to_message_id: message_id });
  
});

}


module.exports = (nandha) => ({
    information: () => information(nandha)
});
