
interface CountryName{
    common:string;
    official:string;
  }

  interface Flags{
    png: string;
    svg: string;
  }

  interface Country {
    name: CountryName;
    independent: boolean;
    unMember: boolean;
    capital: string;
    region: string;
    subregion: string;
    languages: string[];
    latlng: number[];
    borders: string[];
    area: number;
    population: number;
    timezones: string[];
    flags: Flags;
  }
  
class Pais implements Country{
    name: CountryName;
    independent: boolean;
    unMember: boolean;
    capital: string;
    region: string;
    subregion: string;
    languages: string[];
    latlng: number[];
    borders: string[];
    area: number;
    population: number;
    timezones: string[];
    flags: Flags;

    constructor(data:Country)
    {
        this.name = data.name;
        this.independent = data.independent;
        this.unMember = data.unMember;
        this.capital = data.capital;
        this.region = data.region;
        this.subregion = data.subregion;
        this.languages = data.languages;
        this.latlng = data.latlng;
        this.borders = data.borders;
        this.area = data.area;
        this.population = data.population;
        this.timezones = data.timezones;
        this.flags = data.flags;
    }
}


const brazilData: Country = {
  name: {
    common: "Brazil",
    official: "Federative Republic of Brazil",
  },
  independent: true,
  unMember: true,
  capital: "Brasília",
  region: "Americas",
  subregion: "South America",
  languages: ["Portuguese"],
  latlng: [-10, -55],
  borders: ["ARG", "BOL", "COL", "GUF", "GUY", "PRY", "PER", "SUR", "URY", "VEN"],
  area: 8515767,
  population: 212559409,
  timezones: ["UTC-05:00", "UTC-04:00", "UTC-03:00", "UTC-02:00"],
  flags: {
    png: "https://flagcdn.com/w320/br.png",
    svg: "https://flagcdn.com/br.svg",
  },
};

const brazil = new Pais(brazilData);