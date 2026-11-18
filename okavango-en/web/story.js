// Okavango River Short - Maven Map Project
import { cam, region, river, title, captions, end, T, start, atlasName, label } from './map.js';

// Coordinates
const AFRICA_CTR = [20.0, 0.0];
const OKAVANGO_DELTA = [22.4, -19.2];
const OKAVANGO_SOURCE = [17.5, -12.5];
const KALAHARI = [22.0, -23.5];

// --- Camera path ---
cam(0, { lon: AFRICA_CTR[0], lat: AFRICA_CTR[1], span: 80 }); // Africa
cam(T('Africa'), { lon: 20.0, lat: -10.0, span: 55, ease: 'io' });
cam(T('massive'), { lon: OKAVANGO_DELTA[0], lat: -15.0, span: 35, ease: 'io' });
cam(T('desert.'), { lon: OKAVANGO_DELTA[0], lat: OKAVANGO_DELTA[1], span: 15, ease: 'io' });
cam(T('Okavango'), { lon: OKAVANGO_DELTA[0], lat: OKAVANGO_DELTA[1], span: 12, ease: 'sine' });
cam(T('Kalahari'), { lon: KALAHARI[0], lat: KALAHARI[1], span: 22, ease: 'io' });
cam(T('part'), { lon: OKAVANGO_DELTA[0], lat: OKAVANGO_DELTA[1], span: 35, dive: true, ease: 'io' });
cam(T('desert!'), { lon: OKAVANGO_DELTA[0], lat: OKAVANGO_DELTA[1], span: 40, ease: 'sine' });

// --- Graphics ---

// Line 1: There's a river in Africa...
region('BWA', { at: T('Africa'), style: 'tint', until: T('massive'), label: 'Botswana' });

// Line 2: Okavango River
river('Okavango', { at: T('Okavango'), dur: 1.8, color: '#5cc8ff', width: 6 });
atlasName(OKAVANGO_DELTA, 'Okavango Delta', { at: T('Okavango') + 0.5, size: 90, color: 'white', until: T('deltas') });

// Line 3: Kalahari Desert
region('NAM', { at: T('Kalahari'), style: 'orange', opacity: 0.3, until: T('deltas') });
atlasName(KALAHARI, 'Kalahari Desert', { at: T('Kalahari'), size: 110, color: '#ff9a1f', until: T('deltas') });

// Line 4: Inland deltas
title('Inland Delta', { at: T('deltas'), size: 160, color: '#3fd27a', glow: true, until: T('desert!') });
label(OKAVANGO_DELTA, 'Water in the Sands', { at: T('right'), size: 60, color: 'white', dy: 100 });

captions({ style: 'clean' });
end(T('desert!+1.5'));
start();
