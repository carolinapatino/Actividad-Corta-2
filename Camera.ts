import { CaptureConfiguration } from "./CaptureConfiguration";
import {BasicCapture} from "./BasicCapture";

export class Camera {
  public branch: string;

  public Camera(branch: string) {
    this.branch = branch;
  }

  public TakeCapture(CaptureType: number ) {
    let myCapture;
    if (CaptureType == 1){
      myCapture = new BasicCapture();
    }
    else if (CaptureType == 2 ){
      myCapture = new CaptureConfiguration();
    }
    return myCapture;
  }
}
