import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef ,private renderer:Renderer2) {
    el.nativeElement.style.color="red";
   }
   ngOnInIt(){
    this.renderer.setStyle(this.el.nativeElement,'background-color','red');
  }




  // @HostBinding("style.backgroundColor")bgColor;


  //  @HostListener('mouseover') onMouseOver(){
  //    this.changeColor("blue");
  //    this,this.bgColor="khaki";
  //  }
  //  changeColor(color:string){
  //    this.el.nativeElement.style.color=color;
  //  }
  
  

  //  @HostListener('mouseleave') onMouseleave(){
  //   this.changebackgroundColor("orange");
  // }
  // changebackgroundColor(color:string){
  //   this.el.nativeElement.style.color=color;
  // }

}
