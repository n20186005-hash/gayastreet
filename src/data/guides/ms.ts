import type { Guide } from './types';

export const guidesMs: Record<string, Guide> = {
  'sunday-market': {
    slug: 'sunday-market',
    image: '/gallery/gaya-street-market-2.jpg',
    card: { label: 'Pasar Ahad', note: 'Waktu, susun atur gerai, apa mesti makan & beli' },
    meta: {
      title: 'Pasar Ahad Gaya Street — Waktu, Peta Gerai & Apa yang Wajib Dicuba',
      description:
        'Pasar Ahad Gaya Street beroperasi 07:00–12:00 dengan masuk percuma: susun atur gerai, apa yang perlu dimakan dan dibeli, tempat parkir, tip tunai dan cuaca, serta masa terbaik untuk tiba.',
    },
    hero: {
      eyebrow: 'JALAN GAYA · KOTA KINABALU',
      h1: ['Pasar Ahad', 'Gaya Street'],
      lede: 'Satu pagi setiap minggu, Jalan Gaya berhenti menjadi jalan raya. Dari 07:00 rumah kedai dipenuhi gerai, dan menjelang tengah hari jalan ini dikembalikan kepada lalu lintas.',
    },
    facts: [
      { label: 'Waktu', value: 'Ahad 07:00–12:00', note: 'Setiap minggu · jalan ditutup kepada kenderaan' },
      { label: 'Masuk', value: 'Percuma', note: 'Bayar di setiap gerai · sediakan wang kecil' },
      { label: 'Masa terbaik', value: '07:00–10:00', note: 'Udara lebih nyaman, pilihan paling lengkap' },
    ],
    sections: [
      {
        heading: 'Bagaimana pasar ini disusun',
        body: 'Pasar ini memanjang di sepanjang Jalan Gaya antara dua gerbang. Anggaplah ia empat zon longgar, bukan peta bernombor — peniaga berganjak sedikit setiap minggu, tetapi ritmanya tetap sama.',
        items: [
          { no: '01', name: 'Hujung gerbang', note: 'Mulakan di sini: gerbang membingkai jalan dan gerai sarapan pertama terletak di sebelah dalamnya' },
          { no: '02', name: 'Barisan makanan & sarapan', note: 'Laksa, kopi, roti kaya, kuih dan gorengan — ikut sahaja wapnya' },
          { no: '03', name: 'Buah, tanaman & herba', note: 'Buah bermusim, anak benih, herba dan rempah dihampar atas tikar' },
          { no: '04', name: 'Kraf & barangan rumah', note: 'Bakul rotan, tikar anyaman, pakaian, cenderamata dan satu dua meja barang terpakai' },
        ],
      },
      {
        heading: 'Apa yang perlu dicuba dahulu',
        body: 'Datang dengan perut lapar. Sarapan adalah sebab penduduk tempatan datang awal, dan cara terbaik ialah berkongsi beberapa hidangan kecil, bukan memilih satu sahaja.',
        items: [
          { no: '01', name: 'Laksa', note: 'Kuah santan pekat dengan mi; mangkuk pertama paling sesuai pada waktu pagi' },
          { no: '02', name: 'Kopi & roti kaya', note: 'Kopi tempatan yang kuat bersama roti jem kelapa di kedai kopi bawah kaki lima' },
          { no: '03', name: 'Kuih', note: 'Kuih kukus dan goreng dijual seketul — mudah dimakan sambil berjalan' },
          { no: '04', name: 'Buah potong & minuman sejuk', note: 'Cawan buah, jus limau dan jus tebu bila matahari mula naik' },
        ],
      },
      {
        heading: 'Apa yang perlu dibeli, dan cara membayar',
        body: 'Kebanyakan jualan di sini ialah kehidupan harian Sabah: bakul, tanaman, snek dan kain. Harga biasanya dipamerkan; jika tidak, senyum dan bertanya lebih berkesan daripada tawar-menawar keras.',
        items: [
          { no: '01', name: 'Barangan rotan & anyaman', note: 'Bakul dan tikar — periksa anyamannya dan tanya sama ada ia buatan tangan' },
          { no: '02', name: 'Tanaman & anak benih', note: 'Herba, orkid dan anak pokok buah; tanya keperluan cahaya matahari sebelum membeli' },
          { no: '03', name: 'Snek & kopi tempatan', note: 'Buah kering, keropok dan pek kopi tempatan sesuai dibawa pulang' },
          { no: '04', name: 'Cenderamata', note: 'Poskad, magnet, kemeja-T dan kraf kecil di bahagian tengah jalan' },
        ],
      },
      {
        heading: 'Cara ke sana, parkir dan cuaca',
        body: 'Jalan Gaya ditutup kepada kereta pada pagi Ahad, jadi caranya mudah: parkir sekali di luar kawasan tutup, kemudian berjalan masuk.',
        items: [
          { no: '01', name: 'Parkir di luar kawasan tutup', note: 'Lot awam dan parkir pusat beli-belah sekitar pekan lama; elak lorong gerai dan simpang' },
          { no: '02', name: 'Berjalan masuk dari tepi laut', note: 'Kira-kira sepuluh minit dari esplanad melalui grid pekan lama' },
          { no: '03', name: 'Tunai & ATM', note: 'Gerai kebanyakannya tunai; ada yang terima bayaran QR. ATM ada di serta di luar Jalan Gaya' },
          { no: '04', name: 'Matahari & hujan', note: 'Bawa air dan payung ringan; kaki lima memberi teduhan dan perlindungan' },
        ],
      },
    ],
    faq: [
      { q: 'Pukul berapa saya patut tiba di pasar Ahad Gaya Street?', a: 'Antara 07:00 dan 10:00. Udara masih nyaman, gerai sudah lengkap dan sarapan berada pada tahap terbaik; dari 11:30 peniaga mula berkemas.' },
      { q: 'Berapa lama masa untuk menjelajah pasar ini?', a: 'Satu hingga dua jam dengan kadar santai, termasuk berhenti sarapan. Tambah satu jam lagi jika anda meneruskan ke pekan lama dan mendaki ke Signal Hill.' },
      { q: 'Adakah pasar Ahad dibuka pada cuti umum?', a: 'Ia berjalan setiap minggu dan biasanya tetap diadakan pada cuti umum, walaupun waktunya boleh berubah. Semak pengumuman rasmi sebelum membuat perjalanan khas.' },
      { q: 'Bolehkah saya meletak kereta di Gaya Street semasa pasar?', a: 'Tidak — Jalan Gaya ditutup kepada kenderaan untuk pejalan kaki pada pagi Ahad. Parkir di lot awam atau parkir pusat beli-belah berhampiran dan berjalan masuk.' },
      { q: 'Sesuaikah pasar ini untuk kanak-kanak atau kereta sorong?', a: 'Ya sebelum kira-kira 09:00, semasa jalan masih longgar. Menjelang lewat pagi ia menjadi sesak dan beg galas kecil lebih mudah daripada kereta sorong.' },
    ],
    event: 'sunday-market',
  },

  'night-market': {
    slug: 'night-market',
    image: '/gallery/gaya-street-market-6.jpg',
    card: { label: 'Pasar Malam', note: 'Api-Api selepas gelap: waktu, makanan, cara ke sana' },
    meta: {
      title: 'Pasar Malam Api-Api Kota Kinabalu — Waktu, Makanan & Cara ke Sana',
      description:
        'Pasar malam Api-Api hanya lima minit berjalan kaki dari Gaya Street: 17:00–22:00, apa yang perlu dimakan (sate, makanan laut bakar, laksa), cara ke sana, tip tunai dan masa terbaik untuk pergi.',
    },
    hero: {
      eyebrow: 'API-API · LIMA MINIT DARI JALAN GAYA',
      h1: ['Pasar Malam', 'Api-Api'],
      lede: 'Bila pasar Ahad berkemas dan cahaya mula malap, pekan lama makan semula — lampu pendarfluor, meja plastik, dan asap berarak melintasi Jalan Gaya.',
    },
    facts: [
      { label: 'Waktu', value: '17:00–22:00', note: 'Setiap hari · paling sibuk selepas 19:00' },
      { label: 'Dari Gaya Street', value: '5 min jalan', note: 'Jalan pekan lama yang rata dan terang' },
      { label: 'Masuk', value: 'Percuma', note: 'Bayar di gerai · tunai lebih mudah' },
    ],
    sections: [
      {
        heading: 'Di mana letaknya dan cara menemuinya',
        body: 'Pasar malam ini terletak di blok Api-Api, tidak jauh dari Jalan Gaya. Selalunya anda akan menghidu bau arang sebelum nampak lampunya.',
        items: [
          { no: '01', name: 'Api-Api, di luar Jalan Gaya', note: 'Beberapa ratus meter dari gerbang, di dalam grid pekan lama' },
          { no: '02', name: 'Lima minit berjalan kaki', note: 'Berjalan dari Gaya Street ke arah tepi laut; tidak perlu kenderaan' },
          { no: '03', name: 'Ikut asapnya', note: 'Panggangan sate dan makanan laut berbaris di laluan masuk' },
          { no: '04', name: 'Meja plastik berkongsi', note: 'Tempat duduk dikongsi bersama — duduk di kerusi kosong dan pesan dari mana-mana gerai' },
        ],
      },
      {
        heading: 'Apa yang perlu dimakan',
        body: 'Datang dengan selera kecil dan makan secara berkongsi. Pesan dua tiga perkara sekali gus supaya semuanya sampai panas.',
        items: [
          { no: '01', name: 'Sate', note: 'Ayam dan daging dicucuk, dibakar atas arang dengan kuah kacang' },
          { no: '02', name: 'Makanan laut bakar', note: 'Ikan, udang dan sotong, biasanya diharga mengikut berat atau bahagian' },
          { no: '03', name: 'Laksa & sup mi', note: 'Pilihan yang lebih ringan berbanding bahagian panggang' },
          { no: '04', name: 'Pencuci mulut & minuman', note: 'Kuih tempatan, buah potong, teh ais dan minuman dalam tin' },
        ],
      },
      {
        heading: 'Cara memesan, membayar dan kekal selesa',
        body: 'Rutinnya tidak formal dan pantas: cari meja, ingat nombornya, kemudian pesan di gerai dan beritahu di mana anda duduk.',
        items: [
          { no: '01', name: 'Tunjuk dan pesan', note: 'Kebanyakan gerai mempamerkan bahan mentah; menunjukkan dan mengira sudah memadai' },
          { no: '02', name: 'Bawa tunai', note: 'Wang kertas ringgit kecil paling mudah; ada gerai terima bayaran QR, sedikit yang terima kad' },
          { no: '03', name: 'Pergi awal atau lewat', note: 'Tiba sekitar 17:00 untuk ruang, atau selepas 20:00 bila kepanasan turun' },
          { no: '04', name: 'Air & tisu', note: 'Bawa air sendiri dan tisu; kawasan meja kurang teduhan' },
        ],
      },
      {
        heading: 'Gabungkannya dengan sisa hari di jalan ini',
        body: 'Pasar malam ini sesuai sebagai penutup hari di Gaya Street — atau sebagai acara utama pada mana-mana malam lain dalam seminggu.',
        items: [
          { no: '01', name: 'Ahad: pasar → pasar malam', note: 'Pasar pagi, rehat petang, kemudian makan malam di bawah lampu' },
          { no: '02', name: 'Malam hari biasa', note: 'Jelajah rumah kedai pada waktu keemasan, kemudian makan di Api-Api' },
          { no: '03', name: 'Selepas matahari terbenam di esplanad', note: 'Sepuluh minit dari tepi laut kembali ke pekan lama' },
          { no: '04', name: 'Perjalanan pulang', note: 'Pengambilan e-hailing paling mudah satu blok dari lorong pasar' },
        ],
      },
    ],
    faq: [
      { q: 'Pukul berapa pasar malam Api-Api dibuka?', a: 'Gerai biasanya mula bersiap pada lewat petang dan beroperasi penuh sekitar 17:00, sehingga kira-kira 22:00.' },
      { q: 'Berapa jauh pasar malam dari Gaya Street?', a: 'Kira-kira lima minit berjalan kaki — ia terletak di blok Api-Api, tidak jauh dari Jalan Gaya, di dalam grid pekan lama.' },
      { q: 'Adakah pasar malam Api-Api dibuka setiap hari?', a: 'Ia beroperasi setiap hari dalam keadaan biasa, walaupun gerai individu mengambil cuti sendiri dan waktunya boleh dipendekkan ketika hujan lebat.' },
      { q: 'Bolehkah saya membayar dengan kad di pasar malam?', a: 'Anggaplah tunai. Kebanyakan gerai menerima wang kertas ringgit kecil dan ada yang menerima bayaran QR; terminal kad jarang ada, jadi keluarkan tunai di ATM di Jalan Gaya dahulu.' },
      { q: 'Selamatkah makan di pasar malam?', a: 'Pilih gerai yang ada orang beratur dan makanan dimasak di hadapan anda, minum minuman berbotol atau bertin, dan semuanya akan baik-baik saja — di sinilah penduduk tempatan makan.' },
    ],
    event: 'night-market',
  },

  'things-to-do': {
    slug: 'things-to-do',
    image: '/gallery/gaya-street-market-7.jpg',
    card: { label: 'Perkara menarik', note: 'Sepuluh aktiviti berhampiran Gaya Street, lengkap dengan masa berjalan' },
    meta: {
      title: '10 Perkara Menarik Berhampiran Gaya Street, Kota Kinabalu',
      description:
        'Sepuluh aktiviti dalam jarak berjalan kaki dari Gaya Street: pasar Ahad, sarapan di kedai kopi, Menara Jam Atkinson, Signal Hill, matahari terbenam di esplanad dan pasar malam — dengan masa berjalan dan laluan separuh hari.',
    },
    hero: {
      eyebrow: 'PEKAN LAMA · BOLEH DIJELAJAHI DALAM SEPARUH HARI',
      h1: ['Sepuluh perkara menarik', 'berhampiran Gaya Street'],
      lede: 'Kebanyakan pekan lama Kota Kinabalu terletak dalam bulatan satu kilometer di sekitar Jalan Gaya. Ini sepuluh cara untuk mengisinya — dan susunan yang paling sesuai.',
    },
    facts: [
      { label: 'Radius berjalan', value: '~1 km', note: 'Semua di bawah boleh dijejaki dengan berjalan' },
      { label: 'Masa diperlukan', value: '3–6 j', note: 'Separuh hari, atau sehari penuh dengan pasar' },
      { label: 'Pangkalan terbaik', value: 'Gaya Street', note: 'Mula dan tamat di Jalan Gaya' },
    ],
    sections: [
      {
        heading: 'Laluan separuh hari',
        body: 'Jika anda hanya ada satu pagi dan satu malam di Kota Kinabalu, ini susunan yang memastikan anda berjalan menuruni bukit dan makan pada waktu yang tepat.',
        items: [
          { no: '01', name: '07:00 · Pasar Ahad', note: 'Mulakan di gerbang dan jejaki Jalan Gaya dari hujung ke hujung' },
          { no: '02', name: '10:00 · Sarapan di kedai kopi', note: 'Duduk di bawah kaki lima setelah gerai mula berkurangan' },
          { no: '03', name: '11:00 · Padang Merdeka & Signal Hill', note: 'Sepuluh minit mendaki ke Menara Jam Atkinson' },
          { no: '04', name: '17:30 · Matahari terbenam di esplanad', note: 'Kira-kira sepuluh minit berjalan ke tepi laut' },
          { no: '05', name: '19:00 · Pasar malam Api-Api', note: 'Kembali ke pekan lama untuk makan malam di bawah lampu' },
        ],
      },
      {
        heading: 'Sepuluh perkara menarik',
        body: 'Kesemua sepuluh ini berada di dalam pekan lama atau sedikit di luarnya. Masa berjalan dikira dari Jalan Gaya.',
        items: [
          { no: '01', name: 'Pasar Ahad Gaya Street', note: '07:00–12:00 · jalan itu sendiri menjadi pasar' },
          { no: '02', name: 'Sarapan di kedai kopi', note: 'Kopi, roti kaya dan laksa di bawah kaki lima' },
          { no: '03', name: 'Jelajah gerbang & kaki lima', note: 'Percuma, dan seni bina terbaik di jalan ini' },
          { no: '04', name: 'Padang Merdeka', note: '5 min · padang terbuka pekan lama dan sekitarnya' },
          { no: '05', name: 'Menara Jam Atkinson & Signal Hill', note: '10 min mendaki · bandar dan laut dalam satu pandangan' },
          { no: '06', name: 'Esplanad Kota Kinabalu', note: '10 min · matahari terbenam di tepi laut dan keramaian petang' },
          { no: '07', name: 'Pasar malam Api-Api', note: '5 min · sate, makanan laut dan laksa selepas gelap' },
          { no: '08', name: 'Gerai anyaman & cenderamata', note: 'Bakul rotan, tikar dan snek tempatan di sepanjang jalan' },
          { no: '09', name: 'Foto rumah kedai & papan tanda', note: 'Papan tanda pudar, tingkap berjeriji, cahaya pagi' },
          { no: '10', name: 'Bot ke pulau dari Jesselton Point', note: '15 min · percutian sehari ke Pulau Gaya dan Sapi' },
        ],
      },
      {
        heading: 'Nota praktikal: wang, tandas dan kepanasan',
        body: 'Pekan lama menampung hampir semua urusan pengunjung dalam beberapa blok — itulah sebab utama untuk menjadikan Gaya Street sebagai pangkalan.',
        items: [
          { no: '01', name: 'Bank & ATM', note: 'Maybank dan bank lain dengan ATM terletak di serta di luar Jalan Gaya' },
          { no: '02', name: 'Pengurup wang', note: 'Pengurup wang berlesen sekitar pekan lama dan pusat beli-belah berhampiran — bandingkan kadar' },
          { no: '03', name: 'Farmasi & kedai serbaneka', note: 'Beberapa minit sahaja untuk air, pelindung matahari dan keperluan asas' },
          { no: '04', name: 'Tandas', note: 'Tandas awam terhad; gunakan kedai kopi atau pusat beli-belah berhampiran' },
          { no: '05', name: 'Kepanasan & hujan', note: 'Rancang bahagian mendaki pada awal hari; bawa payung ringan pada musim hujan' },
        ],
      },
    ],
    faq: [
      { q: 'Berapa hari saya perlukan di Kota Kinabalu?', a: 'Dua hari penuh mencukupi untuk pekan lama, pasar Ahad jika tarikh sesuai, dan percutian separuh hari ke pulau. Satu hari memadai jika anda hanya menjelajah Gaya Street dan tepi laut.' },
      { q: 'Apa yang berada dalam jarak berjalan kaki dari Gaya Street?', a: 'Padang Merdeka, Menara Jam Atkinson di Signal Hill, esplanad, jeti Jesselton Point dan pasar malam Api-Api semuanya dalam lingkungan kira-kira satu kilometer.' },
      { q: 'Selamatkah berjalan di Kota Kinabalu pada waktu malam?', a: 'Pekan lama dan tepi laut kekal sibuk hingga ke malam dan secara amnya selamat untuk berjalan; gunakan pertimbangan bandar biasa, kekal di jalan yang terang dan gunakan e-hailing untuk pulang lewat malam.' },
      { q: 'Di mana saya boleh menukar wang berhampiran Gaya Street?', a: 'Maybank dan bank lain dengan ATM terletak di serta di luar Jalan Gaya, dan pengurup wang berlesen ada di sekitar pekan lama serta pusat beli-belah berhampiran — bandingkan kadar selama satu dua minit.' },
      { q: 'Bilakah masa terbaik dalam setahun untuk melawat Kota Kinabalu?', a: 'Musim kering lebih kurang dari Januari hingga April, tetapi bandar ini sesuai dilawati sepanjang tahun: hujan biasanya singkat, dan kaki lima memastikan kebanyakan pekan lama masih boleh dijejaki.' },
    ],
  },
};
