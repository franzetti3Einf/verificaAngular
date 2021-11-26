import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third-component',
  templateUrl: './third-component.component.html',
  styleUrls: ['./third-component.component.css']
})
export class ThirdComponentComponent implements OnInit {
  name : string;
  constructor() { 
    this.name = "terzo"
  }

  ngOnInit(): void {
  }

}
