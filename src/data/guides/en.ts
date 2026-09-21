import type { Guide } from './types';

export const guidesEn: Record<string, Guide> = {
  'sunday-market': {
    slug: 'sunday-market',
    image: '/gallery/gaya-street-market-2.jpg',
    card: { label: 'Sunday Market', note: 'Hours, stall layout, what to eat & buy' },
    meta: {
      title: 'Gaya Street Sunday Market — Hours, Stall Map & What to Eat',
      description:
        'Gaya Street Sunday market runs 07:00–12:00 with free entry: how the stalls are laid out, what to eat and buy, where to park, cash and weather tips, and the best time to arrive.',
    },
    hero: {
      eyebrow: 'JALAN GAYA · KOTA KINABALU',
      h1: ['Gaya Street', 'Sunday Market'],
      lede: 'One morning a week Jalan Gaya stops being a road. From 07:00 the shophouses fill with stalls, and by noon the street hands itself back to traffic.',
    },
    facts: [
      { label: 'Hours', value: 'Sun 07:00–12:00', note: 'Weekly · street closed to traffic' },
      { label: 'Entry', value: 'Free', note: 'Pay per stall · small cash helps' },
      { label: 'Best window', value: '07:00–10:00', note: 'Cooler air, fullest choice' },
    ],
    sections: [
      {
        heading: 'How the market is laid out',
        body: 'The market runs the length of Jalan Gaya between the two gate arches. Think of it as four loose zones rather than a numbered map — stallholders shift a little every week, but the rhythm stays the same.',
        items: [
          { no: '01', name: 'The gate arch end', note: 'Start here: the arch frames the street and the first breakfast stalls sit just inside it' },
          { no: '02', name: 'Food & breakfast stretch', note: 'Laksa, kopi, kaya toast, kuih and fried snacks — follow the steam' },
          { no: '03', name: 'Fruit, plants & herbs', note: 'Seasonal fruit, seedlings, herbs and spices laid out on mats' },
          { no: '04', name: 'Crafts & household', note: 'Rattan baskets, woven mats, clothes, souvenirs and the odd second-hand table' },
        ],
      },
      {
        heading: 'What to eat first',
        body: 'Come hungry. Breakfast is why locals arrive early, and the best plan is to share small plates rather than commit to one dish.',
        items: [
          { no: '01', name: 'Laksa', note: 'Coconut-rich broth with noodles; the most reliable first bowl of the morning' },
          { no: '02', name: 'Kopi & kaya toast', note: 'Strong local coffee with coconut-jam toast at a kopitiam under the five-foot way' },
          { no: '03', name: 'Kuih', note: 'Steamed and fried cakes sold by the piece — easy to eat while walking' },
          { no: '04', name: 'Cut fruit & iced drinks', note: 'Fruit cups, lime and cane juice once the sun comes up' },
        ],
      },
      {
        heading: 'What to buy, and how to pay',
        body: 'Most of what is sold here is everyday Sabah: baskets, plants, snacks and fabric. Prices are usually posted; where they are not, a smile and a question work better than hard bargaining.',
        items: [
          { no: '01', name: 'Rattan & woven ware', note: 'Baskets and mats — check the weave and ask whether it is hand-made' },
          { no: '02', name: 'Plants & seedlings', note: 'Herbs, orchids and fruit saplings; ask how much sun they need' },
          { no: '03', name: 'Local snacks & coffee', note: 'Dried fruit, crackers and packed local coffee travel well' },
          { no: '04', name: 'Souvenirs', note: 'Postcards, magnets, T-shirts and small crafts near the middle of the street' },
        ],
      },
      {
        heading: 'Getting there, parking and weather',
        body: 'Jalan Gaya is closed to cars on Sunday morning, so the trick is simple: park once, outside the closure, and walk in.',
        items: [
          { no: '01', name: 'Park outside the closure', note: 'Public lots and mall car parks around the old town; avoid stall lanes and junctions' },
          { no: '02', name: 'Walk in from the waterfront', note: 'About ten minutes from the esplanade through the old-town grid' },
          { no: '03', name: 'Cash & ATMs', note: 'Stalls are mostly cash; some take QR payments. ATMs sit on and just off Jalan Gaya' },
          { no: '04', name: 'Sun & rain', note: 'Carry water and a light umbrella; the five-foot way gives shade and shelter' },
        ],
      },
    ],
    faq: [
      { q: 'What time should I arrive at the Gaya Street Sunday market?', a: 'Between 07:00 and 10:00. The air is still cool, the stalls are fully set up and breakfast is at its best; by 11:30 stallholders start packing up.' },
      { q: 'How long does it take to walk the market?', a: 'One to two hours at an unhurried pace, including a breakfast stop. Add another hour if you continue into the old town and up to Signal Hill.' },
      { q: 'Is the Sunday market open on public holidays?', a: 'It runs weekly and usually goes ahead on public holidays, though hours can shift. Check official notices before making a special trip.' },
      { q: 'Can I park on Gaya Street during the market?', a: 'No — Jalan Gaya is closed to traffic for pedestrians on Sunday morning. Park in a public lot or mall car park nearby and walk in.' },
      { q: 'Is the market manageable with children or a stroller?', a: 'Yes before about 09:00, while the street is still loose. By mid-morning it gets crowded and a small backpack carrier beats a stroller.' },
    ],
    event: 'sunday-market',
  },

  'night-market': {
    slug: 'night-market',
    image: '/gallery/gaya-street-market-6.jpg',
    card: { label: 'Night Market', note: 'Api-Api after dark: hours, food, how to walk there' },
    meta: {
      title: 'Api-Api Night Market Kota Kinabalu — Hours, Food & Getting There',
      description:
        'Api-Api night market is a five-minute walk from Gaya Street: 17:00–22:00, what to eat (satay, grilled seafood, laksa), how to get there, cash tips and the best time to go.',
    },
    hero: {
      eyebrow: 'API-API · FIVE MINUTES FROM JALAN GAYA',
      h1: ['Api-Api', 'Night Market'],
      lede: 'When the Sunday market packs up and the light goes soft, the old town eats again — fluorescent light, plastic tables, and smoke drifting across Jalan Gaya.',
    },
    facts: [
      { label: 'Hours', value: '17:00–22:00', note: 'Daily · busiest after 19:00' },
      { label: 'From Gaya Street', value: '5 min walk', note: 'Flat, well-lit old-town streets' },
      { label: 'Entry', value: 'Free', note: 'Pay per stall · cash preferred' },
    ],
    sections: [
      {
        heading: 'Where it is and how to find it',
        body: 'The night market sits in the Api-Api block just off Jalan Gaya. You will usually smell the charcoal before you see the lights.',
        items: [
          { no: '01', name: 'Api-Api, off Jalan Gaya', note: 'A few hundred metres from the gate arches, inside the old-town grid' },
          { no: '02', name: 'Five minutes on foot', note: 'Walk from Gaya Street towards the waterfront side; no transport needed' },
          { no: '03', name: 'Follow the smoke', note: 'Satay and grilled seafood griddles line the approach' },
          { no: '04', name: 'Shared plastic tables', note: 'Seating is communal — join an empty chair and order from any stall' },
        ],
      },
      {
        heading: 'What to eat',
        body: 'Come with a small appetite and share. Order a couple of things at a time so everything arrives hot.',
        items: [
          { no: '01', name: 'Satay', note: 'Skewered chicken and beef over charcoal with peanut sauce' },
          { no: '02', name: 'Grilled seafood', note: 'Fish, prawns and squid, usually priced by weight or by portion' },
          { no: '03', name: 'Laksa & noodle soups', note: 'A lighter alternative to the charcoal section' },
          { no: '04', name: 'Desserts & drinks', note: 'Local cakes, cut fruit, iced teas and canned drinks' },
        ],
      },
      {
        heading: 'Ordering, paying and staying comfortable',
        body: 'The routine is informal and quick: find a table, remember its number, then order at the stalls and say where you are sitting.',
        items: [
          { no: '01', name: 'Point and order', note: 'Most stalls display raw ingredients; pointing and counting works fine' },
          { no: '02', name: 'Bring cash', note: 'Small ringgit notes are easiest; some stalls take QR payment, few take cards' },
          { no: '03', name: 'Go early or late', note: 'Arrive near 17:00 for space, or after 20:00 when the heat has dropped' },
          { no: '04', name: 'Water & wipes', note: 'Carry your own water and tissues; the seating area has little shade' },
        ],
      },
      {
        heading: 'Pairing it with the rest of the street',
        body: 'The night market works as the closing chapter of a Gaya Street day — or as the main event on any other evening of the week.',
        items: [
          { no: '01', name: 'Sunday: market → night market', note: 'Morning market, an afternoon rest, then dinner under the lights' },
          { no: '02', name: 'Weekday evening', note: 'Walk the shophouses at golden hour, then eat in Api-Api' },
          { no: '03', name: 'After the esplanade sunset', note: 'Ten minutes from the waterfront back into the old town' },
          { no: '04', name: 'Getting back', note: 'Ride-hailing pickups are easiest one block away from the market lanes' },
        ],
      },
    ],
    faq: [
      { q: 'What time does the Api-Api night market open?', a: 'Stalls generally set up in the late afternoon and are in full swing from about 17:00, running to around 22:00.' },
      { q: 'How far is the night market from Gaya Street?', a: 'About five minutes on foot — it sits in the Api-Api block just off Jalan Gaya, inside the old-town grid.' },
      { q: 'Is the Api-Api night market open every day?', a: 'It operates daily in normal conditions, though individual stalls take their own days off and hours can shorten in heavy rain.' },
      { q: 'Can I pay by card at the night market?', a: 'Assume cash. Most stalls take small ringgit notes and some accept QR payment; card terminals are rare, so draw cash at an ATM on Jalan Gaya first.' },
      { q: 'Is it safe to eat at the night market?', a: 'Choose stalls with a queue and food cooked to order in front of you, drink bottled or canned drinks, and you will be fine — it is where locals eat.' },
    ],
    event: 'night-market',
  },

  'things-to-do': {
    slug: 'things-to-do',
    image: '/gallery/gaya-street-market-7.jpg',
    card: { label: 'Things to do', note: 'Ten things near Gaya Street, with walking times' },
    meta: {
      title: 'Top 10 Things to Do Near Gaya Street, Kota Kinabalu',
      description:
        'Ten things to do within walking distance of Gaya Street: the Sunday market, kopitiam breakfast, Atkinson Clock Tower, Signal Hill, the esplanade sunset and the night market — with walking times and a half-day route.',
    },
    hero: {
      eyebrow: 'OLD TOWN · WALKABLE IN HALF A DAY',
      h1: ['Ten things to do', 'near Gaya Street'],
      lede: 'Most of Kota Kinabalu’s old town sits inside a one-kilometre circle around Jalan Gaya. Here are ten ways to fill it — and the order to do them in.',
    },
    facts: [
      { label: 'Walk radius', value: '~1 km', note: 'Everything below is walkable' },
      { label: 'Time needed', value: '3–6 h', note: 'Half day, or a full day with the market' },
      { label: 'Best base', value: 'Gaya Street', note: 'Start and end on Jalan Gaya' },
    ],
    sections: [
      {
        heading: 'The half-day loop',
        body: 'If you only have one morning and one evening in Kota Kinabalu, this is the order that keeps you walking downhill and eating at the right moments.',
        items: [
          { no: '01', name: '07:00 · Sunday market', note: 'Start at the gate arch and walk Jalan Gaya end to end' },
          { no: '02', name: '10:00 · Kopitiam breakfast', note: 'Sit under the five-foot way once the stalls thin out' },
          { no: '03', name: '11:00 · Padang Merdeka & Signal Hill', note: 'Ten minutes uphill to the Atkinson Clock Tower' },
          { no: '04', name: '17:30 · Esplanade sunset', note: 'About ten minutes on foot to the waterfront' },
          { no: '05', name: '19:00 · Api-Api night market', note: 'Back into the old town for dinner under the lights' },
        ],
      },
      {
        heading: 'Ten things to do',
        body: 'All ten are inside the old town or a short walk beyond it. Walking times start from Jalan Gaya.',
        items: [
          { no: '01', name: 'Gaya Street Sunday Market', note: '07:00–12:00 · the street itself becomes the market' },
          { no: '02', name: 'Eat breakfast in a kopitiam', note: 'Kopi, kaya toast and laksa under the five-foot way' },
          { no: '03', name: 'Walk the gate arches & five-foot way', note: 'Free, and the best architecture on the street' },
          { no: '04', name: 'Padang Merdeka', note: '5 min · the old town’s open field and its surroundings' },
          { no: '05', name: 'Atkinson Clock Tower & Signal Hill', note: '10 min uphill · city and sea in one view' },
          { no: '06', name: 'Kota Kinabalu Esplanade', note: '10 min · waterfront sunset and the evening crowd' },
          { no: '07', name: 'Api-Api night market', note: '5 min · satay, seafood and laksa after dark' },
          { no: '08', name: 'Woven crafts & souvenir stalls', note: 'Rattan baskets, mats and local snacks on the street' },
          { no: '09', name: 'Shophouse & signboard photo walk', note: 'Faded signboards, louvred windows, morning light' },
          { no: '10', name: 'Island boats from Jesselton Point', note: '15 min · day trips to Gaya and Sapi islands' },
        ],
      },
      {
        heading: 'Practical notes: money, toilets and heat',
        body: 'The old town covers most traveller errands inside a few blocks — which is the real reason to base yourself on Gaya Street.',
        items: [
          { no: '01', name: 'Banks & ATMs', note: 'Maybank and other banks with ATMs sit on and just off Jalan Gaya' },
          { no: '02', name: 'Money changers', note: 'Licensed changers around the old town and nearby malls — compare rates' },
          { no: '03', name: 'Pharmacies & mini-marts', note: 'A few minutes away for water, sunscreen and basics' },
          { no: '04', name: 'Toilets', note: 'Public toilets are limited; use a kopitiam or a nearby mall' },
          { no: '05', name: 'Heat & rain', note: 'Plan the uphill parts early; keep a light umbrella in the rainy season' },
        ],
      },
    ],
    faq: [
      { q: 'How many days do I need in Kota Kinabalu?', a: 'Two full days covers the old town, the Sunday market if your dates allow, and a half-day island trip. One day is enough if you only walk Gaya Street and the waterfront.' },
      { q: 'What is within walking distance of Gaya Street?', a: 'Padang Merdeka, the Atkinson Clock Tower on Signal Hill, the esplanade, Jesselton Point jetty and the Api-Api night market are all inside roughly one kilometre.' },
      { q: 'Is Kota Kinabalu safe to walk around at night?', a: 'The old town and waterfront are busy into the evening and generally fine to walk; use normal city judgement, keep to lit streets and take a ride-hailing car back late at night.' },
      { q: 'Where can I change money near Gaya Street?', a: 'Maybank and other banks with ATMs sit on and just off Jalan Gaya, and licensed money changers are found around the old town and in nearby malls — worth comparing rates for a minute or two.' },
      { q: 'What is the best time of year to visit Kota Kinabalu?', a: 'The dry season roughly runs from January to April, but the city works year-round: showers are usually short, and the five-foot way keeps most of the old town walkable.' },
    ],
  },
};
