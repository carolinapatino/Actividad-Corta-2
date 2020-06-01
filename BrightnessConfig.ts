import { CaptureConfiguration } from "./CaptureConfiguration";

export class SaturationConfig extends CaptureConfiguration {
  light_quantity: number;

  public getLightQuantity() {
    return this.light_quantity;
  }

  public setLightQuantity(light_quantity: number) {
    this.light_quantity = light_quantity;
  }
}
