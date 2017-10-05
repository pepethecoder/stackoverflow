import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStatus]'
})
export class StatusDirective implements OnInit {

  constructor(private render: Renderer2, private eleRef: ElementRef) { }

  ngOnInit() {

  }
}
