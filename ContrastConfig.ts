import { CaptureConfiguration } from "./CaptureConfiguration";
import { Capture } from "./Capture";

export class ContrastConfig extends CaptureConfiguration {
  myCapture: Capture;

  constructor (myCapture : Capture){
    super();
    this.myCapture = myCapture;
  }

  public getTonality() {
    return this.myCapture.getTonality();
  }

  public setTonality(tonality: number) {
    this.myCapture.tonality = tonality;
  }
}
