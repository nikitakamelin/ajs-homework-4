import Daemon from '../js/Daemon';

test('Daemon test', () => {
  const daemon = new Daemon('Oleg', 'Daemon');

  const result = {
    _name: 'Oleg', //! используется префикс из-за сеттера/геттера
    _type: 'Daemon', //! используется префикс из-за сеттера/геттера
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  };

  expect(result).toEqual(daemon);
});
