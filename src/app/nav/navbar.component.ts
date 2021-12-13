import { Component } from "@angular/core";

@Component({
  selector: "nav-bar",
  templateUrl: "./navbar.component.html",
  styles: [
    `
      .nav.navbar-nav {
        font-size: 15px;
      }
      #searchForm {
        margin-right: 100px;
      }
      @media (max-width: 1200px) {
        #searchForm {
          display: none;
        }
      }
    ` //the last one (@media...)make search bar disapear if the navigator window gets too small
  ]
})
export class NavBarComponent {}
