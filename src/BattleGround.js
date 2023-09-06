import AttackSkill from "./AttackSkill.js";
import  Pokemon  from "./Pokemon.js";

export default class BattleGround {
  runTheFight = () => {
    console.log("-----------------------------------");
    console.log("----------BATTLE BEGINS------------");
    console.log("-----------------------------------");
    const pikachu = new Pokemon("Pikachu", 120, 80);
    const bulbasaur = new Pokemon("Bulbasaur", 95, 105);

    let lightning = new AttackSkill("lightning", 40, 30);
    let bombing = new AttackSkill("poisonSeed", 20, 20);
    // pikachu learning skills
    pikachu.learnAttackSkill(lightning);
    pikachu.learnAttackSkill(bombing);

    // bulbasaur learning skills
    bulbasaur.learnAttackSkill(lightning);
    bulbasaur.learnAttackSkill(bombing);

    // Pokemons starts attacking each other
    pikachu.attack("lightning", bulbasaur);
    bulbasaur.attack("poisonSeed", pikachu);
    pikachu.attack("poisonSeed", bulbasaur);
    bulbasaur.attack("lightning", pikachu);
    pikachu.attack("lightning", bulbasaur);
    pikachu.attack("poisonSeed", bulbasaur); // bulbasaur is already dead!
  };
}


