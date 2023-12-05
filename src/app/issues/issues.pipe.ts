import { Pipe, PipeTransform } from '@angular/core';
import { Issue } from './issues';

@Pipe({
  name: 'issue'
})
export class IssuePipe implements PipeTransform {
  transform(input: Issue[], n: string): Issue[] {
    if(n=="")
    {
      return input;
    }
    let output: Issue[] = [];
    let len = n.length;
    let s1: string = '';
    s1 = n;
    console.log("s1 is "+s1);
    for (let i: number = 0; i < input.length; i++) {
      let s2: any = "";
      s2=input[i].descreption;

      console.log("s2 is "+s2);
      let s3: string = s2.substring(0, len);
      if (s1 == s3.toLowerCase()) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
