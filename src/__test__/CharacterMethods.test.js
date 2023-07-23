import Character from '../js/Character';

test('Character levelUp basic test', () => {
  const character = new Character('Oleg', 'Undead', 90, 1, 50, 50);
  character.levelUp();

  const result = {
    _name: 'Oleg', //! используется префикс из-за сеттера/геттера
    _type: 'Undead', //! используется префикс из-за сеттера/геттера
    health: 100,
    level: 2,
    attack: 60,
    defence: 60,
  };
  expect(result).toEqual(character);
});

test('Character damage(points) basic test', () => {
  const character = new Character('Oleg', 'Undead', 100, 1, 50, 50);
  character.damage(10);

  const result = {
    _name: 'Oleg', //! используется префикс из-за сеттера/геттера
    _type: 'Undead', //! используется префикс из-за сеттера/геттера
    health: 95,
    level: 1,
    attack: 50,
    defence: 50,
  };
  expect(result).toEqual(character);
});
