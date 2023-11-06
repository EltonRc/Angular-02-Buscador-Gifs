import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { MainPageComponent } from './pages/main-page.component';
import { FormsModule } from '@angular/forms';
import { HistoryGifsComponent } from './components/history-gifs/history-gifs.component';
import { HttpClientModule} from '@angular/common/http';
import { CardComponent } from './components/card/card.component'
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    SearchBoxComponent,
    CardListComponent,
    MainPageComponent,
    HistoryGifsComponent,
    CardComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [
    MainPageComponent
  ]
})
export class GifsModule { }
