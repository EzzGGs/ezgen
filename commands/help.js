const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'yardım',
    description: 'Botun yardım menüsünü gösterir.',
    execute(message) {
        const embed = new EmbedBuilder()
            .setTitle('✨ EzGen ✨')
            .setColor(0x00ff00)
            .setDescription(`
             ✨Sorgu Komutları               
📌  !tc = tc den kişisel bilgileri
📌  !gsm = tc den gsm
📌  !adres = tc den adres
📌  !aile = tc den aile bilgileri
📌  !adsoyad = ad soyad dan kişisel bilgileri
📌  !kızlıksoyad = kişinin kızlık soyadını gösterir
📌  !yetim = yetim sorgula


            ✨gen komutları
📌  !gen netflix = netflix hesabı 
📌  !gen exxen = exxen hesabı
📌  !gen craftrise = craftrise hesabı
📌  !gen blutv = blutv hesabı

Codded By EzzGGs
            `);

        message.channel.send({ embeds: [embed] });
    },
};
