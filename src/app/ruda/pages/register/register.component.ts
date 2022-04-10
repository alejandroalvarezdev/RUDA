import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  name: string = '';



  formulario:FormGroup = this.fb.group({
<<<<<<< HEAD
    nombre:[,Validators.required,Validators.minLength(10)],
=======
    nombre:[''],
>>>>>>> 1cb5b9a50369d3758ec03427fc3bc5ef761dee4e
    pais:[''],
    deporte:[],
    otrosDep:[],
    clasificacion:[],
    pruebaPrincipal:[],
<<<<<<< HEAD
    rfc:['']
=======
    rfc:[''],
    gastosMed:['']
>>>>>>> 1cb5b9a50369d3758ec03427fc3bc5ef761dee4e
    
  })
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  guardar(){
    console.log(this.formulario.value);
<<<<<<< HEAD
    
=======
>>>>>>> 1cb5b9a50369d3758ec03427fc3bc5ef761dee4e
    
  }
  errors(formulario: FormGroup, controlName: string): any | undefined{
    if (formulario.controls[controlName].touched) {
      if (formulario.controls[controlName].hasError('required')) {
        return 'Este campo es obligatorio';
      }
      
      
    }
    
    
  }

}
