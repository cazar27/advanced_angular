import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';

@Component({
  selector: 'app-acount-settings',
  templateUrl: './acount-settings.component.html',
  styleUrls: ['./acount-settings.component.scss']
})
export class AcountSettingsComponent implements OnInit {

  public linkTheme = document.querySelector('#theme');
  public theme:string = 'default';

  constructor( private themeServ :ThemeService) {
    this.theme = this.themeServ.getTheme();
  }

  ngOnInit(): void {
    this.changeTheme(this.theme);
  }

  checkCurrentTheme() {
    const options = document.querySelectorAll('#themecolors li .selector');
    options.forEach(selector => {
      if(this.theme == selector.getAttribute('data-theme')) {
        selector.classList.add('working');
      } else {
        selector.classList.remove('working');
      }
    });
  }

  changeTheme(theme: string) {
    this.theme = theme;
    this.themeServ.changeTheme(this.theme);
    this.checkCurrentTheme();
  }
}
