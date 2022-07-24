import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { MatTableModule } from '@angular/material/table';
import { AdminRoutingModule } from './admin-routing.module';
import { QuicklinkModule } from 'ngx-quicklink';

@NgModule({
  declarations: [AdminComponent],
  imports: [CommonModule, MatTableModule, QuicklinkModule, AdminRoutingModule],
})
export class AdminModule {}
