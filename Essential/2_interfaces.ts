// For objects and classes
interface Rect {
  readonly id: string;
  collor?: string;
  size: {
    width: number;
    height: number;
  };
}

const rect1: Rect = {
  id: "123",
  size: {
    width: 12,
    height: 15
  }
};

const rect2: Rect = {
  id: "456",
  collor: "black",
  size: {
    width: 20,
    height: 30
  }
};

rect2.collor = "white";
// rect2.id = "789";

const rect3 = {} as Rect;
const rect4 = <Rect>{};

// ====================  -  ====================
interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect5: RectWithArea = {
  id: "123",
  size: {
    width: 20,
    height: 20
  },
  getArea(): number {
    return this.size.width * this.size.height;
  }
};

// ====================  -  ====================
interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();
  setTime(date: Date): void {
    this.time = date;
  }
}

// ====================  -  ====================
interface IStyle {
  [key: string]: string;
}

const css: IStyle = {
  border: "1px sold black",
  marginTop: "2px",
  borderRadius: "5px"
};
