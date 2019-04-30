import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';


@NgModule({
    declarations:[
        DriverLoginComponent,
        DriverRegistrationComponent

    ],
    imports:[
        BrowserModule
    ],
    exports:[
        DriverLoginComponent,
        DriverRegistrationComponent
    ],
    providers:[

    ]
})

export class DriverModule{

}