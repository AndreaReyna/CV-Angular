import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { concat } from 'rxjs';
import { AuthService } from '../security/auth.service';
import { Headline } from '../headlines/headline';
import { HeadlineService } from '../headlines/headline.service';
import { Content } from './content';
import { ContentService } from './content.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})

export class ContentComponent implements OnInit {
  title:string='Contenidos: ';
  @Input() headlines!:Headline[];
  headline!:Headline;
  titleModal!:String;
  titleModalContent!:String;
  headlineModal = new Headline();
  contentModal = new Content();
  contents!:Content[];
  contentsByHeadlines!:Content[];
  
  constructor(private contentService:ContentService, private headlineService:HeadlineService, private auth:AuthService, private router:Router) { }

  ngOnInit(): void {
    this.contentService.getAll().subscribe(
      content => this.contents=content
      );
  }

  logIn:Boolean = this.auth.logIn;

  deleteHeadline(id:number){
    this.headlineService.baja(id).subscribe(
      res=>this.headlineService.getAll().subscribe(
        response => this.headlines=response
      )
    );
  }

  deleteContent(id:number){
    this.contentService.delete(id).subscribe(
      res=>this.contentService.getAll().subscribe(
        response => this.contents=response
      )

    );
  }


  //MODALES:

  //Titular:

  loadHeadline(headline:Headline){
    this.titleModal = "Editar titular:";
    this.headlineModal = headline;
  }

  editHeadline(headline:Headline){ 
  this.headlineService.create(headline).subscribe(
    res=>this.headlineService.getAll().subscribe(
      response => this.headlines=response
    )
  );
}

resetHeadline(){
  this.titleModal = "Nuevo titular:";
  this.headlineModal = new Headline;
}


//Contenidos:

loadContent(c:Content){
  this.titleModalContent = "Editar Contenido:";
  this.contentModal = c;
}

editContent(content:Content){ 
  if (content.headline==null) {
    content.headline = this.headline;
  }
this.contentService.create(content).subscribe(
  res=>this.contentService.getAll().subscribe(
      response => this.contents=response
    )
  );
}

resetContent(headline:Headline){
  this.titleModalContent = "Nuevo contenido:";
  this.contentModal = new Content;
  this.headline = headline;
  }

  format(fecha:Date):String{
    let b = "";
    if (fecha){
    let a:String  = fecha.toString();
    b = a.substring(5, 7) + "/" + a.substring(0, 4);
    }
    return b;
  }

}