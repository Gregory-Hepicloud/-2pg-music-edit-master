import { Player, PlayerOptions, Track } from './player';
import { MusicClientEvent } from './events';
export declare class MusicClient {
    /** Players for each guild. */
    readonly players: Map<string, Player>;
    constructor();
    /** Listen to music client events.
     * @param event Music client event to listen to.
     * @param event Callback function for event listener.
    */
    on(event: MusicClientEvent, listener: (...args: any[]) => void): void;
    /** Create a player for a guild.
     * @param guildId Guild ID of the player.
     * @param options Options for the player.
    */
    create(guildId: string, options: PlayerOptions): Player;
    /** Get a player for a guild.
     * @param guildId Guild ID of the player.
    */
    get(guildId: string): Player;
    /** Search YouTube for tracks.
     * @param query Term to search YouTube for.
    */
    search(query: string): Promise<Track[]>;
}
export { Player, PlayerOptions, Track } from './player';
