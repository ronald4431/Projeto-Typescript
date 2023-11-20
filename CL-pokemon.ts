
interface PokemonStat{
    base_stat:number;
    stat:string;
}
class Pokemon
{
    id:number;
    name:string;
    base_experience:number;
    height:number;
    weight:number;
    legendary: boolean;
    firstAppearance: string;
    abilities: string[];
    stats:PokemonStat[];

    constructor(
        id:number,
        name:string,
        base_experience:number,
        height:number,
        weight:number,
        legendary: boolean,
        firstAppearance: string,
        abilities: string[],
        stats:PokemonStat[]
        )
    {
        this.id = id;
        this.name = name;
        this.base_experience = base_experience; 
        this.height = height;
        this.weight = weight;
        this.legendary = legendary;
        this.firstAppearance = firstAppearance;
        this.abilities = abilities;
        this.stats = stats;
    }
}


const ditto = new Pokemon(
    132,
    "Ditto",
    101,
    3,
    40,
    false,
    "1996-06-01",
    ["limber", "imposter"],
    [
      { base_stat: 48, stat: "hp" },
      { base_stat: 48, stat: "attack" },
      { base_stat: 48, stat: "defense" },
    ]
  );
  
  
  console.log(ditto);