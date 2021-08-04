class Character{
    constructor(
        name,
        health,
        regen,
        damage,
        armor,
        upgradeAddHealth
    )
    {
    this.name = name;
    this.health = health;
    this.regen = regen;
    this.damage = damage;
    this.armor = armor;
    }    
    upgradeAddHealth(incr){
        this.health = this.health + incr
        updateCharacter("Health upgraded")
    }
}

export default Character;
