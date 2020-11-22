import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Output() toogleMenu: EventEmitter<any>;

  constructor() {
    this.toogleMenu = new EventEmitter<any>();
  }

  ngOnInit(): void {
  }

  clickToggleMenu(): void {
    this.toogleMenu.emit(true);
  }

}
