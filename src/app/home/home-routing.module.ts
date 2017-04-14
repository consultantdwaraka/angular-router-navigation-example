import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { HomeComponent } from './home.component';
import { PrimaryComponent } from './primary.component';
import { SuccessComponent } from './success.component';
import { HomeDefaultComponent } from './home-default.component';

const homeRoutes:Routes = [{path:'home', component:HomeComponent, children:[ {path:'', component: HomeDefaultComponent},
                                                                             {path:'primary', component: PrimaryComponent},
                                                                             {path:'success', component: SuccessComponent}
                                                                           ]
                           },
                           {path:'signOut', redirectTo:"/login" },
                          ];
@NgModule({
    imports:[RouterModule.forChild(homeRoutes)],
    exports:[RouterModule]
})
export class HomeRoutingModule {
}