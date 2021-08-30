import { Component, OnInit } from '@angular/core';
////////////////////////////////////////////////////////////////////////////////////////////////
import { HttpClientModule }    from '@angular/common/http';
import { PicService } from '../services/pic.service';
@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.css']
})
export class UploadFileComponent implements OnInit {

  constructor(private picService: PicService) { }

  ngOnInit(): void {
  }
  addFile(file): void {
    debugger;
    this.picService.add(file).subscribe(res=>{console.log("good")},err=>{console.log("not good :(")});
  }
}
