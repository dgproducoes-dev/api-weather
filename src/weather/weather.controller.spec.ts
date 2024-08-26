import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { WeatherModule } from './weather.module';

describe('WeatherController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [WeatherModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/GET weather?city=New York', () => {
    return request(app.getHttpServer())
      .get('/weather?city=New York')
      .expect(200)
      .expect((res) => {
        console.log(res.body);

        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThan(0);
        expect(res.body[0]).toHaveProperty('location');
        expect(res.body[0]).toHaveProperty('current');
      });
  });

  // Adicione mais testes para lidar com cidades inválidas, erros, etc.
});
