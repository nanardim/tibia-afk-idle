import { Component, OnInit } from '@angular/core';
import json from '../../arquivos-util/tabela-level.json';
import charJson from '../../arquivos-util/char.json';
@Component({
  selector: 'app-skills-panel',
  templateUrl: './skills-panel.component.html',
  styleUrls: ['./skills-panel.component.scss'],
})
export class SkillsPanelComponent  implements OnInit {
  public expLevel: number = 0;
  public expLevelFormatado: string = '';
  public level: number = 0;
  public expAtual: number = 0;
  public expAtualFormatado: string = '';
  public vocation: string = '';
  public residence: string = '';
  public charName: string = '';
  public fist: number = 0;
  public club: number = 0;
  public sword: number = 0;
  public axe: number = 0;
  public distance: number = 0;
  public shielding: number = 0;
  public fistPercentage: string = '';
  public clubPercentage: string = '';
  public swordPercentage: string = '';
  public axePercentage: string = '';
  public distancePercentage: string = '';
  public shieldingPercentage: string = '';
  public experienciaPercentage: string = '';
  constructor() { }

  ngOnInit() {
    this.charName = charJson[0].Nome
    this.level = charJson[0].Skills.Level
    this.vocation = charJson[0].Vocation
    this.residence = charJson[0].Residence
    this.expAtual = charJson[0].Skills.Experiencia
    this.expAtualFormatado = new Intl.NumberFormat('en', { }).format(
      charJson[0].Skills.Experiencia,
    )
    this.expLevel = Number.parseInt(json.filter(c => c.Level == this.level.toString())[0].Experiencia)
    this.expLevelFormatado = new Intl.NumberFormat('en', { }).format(
      this.expLevel,
    )
    this.sword = Math.floor(charJson[0].Skills.Sword/100)
    this.fist = Math.floor(charJson[0].Skills.Fist/100)
    this.club = Math.floor(charJson[0].Skills.Club/100)
    this.distance = Math.floor(charJson[0].Skills.Distance/100)
    this.axe = Math.floor(charJson[0].Skills.Axe/100)
    this.shielding = Math.floor(charJson[0].Skills.Shielding/100)
    this.swordPercentage = charJson[0].Skills.Sword%100 + "%"
    this.fistPercentage = charJson[0].Skills.Fist%100 + "%"
    this.clubPercentage = charJson[0].Skills.Club%100 + "%"
    this.distancePercentage = charJson[0].Skills.Distance%100 + "%"
    this.axePercentage = charJson[0].Skills.Axe%100 + "%"
    this.shieldingPercentage = charJson[0].Skills.Shielding%100 + "%"
    this.experienciaPercentage = ((100*charJson[0].Skills.Experiencia)/this.expLevel) + "%"


    
  }

}
