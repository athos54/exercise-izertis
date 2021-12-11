import { Injectable } from '@angular/core';
import { API, MAPS_API_KEY } from '../config'
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

  getUser(userId:String){
    return this.getUsers().then(users=>{
      const user = users.filter((el:any)=>el.id===userId)[0]
      const auxUser = {...user}
      auxUser.googleMapsUrl = `https://www.google.com/maps/embed/v1/view?key=${MAPS_API_KEY}&center=${auxUser.address.geo.lat},${auxUser.address.geo.lng}&zoom=13`
      console.log('auxUser',auxUser);
      return auxUser
    })
  }
}
