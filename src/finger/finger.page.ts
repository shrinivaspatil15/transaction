import { Component } from '@angular/core';
import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';

@Component({
    selector:'finger',
    templateUrl:'./finger.page.html',
    styleUrls: ['./finger.page.scss']
})
export class FingerPage {

    constructor(private faio: FingerprintAIO) {}
    public showFingerprintAuthDlg() {
  
      this.faio.isAvailable().then((result: any) => {
        console.log(result)
  
        this.faio.show({
          cancelButtonTitle: 'Cancel',
          description: "Some biometric description",
          disableBackup: true,
          title: 'Scanner Title',
          fallbackButtonTitle: 'FB Back Button',
          subtitle: 'This SubTitle'
        })
          .then((result: any) => {
            console.log(result)
            alert("Successfully Authenticated!")
          })
          .catch((error: any) => {
            console.log(error)
            alert("Match not found!")
          });
  
      })
        .catch((error: any) => {
          console.log(error)
        });
    }
  
  }
  
  