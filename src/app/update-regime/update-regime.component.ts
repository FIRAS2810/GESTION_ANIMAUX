import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Regime } from '../model/regime.model';

@Component({
  selector: 'app-update-regime',
  templateUrl: './update-regime.component.html',
  styleUrl: './update-regime.component.css'
})
export class UpdateRegimeComponent {

@Input()
regime!:Regime;

@Output()
RegimeUpdated = new EventEmitter<Regime>();

@Input()
ajout!:boolean;

saveRegime()
{
  this.RegimeUpdated.emit(this.regime);
}



}
