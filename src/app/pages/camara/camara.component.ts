import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CameraPreview, CameraPreviewOptions, CameraPreviewPictureOptions } from "@capacitor-community/camera-preview";

@Component({
  selector: 'app-camara',
  standalone: true,
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
  imports: [IonicModule, CommonModule]
})
export class CamaraComponent  implements OnInit {

  turnOn: boolean = false;
  album: string[] = [];

  constructor() { }

  ngOnInit() {}

  turnOnCamera(){
    const cameraPreviewOptions: CameraPreviewOptions = {
      width: 250,
      height: 250,
      x: 100,
      y: 100,
      position: 'rear',
      parent: 'camera-container',
      className: 'camera-preview'
    }

    CameraPreview.start(cameraPreviewOptions).then(() => {
      this.turnOn = true;
    }).catch(error => {
      console.error("Error starting camera preview: ", error);
    });
  };

  turnOffCamera(){
    CameraPreview.stop().then(() => {
      this.turnOn = false;
    })
  }

  takeAPicture(){
    const cameraPreviewPictureOptions: CameraPreviewPictureOptions = {
      quality: 50
    }

    CameraPreview.capture(cameraPreviewPictureOptions).then((result: any) => {
      const base64 = "data:image/png;base64," + result.value;
      this.album.push(base64);
    })
  }

}
