const { EmbedBuilder } = require('discord.js')
const sendMessage = require('../utils/sendMessage')
const { Primary } = require('../utils/colors')

sendMessage('1094271667049599067', {
  embeds: [
    new EmbedBuilder()
      .setTitle('Register to Play')
      .setDescription('To play ranked and other gamemodes, use the `/register` command.')
      .setColor(Primary)
  ]
})