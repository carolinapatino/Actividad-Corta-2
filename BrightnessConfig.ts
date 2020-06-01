import { CaptureConfiguration } from "./CaptureConfiguration";
import { Capture } from "./Capture";

export class SaturationConfig extends CaptureConfiguration {
  myCapture : Capture;

  
  constructor (myCapture : Capture){
    super();
    this.myCapture = myCapture;
  }

  public getLightQuantity() {
    return this.myCapture.getLightQuantity();
  }

  public setLightQuantity(light_quantity: number) {
    this.myCapture.light_quantity = light_quantity;
  }
}
