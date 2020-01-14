import Ship from '../src/js/ship';

test('hiting the position in a ship and checking the ship is not sunk', () => {
  const ship = Ship(3);
  ship.hit(0);
  expect(ship.isSunk()).toBe(false);
});

test('checking if the ship is sunk', () => {
  const ship = Ship(2);
  ship.hit(0);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true);
});

test('checking type of ship', () => {
  const ship = Ship(2);
  expect(ship.getType()).toBe('2');
})