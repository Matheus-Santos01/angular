import { Component, Input } from '@angular/core';
import { faDroplet, faTemperatureHigh, faTemperatureLow, faWind } from '@fortawesome/free-solid-svg-icons';
import { WeatherDatas } from 'src/app/models/interfaces/weatherDatas';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: []
})
export class WeatherCardComponent{

  @Input() weatherDatasInput!: WeatherDatas

  lowTemperatureIcon = faTemperatureLow
  highTemperatureIcon = faTemperatureHigh
  humidityIcon = faDroplet
  windIcon = faWind

}
