import { Injectable } from '@angular/core';
import { API, MAPS_API_KEY } from '../config';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor() {}

  getUserQuery() {
    return {
      query: `users {
        address {
          city
          geo {
            lng
            lat
          }
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
      }`,
    };
  }
}
