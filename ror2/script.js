import Character from "./Character.js"

const updateCharacter = (update) =>{
    let main = document.querySelector("list");
    main.innerHTML = markup(character)
    console.info(update)
}

const Acrid = new Character(
    "Acrid",
    160,
    "2.5/s",
    15,
    20
);

const Artificer = new Character(
    "Artificer",
    110,
    "1/s",
    12,
    0
)

const Bandit = new Character(
    "Artificer",
    110,
    "1/s",
    12,
    0
)

const Artificer = new Character(
    "Artificer",
    110,
    "1/s",
    12,
    0
)

const Artificer = new Character(
    "Artificer",
    110,
    "1/s",
    12,
    0
)

const Artificer = new Character(
    "Artificer",
    110,
    "1/s",
    12,
    0
)


const characters = [Acrid, Artificer]

const markup = (character) => {
    return `
    <div>
        <h3>${character.name}</h3>
        <ul>
        <li>Health: ${character.health}</li>
        <li>Health Regen: ${character.regen}</li>
        <li>Damage: ${character.damage}</li>
        <li>Armor: L: ${character.armor}</li>
        </ul>
    </div>
`;
};

console.log("Acrid:", characters[0])
console.log("Artificer:", characters[1])
const c1 = document.createElement("char1");
const c2 = document.createElement("char2");
c1.innerHTML = markup(characters[0]);
c2.innerHTML = markup(characters[1]);


document.body.appendChild(c1);
document.body.appendChild(c2);
