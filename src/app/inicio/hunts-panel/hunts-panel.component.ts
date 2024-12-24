import { Component, Input, input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HuntDataModel } from './models/huntDataModel';
import charJson from '../../arquivos-util/char.json';
import json from '../../arquivos-util/tabela-level.json';
import { BackpackPanelComponent } from '../backpack-panel/backpack-panel.component';

@Component({
  selector: 'app-hunts-panel',
  templateUrl: './hunts-panel.component.html',
  styleUrls: ['./hunts-panel.component.scss'],
})
export class HuntsPanelComponent  implements OnInit {
  @Input() huntStamp: Date;
  @Input() huntTimeLeft: number;
  @Input() huntRatosMortos: number;
  @Input() huntCaveRatMortos: number;
  @Input() huntGoldCoins: number;
  @Input() huntCheese: number;
  @Input() huntLevel: number;
  @Input() huntExpAtual: number;
  timeLeftSegundos: number = 59;
  timeLeftMinutos: number = 59;
  timeLeftHoras: number = 7;
  public mostrarTempo: boolean = false;
  public ratosMortos: number = 0;
  public caveRatMortos: number = 0;
  public goldCoins: number = 0;
  public cheese: number = 0;
  public expLevel: number = 0;
  public experienciaPercentage: string = '';
  public textoAtividade: string = 'Exploring cave';
  public textoLootAtividade: string = '';
  public expLevelFormatado: string = '';
  public level: number = 0;
  public expAtual: number = 0;
  public expAtualFormatado: string = '';
  public levelAvancadoTexto: string = '';
  timeLeft: number = 28799;
  cacando: boolean = false;
  levelUp: boolean = false;
  interval: any;
  expirationCounter: string = '07:59:59';
  constructor(public modalController: ModalController) { }

  ngOnInit() {
    if(this.huntTimeLeft != null){
      this.definirDadosHunt()
    }
    else{
      this.definirNovaHunt()
    }
  }

  definirNovaHunt(){
    this.level = charJson[0].Skills.Level
    this.expAtual = charJson[0].Skills.Experiencia
    this.expAtualFormatado = new Intl.NumberFormat('en', { }).format(
      charJson[0].Skills.Experiencia,
    )
    this.expLevel = Number.parseInt(json.filter(c => c.Level == this.level.toString())[0].Experiencia)
    this.expLevelFormatado = new Intl.NumberFormat('en', { }).format(
      this.expLevel,
    )
    this.experienciaPercentage = ((100*charJson[0].Skills.Experiencia)/this.expLevel).toFixed(0) + "%"
    setTimeout(() => {
      this.mostrarTempo = true;
    }, 2000);
  }
  definirDadosHunt(){
    this.cacando = true;
    let stampNow = new Date();
    let diffSeconds = (stampNow.getTime() - this.huntStamp.getTime())/1000;
    this.timeLeft =  this.huntTimeLeft - diffSeconds;
    this.timeLeftHoras = Math.floor(this.timeLeft/3600);
    this.timeLeftMinutos = Math.floor((this.timeLeft%3600)/60);
    this.timeLeftSegundos = Math.floor(this.timeLeft%60);
    this.caveRatMortos = this.huntCaveRatMortos + Math.floor(diffSeconds/60)*2;
    this.ratosMortos = this.huntRatosMortos + Math.floor(diffSeconds/60)*9;
    this.goldCoins = this.huntGoldCoins + Math.floor(diffSeconds/60)*8;
    this.cheese = this.huntCheese + Math.floor(diffSeconds/60)*1;
    this.level = this.huntLevel;
    this.expAtual = this.huntExpAtual + Math.floor(diffSeconds/1)*13000;
    while(this.expAtual > this.expLevel){
      this.levelUp = true;
      this.level = this.level + 1;
      this.expAtual = this.expAtual - this.expLevel;
      this.expLevel = Number.parseInt(json.filter(c => c.Level == this.level.toString())[0].Experiencia)
      setTimeout(() => {
        this.levelUp = false;
      }, 5000);
    }
    this.levelAvancadoTexto = "You advanced from Level " + this.huntLevel + " to Level " + this.level

    this.expAtualFormatado = new Intl.NumberFormat('en', { }).format(
      this.expAtual,
    )
    this.expLevel = Number.parseInt(json.filter(c => c.Level == this.level.toString())[0].Experiencia)
    this.expLevelFormatado = new Intl.NumberFormat('en', { }).format(
      this.expLevel,
    )
    this.experienciaPercentage = ((100*this.expAtual)/this.expLevel).toFixed(0) + "%"
    this.startTimer()
    setTimeout(() => {
      this.mostrarTempo = true;
    }, 2000);
  }
  async abrirBackpackPanel(){
    const modal = await this.modalController.create({
      component: BackpackPanelComponent,
      cssClass: "atualizarCelularModal",
      componentProps: {
      },
    });

    return await modal.present();
  }
  //FUNCAO PRINCIPAL
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
        if(this.timeLeftSegundos%5==0){
          this.procuraMonstro()
        }


      } else {
        //FINALIZOUHUNT
        let huntData = new HuntDataModel();
        huntData.huntStamp = new Date();
        huntData.timeLeft = 666.5;
        huntData.huntCaveRatMortos = this.caveRatMortos;
        huntData.huntRatosMortos = this.ratosMortos;
        huntData.huntGoldCoins = this.goldCoins;
        huntData.huntCheese = this.cheese;
        huntData.huntLevel = this.level;
        huntData.huntExpAtual = this.expAtual;
        this.modalController.dismiss(huntData);
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


  procuraMonstro(){
    let achouRato = Math.random();
    if(achouRato > 0.5){
      this.textoAtividade = "You killed a Rat";
      this.ratosMortos = this.ratosMortos + 1;
      this.expAtual = this.expAtual + 5
      this.expLevel = Number.parseInt(json.filter(c => c.Level == (this.level).toString())[0].Experiencia)
      if(this.expAtual >= this.expLevel){
        this.levelAvancadoTexto = "You advanced from Level " + this.level + " to Level " + (this.level + 1)
        this.levelUp = true;
        setTimeout(() => {
          this.levelUp = false;
        }, 5000);
        this.expAtual = 0;
    
        this.expAtualFormatado = new Intl.NumberFormat('en', { }).format(
          this.expAtual,
        )
        this.expLevel = Number.parseInt(json.filter(c => c.Level == (this.level + 1).toString())[0].Experiencia)
        this.expLevelFormatado = new Intl.NumberFormat('en', { }).format(
          this.expLevel,
        )
        this.level = this.level + 1;
        this.experienciaPercentage = ((100*this.expAtual)/this.expLevel).toFixed(0) + "%"
      }
      else{
        this.expAtualFormatado = new Intl.NumberFormat('en', { }).format(
          this.expAtual,
        )
        this.expLevel = Number.parseInt(json.filter(c => c.Level == this.level.toString())[0].Experiencia)
        this.expLevelFormatado = new Intl.NumberFormat('en', { }).format(
          this.expLevel,
        )
        this.experienciaPercentage = ((100*this.expAtual)/this.expLevel).toFixed(0) + "%"
      }
      let achouLoot = Math.random();
      if(achouLoot > 0.8){
        this.textoLootAtividade = 2 + " gp"
        this.goldCoins = this.goldCoins + 2;
        let achouQueijo = Math.random();
        if(achouQueijo > 0.9){
          this.textoLootAtividade = this.textoLootAtividade + ", cheese"
          this.cheese = this.cheese + 1;
        }
      }
      else if(achouLoot > 0.6 && achouLoot <= 0.8){
        this.textoLootAtividade = 1 + " gp"        
        this.goldCoins = this.goldCoins + 1;
        let achouQueijo = Math.random();
        if(achouQueijo > 0.9){
          this.textoLootAtividade = this.textoLootAtividade + ", cheese"
          this.cheese = this.cheese + 1;
        }
      }
      else if(achouLoot > 0.3 && achouLoot <= 0.6){
        let achouQueijo = Math.random();
        if(achouQueijo > 0.9){
          this.textoLootAtividade = "Cheese"
          this.cheese = this.cheese + 1;
        }
        else{
          this.textoLootAtividade = "Noting";
        }
      }
      else{
        this.textoLootAtividade = "Nothing"
      }
      
    }
    else{
      let achouCaveRat = Math.random();
      if(achouCaveRat > 0.8){
        this.textoAtividade = "You killed a Cave Rat";
        this.caveRatMortos = this.caveRatMortos + 1;
        this.expAtual = this.expAtual + 10
        this.expLevel = Number.parseInt(json.filter(c => c.Level == (this.level).toString())[0].Experiencia)
        if(this.expAtual >= this.expLevel){
          this.levelUp = true;
          setTimeout(() => {
            this.levelUp = false;
          }, 5000);
          this.expAtual = this.expAtual%this.expLevel;
          this.expAtualFormatado = new Intl.NumberFormat('en', { }).format(
            this.expAtual,
          )
          this.expLevel = Number.parseInt(json.filter(c => c.Level == (this.level + 1).toString())[0].Experiencia)
          this.expLevelFormatado = new Intl.NumberFormat('en', { }).format(
            this.expLevel,
          )
          this.level = this.level + 1;
          this.experienciaPercentage = ((100*this.expAtual)/this.expLevel).toFixed(0) + "%"
        }
        else{
          this.expAtualFormatado = new Intl.NumberFormat('en', { }).format(
            this.expAtual,
          )
          this.expLevel = Number.parseInt(json.filter(c => c.Level == this.level.toString())[0].Experiencia)
          this.expLevelFormatado = new Intl.NumberFormat('en', { }).format(
            this.expLevel,
          )
          this.experienciaPercentage = ((100*this.expAtual)/this.expLevel).toFixed(0) + "%"
        }
  
        let achouLoot = Math.random();
        if(achouLoot > 0.8){
          this.textoLootAtividade = 3 + " gp"
          this.goldCoins = this.goldCoins + 3;
          let achouQueijo = Math.random();
          if(achouQueijo > 0.9){
            this.textoLootAtividade = this.textoLootAtividade + ", cheese"
            this.cheese = this.cheese + 1;
          }
        }
        else if(achouLoot > 0.6 && achouLoot <= 0.8){
          this.textoLootAtividade = 2 + " gp"
          this.goldCoins = this.goldCoins + 2;
          let achouQueijo = Math.random();
          if(achouQueijo > 0.9){
            this.textoLootAtividade = this.textoLootAtividade + ", cheese"
            this.cheese = this.cheese + 1;
          }
        }
        else if(achouLoot > 0.3 && achouLoot <= 0.6){
          this.textoLootAtividade = 1 + " gp"
          this.goldCoins = this.goldCoins + 1;
          let achouQueijo = Math.random();
          if(achouQueijo > 0.9){
            this.textoLootAtividade = this.textoLootAtividade + ", cheese"
            this.cheese = this.cheese + 1;
          }
        }
        else{
          this.textoLootAtividade = "Nothing"
        }
      }
      else{
        let fraseTexto = Math.random();
        if(fraseTexto > 0.5){
          this.textoAtividade = "You found nothing";
        }
        else{
          this.textoAtividade = "You hear a noise";
        }
        this.textoLootAtividade = "Nothing";
      }

    }
  }
  cancelarHunt(){
    //this.cacando = false;
    let huntData = new HuntDataModel();
    huntData.huntStamp = new Date();
    huntData.timeLeft = this.timeLeft;
    huntData.huntCaveRatMortos = this.caveRatMortos;
    huntData.huntRatosMortos = this.ratosMortos;
    huntData.huntGoldCoins = this.goldCoins;
    huntData.huntCheese = this.cheese;
    huntData.huntLevel = this.level;
    huntData.huntExpAtual = this.expAtual;
    this.modalController.dismiss(huntData);
    //clearInterval(this.interval);
  }
  resetTimer() {
    clearInterval(this.interval);
    this.timeLeft = 60; // Defina o valor inicial aqui
  }
  closeModal(){

  }
}
