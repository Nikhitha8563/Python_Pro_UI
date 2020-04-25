import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../data';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-home-list',
  templateUrl: './home-list.component.html',
  styleUrls: ['./home-list.component.css']
})
export class HomeListComponent implements OnInit {

  dataObj: any;
  model: { image: null };
  form: FormGroup;
  //new
  fileData: File = null;
  previewUrl: any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  public imagePath;
  imgURL: any;
  public message: string;

  fileProgress(files, fileInput: any) {
    const filec = fileInput.target.files;
    const file1 = fileInput.target.files[0];
    if (files.length === 0)
      return;

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
    this.fileData = <File>fileInput.target.files[0];
    this.preview();
  }

  preview() {
    // Show preview 
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }

    var reader = new FileReader();
    reader.readAsDataURL(this.fileData);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }
  //new ends
  /*constructor(private http: HttpClient) { }*/
  constructor(public fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      file: ['']
    })
  }

  selectedFile: File
  file: File
  map = new Map();
  url = '';
 formData = new FormData();
  onFileChanged(event) {
    const filec = event.target.files;
    const file1 = event.target.files[0];
    if (filec && file1) {
      var reader = new FileReader();
      reader.readAsDataURL(file1);
      reader.onload = (event) => {
        this.url = filec;
      }
    }
    console.log('file', file1.name);
    const file = (event.target as HTMLInputElement).files[0];
    this.form.get('file').setValue(file1);
    this.dataObj = file1;
    this.map.set("file",file1);
  }

  makeAPostCall() {
    //new
    const formData = new FormData();
    formData.append('file', this.fileData);
    console.log('filedata', this.fileData);
    //new ends
    console.log('hai');
    console.log(this.map.get("file"))
    console.log('model', this.form.value);
    this.dataObj;
    let url: string = 'https://calm-peak-20297.herokuapp.com/handle_form';
    this.http.post(url, formData)
      .subscribe((resp) => {
        this.dataObj = resp;
        console.log("data is:", resp);
      });
  }

  ngOnInit() {
  
  }

}
