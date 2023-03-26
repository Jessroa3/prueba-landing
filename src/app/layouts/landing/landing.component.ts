import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import * as Rellax from 'rellax';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  focus = false;
  focus1 = false;
  contact: FormGroup;
  validateFormContact = false;
  loading = false;
  botonForm = "Enviar";

  constructor(private fb: FormBuilder, private emailService: EmailService, private toastr: ToastrService) {

    this.contact = this.fb.group({
    name: ['', Validators.required],
    phone: ['', [Validators.required,  Validators.maxLength(16)]],
    email: ['', [Validators.required, Validators.minLength(5)]],
    message: ['', [Validators.required]],
    }) 
  }

  ngOnInit() {

    console.log(this.contact)
    var rellaxHeader = new Rellax('.rellax-header');

    var body = document.getElementsByTagName('body')[0];
    body.classList.add('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.add('navbar-transparent');
  }

  sendEmail() {
    console.log(this.contact)
    this.loading = true
    this.botonForm = "Enviando"
    if(this.contact.valid === true){
      this.emailService.sendEmail(this.contact.value).then(response => {
        this.loading = false;
        this.botonForm = "Enviar";
        this.toastr.success("Solicitud recibida con éxito", "Solicitud recibida")
        this.contact.reset()
      }, error => {
        this.loading = false;
        this.toastr.error("Error procesando la solicitud, por favor, intente de nuevo", "Error procesando solicitud")
        console.log(error)
      })
    }
    else{
      console.log("invalid")
      this.loading = false;
      this.botonForm = "Enviar";
      this.validateFormContact = true;
    }
  }

  ngOnDestroy(){
    var body = document.getElementsByTagName('body')[0];
    body.classList.remove('landing-page');
    var navbar = document.getElementsByTagName('nav')[0];
    navbar.classList.remove('navbar-transparent');
  }

}
