import { setPlayerCount } from '../lib/playerCount';
import { event } from 'jellycommands';
import { config } from '../config';

// TODO use x-cache-time-remaining header?

export default event({
    name: 'ready',
    run: async (_, client) => {
        console.log(client.user.tag, 'is online!');

        const guild = await client.guilds.fetch(config.playerCountGuild);

        if (!guild)
            throw new Error(
                `Unable to find playerCountGuild with id "${config.playerCountGuild}"`,
            );

        setInterval(async () => {
            console.log('Updating player count');
            await setPlayerCount(guild);
            console.log('  Updated player count');
        }, 300000);
    },
});
