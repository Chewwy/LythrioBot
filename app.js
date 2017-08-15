const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready', () => {
  console.log('Bot is activated, and ready for action!');
})

var prefix = "~>"
client.on('message', message => {
  let command = message.content.split(" ")[0];
  if(message.author.bot) return;
  if(!command.startsWith(prefix)) return;
  command = command.slice(prefix.length);
  if(command === "help" || command === "Help"){
    const embed = new Discord.RichEmbed()
    .setFooter("Lythrio | Help")
    .setTitle("")
    .addField("Hello","Hello and welcome to LythrioSurvival. We are a survival server that strives on providing the best survival gameplay!")
    .addField("Reports", "If you need any help, or find something wrong, please do report it on our website, so we can fix it ASAP, and make your gameplay better!")
    .addField("Applications", "Would you like to become staff, developer or builder on our server? Awesome! You can apply for staff on our website. Website: TBD. If you have any questions, or problems, please do message Chewwy#7377 or Lasantha01#7097.")
    .addField("Connect With Us", "Well now, you got all the information of the server, and what to do. You can connect to our server with the IP: TBD. You can connect to our website with the link: TBD.")
  message.channel.send({embed});

  }
  if(command === "ping" || command === "Ping"){
    message.reply('Pong! Why are you asking me to challange you to ping pong anyways?');
  }
  if(command === "joke" || command === "Joke"){
    message.reply('Why don\'t you teach me a joke? Because my creator didn\'t teach me any. What a shame.');
  }
  if(command === "stupid" || command === "Stupid"){
    message.reply('At least I\'m not talking to a bot..');
  }
  if(command === "stupidbot" || command === "Stupidbot"){
    message.reply('You\'re pretty stupid too, if you\'re talking to a bot, just saying.');
  }
  if(command === "lythrio" || command === "Lythrio"){
    message.reply('Who, me? I think you\'re mistaken.');
  }
});

client.login(settings.token);
