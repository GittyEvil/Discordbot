const {permissions} = require('discord.js')
module.exports = {
    name: 'clear',
    UserPerms: ['ADMINISTRATOR', 'MANAGE_MESSAGES'],
    description: "clearing messages",
    UserPerms: ["ADMINISTRATOR","MANAGE_MESSAGES"],
    async execute(message, args) {
        
        if(message.member.permissions.has("ADMINISTRATOR", "MANAGE_MESSAGES")){ //måste byta id för att advisors ska kunna använda senare.
            if(!args[0]) return message.reply("please enter a amount...");
            if(isNaN(args[0])) return message.reply("enter a real number...");
        
            if(args[0] > 100) return message.reply("you cant delete more then 100 messages...");
            if(args[0] < 1) return message.reply("You need to delete atleast one message...");

            await message.channel.messages.fetch({ limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
            
            });
        } else {
            message.channel.send('You dont have permission for this command...')
        }
    }


}