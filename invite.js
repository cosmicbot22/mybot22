const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
message.channel.send("Here's a invite link to invite the bot to your server, see you there!")
    const embed = new Discord.RichEmbed()
    .setColor(0x00A2E8)
    .setDescription(`https://discordapp.com/api/oauth2/authorize?client_id=681561028554915923&permissions=8&scope=bot`);
    message.channel.send({embed})
}