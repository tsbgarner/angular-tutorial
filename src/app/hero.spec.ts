import { Hero } from './hero';

describe('Hero', () => {
  let hero: Hero;

  test('constructor valid', () => {
    hero = new Hero(1, 'Windstrom');
    expect(hero).toBeDefined();
  });

  test('id getter should return private _id', () => {
    hero = new Hero(1, 'Windstrom');
    expect(hero.id).toBe(1);
  });

  test('name getter should return name', () => {
    hero = new Hero(1, 'Windstrom');
    expect(hero.name).toBe('Windstrom');
  });

  test('should error on constructor with id less than 1', () => {
    expect(() => {
      hero = new Hero(0, null);
    }).toThrowError();
  })
});
