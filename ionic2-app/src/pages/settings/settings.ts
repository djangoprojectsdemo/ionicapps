import { Component } from '@angular/core';
import { Toggle } from 'ionic-angular';
import { SettingsService } from '../../services/settings';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(private settingsServices:SettingsService){

  }

  onToggle(toggle:Toggle){
   this.settingsServices.setBackground(toggle.checked);

  }
  checkAltBackground(){
   return this.settingsServices.isAltBackground();
 }
}
