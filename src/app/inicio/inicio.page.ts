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


@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.page.html',
  styleUrls: ['inicio.page.scss']
})
export class InicioPage {

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
    const modal = await this.ModalController.create({
      component: HuntsPanelComponent,
      cssClass: "atualizarCelularModal",
      componentProps: {
      },
    });

    return await modal.present();
  }
}
