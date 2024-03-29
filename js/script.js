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
const items = ["Armor-Piercing_Rounds.png", "Backup_Magazine.png", "Bison_Steak.png", "Bundle_of_Fireworks.png", "Bustling_Fungus.png", "Cautious_Slug.png", "Crowbar.png", "Energy_Drink.png", "Focus_Crystal.png", "Gasoline.png", "Medkit.png", "Repulsion_Armor_Plate.png", "Rusted_Key.png"]

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
const thisChar = characters[index]
console.log(name + " :", characters[index])

    const c1 = document.createElement("char");
    c1.innerHTML = markup(characters[index]);
    document.body.appendChild(c1);

const getImage = (name, doc) => {
    return `
    <div class = "col" id = "${name}">
        <img src = "/items/${doc}">
    </div>
`;
};
function createTable(items){
    var x = `<div class = "container">
                <div class = "row row-cols-4">`;
    for (let j  = 0; j < items.length; j++){
        const n = items[j].split(".")[0];
        x += getImage(n, items[j]);
        
        
    }
    x += `</div>
            </div>`;
    return x
}

const tbl = document.createElement("tbl");
tbl.innerHTML = createTable(items);
document.body.appendChild(tbl);

document.getElementById('Armor-Piercing_Rounds').addEventListener("click", function(){
    thisChar.damage *= 1.15;
    c1.innerHTML = markup(thisChar);
})
