import { Component, OnInit } from '@angular/core';
import { lylynice } from '../models/lyly-nice.models';
import { lylyNiceService } from '../services/lyly-nice.service';

@Component({
  selector: 'app-lyly-list',
  templateUrl: './lyly-list.component.html',
  styleUrls: ['./lyly-list.component.scss']
})
export class LylyListComponent implements OnInit {
   lylynicex!: lylynice[];

  constructor( private lylyNiceService: lylyNiceService ) {}

  ngOnInit(): void {
    this.lylynicex = this.lylyNiceService.getAlllylynicex();
  }
      
}
