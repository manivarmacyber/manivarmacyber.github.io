import { festivalConfig, floatingFestivals, Festival } from '../data/festivals';

export const getRegionData = () => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const language = navigator.language;
    const countryCode = timeZone.includes('/') ? timeZone.split('/')[0] : '';

    let country = 'GLOBAL';
    if (timeZone.includes('Kolkata') || language.endsWith('IN')) country = 'INDIA';
    else if (timeZone.includes('America') || language.endsWith('US')) country = 'USA';

    const storedState = localStorage.getItem('user_region_state');

    return {
        country,
        state: storedState || null,
        timeZone,
        language
    };
};

export const getCurrentFestival = (): Festival | null => {
    const { country, state } = getRegionData();
    const now = new Date();
    const year = now.getFullYear().toString();
    const monthDay = `${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDate().toString().padStart(2, '0')}`;

    let festival: Festival | null = null;

    // 1. Check Floating/Lunar Festivals first (High Priority)
    const floatingInYear = floatingFestivals[year];
    if (floatingInYear) {
        if (country === 'INDIA') {
            if (state && floatingInYear.INDIA?.STATES?.[state]?.[monthDay]) {
                return floatingInYear.INDIA.STATES[state][monthDay];
            }
            if (floatingInYear.INDIA?.NATIONAL?.[monthDay]) {
                return floatingInYear.INDIA.NATIONAL[monthDay];
            }
        } else if (country === 'USA' && floatingInYear.USA?.[monthDay]) {
            return floatingInYear.USA[monthDay];
        }
    }

    // 2. Check Standard Config (Priority: State > National > Global)
    if (country === 'INDIA') {
        if (state && festivalConfig.INDIA.STATES[state]?.[monthDay]) {
            return festivalConfig.INDIA.STATES[state][monthDay];
        }
        if (festivalConfig.INDIA.NATIONAL[monthDay]) {
            return festivalConfig.INDIA.NATIONAL[monthDay];
        }
    } else if (country === 'USA') {
        if (festivalConfig.USA[monthDay]) {
            return festivalConfig.USA[monthDay];
        }
    }

    // 3. Fallback to Global
    if (festivalConfig.GLOBAL[monthDay]) {
        return festivalConfig.GLOBAL[monthDay];
    }

    return null;
};
