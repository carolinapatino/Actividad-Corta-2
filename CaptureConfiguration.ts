import { Capture } from "./Capture";
import { SaturationConfig } from "./SaturationConfig";

export class CaptureConfiguration extends Capture {
  myCapture : Capture;
  private saturation;
  
  public getIntensity() {
    return this.intensity;
  }

  public getTonality() {
    return this.tonality;
  }

  public getLightQuantity() {
    return this.light_quantity;
  }

  public setIntensity(intensity: number) {
    this.saturation = new SaturationConfig(this.myCapture);
    this.saturation.setIntensity(intensity);
  }


}
