module.exports = {
    name: 'stomp',
    description: "stomping on a person",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} stomps ${user.username} `)
        .setImage('https://c.tenor.com/0GaIjfznDdkAAAAC/tatumaki-drunk.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}