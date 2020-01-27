class Typescript {
  version: string;

  constructor(version: string) {
    this.version = version;
  }

  info(name: string): string {
    return `[${name}]: Typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}

// the same
class Car1 {
  readonly numberOfWheels: number = 4;

  constructor(readonly model: string) {}
}

// ========================================
// Modifiers
class Animal {
  protected voice: string = '';
  public color: string = 'black';

  private go() {
    console.log('Go');
  }
}

class Cat extends Animal {
  public setVoice(voice: string) {
    this.voice = voice;
  }
}

const cat = new Cat();

// ========================================
// Abstract class
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render');
  }

  info(): string {
    return 'This is info';
  }
}
