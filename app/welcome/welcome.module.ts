import { NO_ERRORS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { WelcomeRoutingModule } from './welcome.routing';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { OnboardingModule } from '../onboarding/onboarding.module';

@NgModule({
    imports: [
        WelcomeRoutingModule,
        OnboardingModule
    ],
    declarations: [
        WelcomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class WelcomeModule { }
