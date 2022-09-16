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

    let hoverColor = getComputedStyle(document.documentElement).getPropertyValue('--hover-color')

    if (this.router.url.startsWith('/news')) {
      const news = document.getElementById('news');
      if (news != null)
        news.style.color = hoverColor
    }
    else if (this.router.url.startsWith('/music')) {
      const music = document.getElementById('music');
      if (music != null)
        music.style.color = hoverColor
    }

    else if (this.router.url.startsWith('/merch')) {
      const merch = document.getElementById('merch');
      if (merch != null)
        merch.style.color = hoverColor
    }

    else if (this.router.url.startsWith('/band')) {
      const band = document.getElementById('band');
      if (band != null)
        band.style.color = hoverColor
    }
  }
}
