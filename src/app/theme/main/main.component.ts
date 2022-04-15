import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Empleados } from 'src/app/Models/Empleados.models';
import { Ciudades } from '../../Models/Ciudades.models';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  //Array datos
  public empleados:Array<Empleados>=[];
  public ciudades:Array<Ciudades>=[];
  form=new FormGroup({
    nombre: new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required),
    ciudad: new FormControl('',Validators.required)
  });
  formEdit=new FormGroup({
    id: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    edad: new FormControl('',Validators.required),
    ciudad: new FormControl('',Validators.required)
  });

  formCiudad=new FormGroup({
    nombre: new FormControl('',Validators.required)
  });
  public id=1;
  public idc=0;
  constructor(){

    let emp: Empleados={
      Id:0,
      nombre: "Andres",
      edad: 11,
      ciudad: "Barranquilla"
    }
    this.empleados.push(emp);
  }

  newCiudad(){
    let NuevaCiudad: Ciudades={
      Id: this.idc,
      nombre: this.formCiudad.value.nombre
    }
    this.idc=this.idc+1;
    this.ciudades.push(NuevaCiudad);
  }
  ingresar(){
    if(this.form.valid){
      let nuevo: Empleados={
        Id: this.id,
        nombre: this.form.value.nombre,
        edad: this.form.value.edad,
        ciudad: this.form.value.ciudad
      }
      this.id=this.id+1;
      this.empleados.push(nuevo);
    }
  }
  modaleditar(id:number){
    this.formEdit.controls['id'].setValue(id);
    this.formEdit.controls['nombre'].setValue(this.empleados.slice(id,id+1)[0].nombre);
    this.formEdit.controls['edad'].setValue(this.empleados.slice(id,id+1)[0].edad);
    this.formEdit.controls['ciudad'].setValue(this.empleados.slice(id,id+1)[0].ciudad);
  }

  editar(){
    this.empleados.splice(this.formEdit.value.id,1,{
      Id: this.formEdit.value.id,
      nombre: this.formEdit.value.nombre,
      edad: this.formEdit.value.edad,
      ciudad: this.formEdit.value.ciudad
    });
  }
  public idat=0;

  seguro(id:number){
    this.idat=id;
  }
  eliminar(){
    this.empleados.splice(this.idat,1);
  }
  eliminarCiudad(id:number){
    this.ciudades.splice(id,1);
  }
  ngOnInit(): void {
  }

}
