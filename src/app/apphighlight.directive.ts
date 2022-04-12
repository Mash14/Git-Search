import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appApphighlight]'
})
export class ApphighlightDirective {

  constructor(private elem:ElementRef) { }

    @HostListener('mouseenter') onMouseEnter() {
      this.highlight('teal')
    }

    @HostListener('mouseleave') onMouseLeave() {
      this.highlight(null)
    }

    private highlight(color:any) {
      this.elem.nativeElement.style.backgroundColor = color
    }
}
