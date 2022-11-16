import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @ViewChild('asMenu') menu!: ElementRef;

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  activeMenu(){
    const asMenu = this.menu.nativeElement
    this.renderer2.addClass(asMenu, "menuActive")
    this.renderer2.removeClass(asMenu, "elementsRight")
  }

}
