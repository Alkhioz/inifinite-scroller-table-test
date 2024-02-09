import { Injectable } from '@nestjs/common';
import * as DATA from './data/data.json'
@Injectable()
export class AppService {
  async getHello(page:number, maxnumber:number): Promise<any> {
    const min = (page - 1) * (+maxnumber);
    const max = min + (+maxnumber);
    const data:any = DATA;
    return data.slice(min, max);
  }
}
