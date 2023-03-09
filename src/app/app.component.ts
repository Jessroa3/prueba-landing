import { Component, OnInit, Inject, Renderer2, ElementRef, ViewChild  } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Location } from '@angular/common';
import { filter, Subscription } from 'rxjs';

import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jessroa3.github.io';
  private _router: Subscription;
  @ViewChild(NavbarComponent) navbar!: NavbarComponent;

  constructor( private renderer : Renderer2, private router: Router, @Inject(DOCUMENT,) private document: any, private element : ElementRef, public location: Location) {
    this._router = new Subscription;
  }
  ngOnInit() {
      var navbar : HTMLElement = this.element.nativeElement.children[0].children[0];
      this._router = this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe(event => {
          if (window.outerWidth > 991) {
              window.document.children[0].scrollTop = 0;
          }else{
              window.document.activeElement!.scrollTop = 0;
          }
          this.navbar.sidebarClose();

          if (this.location.path() !== '/index') {
              navbar.classList.remove('navbar-transparent');
          } else {
              navbar.classList.add('navbar-transparent');
          }
          this.renderer.listen('window', 'scroll', (event) => {
              const number = window.scrollY;
              var _location = this.location.path();
              _location = _location.split('/')[2];
              if (number > 150 || window.pageYOffset > 150 || this.location.path() !== '/index') {
                  navbar.classList.remove('navbar-transparent');
              } else if (this.location.path() === '/index') {
                  // remove logic
                  navbar.classList.add('navbar-transparent');
              }
          });
      });
  }
}
