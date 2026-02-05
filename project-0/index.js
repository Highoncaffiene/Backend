const axios = require('axios');
const {Telegraf} = require('telegraf');
// url of the bot : https://t.me/Thebatboi_bot

const bot = new Telegraf('8402290959:AAHGLgUaoSLQQmv93SrUsSY5zM8mrqypsRE');
// the token above is like an id card, and if somebody uses it, it's gonna be named after me, so it's important to hide it
bot.start((ctx)=> ctx.reply("Welcome to the bat bot"));
bot.command('Batman', (ctx)=> ctx.reply("The batman is a DC comic book character which is famous for it's dark and gruesum stories"))
bot.on('sticker', (ctx)=> ctx.reply('❤️'))
bot.command('whomadethis', (ctx)=> ctx.reply("Ayush Kumar"));
bot.command('k72', async function (ctx) {
    const response = await axios.get('https://raw.githubusercontent.com/Highoncaffiene/java-script/refs/heads/main/.devcontainer/devcontainer.json?token=GHSAT0AAAAAADUL4ILLQXZRUFT6G4CN37VY2MDKHDA')
    console.log(response.data);
    return ctx.reply(response.data)
    
})
bot.launch(); 