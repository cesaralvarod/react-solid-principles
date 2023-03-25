export class Animal {
  swim(distance: number) {
    console.log(`${distance} -- Animal`)
  }
}

export class Dog extends Animal {
  swim(distance: number) {
    console.log(`${distance} -- Dog`)
  }
}

export class Cat extends Animal {
  swim() {
    new Error('Los gatos no nadan')
  }
}
