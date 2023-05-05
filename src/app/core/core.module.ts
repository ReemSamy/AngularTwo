import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidePanelComponent } from './side-panel/side-panel.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidePanelComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeaderComponent,FooterComponent,SidePanelComponent]
})
export class CoreModule { }
