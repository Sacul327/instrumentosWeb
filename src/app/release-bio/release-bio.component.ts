import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ReleasesService, releases } from '../services/releases.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-release-bio',
  templateUrl: './release-bio.component.html',
  styleUrls: ['./release-bio.component.css']
})
export class ReleaseBioComponent implements OnInit {
  release: releases;

  constructor(private route: ActivatedRoute,
    private releasesService: ReleasesService,
    private location: Location,
    public sanitizer: DomSanitizer) { }

    ngOnInit(): void {
      this.getRelease();
    }
    
    getRelease(): void {
      const id = +this.route.snapshot.paramMap.get('id');
      this.releasesService.getRelease(id)
        .subscribe(release => this.release = release);
    }

}
