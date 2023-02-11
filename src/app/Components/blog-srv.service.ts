import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogSRVService {

  storeUserData(formData: any) {
    let userDataArray = [];
    if (localStorage.getItem('userDataArray')) {
      userDataArray = JSON.parse(localStorage.getItem('userDataArray'));
    }
    userDataArray.push(formData);
    localStorage.setItem('userDataArray', JSON.stringify(userDataArray));
  }

  login(email: string, password: string): boolean {
    let userDataArray = [];
    if (localStorage.getItem('userDataArray')) {
      userDataArray = JSON.parse(localStorage.getItem('userDataArray'));
    }
    let isUserFound = false;
    for (let i = 0; i < userDataArray.length; i++) {
      const userData = userDataArray[i];
      if (userData.email === email && userData.password === password) {
        isUserFound = true;
        break;
      }
    }
    return isUserFound;
  }

}
