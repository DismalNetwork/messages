const { EmbedBuilder } = require('discord.js')
const sendMessage = require('../utils/sendMessage')
const { Primary } = require('../utils/colors')

sendMessage('1222498318748356648', {
  embeds: [
    new EmbedBuilder()
      .setDescription('<:Dismal_Trusted_Bots:1112883597301530695> We\'re not quite ready yet, but we\'re working hard!')
      .setColor(Primary)
  ]
})