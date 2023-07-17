const { EmbedBuilder } = require('discord.js')
const sendMessage = require('../utils/sendMessage')
const { Primary } = require('../utils/colors')

sendMessage('1094271667049599072', {
  embeds: [
    new EmbedBuilder()
      .setTitle('Welcome to Dismal')
      .setDescription('The #1 competitive community for the Hive — chat, play ranked, & more.')
      .setColor(Primary)
    ,
    new EmbedBuilder()
      .setTitle('Network Rules')
      .setDescription('In order to maintain a safe and friendly environment, you agree to the following policies:\n- [Terms of Service](https://dismal.gg/terms)\n- [Privacy Policy](https://dismal.gg/privacy)\n- [Community Guidelines](https://dismal.gg/guidelines)')
      .setColor(Primary)
    ,
    new EmbedBuilder()
      .setTitle('Play Ranked')
      .setDescription('To play our ranked gamemodes, you\'ll need to register first.\nHead to <#1094271667049599067> and follow the instructions there.\n\nNot played before? Read our beginner\'s guide in <#1094271667355779114>.')
      .setColor(Primary)
    ,
    new EmbedBuilder()
      .setTitle('Need Help?')
      .setDescription('We\'re always here to help. Contact staff by making a ticket in <#1101559118092841030>.')
      .setColor(Primary)
    ,
    new EmbedBuilder()
      .setTitle('Our Website')
      .setDescription('Visit our website at [dismal.gg](https://dismal.gg).')
      .setColor(Primary)
    ,
  ]
})