import Character from "./Character.js"

const updateCharacter = (update) =>{
    let main = document.querySelector("list");
    main.innerHTML = markup(character)
    console.info(update)
}

const Acrid = new Character(
    "Acrid",
    160,
    2.5,
    15,
    20,
    48,
    0.5,
    3
);

const Artificer = new Character(
    "Artificer",
    110,
    1,
    12,
    0,
    33,
    0.2,
    2.4
)

const Bandit = new Character(
    "Bandit",
    110,
    1,
    12,
    0,
    33,
    0.2,
    2.4
)

const Captain = new Character(
    "Captain",
    110,
    1,
    12,
    0,
    33,
    0.2,
    2.4
)

const Commando = new Character(
    "Commando",
    110,
    1,
    12,
    0,
    33,
    0.2,
    2.4
)

const Engineer = new Character(
    "Engineer",
    130,
    1,
    14,
    0,
    39,
    0.2,
    2.8
)

const Heretic = new Character(
    "Heretic",
    440,
    -6,
    14,
    0,
    132,
    -1.2,
    3.6
)

const Huntress = new Character(
    "Huntress",
    90,
    1,
    12,
    0,
    27,
    0.2,
    2.4
)

const Loader = new Character(
    "Loader",
    160,
    2.5,
    12,
    20,
    48,
    0.5,
    2.4
)

const Mercenary = new Character(
    "Mercenary",
    110,
    1,
    12,
    0,
    33,
    0.2,
    2.4
)
const Mult = new Character(
    "MUL-T",
    200,
    1,
    11,
    12,
    60,
    0.2,
    2.2
)

const Rex = new Character(
    "REX",
    130,
    1,
    12,
    20,
    39,
    0.2,
    2.4
)



const characters = [Acrid, Artificer, Bandit, Captain, Commando, Engineer, Heretic, Huntress, Loader, Mercenary, Mult, Rex]

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

var path = window.location.pathname
var page = path.split("/").pop();
var name = page.split(".")[0]

function findIndex(name){
    for (let i = 0; i < characters.length; i++) {
        const char = characters[i];
        if (name == char.name){
            return i;
        }
    }
}

var index = findIndex(name);
console.log(name + " :", characters[index])

const c1 = document.createElement("char");
c1.innerHTML = markup(characters[index]);
document.body.appendChild(c1);

