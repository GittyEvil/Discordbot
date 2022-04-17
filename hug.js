
module.exports = {
    name: 'hug',
    description: "hugs another user",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} hugs ${user.username} `)
        .setImage('https://acegif.com/wp-content/gif/anime-hug-12.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}