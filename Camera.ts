import { Capture } from "./Capture";

export class Camera {
  public branch: string;

  public Camera(branch: string) {
    this.branch = branch;
  }

  public TakeCapture() {
    return Capture;
  }
}
