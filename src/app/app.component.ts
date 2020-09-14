import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'blog';

  posts = [
    {
      title: 'Premier post',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed lobortis nibh. Quisque id egestas ex. Morbi fermentum tristique blandit.',
      loveIts: 0,
      date: new Date(),
    },
    {
      title: 'Deuxieme post',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed lobortis nibh. Quisque id egestas ex. Morbi fermentum tristique blandit.',
      loveIts: 0,
      date: new Date(),
    },
    {
      title: 'Troisieme post',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed lobortis nibh. Quisque id egestas ex. Morbi fermentum tristique blandit.',
      loveIts: 0,
      date: new Date(),
    },
  ];
}
