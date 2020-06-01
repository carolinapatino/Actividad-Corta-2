import { Camera } from "./Camera";

export class Photographer {
  public name: string;

  public Photographer(name: string) {
    this.name = name;
  }

  public turnOn(): Camera {
    let myCamera = new Camera();
    return myCamera;
  }
}
