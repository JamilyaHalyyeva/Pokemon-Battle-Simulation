export default class Pokemon {
  constructor(name, health, magic) {
    this.name = name;
    this.health = health;
    this.magic = magic;
    this.skills = [];
    this.counter = 0;
    console.log(
      `Pokemon is created  Name: ${this.name}, Health: ${this.health}, Magic: ${this.magic}`
    );
  }
  learnAttackSkill = (newskill) => {
    const filteredSkill = this.skills.filter(
      (skill) => skill.attack === newskill.attack
    );
    if (filteredSkill.length === 0) {
      this.skills.push(newskill);
    }
  };
  showStatus = () => {
    console.log(
      `Name: ${this.name}, Health: ${this.health}, Magic: ${this.magic}`
    );
    if (this.counter > 3) {
      console.log(`${this.name} wins!`);
    }
  };
  getMagics = () => {
    let amount = Math.floor(Math.random() * 20);
    this.magic = this.magic + amount;
  };

  hasEnoughMagic = (skillName) => {
    let result = false;
    const filteredSkill = this.skills.filter(
      (skill) => skill.attack === skillName
    );
    if (filteredSkill.length === 1) {
      if (filteredSkill[0].magic <= this.magic) {
        result = true;
      }
    }
    return result;
  };
  isAlive = () => {
    if (this.health > 0) {
      return true;
    }
    return false;
  };

  attack = (skillName, opponent) => {
    console.log("-----------------------------------");
    if (this.isAlive() && opponent.isAlive()) {
      if (this.hasEnoughMagic(skillName)) {
        let attackSkill = this.skills.filter((skill) => {
          return skill.attack === skillName;
        });
        console.log(
          `${this.name} attacks to ${opponent.name} with ${attackSkill[0].attack} and hits ${attackSkill[0].damage}`
        );
        this.magic = this.magic - attackSkill[0].magic;
        opponent.health = opponent.health - attackSkill[0].damage;
        this.counter = this.counter + 1;
        this.showStatus();
        opponent.showStatus();
        if(this.counter>=3){
            console.log(`${this.name}  Wins.`);
        }
        return;
      }
    }

    console.log(`${this.name} attacks to ${opponent.name} but   `);
    if (!opponent.isAlive()) {
      console.log(`${opponent.name}  is  dead.`);
    } else if (!this.isAlive()) {
      console.log(`${this.name}  is  dead.`);
    }
  };
}
