module.exports = {
    name: 'wiek',
    aliases: ['wiek'],
    description: 'Wybierz wiek!',
    execute(message, args, Discord) {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Nie masz uprawnieล!")

        const channel = message.guild.channels.cache.get('829683978440015895');

        const embed = new Discord.MessageEmbed()
 
        .setColor('#00FF00')
        .setTitle('Wybierz wiek!')
        .setDescription('**๐งฌ- 12+\n๐ - 14+\n๐ - 16+\n๐ - 18+\n๐ฏ - 20+\n๐- 25+\n๐ - 30+**')
        .setFooter('๐2021 ยฉ Copyright by VeeonPlus','https://imgur.com/lnmyZOr.png');
 
        channel.send(embed);
    }
}