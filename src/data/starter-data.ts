export interface layer {
  option: string;
  img: string;
  ops: layer[];
}

const maleVip: layer[] = [
  {
    option: "Тигр",
    img: "/quiz/makas.png",
    ops: [
      { option: "Hookah smoker", img: "/quiz/kills.png", ops: [] },
      { option: "Camry owner", img: "/camry.png", ops: [] },
    ],
  },
  {
    option: "True",
    img: "/quiz/loafers.png",
    ops: [
      { option: "Dubai", img: "/quiz/dubai.jpg", ops: [] },
      { option: "London", img: "/quiz/sherlock.jpg", ops: [] },
    ],
  },
  {
    option: "Business",
    img: "/quiz/oxfords.png",
    ops: [
      { option: "Highvill", img: "/quiz/hv.png", ops: [] },
      { option: "Has own driver", img: "/quiz/case.jpg", ops: [] },
    ],
  },
];

const maleBro: layer[] = [
  {
    option: "Traditional",
    img: "/quiz/taqiya.jpg",
    ops: [
      {
        option: "'I need a stay-at-home wife'",
        img: "/quiz/clown.jpg",
        ops: [],
      },
      { option: "Ораза ұстайтын", img: "/quiz/namaz.webp", ops: [] },
    ],
  },
  {
    option: "Politics",
    img: "/quiz/сланцы.jpg",
    ops: [
      { option: "Tokayev defender", img: "/quiz/madi.jpg", ops: [] },
      { option: "Latent Socialist", img: "/quiz/ussr.jpg", ops: [] },
    ],
  },
  {
    option: "Sports",
    img: "/quiz/runner.webp",
    ops: [
      { option: "Gymbro", img: "/quiz/creatine.jpg", ops: [] },
      { option: "Ставочник", img: "/quiz/1xbet.jpg", ops: [] },
    ],
  },
];

const maleHipster: layer[] = [
  {
    option: "Almaty",
    img: "/quiz/smokat.jpg",
    ops: [
      { option: "Liberal", img: "/quiz/qg.png", ops: [] },
      { option: "Night Cluber", img: "/quiz/vape.png", ops: [] },
    ],
  },
  {
    option: "Astana",
    img: "/quiz/alyaska.jpg",
    ops: [
      { option: "NU Woke", img: "/quiz/nushirt.jpg", ops: [] },
      { option: "Average", img: "/quiz/glass.webp", ops: [] },
    ],
  },
  {
    option: "Music",
    img: "/quiz/marsh.jpg",
    ops: [
      { option: "Spotify", img: "/quiz/spot.jpg", ops: [] },
      { option: "ИК enjoyer", img: "/quiz/kk.jpg", ops: [] },
    ],
  },
];

const maleNerd: layer[] = [
  {
    option: "Incel",
    img: "/quiz/actually.jpg",
    ops: [
      { option: "Waifu", img: "/quiz/daku.webp", ops: [] },
      { option: "Marvel obsessed", img: "/quiz/avg.jpg", ops: [] },
    ],
  },
  {
    option: "Gamer",
    img: "/quiz/mouse.jpg",
    ops: [
      { option: "Discord user", img: "/quiz/dis.jpg", ops: [] },
      { option: "PS 5", img: "/quiz/ps5.webp", ops: [] },
    ],
  },
  {
    option: "Jojo Enjoyer",
    img: "/quiz/jojo.png",
    ops: [
      { option: "Ironically", img: "/quiz/jojo.png", ops: [] },
      { option: "Unironically", img: "/quiz/jojo.png", ops: [] },
    ],
  },
];

const maleL1: layer[] = [
  {
    option: "VIP",
    img: "/quiz/costume.png",
    ops: maleVip,
  },
  {
    option: "Bro",
    img: "/quiz/toem.png",
    ops: maleBro,
  },
  {
    option: "Hipster",
    img: "/quiz/hoodie.jpeg",
    ops: maleHipster,
  },
  {
    option: "Nerd",
    img: "/quiz/glass.webp",
    ops: maleNerd,
  },
];

const quizQuestions: layer[] = [
  { option: "male", img: "/case.jpg", ops: maleL1 },
  // { option: "fem", ops: femaleL1 },
];

export default quizQuestions;

/*

male
  vip - costume
    tigr - makasin
      hookah - smoking kills
      camry - camry
    true - loafers
      dubai - dubai
      london - sherlock hat
    busy - oxfords
      highvill - highvill logo
      own driver - suitcase
  bro - gotta do it to em
    trad - сланцы
      wife - little brain
      ramadan - жайнамаз
    polit - clown shoes
      tokayev defender - madi ahmetov
      latent ussr - serp and molot
    sport - nike
      gymbro - creatine
      stavki - 1xbet
  hipster - hoodie qr
    almaty - самокат
      liberal - qazaqgrammar
      night club - elfbar
    astana - пуховик
      nu tshirt
      just some - glasses
    music - marshall
      spotify
      IK - 5k tenge banknot
  nerd
    incel
      marvel - miniso plushie
      anime - dakimakura
    gamer - logitech g102
     discord
     ps5
    jojo
      ironically/uniron - dio

 */
