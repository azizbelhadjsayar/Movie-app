import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent{

  inputSearch = '';

  constructor() {}
  
  @Output() searchedTitle = new EventEmitter<string>();
  sendSearch() {
    this.searchedTitle.emit(this.inputSearch);
  }

}
