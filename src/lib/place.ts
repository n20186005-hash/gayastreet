/** Shared place facts + schema helpers used by every page. */
export const place = {
  name: 'Gaya Street Market',
  streetAddress: 'Jalan Gaya',
  addressLocality: 'Kota Kinabalu',
  postalCode: '88000',
  addressRegion: 'Sabah',
  addressCountry: 'MY',
  latitude: 5.9821841,
  longitude: 116.0736846,
  timezone: 'Asia/Kuala_Lumpur',
  hasMap: 'https://maps.app.goo.gl/i1PGV12Mrwiad9M28',
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.09116592099!2d116.07368461214215!3d5.982184143977763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x323b698f870637b5%3A0xfbb01a6fe8fa566d!2z5Yqg6ZuF6KGX56S85ouc5aSp5biC5Zy6!5e0!3m2!1sms!2sus!4v1786583517386!5m2!1sms!2sus',
};

export const TZ = '+08:00';

export const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: place.streetAddress,
  addressLocality: place.addressLocality,
  postalCode: place.postalCode,
  addressRegion: place.addressRegion,
  addressCountry: place.addressCountry,
};

export const geo = {
  '@type': 'GeoCoordinates',
  latitude: place.latitude,
  longitude: place.longitude,
};

const pad = (n: number) => String(n).padStart(2, '0');

/** Date (YYYY-MM-DD) of the next upcoming Sunday, computed at build time. */
export function nextSunday(): string {
  const today = new Date();
  const daysAhead = (7 - today.getDay()) % 7 || 7;
  const next = new Date(today.getTime());
  next.setDate(today.getDate() + daysAhead);
  return `${next.getFullYear()}-${pad(next.getMonth() + 1)}-${pad(next.getDate())}`;
}
