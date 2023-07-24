import Zombie from '../js/Zombie';

test('Zombie test', () => {
  const zombie = new Zombie('Oleg');

  const result = {
    _name: 'Oleg', //! используется префикс из-за сеттера/геттера
    _type: 'Zombie', //! используется префикс из-за сеттера/геттера
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  };

  expect(result).toEqual(zombie);
});
