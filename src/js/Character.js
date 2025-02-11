export default class Character {
  static listType = ['Bowman', 'Swordsman', 'Magician', 'Undead', 'Zombie', 'Daemon'];    
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;    
  }
  
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 2 || value.length > 10) {
      throw new Error('Некорректное значение - name');
    }
    this._name = value;    
  }
  get type() {
    return this._type;
  }
  set type(value) {    
    if (!Character.listType.includes(value)) {
      throw new Error('Некорректное значение - type');
    }
    this._type = value;    
  }
};
