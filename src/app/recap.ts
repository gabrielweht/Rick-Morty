const usermane: string | number = 'gabriel';

const sum = (a: number, b: number): number => {
  return a + b;
}

sum(1, 1);

// Las clases se pueden definir de dos formas en el contructor, una lagra y una abreviada

// class Person {
//   private age: number;
//   lastName: string;

//   constructor(age: number, lastName: string) {
//     this.age = age;
//     this.lastName = lastName;
//   }
// }

// En la forma abreviada solo es necesario agregar la palabra public o private en los contructores para
// que ya realice lo mismo que el código de arriba

class Person {
  constructor(public age: number, public lastName: string) {}
}

const Gabi = new Person(25, 'Weht');
