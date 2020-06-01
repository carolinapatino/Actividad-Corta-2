import { Capture } from "./Capture";

export class CaptureConfiguration extends Capture {
  myCapture : Capture;

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
