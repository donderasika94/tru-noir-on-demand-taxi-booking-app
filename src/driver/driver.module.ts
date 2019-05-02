import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DriverLoginComponent } from './driver-login.component';
import { DriverRegistrationComponent } from './driver-registration.component';
import { DriverNotificationComponent } from './driver-notification.component';
import { DriverHomeComponent } from './driver-home.component';


@NgModule({
    declarations:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverNotificationComponent,
        DriverHomeComponent

    ],
    imports:[
        BrowserModule
    ],
    exports:[
        DriverLoginComponent,
        DriverRegistrationComponent,
        DriverNotificationComponent,
        DriverHomeComponent
    ],
    providers:[

    ]
})

export class DriverModule{

}