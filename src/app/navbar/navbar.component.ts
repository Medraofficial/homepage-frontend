import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void 
  {
    this.checkRoute()
  }

  checkRoute() {
    switch(this.router.url)
    {
      case "/news": 
      {
        const news = document.getElementById('news');
        if (news != null)
          news.style.color = getComputedStyle(document.documentElement).getPropertyValue('--hover-color');   
        break;
      }

      case "/music":
      {
        const music = document.getElementById('music');
        if (music != null)
          music.style.color = getComputedStyle(document.documentElement).getPropertyValue('--hover-color');   
        break;
      }

      case "/merch":
      {
        const merch = document.getElementById('merch');
        if (merch != null)
          merch.style.color = getComputedStyle(document.documentElement).getPropertyValue('--hover-color');   
        break;
      }
    }

    if (this.router.url == "/band" || this.router.url == "/band/member") {
      const band = document.getElementById('band');
      if (band != null)
        band.style.color = getComputedStyle(document.documentElement).getPropertyValue('--hover-color');  
    }
  }
}
