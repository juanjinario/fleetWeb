import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { MaterialModule } from './modules/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// Components

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule, NavbarComponent, SidebarComponent
  ]
})
export class SharedModule { }
