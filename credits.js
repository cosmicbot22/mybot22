const Discord = require("discord.js");
const bot = new Discord.Client();
exports.run = (client, message, args) => {
      const embed = new Discord.RichEmbed()
      .setColor(0x00A2E8)
      .addField("Developer", "Blixic#0902")
      .addField("Special thanks too:", `everyone who gave me suggestions`)
      .setTimestamp()
      .setFooter(client.user.username, client.user.avatarURL);
      message.channel.send({embed}) 
 }
   
