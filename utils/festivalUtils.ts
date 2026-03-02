import festivalsData from '../data/festivals.json';

export interface Festival {
    name: string;
    effect: 'golden-dust' | 'snow-drift' | 'tricolor-glow' | 'moon-pulse' | 'ambient-shimmer' | 'shield-glow';
    message: string;
}

export interface LocationData {
    country: string;
    state: string | null;
    timezone: string;
    lastFetched: number;
}

const CACHE_KEY = 'fest_loc_cache';
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 Hours

export const fetchLocationData = async (): Promise<LocationData> => {
    try {
        const cached = localStorage.getItem(CACHE_KEY);
        if (cached) {
            const parsed = JSON.parse(cached);
            if (Date.now() - parsed.lastFetched < CACHE_DURATION) {
                return parsed;
            }
        }

        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();

        const location: LocationData = {
            country: data.country_name || 'Global',
            state: data.region || null,
            timezone: data.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone,
            lastFetched: Date.now()
        };

        localStorage.setItem(CACHE_KEY, JSON.stringify(location));
        return location;
    } catch (error) {
        // Fallback to browser locale
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return {
            country: timeZone.includes('Kolkata') ? 'India' : 'Global',
            state: localStorage.getItem('user_region_state') || null,
            timezone: timeZone,
            lastFetched: Date.now()
        };
    }
};

export const getCurrentFestival = (location: LocationData): Festival | null => {
    const now = new Date();
    const year = now.getFullYear().toString();
    const monthDay = `${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

    // 1. GLOBAL FIXED (Layer 1)
    const globalFixed: Record<string, Festival> = {
        "01-01": { name: "New Year", effect: "ambient-shimmer", message: "HAPPY NEW YEAR" },
        "03-08": { name: "Women’s Day", effect: "golden-dust", message: "INTERNATIONAL WOMEN’S DAY" },
        "12-25": { name: "Christmas", effect: "snow-drift", message: "MERRY CHRISTMAS" },
        "10-31": { name: "Halloween", effect: "moon-pulse", message: "HAPPY HALLOWEEN" }
    };

    if (now.getMonth() === 9) return { name: "Cybersecurity Awareness Month", effect: "shield-glow", message: "CYBERSECURITY AWARENESS MONTH" };
    if (globalFixed[monthDay]) return globalFixed[monthDay];

    // 2. COUNTRY SPECIFIC (Layer 2)
    if (location.country === 'United States' && monthDay === '07-04') return { name: "Independence Day", effect: "ambient-shimmer", message: "HAPPY INDEPENDENCE DAY" };
    if (location.country === 'India' && monthDay === '08-15') return { name: "Independence Day", effect: "tricolor-glow", message: "HAPPY INDEPENDENCE DAY" };
    if (location.country === 'India' && monthDay === '01-26') return { name: "Republic Day", effect: "tricolor-glow", message: "HAPPY REPUBLIC DAY" };

    // 3. LUNAR SUPPORT (Layer 4)
    // A. Islamic (Intl)
    const hijriFormatter = new Intl.DateTimeFormat('en-u-ca-islamic-uma-nu-latn', { day: 'numeric', month: 'numeric' });
    const parts = hijriFormatter.formatToParts(now);
    const hDay = parts.find(p => p.type === 'day')?.value || '';
    const hMonth = parts.find(p => p.type === 'month')?.value || '';

    if (hMonth === '9') return { name: "Ramadan", effect: "moon-pulse", message: "RAMADAN KAREEM" };
    if (hMonth === '10' && (hDay === '1' || hDay === '2')) return { name: "Eid al-Fitr", effect: "moon-pulse", message: "EID MUBARAK" };
    if (hMonth === '12' && (hDay === '10' || hDay === '11')) return { name: "Eid al-Adha", effect: "moon-pulse", message: "EID MUBARAK" };

    // B. Hindu (JSON Lookup)
    const yearFestivals = (festivalsData.festivals as any)[year];
    if (yearFestivals) {
        for (const [festName, date] of Object.entries(yearFestivals)) {
            if (date === monthDay) {
                // Check if it's a state-specific mapping for India
                if (location.country === 'India' && location.state) {
                    const stateMatch = festivalsData.mapping[location.state as keyof typeof festivalsData.mapping];
                    if (stateMatch === festName) {
                        return { name: festName, effect: festName === 'Diwali' ? 'golden-dust' : 'ambient-shimmer', message: `HAPPY ${festName.toUpperCase()}` };
                    }
                }
                // If not state-specific or generic India/Global lunar
                const genericLunar = ['Holi', 'Diwali', 'Navratri', 'Maha Shivratri', 'Raksha Bandhan'];
                if (genericLunar.includes(festName)) {
                    return { name: festName, effect: festName === 'Diwali' ? 'golden-dust' : 'ambient-shimmer', message: `HAPPY ${festName.toUpperCase()}` };
                }
            }
        }
    }

    // 4. INDIA STATE LEVEL (Layer 3 - Fixed Dates)
    if (location.country === 'India' && location.state) {
        if (location.state === 'Tamil Nadu' && monthDay === '01-14') return { name: "Pongal", effect: "golden-dust", message: "HAPPY PONGAL" };
        if (location.state === 'Punjab' && monthDay === '04-14') return { name: "Baisakhi", effect: "golden-dust", message: "HAPPY BAISAKHI" };
    }

    return null;
};
