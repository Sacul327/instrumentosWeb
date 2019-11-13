import { Component, OnInit } from '@angular/core';
import { GuitarsService, guitars } from '../services/guitars.service';

@Component({
  selector: 'app-guitarras',
  templateUrl: './guitarras.component.html',
  styleUrls: ['./guitarras.component.css']
})
export class GuitarrasComponent implements OnInit {
  guitarrasList: guitars[];

  constructor(private guitarrasService: GuitarsService) { }

  ngOnInit() {
    this.guitarrasList = this.guitarrasService.getGuitarras();
  }

}
