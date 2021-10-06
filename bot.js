const { Telegraf, Telegram } = require(`telegraf`);
const bot = new Telegraf(`2046620036:AAH-P6pq2oOtVXDk_aMyqVuG0PKuXdBi6GI`);
const tg = new Telegram(`2046620036:AAH-P6pq2oOtVXDk_aMyqVuG0PKuXdBi6GI`);
const wget = require(`node-wget`);
const nid = require(`nanoid`);
bot.start((ctx) => ctx.reply(`Отправьте фото/файл для загрузки на сервер.`));
bot.on(`message`, async (ctx) => {
    let att = ctx.message.document || ctx.message.photo;
    if (!att) return ctx.reply(`Только файл и ничего более.`);
    if (att instanceof Array) att = att[att.length - 1];
    const file = await tg.getFileLink(att);
    const url = file.href;
    const dest = nid.nanoid(`/root/rslnk/uploads/`);
    wget(
        {
            url,
            dest,
        },
        (e, r, b) => {
            if (!e)
                ctx.reply(
                    `Файл загружен!\n\nСсылка для скачивания: https://rslnk.ru/${
                        r.filepath.split(`/`)[1]
                    }}`
                );
            console.log(r);
        }
    );
});

bot.launch();
