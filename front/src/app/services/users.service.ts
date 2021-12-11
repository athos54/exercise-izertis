import { Injectable } from '@angular/core';
import { API } from '../config'
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(){
    return axios.get(`${API}/users`).then(res=>{
      return res.data
    })
  }
}
