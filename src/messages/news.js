const { EmbedBuilder } = require('discord.js')
const sendMessage = require('../utils/sendMessage')
const { Primary } = require('../utils/colors')

sendMessage('1095306739840208938', {
  embeds: [
    new EmbedBuilder()
      .setTitle('News')
      .setDescription('Keep up with the latest news & stay updated for giveaways and events.')
      .setColor(Primary)
  ]
})