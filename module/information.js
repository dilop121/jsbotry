



function information(nandha) {
  nandha.command('info', async (ctx) => {
    let userId = ctx.message.from.id;
    let messageId = ctx.message.message_id;
    try {
      let photos = await nandha.telegram.getUserProfilePhotos(userId);
      const fileId = photos.photos[0][photos.photos[0].length - 1].file_id;
      await ctx.replyWithPhoto({ file_id: fileId });
    } catch (error) {
      console.log(error);
    }
  });
}








module.exports = (nandha) => ({
    information: () => information(nandha)
});
