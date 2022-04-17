module.exports = {
    name: 'hello',
    description: "hallå",
    execute(message, args){
        message.channel.send('hallå');
    }
}