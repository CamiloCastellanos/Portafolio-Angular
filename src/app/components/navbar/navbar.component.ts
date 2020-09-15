import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  desplegar(): void {
    var burger = document.querySelector('.burger');
    var menu = document.querySelector('#navBarMenu');
    burger.classList.toggle('is-active');
    menu.classList.toggle('is-active');
  }

  menuLateral(): void {
    document.getElementById("menuLateral").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

}
