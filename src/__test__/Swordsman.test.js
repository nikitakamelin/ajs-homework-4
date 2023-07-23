import Swordsman from '../js/Swordsman';

test('Swordsman test', () => {
  const swordsman = new Swordsman('Oleg', 'Swordsman');

  const result = {
    _name: 'Oleg', //! используется префикс из-за сеттера/геттера
    _type: 'Swordsman', //! используется префикс из-за сеттера/геттера
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(swordsman);
});
