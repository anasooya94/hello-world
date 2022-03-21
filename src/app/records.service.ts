import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {
  
  info_emp1 : string[] = ["Adam John","EMP0001","ad@abc.com"]
  info_emp2 : string[] = ["Tom John","EMP0002","tom@abc.com"]
  info_emp3 : string[] = ["Smith Will","EMP0003","smith@abc.com"]

  get_info_emp1(): string[]{
    return this.info_emp1;
  }
  get_info_emp2(): string[]{
    return this.info_emp2;
  }
  get_info_emp3(): string[]{
    return this.info_emp3;
  }
  constructor() { }
}
