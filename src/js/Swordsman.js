import { Character } from './Character';

export class Swordsman extends Character {
  constructor(name, type, health, level, attack, defence) {
    super(name, type);
    this.health = 100;
    this.level = 1;
    this.attack = 40;
    this.defence = 10;
  }
}
