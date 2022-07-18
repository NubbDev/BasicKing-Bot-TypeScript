import { MessageEmbed, TextChannel } from "discord.js";
import { ICommand } from "wokcommands";
import * as fs from 'fs';

let rules = JSON.parse(fs.readFileSync('./commands/embeds/rules.json').toString())
let staff = JSON.parse(fs.readFileSync('./commands/embeds/staff.json').toString())

export default {
    category: "embeds",
    description: "send Embeds",

    hidden: true,
    ownerOnly: true,
    testOnly: true,
    slash: true,

    minArgs: 2,
    maxArgs: 2,
    expectedArgs:'<channel> <name>',
    expectedArgsTypes: ['CHANNEL', 'STRING'],

    callback: ({interaction, args}) => {
        const channel = (interaction.options.getChannel('channel')) as TextChannel;
        if (!channel || channel.type !== 'GUILD_TEXT') {
            return 'Please tag a text channel'
        }

        var embed:any;
        const text = args[1]
        if (text === 'rules') {
            embed = new MessageEmbed(rules)
            channel.send(embed)
            return 'sent'
        } else if (text === 'staff'){
            embed = new MessageEmbed(staff)
            channel.send(embed)
            return 'sent'
        } else {
            return `Unable to find ${embed}`
        }
        
    }
} as ICommand