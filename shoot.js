module.exports = {
    name: 'shoot',
    description: "shoots a user",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} shoots ${user.username} `)
        .setImage('https://c.tenor.com/f2aJEoV95rMAAAAC/anime-shot.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}