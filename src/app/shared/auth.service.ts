import { Injectable } from '@angular/core';
import { AppSettings } from '../config/app.config';
export interface UserData {
    Id?: number;
    UserName: string;
    FirstName?: string;
    LastName?: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private userData: any;
    constructor() {
        if (localStorage.getItem(AppSettings.localStorage_keys.userData)) {
            this.userData = JSON.parse(localStorage.getItem(AppSettings.localStorage_keys.userData) || "");
        }
    }
    static isAuthenticated(): boolean {
        // @todo ===> check token expire time here to determine if token is expired or not <===
        return !!localStorage.getItem(AppSettings.localStorage_keys.token);
    }
    getUserData() {
        this.userData = JSON.parse(localStorage.getItem(AppSettings.localStorage_keys.userData) || "");
        return this.userData;
    }
    setLocalStorage(key: string, value: object): void {
        localStorage.setItem(key, JSON.stringify(value));
    }
    logout() {
        localStorage.removeItem(AppSettings.localStorage_keys.token);
        localStorage.clear();
    }
}