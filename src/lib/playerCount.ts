import type { StatusResponse } from '../types/serverStatusApi.d';
import type { Guild } from 'discord.js';
import { config } from '../config';
import axios from 'axios';

export async function getPlayerCount() {
    const { data } = await axios<StatusResponse>(
        'https://api.mcstatus.io/v2/status/java/plymouth.mcuni.org',
    );

    return data.players.online;
}

export async function setPlayerCount(guild: Guild) {
    const channel = await guild.channels.fetch(config.playerCountChannel);

    if (!channel)
        throw new Error(
            `Unable to find playerCountChannel with id "${config.playerCountChannel}"`,
        );

    const count = await getPlayerCount();

    await channel.setName(`${count} Player${count != 1 ? 's' : ''} Online`);
}
