import { CaptureConfiguration } from "./CaptureConfiguration";
import { Capture } from "./Capture";

export class SaturationConfig extends CaptureConfiguration {

  myCapture : Capture;

  constructor (myCapture : Capture){
    super();
    this.myCapture = myCapture;
  }

  public getIntensity() {
    return this.myCapture.getIntensity();
  }

  public setIntensity(intensity: number) {
    this.myCapture.intensity = intensity;
  }
}
