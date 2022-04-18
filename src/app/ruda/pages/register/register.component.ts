import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {FormControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';



const USER_DATA = [
  {
    id: 1,
    ranking: 'John Smith',
    occupation: 'Advisor',
    dateOfBirth: '1984-05-05',
    age: 36,
  },
  {
    id: 2,
    ranking: 'Muhi Masri',
    occupation: 'Developer',
    dateOfBirth: '1992-02-02',
    age: 28,
  },
  {
    id: 3,
    ranking: 'Peter Adams',
    occupation: 'HR',
    dateOfBirth: '2000-01-01',
    age: 20,
  },
  {
    id: 4,
    ranking: 'Lora Bay',
    occupation: 'Marketing',
    dateOfBirth: '1977-03-03',
    age: 43,
  },
];
const COLUMNS_SCHEMA = [
  {
    key: 'isSelected',
    type: 'isSelected',
    label: '',
  },
  {
    key: 'ranking',
    type: 'text',
    label: 'Ranking',
  },
  {
    key: 'occupation',
    type: 'text',
    label: 'Año',
  },
  {
    key: 'dateOfBirth',
    type: 'date',
    label: 'Evento',
  },
  {
    key: 'age',
    type: 'number',
    label: 'Resultado',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

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

  //resources 

  toppings = new FormControl();
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  name: string = '';

  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;



  formulario:FormGroup = this.fb.group({
    nombre:[''],
    pais:[''],
    deporte:[],
    otrosDep:[],
    clasificacion:[],
    pruebaPrincipal:[],
    rfc:[''],
    gastosMed:['']
    
  })
  

  constructor(
    private fb: FormBuilder , 
    public dialog:MatDialog) { }

  ngOnInit(): void {
  }



  guardar(){
    console.log(this.formulario.value);
    
  }

  addRow() {
    const newRow = {
      id: Date.now(),
      ranking: '',
      occupation: '',
      dateOfBirth: '',
      age: 0,
      isEdit: true,
    };
    this.dataSource = [newRow, ...this.dataSource];
  }

  removeRow(id:any) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  removeSelectedRows() {
    this.dialog
      .open(ConfirmDialogComponent)
      .afterClosed()
      .subscribe((confirm) => {
        if (confirm) {
          this.dataSource = this.dataSource.filter((u: any) => !u.isSelected);
        }
      });
  }



  errors(formulario: FormGroup, controlName: string): any | undefined{
    if (formulario.controls[controlName].touched) {
      if (formulario.controls[controlName].hasError('required')) {
        return 'Este campo es obligatorio';
      }
      
      
    }
    
    
  }

}
