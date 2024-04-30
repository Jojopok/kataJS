import {Component} from '@angular/core';

@Component({
  selector: 'app-compatibilite',
  standalone: true,
  imports: [],
  templateUrl: './compatibilite.component.html',
  styleUrl: './compatibilite.component.css'
})
export class CompatibiliteComponent {

  patisseriesA   = ["Éclair", "Tarte Tatin", "Macaron", "Opéra", "Mille-feuille", "Paris-Brest", "Madeleine", "Financier", "Chouquette", "Cannelé"];
  patisseriesB  = ["Macaron", "Cupcake", "Éclair", "Croissant", "Mille-feuille", "Pain au chocolat", "Financier", "Tarte aux pommes", "Cannelé", "Charlotte"];
  compteur = 0;

  comparePatisseries(): number {
    this.compteur = 0;
    for (let i = 0; i < this.patisseriesA.length; i++) {
      for (let j = 0; j < this.patisseriesB.length; j++) {
        if (this.patisseriesA[i] === this.patisseriesB[j]) {
          this.compteur++;
        }
        }
      }
    console.log(this.compteur);
    return this.compteur;
    }
}
