import { Injectable } from "@angular/core";
import { lylynice } from "../models/lyly-nice.models";

@Injectable({
    providedIn: 'root'
})

export  class lylyNiceService {

   lylynicex : lylynice[] =  [
        {
          id: 1,
          title: 'Pain croissant',
          description: 'Le meilleur du petit dejeuné fait maison pain-croissant.',
          ImageUrl: 'assets/pain-croissant.jpg',
          createDate: new Date(),
          like: 200,
          Location : "Dakar"
        },
        {
          id: 2,
          title: 'Tiramissu',
          description: 'Hmm, que c\'est bon les recette de lyly',
          ImageUrl: 'assets/Tiramissu-verre.jpg',
          createDate: new Date(),
          like: 0
        },
        {
          id: 3,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          ImageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createDate: new Date(),
          like: 0
        },
        {
          id: 4,
          title: 'Archibald',
          description: 'Mon meilleur ami depuis tout petit !',
          ImageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createDate: new Date(),
          like: 0,
          Location : "Libreville"
        },
        {
          id: 5,
          title: 'Three Rock Mountain',
          description: 'Un endroit magnifique pour les randonnées.',
          ImageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
          createDate: new Date(),
          like: 0
        },
        {
          id: 6,
          title: 'Un bon repas',
          description: 'Mmmh que c\'est bon !',
          ImageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
          createDate: new Date(),
          like: 0
        }
      ];
     getAlllylynicex(): lylynice[] {
      return this.lylynicex;

     }

     getAllLylyNiceById(lylyniceId: number): lylynice{
      const lylynice = this.lylynicex.find(lylynice => lylynice.id === lylyniceId);
      if(!lylynice){
        throw new Error('lylynice not found!');
      } else {
        return lylynice;
    }
      
     }

     likelylyniceById( lylyniceId: number, liketype : 'like'| 'liked'): void{
      const lylynice = this.getAllLylyNiceById(lylyniceId)
      liketype == 'like'? lylynice.like++ : lylynice.like--;
     }

}