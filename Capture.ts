export abstract class Capture {
  public intensity: number;
  public tonality: number;
  public light_quantity: number;

  public abstract getIntensity(): number;
  public abstract getTonality(): number;
  public abstract getLightQuantity(): number;
}
