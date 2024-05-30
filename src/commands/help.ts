import { Interaction, SlashCommandBuilder } from 'discord.js';

export default {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Provides help to the user'),
    async execute(interaction: any) {
        await interaction.reply('It works!')
    }
}