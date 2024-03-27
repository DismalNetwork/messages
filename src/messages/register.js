const { EmbedBuilder } = require('discord.js')
const sendMessage = require('../utils/sendMessage')
const { Primary } = require('../utils/colors')

sendMessage('1222497043860160564', {
  embeds: [
    new EmbedBuilder()
      .setTitle('Register to Play')
      .setDescription('To play ranked and other gamemodes, use the `/register` command.')
      .addFields({
        name: 'Already registered?',
        value: 'Create a ticket in <#1222497455065530419> to change your username, transfer your account, or ask for help.'
      })
      .setColor(Primary)
  ]
})