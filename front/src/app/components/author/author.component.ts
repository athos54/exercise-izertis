import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss'],
})
export class AuthorComponent implements OnInit {
  @Input() authorData: any;
  @Input() mapsUrl: any;

  constructor() {}

  ngOnInit(): void {}
}
