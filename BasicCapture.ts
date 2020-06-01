import { Capture } from "./Capture";

export class BasicCapture extends Capture {
  intensity = 0;
  tonality = 0;
  light_quantity = 0;

  public getIntensity() {
    return this.intensity;
  }

  public getTonality() {
    return this.tonality;
  }

  public getLightQuantity() {
    return this.light_quantity;
  }
}
