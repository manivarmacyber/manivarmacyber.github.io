export interface Festival {
    name: string;
    effect: 'golden-dust' | 'floral-ambient' | 'snow-drift' | 'tricolor-glow' | 'moon-pulse' | 'warm-sparkle';
    message: string;
}

export interface RegionalFestivals {
    [date: string]: Festival;
}

export interface FestivalConfig {
    GLOBAL: RegionalFestivals;
    USA: RegionalFestivals;
    INDIA: {
        NATIONAL: RegionalFestivals;
        STATES: {
            [stateCode: string]: RegionalFestivals;
        };
    };
}

export const festivalConfig: FestivalConfig = {
    GLOBAL: {
        "01-01": { name: "New Year", effect: "golden-dust", message: "Happy New Year" },
        "12-25": { name: "Christmas", effect: "snow-drift", message: "Merry Christmas" },
        "03-08": { name: "International Women's Day", effect: "golden-dust", message: "Happy Women's Day" },
        "05-01": { name: "Labour Day", effect: "warm-sparkle", message: "Happy Labour Day" }
    },
    USA: {
        "07-04": { name: "Independence Day", effect: "warm-sparkle", message: "Happy Independence Day" },
        "10-31": { name: "Halloween", effect: "moon-pulse", message: "Happy Halloween" }
        // Thanksgiving is 4th Thursday of Nov, handled in logic or specific date
    },
    INDIA: {
        NATIONAL: {
            "01-26": { name: "Republic Day", effect: "tricolor-glow", message: "Happy Republic Day" },
            "08-15": { name: "Independence Day", effect: "tricolor-glow", message: "Happy Independence Day" },
            "10-02": { name: "Gandhi Jayanti", effect: "golden-dust", message: "Happy Gandhi Jayanti" }
        },
        STATES: {
            "TN": {
                "01-14": { name: "Pongal", effect: "golden-dust", message: "Happy Pongal" }
            },
            "KL": {
                "04-14": { name: "Vishu", effect: "floral-ambient", message: "Happy Vishu" }
                // Onam is lunar, date varies
            },
            "KA": {
                "01-14": { name: "Sankranti", effect: "golden-dust", message: "Happy Sankranti" }
            },
            "AP": {
                "01-14": { name: "Bhogi", effect: "warm-sparkle", message: "Happy Bhogi" }
                // Ugadi is lunar
            },
            "TS": {
                "01-14": { name: "Bhogi", effect: "warm-sparkle", message: "Happy Bhogi" }
            },
            "WB": {
                // Durga Puja is lunar
            },
            "MH": {
                // Ganesh Chaturthi is lunar
            },
            "PB": {
                "04-14": { name: "Baisakhi", effect: "golden-dust", message: "Happy Baisakhi" }
            },
            "GJ": {
                // Navratri is lunar
            }
        }
    }
};

// Yearly variations for lunar/floating festivals
export const floatingFestivals: { [year: string]: any } = {
    "2026": {
        "INDIA": {
            "STATES": {
                "KL": { "08-27": { name: "Onam", effect: "floral-ambient", message: "Happy Onam" } },
                "AP": { "03-19": { name: "Ugadi", effect: "floral-ambient", message: "Happy Ugadi" } },
                "TS": { "03-19": { name: "Ugadi", effect: "floral-ambient", message: "Happy Ugadi" } },
                "WB": { "10-16": { name: "Durga Puja", effect: "floral-ambient", message: "Happy Durga Puja" } },
                "MH": { "09-14": { name: "Ganesh Chaturthi", effect: "warm-sparkle", message: "Happy Ganesh Chaturthi" } },
                "GJ": { "10-12": { name: "Navratri", effect: "golden-dust", message: "Happy Navratri" } }
            },
            "NATIONAL": {
                "03-02": { name: "Holika Dahan", effect: "warm-sparkle", message: "Happy Holika Dahan" },
                "03-03": { name: "Holi", effect: "floral-ambient", message: "Happy Holi" },
                "11-08": { name: "Diwali", effect: "warm-sparkle", message: "Happy Diwali" },
                "03-27": { name: "Ram Navami", effect: "moon-pulse", message: "Happy Ram Navami" },
                "03-20": { name: "Eid al-Fitr", effect: "moon-pulse", message: "Eid Mubarak" }
            }
        },
        "USA": {
            "11-26": { name: "Thanksgiving", effect: "warm-sparkle", message: "Happy Thanksgiving" }
        },
        "GLOBAL": {
            "03-02": { name: "Purim", effect: "golden-dust", message: "Happy Purim" }
        }
    }
};
