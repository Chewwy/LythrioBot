const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready', () => {
  console.log('Bot is activated, and ready for action!');
})

client.on('message', message => {
  if(message.content === 'ping') {
    message.reply('Pong! Why are you asking me to challange you to ping pong anyways?');
  }
});

client.on('message', message => {
  if(message.content === 'Ping') {
    message.reply('Pong! Why are you asking me to challange you to ping pong anyways?');
  }
});

client.on('message', message => {
  if(message.content === 'joke') {
    message.reply('Why don\'t you teach me a joke? Because my creator didn\'t teach me any. What a shame.');
  }
});

client.on('message', message => {
  if(message.content === 'Joke') {
    message.reply('Why don\'t you teach me a joke? Because my creator didn\'t teach me any. What a shame.');
  }
});

client.on('message', message => {
  if(message.content === 'stupid bot') {
    message.reply('At least I\'m not talking to a bot..');
  }
});

client.on('message', message => {
  if(message.content === 'Stupid bot') {
    message.reply('At least I\'m not talking to a bot..');
  }
});

client.on('message', message => {
  if(message.content === 'Lythrio') {
    message.reply('Who, me? I think you\'re mistaken.');
  }
});

client.on('message', message => {
  if(message.content === 'lythrio') {
    message.reply('Who, me? I think you\'re mistaken.');
  }
});
client.login(settings.token);
