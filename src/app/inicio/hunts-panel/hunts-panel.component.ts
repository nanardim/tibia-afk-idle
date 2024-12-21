import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hunts-panel',
  templateUrl: './hunts-panel.component.html',
  styleUrls: ['./hunts-panel.component.scss'],
})
export class HuntsPanelComponent  implements OnInit {
  timeLeftSegundos: number = 59;
  timeLeftMinutos: number = 59;
  timeLeftHoras: number = 7;
  timeLeft: number = 28799;
  cacando: boolean = false;
  interval: any;
  expirationCounter: string = '07:59:59';
  constructor() { }

  ngOnInit() {}
  startTimer() {
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        if(this.timeLeftSegundos == 0){
          if(this.timeLeftMinutos == 0){
            this.timeLeftHoras--;
            this.timeLeftMinutos = 59;
          }
          else{
            this.timeLeftMinutos --;
          }
          this.timeLeftSegundos = 59;
        }
        else{
          this.timeLeftSegundos--;
        }
        this.expirationCounter = "0" + this.timeLeftHoras + ":" + (this.timeLeftMinutos < 10 ? ("0" + this.timeLeftMinutos) : this.timeLeftMinutos) + ":" + (this.timeLeftSegundos < 10 ? ("0" + this.timeLeftSegundos) : this.timeLeftSegundos)
        
      } else {
        clearInterval(this.interval);
      }
    }, 1000);
  }
  cacar(){
    this.cacando = true;
    this.startTimer()
  }
  pauseTimer() {
    clearInterval(this.interval);
  }
  cancelarHunt(){
    this.cacando = false;
    clearInterval(this.interval);
  }
  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = 60; // Defina o valor inicial aqui
  }
}
