const Clear = require('./Clear')
const {Client, GatewayIntentBits} = require("discord.js");

//instance du client

const client = new Client({
	intents :[
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages // autorisation des messages
		]
});

client.on('ready', function() {
	console.log("Je suis ready")
	bot.user.setActivity('La sainte charge').catch(console.error)
});


client.on('messageCreate', message => {
	
    if (Clear.match(message)){
        return Clear.action(message)
    }
	
    if(message.content == "Salut"){
        message.reply("Hello :raised_hands:");
        console.log("Le bot dit bonjour");
    }
     if(message.content == "MasterPine"){
        message.reply("@everyone");
        console.log("Le bot est pret pour la pine");
    }
     if(message.content == "Paladins"){
        message.reply("@everyone go rush palouf !");
        console.log("Ready pour un paladin");
    }
     if(message.content == "AmongUs"){
        message.reply("@everyone You looking sus ! https://media1.tenor.com/images/c5b612df9ef285c67d38c17ddd9635b9/tenor.gif?itemid=17674950");
        console.log("Ready pour un amongus");
    }
	if(message.content == "OW"){
        message.reply("@everyone Appel Overwatch");
        console.log("Ready pour un overwatchs");
    }
	
    });
Client.login(process.env.token);
