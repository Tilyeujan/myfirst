import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa','mn']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|mn|fr|ur|es|it|fa/) ? browserLang : 'en');
  }

  switchLanguage(language:string){
    this.translate.use(language);
  }
}
