import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public pageContent = {
    header: {
      title: 'About B2N',
      strapline: ''
    },
    content: 'In this project we will be predicting whether there exists pneumonia in the given image. We do this by taking the x-rays of some healthy persons and compare them with the x-rays of the people who are suffering from pneumonia. Then we train the model and will predict whether the person is suffering from pneumonia or not. In the present world, the doctors are very busy treating people with covid-19, through this application we provide computer-aided diagnosis system which would reduce the burden of clinicians. We can also have a chance to say whether a person is suffering from covid or not because covid virus mainly affects the respiratory system. We have opted for CNN motivated deep learning algorithms, since they have been used as the standard and best choice to classify the medical images.'
  };

}
