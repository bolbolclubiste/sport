import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch:string): any {
    let voyels = ["a","e","i","u","y", "o"]
    let result = "" ;
    for (let i = 0; i < ch.length; i++) {
      let intermdiate= ch[i];
      for (let j=0; j < voyels.length ; j++) {
        if (voyels[j] == intermdiate) {
          intermdiate = "*";
          break;
        }
      }
      result += intermdiate;
    }



    return result;
  }

}
