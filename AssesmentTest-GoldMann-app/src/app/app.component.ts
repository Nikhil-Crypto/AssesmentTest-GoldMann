import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'AssesmentTest-GoldMann-app';
  inputArr = [1, 2, 3, 4, 5];
  outputArr: any;

  ngOnInit() {
    // 1st Question
    let value = this.duplicate(this.inputArr);
    console.log('value********', value);
    // 2nd Question
    this.fizzBuzz();
    // 3rd Question
    console.log("hello" || "world");
    console.log("foo" && "bar");
    // 4th Question
    (function () {
      var comapnyName = "GoldMan Sachs";
      console.log(comapnyName)
      return comapnyName
  })();
  }

  duplicate(arr: any) {
    return this.outputArr = arr.concat(arr);
  }

  fizzBuzz() {
    for(var i = 0; i <= 100; i++) {
      if(i % 3 == 0) {
        console.log('fizz')
      } else if (i % 5 == 0) {
        console.log('buzz')
      } else if ((i % 3) && (i % 5)) {
        console.log('fizzbuzz')
      } 
    }
  }
}
