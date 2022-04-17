module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    async execute(message, args, Discord, client) {
        const channel = '930716293533925447'; // för kanalen    
        const Travelerrole = message.guild.roles.cache.find(role => role.name === "Traveler"); 
        const TechNerdrole = message.guild.roles.cache.find(role => role.name === "Tech Nerd");          // alla roller 
        const genshinloverrole = message.guild.roles.cache.find(role => role.name === "Vtuber Lover");


        const computerEmoji = '💻';
        const bookEmoji = '📖';                                                 // emojis för rollerna 
        const mantechnologistEmoji = '🤓';
 
        const newEmbed = new Discord.MessageEmbed()                     // den tar för någon anledning inget meddelande, fixa
            .setColor('#353333')
            .setTitle('Here you can choose your roles!')
            .setDescription('All the roles you can choose from\n'
               + `${computerEmoji}\n`
               + `${bookEmoji}\n`
               + `${mantechnologistEmoji}`)
            //.setImage('https://cdn.discordapp.com/attachments/931587390307454996/936904844332122112/final_61f4dd34ba6eb4013a8a1900_506854.png_1.jpeg')
           
 
        let messageEmbed = await message.channel.send(newEmbed);
        messageEmbed.react(computerEmoji);
        messageEmbed.react(mantechnologistEmoji);           //här gör den så att man kan trycka med emojis ig 
        messageEmbed.react(bookEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();                       //lägger till rollen om de trycker på emojin
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === computerEmoji) {                                              
                    await reaction.message.guild.members.cache.get(user.id).roles.add(Travelerrole);
                }
                if (reaction.emoji.name === bookEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(TechNerdrole);
                }
                if (reaction.emoji.name === mantechnologistEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(genshinloverrole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {

            if (reaction.message.partial) await reaction.message.fetch();                                   //om de klickar på emojin ska den ta bort roll
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === computerEmoji) {                                              
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(Travelerrole);
                }
                if (reaction.emoji.name === bookEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(TechNerdrole);
                }
                if (reaction.emoji.name === mantechnologistEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(genshinloverrole);
                }
            } else {
                return;
            }
        });
    }
 
}   