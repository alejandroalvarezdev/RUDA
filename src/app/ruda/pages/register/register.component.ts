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
    nombre:[''],
    pais:[''],
    deporte:[],
    otrosDep:[],
    clasificacion:[],
    pruebaPrincipal:[],
    rfc:['']
    
  })
  

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }



  guardar(){
    console.log(this.formulario.value);
    
  }
  errors(formulario: FormGroup, controlName: string): any | undefined{
    if (formulario.controls[controlName].touched) {
      if (formulario.controls[controlName].hasError('required')) {
        return 'Este campo es obligatorio';
      }
      
      
    }
    
    
  }

}
