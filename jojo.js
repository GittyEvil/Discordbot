module.exports = {
    name: 'jojo',
    description: "meme command ig",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} memes with ${user.username} `)
        .setImage('https://c.tenor.com/uEgdmNrrGbEAAAAd/hi.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}