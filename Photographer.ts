import { Camera } from "./Camera";
import { Capture } from "./Capture";

export class Photographer {
  public name: string;
  public myCamera:Camera;
  public myCapture: Capture;
  public CaptureType = 1;

  public Photographer(name: string) {
    this.name = name;
  }

  public turnOn(): Camera {
    this.myCamera = new Camera();
    return this.myCamera;
  }

  public takeCapture (){
    this.myCapture = this.myCamera.TakeCapture(this.CaptureType);
  }
}
