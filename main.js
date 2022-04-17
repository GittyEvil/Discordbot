const Discord = require('discord.js');
require('dotenv').config();
const { Constants,  Intents } = require('discord.js');

const client = new Discord.Client({ 
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] 
    ,partials:[Constants.PartialTypes.MESSAGE, Constants.PartialTypes.CHANNEL , Constants.PartialTypes.REACTION]
});

const embed = new Discord.MessageEmbed();
//dot env för att "säkra upp prefix"
const prefix = process.env.PREFIX;

const fs = require('fs');

client.commands = new Discord.Collection();
//detta är vad som gör att jag kan använda mina commands?
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}
//indikerar att boten är online
client.once('ready', () => {
    console.log('Marin is now Online');
});

//client.on('guildMemberAdd', guildMember => {
    //let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'marin simp');

    //guildMember.roles.add(welcomeRole);

    //guildMember.guild.channels.cache.get('931894182216359956').send(`Welcome <@${guildMember.user.id}> to the server!`) //ändra så att id stämmer med typ welcome eller något

    
//});



//ifall prefix används i meddelande, och ett namn av commands används, letar den igenom commands och gör kommandot
client.on('messageCreate', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'clear'){
        client.commands.get('clear').execute(message, args);
    } 
    if(command == 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    }
    if(command == 'avatar') {
        client.commands.get('avatar').execute(message,client, args, Discord);
    }
    
    if(command == 'commands') {
        client.commands.get('commands').execute(message, args, Discord);
    }
    
    if(command == 'help'){
        client.commands.get('help').execute(message, args, Discord);
    }

    if(command == 'hug'){
        client.commands.get('hug').execute(message, args, Discord);
    }

    if(command == 'kick'){
        client.commands.get('kick').execute(message, args, Discord);
    }

    if(command == 'shoot'){
        client.commands.get('shoot').execute(message, args, Discord);
    }

    if(command == 'kiss'){
        client.commands.get('kiss').execute(message, args, Discord);
    }

    if(command == 'cry'){
        client.commands.get('cry').execute(message, args, Discord);
    }

    if(command == 'saber'){
        client.commands.get('saber').execute(message, args, Discord);
    }

    if(command == 'smile'){
        client.commands.get('smile').execute(message, args, Discord);
    }

    if(command == 'slap'){
        client.commands.get('slap').execute(message, args, Discord);
    }

    if(command == 'laugh'){
        client.commands.get('laugh').execute(message, args, Discord);
    }

    if(command == 'die'){
        client.commands.get('die').execute(message, args, Discord);
    }

    if(command == 'excited'){
        client.commands.get('excited').execute(message, args, Discord);
    }

    if(command == 'dance'){
        client.commands.get('dance').execute(message, args, Discord);
    }

    if(command == 'happy'){
        client.commands.get('happy').execute(message, args, Discord);
    }

    if(command == 'basketball'){
        client.commands.get('basketball').execute(message, args, Discord);
    }

    if(command == 'stomp'){
        client.commands.get('stomp').execute(message, args, Discord);
    }

    if(command == 'sad'){
        client.commands.get('sad').execute(message, args, Discord);
    }
    
    if(command == 'blue'){
        client.commands.get('blue').execute(message, args, Discord);
    }
    
    if(command == 'drip'){
        client.commands.get('drip').execute(message, args, Discord);
    }
    
    if(command == 'hello'){
        client.commands.get('hello').execute(message, args);
    }
    
    if(command == 'reactionrole'){
        client.commands.get('reactionrole').execute(message, args, Discord, client);
    }
    
    if(command == 'jojo'){
        client.commands.get('jojo').execute(message, args, Discord);
    }
});

//försökt fixa en music bot 
//försök fixa med random gifs igen :C





//min discord token som är "säkrad med dotenv"
client.login(process.env.DISCORD_TOKEN);
