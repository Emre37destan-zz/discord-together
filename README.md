<p align="center">
<h1><strong>Discord Birlikte</strong></h1>

[![NPM](https://nodei.co/npm/discord-together.png)](https://nodei.co/npm/discord-together/)

[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)

![DL](https://img.shields.io/npm/dt/discord-together?style=for-the-badge)
</p>

# 🔩 Kurulum
## Düzenlemek [discord-together](https://www.npmjs.com/package/discord-together)
```
$ npm install discord-together@latest
```

## Düzenlemek [discord.js](https://www.npmjs.com/package/discord.js)
```
$ npm install discord.js@latest
```
*Not: Discord.js'nin tüm sürümlerini destekler*

# 🔑 Özellikleri
- Kullanımı kolay
- Çoklu sunucu
- Anlaşmazlık desteği
- Hafif

### <u>Belgeler ➩ yakında gelecek !</u>

<br/>

# 💻 Kod örneği
Bu, bu paketi kullanan basit bir kod örneğidir.

```js
const Discord = require('discord.js');
const client = new Discord.Client();
const { DiscordTogether } = require('discord-together');

client.discordTogether = new DiscordTogether(client);

client.on('messageCreate', async message => { // 'message' for Discord.js v12
    if (message.content === 'başla') {
        if(message.member.voice.channel) {
            client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
                return message.channel.send(`${invite.code}`);
            });
        };
    };
});

client.login('Discord bot Tokeniniz');
```
<br/>

# 🔧 Seçenekler
- Youtube
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'youtube').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Poker
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'poker').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Satranç
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'chess').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```
Satrancın geliştirme sürümünü de seçebilirsiniz, şunu kullanın: `chessDev`.

- İhanet
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'betrayal').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Balık tutma
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'fishing').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

- Özel uygulama ID
```js
client.discordTogether.createTogetherCode(message.member.voice.channel.id, 'application ID').then(async invite => {
    return message.channel.send(`${invite.code}`);
});
```

# 📷 Resim 

![Davet bağlantısı](https://media.discordapp.net/attachments/835896457454026802/837968506846183474/2021-05-01_10h26_17.png)

### *Not: Aktiviteyi başlatmak için 'Oynat' butonuna değil MAVİ BAĞLANTI'ya tıklamanız gerekmektedir !*

<br/>

![YouTube Birlikte](https://media.discordapp.net/attachments/835896457454026802/837968510843093033/2021-05-01_10h27_31.png?width=1229&height=676)

<br/>

# 🌌 Discord Together ile yapılan bot örnekleri
- [Discord Birlikte Bot](https://github.com/RemyK888/discord-together-bot) by [RemyK](https://github.com/Emre37destan)
- [Lambdapse](https://github.com/lambdagit101/lambdapse) by [Lambdaguy101](https://github.com/lambdagit101)

# 🚀 Diğerleri

### **Daktilo yazısı bildirim dosyasını hazırlayan [3chospirits](https://github.com/3chospirits) e çok teşekkürler!**

**Bu paket MIT lisansı altındadır.**

*Not: Bu paket Discord veya YouTube ile bağlantılı değildir.*

Herhangi bir sorununuz varsa, iletişime geçebilirsiniz: `Dk Emre 30#8590`.
**Discord sunucusu:** [Sunucu Bağlantısı](https://discord.gg/AnUXS6z5tY)

[**Github deposu**](https://github.com/Emre37destan/discord-together)

<hr>

## **❤ ile Emre37destan tarafından yapılmıştır**


