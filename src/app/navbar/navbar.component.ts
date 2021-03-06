import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  islogged():Boolean{
     if ( localStorage.getItem("token"))
         return false; 
      return true; 
  }

  cerrarSession():void{
       localStorage.clear();
       this.router.navigate(['/login']);
  }

}
