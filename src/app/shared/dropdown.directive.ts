import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective implements OnInit {
  @HostBinding('class.show') isOpen: boolean = false;

  constructor(private elRef: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('click') onClick(event: Event) {
    this.elRef.nativeElement.children[1].classList.toggle('show');
    this.isOpen = !this.isOpen;
  }
}
