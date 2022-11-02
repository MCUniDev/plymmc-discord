export interface Version {
    name_raw: string;
    name_clean: string;
    name_html: string;
    protocol: number;
}

export interface Players {
    online: number;
    max: number;
    list: any[];
}

export interface Motd {
    raw: string;
    clean: string;
    html: string;
}

export interface StatusResponse {
    online: boolean;
    host: string;
    port: number;
    eula_blocked: boolean;
    retrieved_at: number;
    version: Version;
    players: Players;
    motd: Motd;
    icon: string;
    mods: any[];
}
