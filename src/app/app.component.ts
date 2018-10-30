import { Component } from '@angular/core';
import {
  SocialAuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'ng-social';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular7SocailLogin';
  constructor(private socialAuthService: SocialAuthService) { }

  public socialLogin(platform: string) {
    let socialPlatformProvider;

    if (platform === 'facebook') {
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    } else if (platform === 'google') {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then((userData) => {
      console.log(platform + ' login in data : ', userData);
    });

  }



}
