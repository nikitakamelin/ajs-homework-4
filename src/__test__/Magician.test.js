import Magician from '../js/Magician';

test('Magician test', () => {
  const magician = new Magician('Oleg');

  const result = {
    _name: 'Oleg', //! используется префикс из-за сеттера/геттера
    _type: 'Magician', //! используется префикс из-за сеттера/геттера
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(magician);
});
