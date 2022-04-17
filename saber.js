module.exports = {
    name: 'saber',
    description: "the best gif",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setImage('https://media.discordapp.net/attachments/508495069914071042/876510060203888661/706933552792731651.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}