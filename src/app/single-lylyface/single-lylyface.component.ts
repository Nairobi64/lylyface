import { Component ,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lylynice } from '../models/lyly-nice.models';
import { lylyNiceService } from '../services/lyly-nice.service';
@Component({
  selector: 'app-single-lylyface',
  templateUrl: './single-lylyface.component.html',
  styleUrls: ['./single-lylyface.component.scss']
})
export class SingleLylyfaceComponent implements OnInit {
   lylynice! : lylynice;
  textBoutton!: string;
  
  constructor( private lylyNiceService: lylyNiceService ,
               private route : ActivatedRoute) { }
  
  ngOnInit(){
    
    this.textBoutton = "like";
    const likeId = +this.route.snapshot.params['id'];
    this.lylynice = this.lylyNiceService.getAllLylyNiceById(likeId);

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
}
