class hero {
    constructor(name, age, tips) {
        this.name = name,
        this.age = age,
        this.tips = tips
    }
};
const attack = {
    mago: "magia",
    guerreiro: "espada",
    monge: "artes marciais",
    ninja: "shuriken",
}
function attackHero(hero) {
    if (hero.tips in attack) {
        console.log(`O ${hero.name} Atacou usando ${attack[hero.tips]}`);
    } 
};

const myHero = new hero("Shinobi do Cabelao", 22, "ninja");
attackHero(myHero);