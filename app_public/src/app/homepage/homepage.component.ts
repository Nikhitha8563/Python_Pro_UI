import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: 'B2N',
      strapline: 'Check whether you have Pnuemonia or Not'
    },
    sidebar: 'Now-a-days pandemic crisis is progressing rapidly. Unfortunately, the capacity of the testing centres is very low in most of the countries. We can confirm the diagnosis by taking the chest x-ray or blood cells, so here we are using chest x-rays.  It is hard for every person to get the appointment of the doctor due to the evolution of the new virus Covid-19. Through this application, we want to give some mental peace for those who are suspecting whether they suffer from pneumonia or not, and through this, we can also have a chance to predict whether a person is affected.'
  };


}
