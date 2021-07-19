import { filtered, orderChar, orderAni } from "../src/data.js";
// import {sumTotalChars, calcGender} from "../src/sum.js"
// sumTotalMovies
const charsTest = [
  {
    name: "Pazu",
    gender: "Male",
    specie: "Human",
  },
  {
    name: "Lusheeta Toel Ul Laputa",
    gender: "Female",
    specie: "Human",
  },
  {
    name: "Dola",
    gender: "Female",
    specie: "Human",
  },
  {
    name: "Romska Palo Ul Laputa",
    gender: "Male",
    specie: "Human",
  },
  {
    name: "Uncle Pom",
    gender: "Male",
    specie: "Human",
  },
  {
    name: "Chu Totoro",
    gender: "NA",
    specie: "Totoro",
  },
  {
    name: "Kiki",
    gender: "Female",
    specie: "Witch",
  },
  {
    name: "Jiji",
    gender: "Male",
    specie: "Cat",
  },
  {
    name: "Baron Humbert von Gikkingen",
    gender: "Male",
    specie: "Cat",
  },
  {
    name: "Seizaemon",
    gender: "Male",
    specie: "Raccoon Dog",
  },
  {
    name: "Oroku",
    gender: "Female",
    specie: "Raccoon Dog",
  },
  {
    name: "Gonta",
    gender: "Male",
    specie: "Raccoon Dog",
  },
  {
    name: "Inugami Gyōbu",
    gender: "Male",
    specie: "Raccoon Dog",
  },
];

const aniTest = [
  {
    title: "Castle in the Sky",
    director: "Hayao Miyazaki",
    producer: "Isao Takahata",
  },
  {
    title: "My Neighbor Totoro",
    director: "Hayao Miyazaki",
    producer: "Hayao Miyazaki",
  },
  {
    title: "Grave of the Fireflies",
    director: "Isao Takahata",
    producer: "Toru Hara",
  },
  {
    title: "Only Yesterday",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
  },
  {
    title: "Porco Rosso",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
  },
  {
    title: "Pom Poko",
    director: "Isao Takahata",
    producer: "Toshio Suzuki",
  },
  {
    title: "Whisper of the Heart",
    director: "Yoshifumi Kondō",
    producer: "Toshio Suzuki",
  },
  {
    title: "Princess Mononoke",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
  },
  {
    title: "The Cat Returns",
    director: "Hiroyuki Morita",
    producer: "Toshio Suzuki",
  },
  {
    title: "Howl's Moving Castle",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
  },
  {
    title: "Tales from Earthsea",
    director: "Gorō Miyazaki",
    producer: "Toshio Suzuki",
  },
  {
    title: "Ponyo on the Cliff by the Sea",
    director: "Hayao Miyazaki",
    producer: "Toshio Suzuki",
  },
  {
    title: "From Up on Poppy Hill",
    director: "Gorō Miyazaki",
    producer: "Toshio Suzuki",
  },
  {
    title: "When Marnie Was There",
    director: "Hiromasa Yonebayashi",
    producer: "Yoshiaki Nishimura",
  },
];

// const [
//   Pazu,
//   Lusheeta,
//   Dola,
//   Romska,
//   Uncle,
//   Chu,
//   Jiji,
//   Baron,
//   Seizaemon,
//   Oroku,
//   Gonta,
//   Inugami,
// ] = charsTest;

// const [
//   Castle,
//   My,
//   Kiki,
//   Grave,
//   Only,
//   Porco,
//   Pom,
//   Whisper,
//   Princess,
//   Spirited,
//   The,
//   Howl,
//   Tales,
//   Ponyo,
//   From,
//   When,
// ] = aniTest;

// const totalChars = charsTest.length;
// const totalMovies = aniTest.lenght;
// const gendersNum = {Male:8,Female:4,NA:1}

describe("filter chars function gender", () => {
  it("is a function", () => {
    expect(typeof filtered).toBe("function");
  });

  it("returns gender Male", () => {
    expect(filtered(charsTest, "gender", "Male")).toEqual([
      {
        name: "Pazu",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Romska Palo Ul Laputa",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Uncle Pom",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Jiji",
        gender: "Male",
        specie: "Cat",
      },
      {
        name: "Baron Humbert von Gikkingen",
        gender: "Male",
        specie: "Cat",
      },
      {
        name: "Seizaemon",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Gonta",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Inugami Gyōbu",
        gender: "Male",
        specie: "Raccoon Dog",
      },
    ]);
  });

  it("returns gender Female", () => {
    expect(filtered(charsTest, "gender", "Female")).toEqual([
      {
        name: "Lusheeta Toel Ul Laputa",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Dola",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Kiki",
        gender: "Female",
        specie: "Witch",
      },
      {
        name: "Oroku",
        gender: "Female",
        specie: "Raccoon Dog",
      },
    ]);
  });
});

describe("filter chars function specie", () => {
  it("returns specie Human", () => {
    expect(filtered(charsTest, "specie", "Human")).toEqual([
      {
        name: "Pazu",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Lusheeta Toel Ul Laputa",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Dola",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Romska Palo Ul Laputa",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Uncle Pom",
        gender: "Male",
        specie: "Human",
      },
    ]);
  });

  it("returns specie Totoro", () => {
    expect(filtered(charsTest, "specie", "Totoro")).toEqual([
      {
        name: "Chu Totoro",
        gender: "NA",
        specie: "Totoro",
      },
    ]);
  });

  it("returns specie Witch", () => {
    expect(filtered(charsTest, "specie", "Witch")).toEqual([
      {
        name: "Kiki",
        gender: "Female",
        specie: "Witch",
      },
    ]);
  });

  it("returns specie Cat", () => {
    expect(filtered(charsTest, "specie", "Cat")).toEqual([
      {
        name: "Jiji",
        gender: "Male",
        specie: "Cat",
      },
      {
        name: "Baron Humbert von Gikkingen",
        gender: "Male",
        specie: "Cat",
      },
    ]);
  });

  it("returns specie Raccoon Dog", () => {
    expect(filtered(charsTest, "specie", "Raccoon Dog")).toEqual([
      {
        name: "Seizaemon",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Oroku",
        gender: "Female",
        specie: "Raccoon Dog",
      },
      {
        name: "Gonta",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Inugami Gyōbu",
        gender: "Male",
        specie: "Raccoon Dog",
      },
    ]);
  });
});

describe("ordered function chars", () => {
  it("is a function", () => {
    expect(typeof orderChar).toBe("function");
  });

  it("returns names A-Z", () => {
    expect(orderChar(charsTest, "A-Z")).toEqual([
      {
        name: "Baron Humbert von Gikkingen",
        gender: "Male",
        specie: "Cat",
      },
      {
        name: "Chu Totoro",
        gender: "NA",
        specie: "Totoro",
      },
      {
        name: "Dola",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Gonta",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Inugami Gyōbu",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Jiji",
        gender: "Male",
        specie: "Cat",
      },
      {
        name: "Kiki",
        gender: "Female",
        specie: "Witch",
      },
      {
        name: "Lusheeta Toel Ul Laputa",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Oroku",
        gender: "Female",
        specie: "Raccoon Dog",
      },
      {
        name: "Pazu",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Romska Palo Ul Laputa",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Seizaemon",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Uncle Pom",
        gender: "Male",
        specie: "Human",
      },
    ]);
  });

  it("returns names Z-A", () => {
    expect(orderChar(charsTest, "Z-A")).toEqual([
      {
        name: "Uncle Pom",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Seizaemon",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Romska Palo Ul Laputa",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Pazu",
        gender: "Male",
        specie: "Human",
      },
      {
        name: "Oroku",
        gender: "Female",
        specie: "Raccoon Dog",
      },
      {
        name: "Lusheeta Toel Ul Laputa",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Kiki",
        gender: "Female",
        specie: "Witch",
      },
      {
        name: "Jiji",
        gender: "Male",
        specie: "Cat",
      },
      {
        name: "Inugami Gyōbu",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Gonta",
        gender: "Male",
        specie: "Raccoon Dog",
      },
      {
        name: "Dola",
        gender: "Female",
        specie: "Human",
      },
      {
        name: "Chu Totoro",
        gender: "NA",
        specie: "Totoro",
      },
      {
        name: "Baron Humbert von Gikkingen",
        gender: "Male",
        specie: "Cat",
      },
    ]);
  });
});

describe("filter function director", () => {
  it("returns director Hayao Miyazaki", () => {
    expect(filtered(aniTest, "director", "Hayao Miyazaki")).toEqual([
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
      },
      {
        title: "Porco Rosso",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Princess Mononoke",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Howl's Moving Castle",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Ponyo on the Cliff by the Sea",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
    ]);
  });

  it("returns director Isao Takahata", () => {
    expect(filtered(aniTest, "director", "Isao Takahata")).toEqual([
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
      },
      {
        title: "Only Yesterday",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
      },
      {
        title: "Pom Poko",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
      },
    ]);
  });
});

describe("filter function producer", () => {
  it("is a function", () => {
    expect(typeof filtered).toBe("function");
  });

  it("returns producer Toshio Suzuki", () => {
    expect(filtered(aniTest, "producer", "Toshio Suzuki")).toEqual([
      {
        title: "Only Yesterday",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
      },
      {
        title: "Porco Rosso",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Pom Poko",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
      },
      {
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        producer: "Toshio Suzuki",
      },
      {
        title: "Princess Mononoke",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "The Cat Returns",
        director: "Hiroyuki Morita",
        producer: "Toshio Suzuki",
      },
      {
        title: "Howl's Moving Castle",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Tales from Earthsea",
        director: "Gorō Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Ponyo on the Cliff by the Sea",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "From Up on Poppy Hill",
        director: "Gorō Miyazaki",
        producer: "Toshio Suzuki",
      },
    ]);
  });

  it("returns producer Yoshiaki Nishimura", () => {
    expect(filtered(aniTest, "producer", "Yoshiaki Nishimura")).toEqual([
      {
        title: "When Marnie Was There",
        director: "Hiromasa Yonebayashi",
        producer: "Yoshiaki Nishimura",
      },
    ]);
  });
});

describe("order function films", () => {
  it("is a function", () => {
    expect(typeof orderAni).toBe("function");
  });

  it("returns title A-Z", () => {
    expect(orderAni(aniTest, "A-Z")).toEqual([
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
      },
      {
        title: "From Up on Poppy Hill",
        director: "Gorō Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
      },
      {
        title: "Howl's Moving Castle",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
      },

      {
        title: "Only Yesterday",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
      },
      {
        title: "Pom Poko",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
      },
      {
        title: "Ponyo on the Cliff by the Sea",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Porco Rosso",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Princess Mononoke",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Tales from Earthsea",
        director: "Gorō Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "The Cat Returns",
        director: "Hiroyuki Morita",
        producer: "Toshio Suzuki",
      },
      {
        title: "When Marnie Was There",
        director: "Hiromasa Yonebayashi",
        producer: "Yoshiaki Nishimura",
      },

      {
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        producer: "Toshio Suzuki",
      },
    ]);
  });

  it("returns title Z-A", () => {
    expect(orderAni(aniTest, "Z-A")).toEqual([
      {
        title: "Whisper of the Heart",
        director: "Yoshifumi Kondō",
        producer: "Toshio Suzuki",
      },
      {
        title: "When Marnie Was There",
        director: "Hiromasa Yonebayashi",
        producer: "Yoshiaki Nishimura",
      },
      {
        title: "The Cat Returns",
        director: "Hiroyuki Morita",
        producer: "Toshio Suzuki",
      },
      {
        title: "Tales from Earthsea",
        director: "Gorō Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Spirited Away",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Princess Mononoke",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Porco Rosso",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Ponyo on the Cliff by the Sea",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Pom Poko",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
      },
      {
        title: "Only Yesterday",
        director: "Isao Takahata",
        producer: "Toshio Suzuki",
      },
      {
        title: "My Neighbor Totoro",
        director: "Hayao Miyazaki",
        producer: "Hayao Miyazaki",
      },
      {
        title: "Howl's Moving Castle",
        director: "Hayao Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Grave of the Fireflies",
        director: "Isao Takahata",
        producer: "Toru Hara",
      },
      {
        title: "From Up on Poppy Hill",
        director: "Gorō Miyazaki",
        producer: "Toshio Suzuki",
      },
      {
        title: "Castle in the Sky",
        director: "Hayao Miyazaki",
        producer: "Isao Takahata",
      },
    ]);
  });
});

// describe('calc function', () => {

//  it('is a function', () => {
//     expect(typeof sumTotalChars).toBe('function');
//   });

//   it('is a function', () => {
//     expect(typeof sumTotalMovies).toBe('function');
//   });

//   it('is a string', () => {
//     expect(typeof calcGender).toBe('string');
//   });

// it('returns total characters', () => {
//   expect(sumTotalChars(charsTest)).toBe(totalChars);
// });

// it('returns total movies, () => {
//   expect(sumTotalMovies(aniTest)).toBe(totalMovies);
// });

// it('genders numbers', () => {
//   expect(calcGender).toBe(gendersNum);
// });
