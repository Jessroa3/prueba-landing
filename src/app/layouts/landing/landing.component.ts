import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor(private fb: FormBuilder, private emailService: EmailService) {

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
    if(this.contact.valid === true){
      console.log("valido")
      console.log(this.contact.value)
      this.emailService.sendEmail(this.contact.value).subscribe(response => {
        console.log("enviado")
        console.log(response)
        window.location.href = 'https://mailthis.to/confirm'
      }, error => {
        console.log(error)
      })
    }
    else{
      console.log("invalid")
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
