/* tslint:disable:no-unused-variable */

import {TestBed, async, inject} from '@angular/core/testing';
import {ProfileService} from './profile.service';
import {HttpModule, XHRBackend, ResponseOptions, Response} from "@angular/http";
import {MockBackend, MockConnection} from "@angular/http/testing";

const mockResponseData = [{
  "firstName": "Андрей",
  "surname": "Иващенко",
  "photo": "http://i.imgur.com/NktCSrP.png",
  "country": "ua"
}]

describe('Service: Profile', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [{
        provide: XHRBackend, useClass: MockBackend
      }, ProfileService]
    });
  });

  it('getUsers should return users ', inject([XHRBackend, ProfileService],
    (mockBackend: any, service: ProfileService) => {
      mockBackend.connections.subscribe((connection: MockConnection) => {
        let responseOpts = new ResponseOptions({body: JSON.stringify(mockResponseData)})
        connection.mockRespond(new Response(responseOpts))
      })

      service.getUsers().subscribe(users => {
        expect(users[0].firstName).toBe('Андрей');
        expect(users[0].surname).toBe('Иващенко');
        expect(users[0].photo).toBe("http://i.imgur.com/NktCSrP.png");
        expect(users[0].country).toBe('ua');
      })

    }));
});
