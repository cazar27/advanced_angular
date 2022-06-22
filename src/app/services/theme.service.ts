import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private linkTheme = document.querySelector('#theme');
  private theme: string;

  constructor() {
    this.theme = localStorage.getItem('theme') || 'default';
    const url = './assets/css/colors/'+ this.theme + '.css';
    this.linkTheme?.setAttribute('href',url);
  }

  public changeTheme(theme: string) {
    let url = `./assets/css/colors/${ theme }.css`;
    this.linkTheme?.setAttribute('href',url);
    localStorage.setItem('theme',theme);
  }

  public getTheme() {
    return this.theme;
  }

}
