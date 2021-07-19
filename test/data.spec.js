import { filterAni, orderAni } from "../src/data.js";

const aniTest = [
  {
    "title": "Castle in the Sky",
    "director": "Hayao Miyazaki",
    "producer": "Isao Takahata",
  },
  {
    "title": "My Neighbor Totoro",
    "director": "Hayao Miyazaki",
    "producer": "Hayao Miyazaki",
  },
  {
    "title": "Grave of the Fireflies",
    "director": "Isao Takahata",
    "producer": "Toru Hara",
  },
  {
    "title": "Only Yesterday",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "Porco Rosso",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "Pom Poko",
    "director": "Isao Takahata",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "Whisper of the Heart",
    "director": "Yoshifumi Kondō",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "Princess Mononoke",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "Spirited Away",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "The Cat Returns",
    "director": "Hiroyuki Morita",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "Howl's Moving Castle",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "Tales from Earthsea",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "Ponyo on the Cliff by the Sea",
    "director": "Hayao Miyazaki",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "From Up on Poppy Hill",
    "director": "Gorō Miyazaki",
    "producer": "Toshio Suzuki",
  },
  {
    "title": "When Marnie Was There",
    "director": "Hiromasa Yonebayashi",
    "producer": "Yoshiaki Nishimura",
  }
]

const [Castle, My, Grave, Only, Porco, Pom, Whisper, Princess, Spirited, The, Howl, Tales, Ponyo, From, When] = aniTest;

describe('filter function director', () => {
  it('is a function', () => {
    expect(typeof filterAni).toBe('function');
  });

  it('returns director Hayao Miyazaki', () => {
    expect(filterAni(aniTest, "director", "Hayao Miyazaki")).toEqual([Castle, My, Porco, Princess, Spirited, Howl, Ponyo]);
  });

  it('returns director Isao Takahata', () => {
    expect(filterAni(aniTest, "director", "Isao Takahata")).toEqual([Grave, Only, Pom])
  })
});

describe('filter function producer', () => {
  it('is a function', () => {
    expect(typeof filterAni).toBe('function');
  });

  it('returns producer Toshio Suzuki', () => {
    expect(filterAni(aniTest, "producer", "Toshio Suzuki")).toEqual([Only, Porco, Pom, Whisper, Princess, Spirited, The, Howl, Tales, Ponyo, From]);
  });

  it('returns producer Yoshiaki Nishimura', () => {
    expect(filterAni(aniTest, "producer", "Yoshiaki Nishimura")).toEqual([When]);
  });
});

describe('order function', () => {
  it('is a function', () => {
    expect(typeof orderAni).toBe('function');
  });

  it('returns title A-Z', () => {
    expect(orderAni(aniTest, "A-Z")).toEqual([Castle, From, Grave, Howl, My, Only, Pom, Ponyo, Porco, Princess, Spirited, Tales, The, When, Whisper]);
  });

  it('returns title Z-A', () => {
    expect(orderAni(aniTest, "Z-A")).toEqual([Whisper, When, The, Tales, Spirited, Princess, Porco, Ponyo, Pom, Only, My, Howl, Grave, From,Castle
    ]);
  });
});
