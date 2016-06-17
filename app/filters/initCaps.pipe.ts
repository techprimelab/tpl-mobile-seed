/**
 * Created by roshan on 17/6/16.
 */
import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'samplePipe'
})
export class samplePipe implements PipeTransform {
    transform(name:string,a:number): string {
        return name+"rk"+a;
    }
}




