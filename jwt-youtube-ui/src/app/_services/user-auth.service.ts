import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserAuthService {
  constructor() {}

  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    const rolesJson = localStorage.getItem('roles');
    if (rolesJson !== null) {
        return JSON.parse(rolesJson);
    } else {
        // Handle the case where 'roles' key is not found or is null
        return [];
    }
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }


  public getToken(): string | null {
    return localStorage.getItem('jwtToken');
}


  public clear() {
    localStorage.clear();
  }

  public isLoggedIn() {
    return this.getRoles() && this.getToken();
  }
}