import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lylynice } from '../models/lyly-nice.models';
import { lylyNiceService } from '../services/lyly-nice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lyly-nice',
  templateUrl: './lyly-nice.component.html',
  styleUrls: ['./lyly-nice.component.scss']
})
export class LylyNiceComponent implements OnInit {
   lylynice! : lylynice;
textBoutton!: string;

constructor( private lylyNiceService: lylyNiceService,
             private router : Router ) { }

ngOnInit(){
  
  this.textBoutton = "like";
 

 }

 onlike(){
   if(this.textBoutton === "like"){
    this.lylyNiceService.likelylyniceById(this.lylynice.id, 'like');
    this.textBoutton = "liked";
   }else{
    this.lylyNiceService.likelylyniceById(this.lylynice.id, 'liked');
    this.textBoutton = "like";
   }
 }
  OnViewlylynice(){
    this.router.navigateByUrl(`lylynicex/${this.lylynice.id}`);
  }
  

}
