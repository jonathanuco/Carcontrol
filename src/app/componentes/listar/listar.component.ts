import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../servicios/vehiculos.service';
import { Vehiculos } from '../../modelo/vehiculos';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  listadoVehiculos: Vehiculos[] = [];
  constructor(private VehiculosService: VehiculosService) { }

  ngOnInit(): void {
    this.VehiculosService.listarVehiculos().subscribe(
      resp =>{
      this.listadoVehiculos = resp;
      }
    );

  }

}
