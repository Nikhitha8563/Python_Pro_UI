import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'distance'
})
export class DistancePipe implements PipeTransform {
  
  transform(distance: number): String {
    //let floatDistance = parseFloat(distance);
    //distance = distance.toFixed();
    console.log('distance', distance);
    const _isNumeric = function (n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };

    if (distance && _isNumeric(distance)) {
      let thisDistance = '0';
      let unit = 'm';
      if (distance > 1000) {
        thisDistance = (distance / 1000).toFixed(1);
        unit = 'km';
      } else {
        thisDistance = Math.floor(distance).toString();
      }
      return thisDistance + unit;
    } else {
      return '?';
    }
  }

}
