module.exports = {
    name: 'drip',
    description: "drippy",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#353333')
        .setImage('https://cdn.discordapp.com/attachments/933809378384044102/935167258391613501/drippycat.gif')
        .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
        message.channel.send({embeds: [newEmbed]});
    }
        
    
}