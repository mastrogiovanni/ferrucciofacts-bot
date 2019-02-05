

const proc = require('process')
const Telegraf = require('telegraf');

// Create new Bot using a token
const bot = new Telegraf("714725843:AAEdPhNbJ4C5DQ9PHi27B72GmmgAwN22a0U");
// const bot = new Telegraf(proc.env.TELEGRAM_BOT_ID);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Il max è escluso e il min è incluso
}

function getFact() {
    const facts = [
        "Ferruccio non tira in porta: lui guarda la pallina fino a che questa non scarta il portiere",
        "Ferruccio non dribbla: è il biliardino che si sposta intorno al suo giocatore",
        "Ferruccio tira così a sorpresa che i suoi goal sono retroattivi",
        "Ferruccio può fare due punti con un goal",
        "Ferruccio può crossare con il portiere",
        "Ferruccio può vincere giocando bendato, con una mano dietro la schiena, sorseggiando un brandy",
        "Se segni a Ferruccio, poi ti svegli sudato"
    ]

    return facts[getRandomInt(0, facts.length - 1)]
}

bot.start((message) => {
    return message.reply(
        'Benvenuto ' + message.from.first_name + ': questi sono i Ferruccio\'s Facts\nQualunque cosa mi chiedi, te ne dirò uno.'
    );
})

bot.on('text', message => {
    message.reply(getFact())
})

bot.startPolling();

