import { Component, OnInit } from '@angular/core';
import loot from '../../arquivos-util/loot.json';
import { LootModel } from '../models/lootModel';
import charJson from '../../arquivos-util/char.json';

@Component({
  selector: 'app-backpack-panel',
  templateUrl: './backpack-panel.component.html',
  styleUrls: ['./backpack-panel.component.scss'],
})
export class BackpackPanelComponent  implements OnInit {

  constructor() { }
  public empty: boolean = true;
  public slot1: LootModel = new LootModel();
  public slot2: LootModel = new LootModel();
  public slot3: LootModel = new LootModel();
  public slot4: LootModel = new LootModel();
  public slot5: LootModel = new LootModel();
  public slot6: LootModel = new LootModel();
  public slot7: LootModel = new LootModel();
  public slot8: LootModel = new LootModel();
  public slot9: LootModel = new LootModel();
  public slot10: LootModel = new LootModel();
  public slot11: LootModel = new LootModel();
  public slot12: LootModel = new LootModel();
  public slot13: LootModel = new LootModel();
  public slot14: LootModel = new LootModel();
  public slot15: LootModel = new LootModel();
  public slot16: LootModel = new LootModel();
  public slot17: LootModel = new LootModel();
  public slot18: LootModel = new LootModel();
  public slot19: LootModel = new LootModel();
  public slot20: LootModel = new LootModel();
  ngOnInit() {
    if(charJson[0].Backpack.Slot1 != "0"){
      let itemId = charJson[0].Backpack.Slot1.split(":")[0]
      let qtd = charJson[0].Backpack.Slot1.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot1.Img = item.Img;
      this.slot1.Name = item.Nome;
      this.slot1.Rarity = "outset 4px " + item.Rarity;
      this.slot1.Armor = Number.parseInt(item.Armor);
      this.slot1.Atk = Number.parseInt(item.Atk);
      this.slot1.Def = Number.parseInt(item.Def);
      this.slot1.ID = Number.parseInt(item.ID);
      this.slot1.Price = Number.parseInt(item.Price);
      this.slot1.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot2 != "0"){
      let itemId = charJson[0].Backpack.Slot2.split(":")[0]
      let qtd = charJson[0].Backpack.Slot2.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot2.Img = item.Img;
      this.slot2.Name = item.Nome;
      this.slot2.Rarity = "outset 4px " + item.Rarity;
      this.slot2.Armor = Number.parseInt(item.Armor);
      this.slot2.Atk = Number.parseInt(item.Atk);
      this.slot2.Def = Number.parseInt(item.Def);
      this.slot2.ID = Number.parseInt(item.ID);
      this.slot2.Price = Number.parseInt(item.Price);
      this.slot2.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot3 != "0"){
      let itemId = charJson[0].Backpack.Slot3.split(":")[0]
      let qtd = charJson[0].Backpack.Slot3.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot3.Img = item.Img;
      this.slot3.Name = item.Nome;
      this.slot3.Rarity = "outset 4px " + item.Rarity;
      this.slot3.Armor = Number.parseInt(item.Armor);
      this.slot3.Atk = Number.parseInt(item.Atk);
      this.slot3.Def = Number.parseInt(item.Def);
      this.slot3.ID = Number.parseInt(item.ID);
      this.slot3.Price = Number.parseInt(item.Price);
      this.slot3.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot4 != "0"){
      let itemId = charJson[0].Backpack.Slot4.split(":")[0]
      let qtd = charJson[0].Backpack.Slot4.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot4.Img = item.Img;
      this.slot4.Name = item.Nome;
      this.slot4.Rarity = "outset 4px " + item.Rarity;
      this.slot4.Armor = Number.parseInt(item.Armor);
      this.slot4.Atk = Number.parseInt(item.Atk);
      this.slot4.Def = Number.parseInt(item.Def);
      this.slot4.ID = Number.parseInt(item.ID);
      this.slot4.Price = Number.parseInt(item.Price);
      this.slot4.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot5 != "0"){
      let itemId = charJson[0].Backpack.Slot5.split(":")[0]
      let qtd = charJson[0].Backpack.Slot5.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot5.Img = item.Img;
      this.slot5.Name = item.Nome;
      this.slot5.Rarity = "outset 4px " + item.Rarity;
      this.slot5.Armor = Number.parseInt(item.Armor);
      this.slot5.Atk = Number.parseInt(item.Atk);
      this.slot5.Def = Number.parseInt(item.Def);
      this.slot5.ID = Number.parseInt(item.ID);
      this.slot5.Price = Number.parseInt(item.Price);
      this.slot5.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot6 != "0"){
      let itemId = charJson[0].Backpack.Slot1.split(":")[0]
      let qtd = charJson[0].Backpack.Slot1.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot6.Img = item.Img;
      this.slot6.Name = item.Nome;
      this.slot6.Rarity = "outset 4px " + item.Rarity;
      this.slot6.Armor = Number.parseInt(item.Armor);
      this.slot6.Atk = Number.parseInt(item.Atk);
      this.slot6.Def = Number.parseInt(item.Def);
      this.slot6.ID = Number.parseInt(item.ID);
      this.slot6.Price = Number.parseInt(item.Price);
      this.slot6.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot7 != "0"){
      let itemId = charJson[0].Backpack.Slot7.split(":")[0]
      let qtd = charJson[0].Backpack.Slot7.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot7.Img = item.Img;
      this.slot7.Name = item.Nome;
      this.slot7.Rarity = "outset 4px " + item.Rarity;
      this.slot7.Armor = Number.parseInt(item.Armor);
      this.slot7.Atk = Number.parseInt(item.Atk);
      this.slot7.Def = Number.parseInt(item.Def);
      this.slot7.ID = Number.parseInt(item.ID);
      this.slot7.Price = Number.parseInt(item.Price);
      this.slot7.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot8 != "0"){
      let itemId = charJson[0].Backpack.Slot8.split(":")[0]
      let qtd = charJson[0].Backpack.Slot8.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot8.Img = item.Img;
      this.slot8.Name = item.Nome;
      this.slot8.Rarity = "outset 4px " + item.Rarity;
      this.slot8.Armor = Number.parseInt(item.Armor);
      this.slot8.Atk = Number.parseInt(item.Atk);
      this.slot8.Def = Number.parseInt(item.Def);
      this.slot8.ID = Number.parseInt(item.ID);
      this.slot8.Price = Number.parseInt(item.Price);
      this.slot8.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot9 != "0"){
      let itemId = charJson[0].Backpack.Slot9.split(":")[0]
      let qtd = charJson[0].Backpack.Slot9.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot9.Img = item.Img;
      this.slot9.Name = item.Nome;
      this.slot9.Rarity = "outset 4px " + item.Rarity;
      this.slot9.Armor = Number.parseInt(item.Armor);
      this.slot9.Atk = Number.parseInt(item.Atk);
      this.slot9.Def = Number.parseInt(item.Def);
      this.slot9.ID = Number.parseInt(item.ID);
      this.slot9.Price = Number.parseInt(item.Price);
      this.slot9.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot10 != "0"){
      let itemId = charJson[0].Backpack.Slot10.split(":")[0]
      let qtd = charJson[0].Backpack.Slot10.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot10.Img = item.Img;
      this.slot10.Name = item.Nome;
      this.slot10.Rarity = "outset 4px " + item.Rarity;
      this.slot10.Armor = Number.parseInt(item.Armor);
      this.slot10.Atk = Number.parseInt(item.Atk);
      this.slot10.Def = Number.parseInt(item.Def);
      this.slot10.ID = Number.parseInt(item.ID);
      this.slot10.Price = Number.parseInt(item.Price);
      this.slot10.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot11 != "0"){
      let itemId = charJson[0].Backpack.Slot11.split(":")[0]
      let qtd = charJson[0].Backpack.Slot11.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot11.Img = item.Img;
      this.slot11.Name = item.Nome;
      this.slot11.Rarity = "outset 4px " + item.Rarity;
      this.slot11.Armor = Number.parseInt(item.Armor);
      this.slot11.Atk = Number.parseInt(item.Atk);
      this.slot11.Def = Number.parseInt(item.Def);
      this.slot11.ID = Number.parseInt(item.ID);
      this.slot11.Price = Number.parseInt(item.Price);
      this.slot11.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot12 != "0"){
      let itemId = charJson[0].Backpack.Slot12.split(":")[0]
      let qtd = charJson[0].Backpack.Slot12.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot12.Img = item.Img;
      this.slot12.Name = item.Nome;
      this.slot12.Rarity = "outset 4px " + item.Rarity;
      this.slot12.Armor = Number.parseInt(item.Armor);
      this.slot12.Atk = Number.parseInt(item.Atk);
      this.slot12.Def = Number.parseInt(item.Def);
      this.slot12.ID = Number.parseInt(item.ID);
      this.slot12.Price = Number.parseInt(item.Price);
      this.slot12.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot13 != "0"){
      let itemId = charJson[0].Backpack.Slot13.split(":")[0]
      let qtd = charJson[0].Backpack.Slot13.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot13.Img = item.Img;
      this.slot13.Name = item.Nome;
      this.slot13.Rarity = "outset 4px " + item.Rarity;
      this.slot13.Armor = Number.parseInt(item.Armor);
      this.slot13.Atk = Number.parseInt(item.Atk);
      this.slot13.Def = Number.parseInt(item.Def);
      this.slot13.ID = Number.parseInt(item.ID);
      this.slot13.Price = Number.parseInt(item.Price);
      this.slot13.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot14 != "0"){
      let itemId = charJson[0].Backpack.Slot14.split(":")[0]
      let qtd = charJson[0].Backpack.Slot14.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot14.Img = item.Img;
      this.slot14.Name = item.Nome;
      this.slot14.Rarity = "outset 4px " + item.Rarity;
      this.slot14.Armor = Number.parseInt(item.Armor);
      this.slot14.Atk = Number.parseInt(item.Atk);
      this.slot14.Def = Number.parseInt(item.Def);
      this.slot14.ID = Number.parseInt(item.ID);
      this.slot14.Price = Number.parseInt(item.Price);
      this.slot14.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot15 != "0"){
      let itemId = charJson[0].Backpack.Slot15.split(":")[0]
      let qtd = charJson[0].Backpack.Slot15.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot15.Img = item.Img;
      this.slot15.Name = item.Nome;
      this.slot15.Rarity = "outset 4px " + item.Rarity;
      this.slot15.Armor = Number.parseInt(item.Armor);
      this.slot15.Atk = Number.parseInt(item.Atk);
      this.slot15.Def = Number.parseInt(item.Def);
      this.slot15.ID = Number.parseInt(item.ID);
      this.slot15.Price = Number.parseInt(item.Price);
      this.slot15.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot16 != "0"){
      let itemId = charJson[0].Backpack.Slot16.split(":")[0]
      let qtd = charJson[0].Backpack.Slot16.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot16.Img = item.Img;
      this.slot16.Name = item.Nome;
      this.slot16.Rarity = "outset 4px " + item.Rarity;
      this.slot16.Armor = Number.parseInt(item.Armor);
      this.slot16.Atk = Number.parseInt(item.Atk);
      this.slot16.Def = Number.parseInt(item.Def);
      this.slot16.ID = Number.parseInt(item.ID);
      this.slot16.Price = Number.parseInt(item.Price);
      this.slot16.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot17 != "0"){
      let itemId = charJson[0].Backpack.Slot17.split(":")[0]
      let qtd = charJson[0].Backpack.Slot17.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot17.Img = item.Img;
      this.slot17.Name = item.Nome;
      this.slot17.Rarity = "outset 4px " + item.Rarity;
      this.slot17.Armor = Number.parseInt(item.Armor);
      this.slot17.Atk = Number.parseInt(item.Atk);
      this.slot17.Def = Number.parseInt(item.Def);
      this.slot17.ID = Number.parseInt(item.ID);
      this.slot17.Price = Number.parseInt(item.Price);
      this.slot17.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot18 != "0"){
      let itemId = charJson[0].Backpack.Slot18.split(":")[0]
      let qtd = charJson[0].Backpack.Slot18.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot18.Img = item.Img;
      this.slot18.Name = item.Nome;
      this.slot18.Rarity = "outset 4px " + item.Rarity;
      this.slot18.Armor = Number.parseInt(item.Armor);
      this.slot18.Atk = Number.parseInt(item.Atk);
      this.slot18.Def = Number.parseInt(item.Def);
      this.slot18.ID = Number.parseInt(item.ID);
      this.slot18.Price = Number.parseInt(item.Price);
      this.slot18.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot19 != "0"){
      let itemId = charJson[0].Backpack.Slot19.split(":")[0]
      let qtd = charJson[0].Backpack.Slot19.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot19.Img = item.Img;
      this.slot19.Name = item.Nome;
      this.slot19.Rarity = "outset 4px " + item.Rarity;
      this.slot19.Armor = Number.parseInt(item.Armor);
      this.slot19.Atk = Number.parseInt(item.Atk);
      this.slot19.Def = Number.parseInt(item.Def);
      this.slot19.ID = Number.parseInt(item.ID);
      this.slot19.Price = Number.parseInt(item.Price);
      this.slot19.Amount = Number.parseInt(qtd)
    }
    if(charJson[0].Backpack.Slot20 != "0"){
      let itemId = charJson[0].Backpack.Slot20.split(":")[0]
      let qtd = charJson[0].Backpack.Slot20.split(":")[1]
      let item = loot.filter(c => c.ID == itemId)[0]
      this.slot20.Img = item.Img;
      this.slot20.Name = item.Nome;
      this.slot20.Rarity = "outset 4px " + item.Rarity;
      this.slot20.Armor = Number.parseInt(item.Armor);
      this.slot20.Atk = Number.parseInt(item.Atk);
      this.slot20.Def = Number.parseInt(item.Def);
      this.slot20.ID = Number.parseInt(item.ID);
      this.slot20.Price = Number.parseInt(item.Price);
      this.slot20.Amount = Number.parseInt(qtd)
    }

  }

}
