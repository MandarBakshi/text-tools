import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  members: any = [
    {
      'name': 'Mandar Bakshi',
      'profilePhoto': 'https://xsgames.co/randomusers/avatar.php?g=male',
      'organization': 'SLRTCE',
      'roles': ['Backend', 'Frontend', 'API'],
      'details': ''
    },
    {
      'name': 'Ashish Tak',
      'profilePhoto': 'https://xsgames.co/randomusers/avatar.php?g=male',
      'organization': 'SLRTCE',
      'roles': ['Backend', 'Frontend', 'API'],
      'details': ''
    },
    {
      'name': 'Omkar Tendolkar',
      'profilePhoto': 'https://xsgames.co/randomusers/avatar.php?g=male',
      'organization': 'SLRTCE',
      'roles': ['Backend', 'Frontend', 'API'],
      'details': ''
    },
    {
      'name': 'Aayush Yadav',
      'profilePhoto': 'https://xsgames.co/randomusers/avatar.php?g=male',
      'organization': 'SLRTCE',
      'roles': ['Backend', 'Frontend', 'API'],
      'details': ''
    },
  ]

  refs: any = {
    'images': [
      {
        'name': 'Freepik',
        'link': 'https://www.freepik.com'
      },
      {
        'name': 'unDraw',
        'link': 'https://undraw.co'
      },
    ]
    // 'coding': []
  };

}
