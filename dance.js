module.exports = {
    name: 'dance',
    description: "dancing!",
    execute(message, args, Discord) {
        const user = message.mentions.users.first() || message.member.user
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setDescription(`${message.author} dances with ${user.username} `)
        .setImage('https://c.tenor.com/GDP2ju7BZqAAAAAC/dress-up-darling-marin.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}