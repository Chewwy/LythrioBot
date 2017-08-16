const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');

client.on('ready', () => {
  client.user.setGame('Lythrio | Do ~>help.');
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
    const embed = new Discord.RichEmbed()
    .setFooter("About Me | Lythrio")
    .setTitle("")
    .addField("About Me", "Hello, my name is Lythrio. I am a bot specially made for LythrioSurvival. Which strives on providing the best survival gameplay! I hope you join it!")
    .addField("<3", "I was coded with love by Chewwy. <3, and he's always looking for new ways to improve me! So please do leave a suggestion, and he may add it to me! (:")
  message.channel.send({embed});
  }
  if(command === "commands" || command === "Commands"){
    const embed = new Discord.RichEmbed()
    .setFooter("Commands | Lythrio")
    .setTitle("")
    .addField("Information", "Hello, and thank-you for using Lythrio! There are many features and commands for you to try out. Bellow this message will be the command list with the description/information of the command.")
    .addField("Ping", "Use ~>ping to get a hilarious response. (Also used to test your connection speed, so it's really a 2 in 1!")
    .addField("Joke", "Use ~>joke to get a hilarious joke read to you, by the bot! What else could be better than that? (Warning, it's the same joke everytime. lel.)")
    .addField("Lythrio", "Use ~>lythrio to get information about the bot. (Warning, the bot can be sarcastic. Use at your own risk!)")
    .addField("Stupid", "Use ~>stupid to tell the bot what you really think about it! (Cannot guarantee it's not going to say a sarcastic answer back to you.)")
    .addField("Help", "Use ~>help to get a list of information for the server. Including the Server IP, Website information, and much, much more. It will also tell you if the server is online or not!")
    .addField("Server Status", "Use ~>serverstatus it tells you if the server is up or down, if the server is down, it'll tell you why, and when it'll be back up")
    .addField("Server Information", "Use ~>server information it tells you a description of the server, the server IP, and much much more.")
    .addField("Website", "Tells you information about the website, and if it's down or not. It will tell you where you can apply, and important links.")
  message.channel.send({embed});
  }
  if (command === "serverstatus" || command === "Serverstatus"){
    const embed = new Discord.RichEmbed()
    .setFooter("Server Status | Lythrio")
    .setTitle("")
    .addField("Server Status", "Currently, the server is offline.")
    .addField("Reason:", "The server is still in development mode. Try again later.")
    .addField("Fix Date:", "The server should be ready by 9/15/17.")
  message.channel.send({embed});
  }
  if (command === "serverinformation" || command === "Serverinformation"){
    const embed = new Discord.RichEmbed()
    .setFooter("Server Information | Lythrio")
    .setTitle("")
    .addField("Server Description:", "Lythrio is a server that strives on providing the best survival gameplay. With our experienced staff, and server operators, you can be glad to join the server, time after time.")
    .addField("Server Version:", "Currently we are on 1.12.1, we will update when Minecraft updates. (There may be a small downtime when this happens.")
    .addField("Server IP", "Currently there is no IP, but we will list one here when there is one. (We release on 9/15/17).")
    .addField("Need Help?", "Do you need help? You may contact anyone on the staff team, or Chewwy/Lasantha and we will help you, or get the problem solved ASAP.")
  message.channel.send({embed});
  }
  if (command === "website" || command === "Website"){    
    const embed = new Discord.RichEmbed()
    .setFooter("Website | Lythrio")
    .setTitle("")
    .addField("Information" , "Hello, currently the server website is still in development! (We will update this message when it is developed, and everything is ready to go.)")
    .addField("Website:", "Currently the website is being developed")
    .addField("Website Information", "The website is being developed, and is going to be amazing. There will be room for applications for staff, builders and developers. If you'd like to apply, please go to our website, and do so there!")
  message.channel.send({embed});
  }
});

client.login(settings.token);
