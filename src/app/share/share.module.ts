import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import {ToolbarModule} from 'primeng/toolbar';
import {CalendarModule} from 'primeng/calendar';
/* import { TabsModule } from 'ngx-bootstrap/tabs';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { thLocale } from 'ngx-bootstrap/locale'; */
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [],
  imports: [DialogModule,TableModule, MenuModule,CalendarModule,
    CommonModule,MessagesModule,MessageModule,DropdownModule,
    FormsModule,
    CommonModule
  ],
  exports: [DialogModule,TableModule, MenuModule,CalendarModule,
    CommonModule,MessagesModule,MessageModule,DropdownModule,
    FormsModule
   
  ]
})
export class ShareModule { }
