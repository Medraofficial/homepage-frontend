import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bandmember',
  templateUrl: './bandmember.component.html',
  styleUrls: ['./bandmember.component.scss']
})
export class BandmemberComponent implements OnInit {

  currentMember: string = '';
  memberImg: string = '';
  memberName: string = '';
  memberDescription: string = '';
  memberTop: string = '';


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fillMemberInfo();
  }

  fillMemberInfo() {
    switch (this.router.url) {
      case "/band/Gregor":
        this.memberImg = '.\\assets\\band\\gregor.jpg'
        this.memberName = 'Gregor Merklein';
        this.memberDescription = 'test description';
        this.memberTop = 'test top'
        break;
          
      case "/band/Jannick":
        this.memberImg = '.\\assets\\band\\jannick.jpg'
        this.memberName = 'Jannick Born';
        this.memberDescription = 'test description';
        this.memberTop = 'test top'
        break;
     
      case "/band/Luka":
        this.memberImg = '.\\assets\\band\\luka.jpg'
        this.memberName = 'Luka Schierenberg';
        this.memberDescription = 'test description';
        this.memberTop = 'test top'
        break;
    
      case "/band/Ramona":
        this.memberImg = '.\\assets\\band\\ramona.jpg'
        this.memberName = 'Ramona Born';
        this.memberDescription = 'test description';
        this.memberTop = 'test top'
        break;
    
      case "/band/Tobias":
        this.memberImg = '.\\assets\\band\\tobi.jpg'
        this.memberName = 'Tobias Winter';
        this.memberDescription = 'test description';
        this.memberTop = 'test top'
        break;
    
      case "/band/Milo":
        this.memberImg = '.\\assets\\band\\milo.jpg';
        this.memberName = 'Milo Randermann';
        this.memberDescription = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.';
        this.memberTop = 'Lorem Ipsum is simply dummy text of the printing and typesetting induLorem Ipsum is simply dummy text of the printing and typesetting induLorem Ipsum is simply dummy text of the printing and typesetting induLorem Ipsum is simply dummy text of the printing and typesetting induLorem Ipsum is simply dummy text of the printing and typesetting induLorem Ipsum is simply dummy text of the printing and typesetting indu'
        break;
    }
  }
}
