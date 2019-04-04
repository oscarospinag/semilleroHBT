import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creacion-personas',
  templateUrl: './creacion-personas.component.html',
  styleUrls: ['./creacion-personas.component.css']
})
export class CreacionPersonasComponent implements OnInit {
  id:number = 12343565;
  cc:string = '12345678';
  nombre:string = 'Oscar';
  apellidos:string = 'Ospina';
  tipos = ["cc", "ti"];
  tipo_id:string;
 
  constructor() { }

  ngOnInit() {
  }


}
