import { Component, OnInit } from '@angular/core';
import { ReleasesService, releases } from '../services/releases.service';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {
  releases: releases[];

  constructor(private _releasesService: ReleasesService) { }


  ngOnInit() {
    this.releases = this._releasesService.getReleases();
  }

}
