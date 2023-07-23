import Bowman from '../js/Bowman';

test('Bowman test', () => {
  const bowman = new Bowman('Oleg', 'Bowman');

  const result = {
    _name: 'Oleg', //! используется префикс из-за сеттера/геттера
    _type: 'Bowman', //! используется префикс из-за сеттера/геттера
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  };

  expect(result).toEqual(bowman);
});
