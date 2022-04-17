module.exports = {
    name: 'excited',
    description: "excited!",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} excited with ${user.username} `)
        .setImage('https://c.tenor.com/gvwbAiuTZtwAAAAC/marin-kitagawa-kitagawa.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
 }