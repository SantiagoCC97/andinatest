import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../producto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Producto } from '../producto';

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  id: number;
  producto: Producto;
  form: FormGroup;
  
  public previsualizacion: string;
  constructor(

    public productoService: ProductoService,
    private route: ActivatedRoute,
    private router: Router,    
    private sanitizer: DomSanitizer

  ) { }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['idProducto'];
    this.productoService.find(this.id).subscribe((data: Producto)=>{
      this.producto = data;
    });

    this.form = new FormGroup({
      nombre:  new FormControl('', [ Validators.required ]),
      precio: new FormControl('', [ Validators.required ]),
      cantidad: new FormControl('', [ Validators.required ]),
      imagen:  new FormControl('', [ Validators.required ]),
      imagen64: new FormControl('hola64'),
      observaciones: new FormControl('', [ Validators.required ]),
      c1: new FormControl('',),
      c2: new FormControl('',),     
      c3: new FormControl('',),    
      c4: new FormControl('',),   
      c5: new FormControl('',),  
      c6: new FormControl('',)
      
    });

  }
  imagenSeleccionada(event) {
    const archivoCapturado = event.target.files[0];
    this.extraerBase64(archivoCapturado).then((imagen: any) => {
      this.previsualizacion = imagen.base;
    })
  }
  
  extraerBase64 = async ($event: any) => new Promise((resolve, reject) => {
    try {
      const unsafeImg = window.URL.createObjectURL($event);
      const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
      const reader = new FileReader();
      reader.readAsDataURL($event);
      reader.onload = () => {
        resolve({
          base: reader.result
        });
      };
      reader.onerror = error => {
        resolve({
          base: null
        });
      };
    } catch (e) {
      return null;
    }
  })


  get f(){
    return this.form.controls;
  }


  submit(){

    
    this.form.controls.imagen64.setValue(this.previsualizacion);

    
    if(this.form.controls.c1.value){
      this.form.controls.c1.setValue("Bogota");
    } else {
      
      this.form.controls.c1.setValue("no");
    }
    if(this.form.controls.c2.value){
      this.form.controls.c2.setValue("Medellin");
    }else {
      
      this.form.controls.c2.setValue("no");
    }
    if(this.form.controls.c3.value){
      this.form.controls.c3.setValue("Cali");
    }else {
      
      this.form.controls.c3.setValue("no");
    }
    if(this.form.controls.c4.value){
      this.form.controls.c4.setValue("Cartagena");
    }else {
      
      this.form.controls.c4.setValue("no");
    }
    if(this.form.controls.c5.value){
      this.form.controls.c5.setValue("Pereira");
    }else {
      
      this.form.controls.c5.setValue("no");
    }
    if(this.form.controls.c6.value){
      this.form.controls.c6.setValue("Manizales");
    }else {
      
      this.form.controls.c6.setValue("no");
    }
    console.log(this.form.value);
    this.productoService.update(this.id, this.form.value).subscribe(res => {
         console.log('Producto modificado!');
         this.router.navigateByUrl('producto/index');
    })
  }

}


