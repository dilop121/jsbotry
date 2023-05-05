


string = `\n
        ( USER INFORMATION )

📛 Name: {name}
🆔 I'd: {id}
👁️ Username: {username}
`;



function information(nandha) {
  nandha.command('info', async (ctx) => {
    let userId = ctx.message.from.id;
    let FirstName = ctx.message.from.first_name;
    let UserName = ctx.message.from.username;
    let messageId = ctx.message.message_id;
    if ( ctx.chat.type == "supergroup" ) {
        const status = (await ctx.getChatMember(userId)).status;
        string += `\n👾 Status: ${status}`;
    }

    let text = string.replace("{name}", FirstName).replace("{id}", userId).replace("{username}", UserName);

    try {
       
      const User = await nandha.telegram.getUserProfilePhotos(userId);
      const fileId = User.photos[0][0].file_id;
      return await ctx.replyWithPhoto(fileId, {caption: text, reply_to_message_id: messageId});

    } catch (error) {
          return await ctx.reply({ text: text,
               reply_to_message_id: messageId });
    }
  });
}








module.exports = (nandha) => ({
    information: () => information(nandha)
});
