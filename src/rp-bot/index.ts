import { Client, GatewayIntentBits } from 'discord.js';
import express from 'express';

// 1. سيرفر الويب لإبقاء البوت أونلاين 24/7
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send("البوت يعمل بنجاح وأونلاين 24 ساعة!");
});

app.listen(PORT, () => {
    console.log(`سيرفر الويب يعمل على المنفذ ${PORT}`);
});

// 2. إعداد وإطلاق بوت الديسكورد
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers
    ]
});

client.on('ready', () => {
    console.log(`تم تشغيل البوت بنجاح باسم: ${client.user?.tag}`);
});

// ضع التوكن الخاص ببوتك هنا بين القوسين
const BOT_TOKEN = "ضع_توكن_البوت_الخاص_بك_هنا"; 

if (BOT_TOKEN && BOT_TOKEN !== "ضع_توكن_البوت_الخاص_بك_هنا") {
    client.login(BOT_TOKEN);
} else {
    console.log("تنبيه: يرجى وضع توكن البوت الصحيح ليتم الاتصال بديسكورد.");
}
