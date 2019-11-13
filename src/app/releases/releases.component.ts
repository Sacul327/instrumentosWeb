import { Component, OnInit } from '@angular/core';
import { ReleasesService, releases } from '../services/releases.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {
  releases: releases[];

  // tslint:disable-next-line: variable-name
  constructor(private _releasesService: ReleasesService) { }

  getJson() {
    console.log(this._releasesService.getJson());
  }

  ngOnInit() {

    this.releases = this._releasesService.getReleases();

    console.log(this._releasesService.getProducts());

  }

}
