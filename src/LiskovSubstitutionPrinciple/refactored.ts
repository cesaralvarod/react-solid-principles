export class Animal {}

export class SwimmingAnimal extends Animal {
  swim(distance: number) {
    console.log(`${distance} -- Animal`)
  }
}

export class Dog extends SwimmingAnimal {
  swim(distance: number) {
    console.log(`${distance} -- Dog`)
  }
}

export class Cat extends Animal {}
