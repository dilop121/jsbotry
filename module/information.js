



function information(nandha) {
  nandha.command('info', async (ctx) => {
    let userId = ctx.message.from.id;
    let messageId = ctx.message.message_id;
    try {
       
      const User = await nandha.telegram.getUserProfilePhotos(userId);
      const fileId = User.photos[0][0].file_id;
      return await ctx.replyWithPhoto(file_id: fileId, { reply_to_message_id: message_id });

    } catch (error) {
          return await ctx.reply({ text: error.toString(),
               reply_to_message_id: message_id });
    }
  });
}








module.exports = (nandha) => ({
    information: () => information(nandha)
});
