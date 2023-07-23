import Character from './js/Character';
import Bowman from './js/Bowman';
import Daemon from './js/Daemon';
import Magician from './js/Magician';
import Swordsman from './js/Swordsman';
import Undead from './js/Undead';
import Zombie from './js/Zombie';

console.log('it works');

const daemon = new Bowman('Nikolay', 'Bowman');

// console.log(daemon);

daemon.damage(10);
daemon.damage(10);

console.log(daemon);
