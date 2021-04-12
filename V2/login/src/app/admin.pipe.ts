import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'admin'
})
export class AdminPipe implements PipeTransform {

  transform(n : string) {
    var xyz = new String("open");
    if(n == xyz){
        var final = new String("review");
        return final;
    }else if(n == new String("ok")){
        var final = new String("review");
        return final;
    }else{
        var final = new String("finalized");
        return final;
    }
}

}
