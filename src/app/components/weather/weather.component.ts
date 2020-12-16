import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherService } from './../../api/weather.service'
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  objectData: any = [];
  // currTemp = (valNum-32)/1.8
  d = new Date();
  data = this.d.getFullYear() + '-' + (this.d.getMonth() + 1) + '-' + this.d.getDate();
  sunRiseTime = this.sunRiseFun(1608105656);
  sunSetTime = this.sunSetFun(1608133908)
  currTemp = this.fToC(281.76)


  sunRiseFun(t) {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
  }
  sunSetFun(t) {
    var dt = new Date(t * 1000);
    var hr = dt.getHours();
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ':' + m.substr(-2) + ':' + s.substr(-2);
  }





  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.getData()

  }

  getData() {
    // console.log("GEt function");

    this.weatherService.getCurrent().subscribe(response => {
      console.log("TEst response", response);
      this.objectData = response

    })
  }
  fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = (fTemp - 32) * 5 / 9;
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
  }

}
