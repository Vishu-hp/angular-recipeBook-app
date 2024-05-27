import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();
  currentTab: string = 'recipe';

  onSelect(feature: string) {
    this.featureSelected.emit(feature);
    this.currentTab = feature;
  }

  func2(event) {
    event.stopPropagation();
  }
}
