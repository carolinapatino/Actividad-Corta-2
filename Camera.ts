import { CaptureConfiguration } from "./CaptureConfiguration";
import {BasicCapture} from "./BasicCapture";
import { Capture } from "./Capture";

export class Camera {
  public branch: string;
  public myCapture: Capture;

  public Camera(branch: string) {
    this.branch = branch;
  }

  public TakeCapture(CaptureType: number ) {
    if (CaptureType == 1){
      this.myCapture = new BasicCapture();
    }
    else if (CaptureType == 2 ){
      this.myCapture = new CaptureConfiguration();
    }
    return this.myCapture;
  }
}
