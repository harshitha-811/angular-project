import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  newString:string;
  
  transform(value: string,): string {
    let values=[];
    for (let index = 0; index < value.length; index++) {
      values.push('*');
    }
    this.newString=values.join('');
    return this.newString;
  }

}
