import { Message } from 'discord.js';

// قاعدة بيانات وهمية مؤقتة لحفظ الحسابات البنكية (في الذاكرة)
const bankAccounts: { [userId: string]: { wallet: number; bank: number } } = {};

export function handleBankCommands(message: Message, command: string, args: string[]) {
    const userId = message.author.id;

    // إنشاء حساب بنكي للمستخدم إذا لم يكن لديه حساب سابقاً
    if (!bankAccounts[userId]) {
        bankAccounts[userId] = { wallet: 500, bank: 1000 }; // يعطيه 500 كاش و 1000 في البنك كبداية
    }

    const account = bankAccounts[userId];

    // 1. أمر رصيد (فلوس)
    if (command === 'فلوس' || command === 'رصيد') {
        return message.reply(`💳 **الحساب البنكي لـ ${message.author.username}:**\n💵 كاش في الجيب: $${account.wallet}\n🏦 في البنك: $${account.bank}`);
    }

    // 2. أمر إيداع الفلوس في البنك
    if (command === 'إيداع' || command === 'ايداع') {
        const amount = parseInt(args[0]);
        if (!amount || amount <= 0) return message.reply("❌ يرجى تحديد المبلغ الذي تريد إيداعه. مثال: `إيداع 100`");
        if (amount > account.wallet) return message.reply("❌ ليس لديك هذا المبلغ في جيبك حالياً!");

        account.wallet -= amount;
        account.bank += amount;
        return message.reply(`✅ تم إيداع $${amount} في حسابك البنكي بنجاح.`);
    }

    // 3. أمر سحب الفلوس من البنك
    if (command === 'سحب') {
        const amount = parseInt(args[0]);
        if (!amount || amount <= 0) return message.reply("❌ يرجى تحديد المبلغ الذي تريد سحبه. مثال: `سحب 100`");
        if (amount > account.bank) return message.reply("❌ ليس لديك هذا المبلغ في البنك!");

        account.bank -= amount;
        account.wallet += amount;
        return message.reply(`✅ تم سحب $${amount} من البنك إلى جيبك بنجاح.`);
    }

    // 4. أمر راتب (يعطيه راتب كل فترة)
    if (command === 'راتب') {
        const salary = 1200; // قيمة راتب الوظيفة في السيرفر
        account.wallet += salary;
        return message.reply(`💰 استلمت راتبك اليومي بقيمة $${salary} كاش في جيبك!`);
    }
}
