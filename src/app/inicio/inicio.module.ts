import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InicioPage } from './inicio.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { InicioPageRoutingModule } from './inicio-routing.module';
import { SkillsPanelComponent } from './skills-panel/skills-panel.component';
import { CharacterPanelComponent } from './character-panel/character-panel.component';
import { EquipmentPanelComponent } from './equipment-panel/equipment-panel.component';
import { BackpackPanelComponent } from './backpack-panel/backpack-panel.component';
import { DepotPanelComponent } from './depot-panel/depot-panel.component';
import { HuntsPanelComponent } from './hunts-panel/hunts-panel.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    InicioPageRoutingModule
  ],
  declarations: [InicioPage, SkillsPanelComponent, CharacterPanelComponent, EquipmentPanelComponent, BackpackPanelComponent, DepotPanelComponent, HuntsPanelComponent]
})
export class Tab1PageModule {}
