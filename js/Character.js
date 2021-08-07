class Character{
    constructor(
        name,
        health,
        regen,
        damage,
        armor,
        healthipl,
        regenipl,
        damageipl,
        upgradeAddHealth
    )
    {
    this.name = name;
    this.health = health;
    this.regen = regen;
    this.damage = damage;
    this.armor = armor;
    this.healthip = healthipl;
    this.regenipl = regenipl;
    this.damageipl = damageipl;
    }    
    upgradeAddHealth(incr){
        this.health = this.health + incr
        updateCharacter("Health upgraded")
    }
}

export default Character;
