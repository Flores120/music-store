import {Pipe, PipeTransform} from '@angular/core';
import { Album } from './album.model';


@Pipe({
  name: "filter",
})

export class FilterPipe implements PipeTransform {
  transform(input: Album[], desiredFilter) {
      var output: Album[] = [];
      if(desiredFilter === "All"){
        return input;
      }
     else if(desiredFilter === "Country") {
      for (var i = 0; i < input.length; i++){
        if(input[i].genre === "Country"){
          output.push(input[i]);
      }
    }
    return output;
  }
   else if(desiredFilter === "Rock") {
    for (var i = 0; i < input.length; i++){
      if(input[i].genre === "Rock"){
        output.push(input[i]);
    }
}
    return output;
  }
    else if(desiredFilter === "Rap") {
     for (var i = 0; i < input.length; i++){
       if(input[i].genre === "Rap"){
         output.push(input[i]);
     }
    }
    return output;
  }
}
}
