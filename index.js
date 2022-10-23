const Discord = require('discord.js');
const Clear = require('./Clear')
const bot = new Discord.Client();

bot.login(process.env.token);

bot.on('ready', function() {
	console.log("Je suis ready")
	bot.user.setActivity('La sainte charge').catch(console.error)
});


bot.on("message",message => {
	
    if (Clear.match(message)){
        return Clear.action(message)
    }.catch(console.error)
	
    if(message.content == "Salut"){
        message.reply("Hello :raised_hands:");
        console.log("Le bot dit bonjour");
    }.catch(console.error)
     if(message.content == "MasterPine"){
        message.reply("@everyone");
        console.log("Le bot est pret pour la pine");
    }.catch(console.error)
     if(message.content == "Paladins"){
        message.reply("@everyone go rush palouf !");
        console.log("Ready pour un paladin");
    }.catch(console.error)
     if(message.content == "AmongUs"){
        message.reply("@everyone You looking sus ! https://media1.tenor.com/images/c5b612df9ef285c67d38c17ddd9635b9/tenor.gif?itemid=17674950");
        console.log("Ready pour un amongus");
    }.catch(console.error)
	if(message.content == "OW"){
        message.reply("@everyone Appel Overwatch");
        console.log("Ready pour un overwatchs");
    }.catch(console.error)
	
    });
