import {Pipe, PipeTransform} from '@angular/core';
import { Album } from './album.model';


@Pipe({
  name: "filter",
  pure: false
})

export class FilterPipe implements PipeTransform {
  transform(input: Album[], desiredFilter) {
    var output: Album[] = [];
    if(desiredFilter === "Rock") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === false) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredFilter === "Rap") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].done === true) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
