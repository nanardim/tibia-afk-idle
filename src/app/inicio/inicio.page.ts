import { Component } from '@angular/core';
import {
  AlertController,
  ModalController,
  PopoverController,
} from "@ionic/angular";
import { SkillsPanelComponent } from './skills-panel/skills-panel.component';
import { CharacterPanelComponent } from './character-panel/character-panel.component';
import { EquipmentPanelComponent } from './equipment-panel/equipment-panel.component';
import { BackpackPanelComponent } from './backpack-panel/backpack-panel.component';
import { DepotPanelComponent } from './depot-panel/depot-panel.component';
import { HuntsPanelComponent } from './hunts-panel/hunts-panel.component';
import { HuntDataModel } from './hunts-panel/models/huntDataModel';
import charJson from '../arquivos-util/char.json';

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {

  public huntStamp: Date;
  public huntTimeLeft: number;
  public huntRatosMortos: number;
  public huntCaveRatMortos: number;
  public huntGoldCoins: number;
  public huntCheese: number;
  public huntExpAtual: number;
  public huntLevel: number;
  interval: any;
  constructor(private ModalController : ModalController) {}

  async abrirSkillPanel(){
    const modal = await this.ModalController.create({
      component: SkillsPanelComponent,
      cssClass: "skillsPanelClass",
      componentProps: {
      },
    });

    return await modal.present();
  }
  async abrirCharPanel(){
    const modal = await this.ModalController.create({
      component: CharacterPanelComponent,
      cssClass: "atualizarCelularModal",
      componentProps: {
      },
    });

    return await modal.present();
  }
  async abrirEquipmentPanel(){
    const modal = await this.ModalController.create({
      component: EquipmentPanelComponent,
      cssClass: "atualizarCelularModal",
      componentProps: {
      },
    });

    return await modal.present();
  }
  async abrirBackpackPanel(){
    const modal = await this.ModalController.create({
      component: BackpackPanelComponent,
      cssClass: "atualizarCelularModal",
      componentProps: {
      },
    });

    return await modal.present();
  }
  async abrirDepotPanel(){
    const modal = await this.ModalController.create({
      component: DepotPanelComponent,
      cssClass: "atualizarCelularModal",
      componentProps: {
      },
    });

    return await modal.present();
  }
  async abrirHuntsPanel(){
    
    if(this.huntTimeLeft == null){
      const modal = await this.ModalController.create({
        component: HuntsPanelComponent,
        backdropDismiss: false,
        cssClass: "atualizarCelularModal",
        componentProps: {
        },
      });
      modal.onDidDismiss().then((data) => {
        if(data.data['timeLeft'] == 666.5){
          charJson[0].Skills.Level = data.data['huntLevel'];
          charJson[0].Skills.Experiencia = data.data['huntExpAtual'];
        }
        else{
          this.huntTimeLeft=data.data['timeLeft'];
          this.huntStamp = data.data['huntStamp'];
          this.huntCaveRatMortos = data.data['huntCaveRatMortos'];
          this.huntRatosMortos = data.data['huntRatosMortos'];
          this.huntGoldCoins = data.data['huntGoldCoins'];
          this.huntCheese = data.data['huntCheese'];
          this.huntExpAtual = data.data['huntExpAtual'];
          this.huntLevel = data.data['huntLevel'];
        }

      });
      return await modal.present();
    }
    else{
      const modal = await this.ModalController.create({
        component: HuntsPanelComponent,
        cssClass: "atualizarCelularModal",
        componentProps: {
          huntTimeLeft: this.huntTimeLeft,
          huntStamp: this.huntStamp,
          huntRatosMortos: this.huntRatosMortos,
          huntCaveRatMortos: this.huntCaveRatMortos,
          huntGoldCoins: this.huntGoldCoins,
          huntCheese: this.huntCheese,
          huntExpAtual: this.huntExpAtual,
          huntLevel:this.huntLevel
        },
      });
      modal.onDidDismiss().then((data) => {
        
        this.huntTimeLeft=data.data['timeLeft'];
        this.huntStamp = data.data['huntStamp']
        this.huntCaveRatMortos = data.data['huntCaveRatMortos'];
        this.huntRatosMortos = data.data['huntRatosMortos'];
        this.huntGoldCoins = data.data['huntGoldCoins'];
        this.huntCheese = data.data['huntCheese'];
        this.huntExpAtual = data.data['huntExpAtual'];
        this.huntLevel = data.data['huntLevel'];
      });
      return await modal.present();
    }


  }
}
