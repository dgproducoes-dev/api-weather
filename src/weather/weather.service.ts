import { Injectable } from '@nestjs/common';
import * as weather from 'weather-js';

@Injectable()
export class WeatherService {
  async getWeather(city: string): Promise<any> {
    return new Promise((resolve, reject) => {
      weather.find({ search: city, degreeType: 'C' }, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }
}
