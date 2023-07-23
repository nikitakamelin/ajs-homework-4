export default class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Некорректная длина строки');
      // return;  -- //! в eslint появляется ошибка unreachable code
    }
    this._name = value;
  }

  get type() {
    return this._type;
  }

  set type(value) {
    if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(value)) {
      throw new Error('Некорректный тип игрока');
      // return;       -- //! в eslint появляется ошибка unreachable code
    }
    this._type = value;
  }
}