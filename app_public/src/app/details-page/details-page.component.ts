import { Component, OnInit } from '@angular/core';
import { Loc8rDataService } from '../loc8r-data.service';
import { Location } from '../location';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.css'],
})
export class DetailsPageComponent implements OnInit {

  constructor(private loc8rDataService: Loc8rDataService, private route: ActivatedRoute) { }
  newLocation: Location;
  ngOnInit(): void {


  public pageContent = {
    header: {
      title: 'Location Name',
      strapline: ''
    },
    sidebar: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.\n\nIf you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
  };
}