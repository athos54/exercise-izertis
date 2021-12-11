import { Injectable } from '@angular/core';
import axios from 'axios'
import { API } from '../config'

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor() { }

  execQuery(queries: any){
    return this.exec(queries,'query Query')
  }

  execMutation(queries: any){
    return this.exec(queries,'mutation Mutation')
  }

  private exec(queries: any, type: string){
    const variablesArr = queries.map((el:any)=>el.variables)
    const variablesData = variablesArr.reduce((prev:any,curr:any)=>{
      return {
        ...prev,
        ...curr
      }
    },{})

    const variablesTypes = queries.map((el:any)=>el.variablesTypes).join(', ')

    const query = queries.map((el:any)=> el.query).join('\n')

    return axios({
      url: API,
      method: 'post',
      data: {
        variables: variablesData,
        query: `${type}(${variablesTypes}) {
          ${query}
        }`
      }
    }).then((result) => {
      return result.data.data
    });
  }
}
