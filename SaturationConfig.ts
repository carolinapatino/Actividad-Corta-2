import { CaptureConfiguration } from "./CaptureConfiguration";

export class SaturationConfig extends CaptureConfiguration {
  intensity: number;

  public getIntensity() {
    return this.intensity;
  }

  public setIntensity(intensity: number) {
    this.intensity = intensity;
  }
}
