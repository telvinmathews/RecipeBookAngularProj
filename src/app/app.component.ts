import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Recipe Book';
  imgUrl = 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg';
  count = 0;
  name: string;
  username: string;
  private _customerName: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }

  get customerName(): string {
    return this._customerName;
  }

  set customerName(value: string){
    this._customerName = value;
    if (value === 'Jim') {
      alert("HELLO Jim!")
    }
  }


  incrementCount() {
    this.count += 1;
  }

  clearCount() {
    this.count = 0;
  }

  greetSomeOne(event: any) {
    this.username = event;
    if (event === 'Jim') {
      alert("Welcome back Jim!")
    }

  }


}
