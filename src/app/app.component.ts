import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators}  from '@angular/forms';
import { Empleados } from './Models/Empleados.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Array datos
  public empleados:Array<Empleados>=[];


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

  public id=1;
  constructor(){

    let emp: Empleados={
      Id:0,
      nombre: "Andres",
      edad: 11,
      ciudad: "Barranquilla"
    }
    this.empleados.push(emp);
  }

  ingresar(){
    let nuevo: Empleados={
      Id: this.id,
      nombre: this.form.value.nombre,
      edad: this.form.value.edad,
      ciudad: this.form.value.ciudad
    }
    this.id=this.id+1;
    this.empleados.push(nuevo);
    this.limpiar();
  }

  limpiar(){
    this.form.controls['id'].setValue(0);
    this.form.controls['nombre'].setValue("");
    this.form.controls['edad'].setValue(0);
    this.form.controls['ciudad'].setValue("");
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
}
