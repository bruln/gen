import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { SHOES } from './shared/data/shoes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gen-shop';
  data = SHOES;

  ngOnInit(): void {}
}
