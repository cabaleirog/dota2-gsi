module.exports = {
    base: {
        auth: null,
        provider: {
            name: null,
            appid: null,
            version: null,
            timestamp: null
        },
        map: {
            name: null,
            matchid: null,
            gametime: null,
            clocktime: null,
            isdaytime: null,
            isnightstalker_night: null,
            gamestate: null,
            win_team: null,
            customgamename: null,
            ward_purchase_cooldown: null
        },
        player: {
            steamid: null,
            name: null,
            activity: null,
            kills: null,
            deaths: null,
            assists: null,
            last_hits: null,
            denies: null,
            kill_streak: null,
            team_name: null,
            gold: null,
            gold_reliable: null,
            gold_unreliable: null,
            gpm: null,
            xpm: null
        },
        hero: {
            id: null,
            name: null,
            level: null,
            alive: null,
            respawn_seconds: null,
            buyback_cost: null,
            buyback_cooldown: null,
            health: null,
            max_health: null,
            health_percent: null,
            mana: null,
            max_mana: null,
            mana_percent: null,
            silenced: null,
            stunned: null,
            disarmed: null,
            magicimmune: null,
            hexed: null,
            muted: null,
            break: null,
            has_debuff: null,
        },
        abilities: [],
        items: [],
    },
    item_base: {
        name: null,
        contains_rune: null,
        can_cast: null,
        colldown: null,
        passive: null,
        charges: null
    },
    abilit_base: {
        name: null,
        level: null,
        can_cast: null,
        passive: null,
        ability_active: null,
        cooldown: null,
        ultimate: null
    }
};