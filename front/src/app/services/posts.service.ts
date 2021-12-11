import { Injectable } from '@angular/core';
import axios from 'axios'
import { API } from '../config'

@Injectable({
  providedIn: 'root'
})

export class PostsService {

  constructor() { }

  getPostQuery(postId:any){
    return {
      variablesTypes: '$postId: String',
      variables: {postId: postId},
      query: `post(id: $postId) {
        id
        body
        title
        user {
          address {
            geo {
              lng
              lat
            }
            city
            street
            suite
            zipcode
          }
          company {
            bs
            catchPhrase
            name
          }
          email
          id
          name
          phone
          username
          website
        }
        comments {
          body
          email
          id
          name
          postId
        }
      }`
    }
  }

  getPostsQuery(userId:any=null){
    return {
      variablesTypes: '$userId: String',
      variables: {userId:userId},
      query: `posts(userId: $userId) {
        id
        body
        title
        userId
      }`
    }
  }

  createPostQuery(userId:String,title:String,body:String){
    return {
      variablesTypes: '$userId: String, $title: String, $body: String',
      variables: {
        userId: userId,
        title: title,
        body: body
      },
      query: `createPost(userId: $userId, title: $title, body: $body){
        id
        body
        title
        userId
      }`
    }
  }

  updatePostQuery(postId:String, userId:String,title:String,body:String){
    return {
      variablesTypes: '$postId: String!, $userId: String, $title: String, $body: String',
      variables: {
        postId: postId, 
        userId: userId,
        title: title,
        body: body
      },
      query: `updatePost(id: $postId, userId: $userId, title: $title, body: $body){
        id
        body
        title
        userId
      }`
    }
  }

  deletePostQuery(postId:String){
    return {
      variablesTypes: '$postId: String!',
      variables: {
        postId: postId, 
      },
      query: `deletePost(id: $postId){
        id
        body
        title
        userId
      }`
    }
  }
}
