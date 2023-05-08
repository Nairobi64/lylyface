import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { LandingpageComponent } from "./landingpage/landingpage.component";
import { LylyListComponent } from "./lyly-list/lyly-list.component";
import { lylynice } from "./models/lyly-nice.models";
import { SingleLylyfaceComponent } from "./single-lylyface/single-lylyface.component";


const routes : Routes = [
    { path : 'lylynicex/:id', component : SingleLylyfaceComponent},
    {path : 'lylynicex', component : LylyListComponent},
     {path :'', component : LandingpageComponent}
];
@NgModule({
    imports: [
       
        RouterModule.forRoot(routes)
    ],
   exports: [
     RouterModule
   ]
})

export class AppRoutingModule {

}