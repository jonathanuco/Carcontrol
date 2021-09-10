import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculos } from '../modelo/vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  endPoint = 'https://private-875529e-vehiculos1.apiary-mock.com/vehiculos';

  constructor(private http: HttpClient) { }

listarVehiculos(): Observable<Vehiculos[]>{
  return this.http.get<Vehiculos[]>(this.endPoint);

}
}
