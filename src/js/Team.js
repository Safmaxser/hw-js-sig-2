export default class Team {
  constructor() {
    this.members = new Set();
  }   
  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже существует в команде!');
    }
    this.members.add(character);
  }
  addAll(...character) {
    [...character].forEach(item => this.add(item))
  }
  toArray() {
    return [...this.members];
  }
  *[Symbol.iterator]() {
    for (const character of this.members) {
      yield character;
    }
  }
}
