import { CaptureConfiguration } from "./CaptureConfiguration";

export class ContrastConfig extends CaptureConfiguration {
  tonality: number;

  public getTonality() {
    return this.tonality;
  }

  public setTonality(tonality: number) {
    this.tonality = tonality;
  }
}
