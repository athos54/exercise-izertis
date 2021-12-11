import { Injectable } from '@angular/core';
import axios from 'axios'
import { API } from '../config'

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor() { }

  getPost(id:String){
    return axios.get(`${API}/posts/${id}`).then(res=>{
      return res.data
    })
  }

  getPosts(params:any = {}){
    return axios.get(`${API}/posts`,{params:params}).then(res=>{
      return res.data
    })
  }

  createPost(userId:String,title:String,body:String){
    return axios.post(`${API}/posts`,{
      userId,
      title,
      body
    })
  }

  //voy por aqui athos
  updatePost(postId:String, userId:String,title:String,body:String){
    return axios.post(`${API}/posts`,{
      id: postId,
      userId,
      title,
      body
    })
  }

  deletePost(postId:String){
    return axios.delete(`${API}/posts/${postId}`)
  }
}
