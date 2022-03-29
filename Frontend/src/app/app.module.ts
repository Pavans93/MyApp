import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthGuard } from './core/guard/auth.guard';
import { CustomHttpInterceptorProvider } from './core/shared/http-interceptor/custom-http/customHttp.interceptor';
import { RetryInterceptorProvider } from './core/shared/http-interceptor/retry/retry.interceptor';

import { appRoutingModule } from './app.routing';

import { NgxSpinnerModule } from "ngx-spinner";
import { ToastrModule } from 'ngx-toastr';

import { WidgetsModule } from './core/shared/widgets/widgets.module';
import { WidgetServiceModule } from './core/shared/widgets/widgets-service.module';

import { HeaderComponent } from './pages/common/header/header.component';
import { FooterComponent } from './pages/common/footer/footer.component';
import { LeftNavBarComponent } from './pages/common/left-nav-bar/left-nav-bar.component';
import { RightSideBarComponent } from './pages/common/right-side-bar/right-side-bar.component';
import { ContainerComponent } from './pages/container/container.component';
import { PageNotFoundComponent } from './pages/common/page-not-found/page-not-found.component';
import { LogoComponent } from './pages/common/logo/logo.component';
import { AlertMessageComponent } from './core/shared/widgets/alert-message/alert-message.component';
import { AlertMessageService } from './core/shared/widgets/alert-message/alert-message.service';
import { EncryptDecryptService } from './core/shared/service/encrypt-decrypt.service';
import { FacebookLoginProvider, GoogleLoginProvider, SocialLoginModule } from 'angularx-social-login';

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent,
        HeaderComponent,
        FooterComponent,
        LeftNavBarComponent,
        RightSideBarComponent,
        ContainerComponent,
        LogoComponent,
        AlertMessageComponent,
    ],

    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        WidgetsModule,
        WidgetServiceModule,
        SocialLoginModule,
        ToastrModule.forRoot({
            closeButton: true,
            timeOut: 8000, // 8 seconds
            progressBar: true,
            positionClass :'toast-top-right'
          }),
    ],

    providers: [
        AuthGuard,
        CustomHttpInterceptorProvider,
        RetryInterceptorProvider,
        AlertMessageService,
        EncryptDecryptService,
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: true, //keeps the user signed in
                providers: [
                    {
                        id: GoogleLoginProvider.PROVIDER_ID,
                        provider: new GoogleLoginProvider('747874110030-qtahv0ljskechp5iecu8660bdmr4qhrf.apps.googleusercontent.com') // your client id
                    },
                    {
                        id: FacebookLoginProvider.PROVIDER_ID,
                        provider: new FacebookLoginProvider('48b77ace8aa612658e38060908de43ed') // your client id
                    }
                ]
            }
        }
    ],

    bootstrap: [AppComponent],

    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})

export class AppModule { }