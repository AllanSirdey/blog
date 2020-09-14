import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css'],
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  created_at: Date = new Date();

  constructor() {}

  ngOnInit(): void {}

  onLoveIt() {
    this.loveIts++;
  }

  onDontLoveIt() {
    this.loveIts--;
  }
}
