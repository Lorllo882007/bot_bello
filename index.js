const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS","GUILD_MEMBERS","GUILD_MESSAGES"]}
)

client.login("OTE4MjEyNzM5MTM3MTc1NTUy.YbD-QA.pEh8hNPyF-B6zekIkLFe4Ivf514")

client.on("ready", () => {
    console.log ("bot online!")
})

client.on("messageCreate", (message) => {
    if(message.content == "!youtube"){
       message.channel.send("Questo é Il Canale: https://www.youtube.com/channel/UCNXR5tzJZmwPT6lKFjmBDIQ")
    }

    if(message.content == "!instagram"){
        message.channel.send("Questo è il Mio Insta: https://www.instagram.com/lorllo882007/")
    }

    if(message.content == "!embed"){
        var embed = new Discord.MessageEmbed()
            .setTitle("Titolo embed")
            .setDescription("Questo é Il mio embed")
            .setThumbnail("https://www.techgaming.it/wp-content/uploads/2020/06/The-Last-Of-Us-2_.jpg")


        message.channel.send({embeds: [embed]})
    }
})



