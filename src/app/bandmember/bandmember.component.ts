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
  memberTopBands: string = '';
  memberTopAlben: string = '';
  memberTopFilme: string = '';
  memberTopSerien: string = '';
  memberTopSpiele: string = '';


  constructor(private router: Router) { }

  ngOnInit(): void {
    this.fillMemberInfo();
  }

  fillMemberInfo() {
    switch (this.router.url) {
      case "/band/Marcel":
        this.memberImg = './assets/band/marcel.jpg'
        this.memberName = 'Marcel Romberg';
        this.memberDescription = 'test description';
        this.memberTopBands = "Meshuggah, Hacktivist, Humanity's Last Breath";
        this.memberTopAlben = "Humanity's Last Breath - Välde, Meshuggah - Nothing, Bleed from Within - Fracture";
        this.memberTopFilme = "Der Herr der Ringe, Rebuild of Evangelion, Interstellar";
        this.memberTopSerien = "JoJo's Bizarre Adventure, C: Control - The Money and Soul of Possibility, Tengen Toppa Gurren Lagann";
        this.memberTopSpiele = "Dark Souls 3, Borderlands 2, Doom Eternal";
        break;
          
      case "/band/Jannick":
        this.memberImg = './assets/band/jannick.jpg'
        this.memberName = 'Jannick Born';
        this.memberDescription = 'Hi, ich bin Jannick, 28 Jahre alt und der Leadgitarrist der Metalband Medra. Bands wie Amon Amarth, Hammerfall, Meshuggah und Rings of Saturn inspirieren mich bis heute, sodass ich fast ausschließlich 8-Saiter Gitarren spiele. Ebenfalls bin ich ein begeisterter Gamer und habe eine tiefe Passion für Horrorfilme.';
        this.memberTopBands = "Meshuggah, Rings of Saturn, Sabaton";
        this.memberTopAlben = "Meshuggah - Obzen, Rings of Saturn - Margidda, Sabaton - Carolus Rex";
        this.memberTopFilme = "Terminator 2, A Nightmare on Elm Street, Robocop";
        this.memberTopSerien = "Naruto, Angry Video Game Nerd, Peaky Blinders";
        this.memberTopSpiele = "Devil May Cry, Blood: Fresh Supply, Dark Souls";
        break;
     
      case "/band/Luka":
        this.memberImg = './assets/band/luka.jpg'
        this.memberName = 'Luka Schierenberg';
        this.memberDescription = 'placeholder';
        this.memberTopBands = "Malevolence, Nasty, Knocked Loose";
        this.memberTopAlben = "Thy Art Is Murder - Hate, Landmvrks - Fantasy, Knocked Loose - Laugh Tracks";
        this.memberTopFilme = "Star Wars: Episode III – Revenge of the Sith, Spider-Man 2 (2004), Rogue One";
        this.memberTopSerien = "Breaking Bad, Star Wars: The Clone Wars, The Mandalorian";
        this.memberTopSpiele = "Metal Gear Solid 3: Snake Eater, Lego Star Wars: The Complete Saga, Pokémon SoulSilver";
        break;
    
      case "/band/Ramona":
        this.memberImg = './assets/band/ramona.jpg'
        this.memberName = 'Ramona Born';
        this.memberDescription = 'placeholder';
        this.memberTopBands = "We Came As Romans, Ice Nine Kills, Imminence";
        this.memberTopAlben = "Caskets - Lost Souls, Lorna Shore - Pain Remains, Ice Nine Kills - The Silver Scream";
        this.memberTopFilme = "The Dark Knight, Prinzessin Mononoke, Constantine";
        this.memberTopSerien = "Jujutsu Kaisen, Vampire Knight, Chainsaw Man";
        this.memberTopSpiele = "Resident Evil 4, Persona 5, Crash Bandicoot";
        break;
    
      case "/band/Tobias":
        this.memberImg = './assets/band/tobi.jpg'
        this.memberName = 'Tobias Winter';
        this.memberDescription = 'Ich heiße Tobias, ich bin 24 Jahre alt und der Bassist der Metalband Medra. Zu meinen absoluten Lieblingsbands zähle ich Beast in Black, Amon Amarth und Megadeth, die mich als Musiker inspirieren. Durch die verschiedenen Genres, die ich bevorzuge, (Powermetal, Death Metal und Thrash Metal) zeigt sich mein ganz eigener Stil als Bassist. Ebenfalls bin ich ein begeisterter Yu-Gi-Oh! Sammelkarten-Spieler und Gamer.';
        this.memberTopBands = "Beast in Black, Battle Beast, Sabaton";
        this.memberTopAlben = "Grailknights - Alliance, Battle Beast - Circus of Doom, Beast in Black - Dark Connection";
        this.memberTopFilme = "Real Steel, Pacific Rim, Star Wars: Episode III – Revenge of the Sith";
        this.memberTopSerien = "Hell's Kitchen, Haus des Geldes, Prison Break";
        this.memberTopSpiele = "Destiny, Infinity Blade II, Alien Storm";
        break;
    
      case "/band/Milo":
        this.memberImg = './assets/band/milo.jpg';
        this.memberName = 'Milo Randermann';
        this.memberDescription = "Hi, mein Name ist Milo, ich bin 19 Jahre alt und der Drummer der Metalband Medra. Die Bands Massendefekt, Silverstein und The Ghost Inside inspirieren mich als Drummer und schenken mir immer wieder neuen Input. Das wirkt sich natürlich auch auf unsere eigene Musik aus, die durch die verschiedene Metalgenres positiv beeinflusst wird. Neben der Musik zocke ich gerne und ich bin ein begeisterterer Motorradfahrer."
        this.memberTopBands = "placeholder";
        this.memberTopAlben = "placeholder";
        this.memberTopFilme = "Indiana Jones and the Last Crusade, The Empire Strikes Back, Film 3";
        this.memberTopSerien = "How I Met Your Mother, Serie 2, Serie 3";
        this.memberTopSpiele = "The Legend of Zelda: Twilight Princess, Pokémon Platin-Edition, Star Wars: Battlefront II (2005)";        
        break;
    }
  }
}
