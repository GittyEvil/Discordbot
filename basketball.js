module.exports = {
    name: 'basketball',
    description: "secret command for tha mods",
    execute(message, args, Discord) {
        if(message.member.permissions.has("ADMINISTRATOR", "MANAGE_MESSAGES")){ //gör så att inte alla kan använda vissa kommandon.
            const newEmbed = new Discord.MessageEmbed()
            .setColor('#353333')
            .setImage('https://c.tenor.com/KmZwHPQwVTgAAAAd/marin-bisque.gif')
            .setFooter(`Requested by ${message.author.tag}.`, message.author.displayAvatarURL);
            message.channel.send({embeds: [newEmbed]});
        }else {
            message.channel.send('You dont have permission for this command...')
        }
    }
    
    
}