const { EmbedBuilder } = require('discord.js')
const axios = require('axios')
require('dotenv').config()
const { DISCORD_BOT_TOKEN } = process.env

/**
 * @param {String} channelId The id of the channel to send the message to
 * @param {Object} options The options for the message
 * @param {String} options.content The content of the message
 * @param {Array<EmbedBuilder>} options.embeds The discord.js EmbedBuilders of the message
 */
async function sendMessage(channelId, { content, embeds }) {
  const data = {}
  if (content) data.content = content
  if (embeds?.length) data.embeds = embeds.map(embed => embed.toJSON())
  await axios.post(`https://discord.com/api/v10/channels/${channelId}/messages`, data, {
    headers: {
      Authorization: `Bot ${DISCORD_BOT_TOKEN}`,
      'Content-Type': 'application/json'
    },
  }).catch(err => {
    console.log(err)
  })
  console.log('Message sent')
}

module.exports = sendMessage
