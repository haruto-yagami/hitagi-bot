const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '&';

client.once('ready', () => {
    console.log('Hitagi Senjyogahara is Online!');
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'ping'){
        message.channel.send('pong!')
    } else if (command == 'help'){
        message.channel.send('how can i help you? my commands are &ping , &help , &harami , &vinit , &chutiya ')
    } else if (command == 'harami'){
        message.channel.send('Vinit Harami manus se bhi badawala harami hai @Virgil')
    } else if (command == 'vinit'){
        message.channel.send('Woh toh duniya ka sabhse bada Gandu hai')
    } else if (command == 'chutiya'){
        message.channel.send('vinit sabhse bada chutiya hai')
    } 


});

client.login('ODM3NTQ5MTMwMjg4MzMyODIw.YIuKaQ.sXY7g-7PVDeQ2wn3FUgKdD5tO_8');