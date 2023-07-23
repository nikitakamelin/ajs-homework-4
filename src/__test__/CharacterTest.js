import Character from '../js/Character';

test('Character test', () => {
	const character = new Character('Oleg', 'Undead', 100, 3, 45, 56);

	const result = {
		_name: 'Oleg',    //! используется префикс из-за сеттера/геттера
		_type: 'Undead', //! используется префикс из-за сеттера/геттера
		health: 100,
		level: 3,
		attack: 45,
		defence: 56
	}

	expect(result).toEqual(character);
});