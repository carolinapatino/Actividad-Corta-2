import { CaptureConfiguration } from "./CaptureConfiguration";
import { Capture } from "./Capture";

export class SaturationConfig extends CaptureConfiguration {

  myCapture : Capture;

  public getIntensity() {
    return this.myCapture.getIntensity();
  }

  public setIntensity(intensity: number) {
    this.myCapture.intensity = intensity;
  }
}
