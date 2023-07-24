import Undead from '../js/Undead';

test('Undead test', () => {
  const undead = new Undead('Oleg');

  const result = {
    _name: 'Oleg', //! используется префикс из-за сеттера/геттера
    _type: 'Undead', //! используется префикс из-за сеттера/геттера
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(undead);
});
