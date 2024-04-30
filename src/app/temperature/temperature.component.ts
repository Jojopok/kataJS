import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature',
  standalone: true,
  imports: [],
  templateUrl: './temperature.component.html',
  styleUrl: './temperature.component.css',
})
export class TemperatureComponent {
  //  Objectif : crée une fonction de conversion de température universelle convertTemperature().
  // La fonction doit pouvoir convertir n'importe quelle température entre les unités Celsius, Fahrenheit, et Kelvin.
  // Cette fonction prendra 3 paramètres :
  // value : la température à convertir de type number
  // fromUnity : l'unité de température d'origine de type string
  // toUnity : l'unité de température cible de type string
  // La fonction doit retourner un résultat avec un maximum de deux décimales.

  // Pour info, voici Les formules de conversion entre les échelles de température sont les suivantes :
  // De Celsius à Fahrenheit : F=C×9/5+32
  // De Celsius à Kelvin : K=C+273.15
  // De Fahrenheit à Celsius : C=(F−32)×5/9
  // De Fahrenheit à Kelvin : K=(F+459.67)×5/9
  // De Kelvin à Celsius : C=K−273.15
  // De Kelvin à Fahrenheit : F=K×9/5−459.67

  convertTemperature(
    value: number,
    fromUnity: string,
    toUnity: string
  ): number {
    if (fromUnity === toUnity) {
      return value;
    }
    switch (fromUnity) {
      case 'Celsius':
        switch (toUnity) {
          case 'Fahrenheit':
            return parseFloat(((value * 9) / 5 + 32).toFixed(2));
          case 'Kelvin':
            return parseFloat((value + 273.15).toFixed(2));
          default:
            return 0;
        }
      case 'Fahrenheit':
        switch (toUnity) {
          case 'Celsius':
            return parseFloat((((value - 32) * 5) / 9).toFixed(2));
          case 'Kelvin':
            return parseFloat((((value + 459.67) * 5) / 9).toFixed(2));
          default:
            return 0;
        }
      case 'Kelvin':
        switch (toUnity) {
          case 'Celsius':
            return parseFloat((value - 273.15).toFixed(2));
          case 'Fahrenheit':
            return parseFloat(((value * 9) / 5 - 459.67).toFixed(2));
          default:
            return 0;
        }
      default:
        return 0;
    }
  }
}


// convertTemperature(value: number, fromUnity: string, toUnity: string): number {
//   if (fromUnity === toUnity) {
//     return value;
//   }
//   if (fromUnity === 'Celsius') {
//     if (toUnity === 'Fahrenheit') {
//       return value * 9 / 5 + 32;
//     } else if (toUnity === 'Kelvin') {
//       return value + 273.15;
//     }
//   } else if (fromUnity === 'Fahrenheit') {
//     if (toUnity === 'Celsius') {
//       return (value - 32) * 5 / 9;
//     } else if (toUnity === 'Kelvin') {
//       return (value + 459.67) * 5 / 9;
//     }
//   } else if (fromUnity === 'Kelvin') {
//     if (toUnity === 'Celsius') {
//       return value - 273.15;
//     } else if (toUnity === 'Fahrenheit') {
//       return value * 9 / 5 - 459.67;
//     }
//   }
//   return 0;
