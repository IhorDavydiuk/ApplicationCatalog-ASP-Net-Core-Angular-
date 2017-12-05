import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
//import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
//import { CounterComponent } from './components/counter/counter.component';
import { EditingPanelComponent } from './components/editing-panel/editing-panel.component';
/*import { PurchaseComponent } from './components/purchase/purchase.component'*/;
import { ListApplicationComponent } from './components/list-application/list-application.component';
import { ApplicationService } from './service/application.service';
import { DropdownComponent } from './components/dropdown/dropdown.component';



@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        //CounterComponent,
        //FetchDataComponent,
        HomeComponent,
        EditingPanelComponent,
        //PurchaseComponent,
        ListApplicationComponent,
        DropdownComponent
    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            //{ path: 'counter', component: CounterComponent },
            //{ path: 'fetch-data', component: FetchDataComponent },
            { path: 'editing-panel', component: EditingPanelComponent },
            //{ path: 'purchase', component: PurchaseComponent },
            { path: 'list-application', component: ListApplicationComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],
    providers: [ApplicationService]
})
export class AppModuleShared {
}
