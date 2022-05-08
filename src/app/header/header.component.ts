import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../security/auth.service';
import { Header } from './header';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  header:Header = new Header();

  constructor(private headerService:HeaderService, private auth:AuthService, private router:Router) { }
 

  ngOnInit(): void {
    this.headerService.get(1).subscribe(
      header => this.header=header
      );
  }
  
  edit(header:Header){
    this.headerService.update(this.header).subscribe(
      res=>this.router.navigate(['/'])
    );
  }

  logIn:Boolean = this.auth.logIn;

  }
  

