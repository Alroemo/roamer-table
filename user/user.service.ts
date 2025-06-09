import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { readFileSync } from 'fs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private jsonUrl = readFileSync('assets/email-list.json','utf8');

  constructor() {}

  getUsers(): User[] {
    let users: User[] = JSON.parse(this.jsonUrl)
    return users;
  }
}