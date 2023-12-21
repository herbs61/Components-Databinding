import { Component,OnInit, Input, ViewEncapsulation,OnChanges, SimpleChange, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';


@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated   // None, Native
})
export class ServerElementComponent implements OnInit, OnChanges,
DoCheck, AfterContentInit,AfterContentChecked, AfterViewInit, AfterViewChecked ,OnDestroy{
  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name!: string
  @ViewChild("heading") header!: ElementRef;
  @ContentChild('contentParagraph') paragraph!: ElementRef

  constructor(){
    console.log('constructor called');
    this.element = {type: '', name: '', content: ''};
    
  }
 
  ngOnChanges(changes: SimpleChanges){
    console.log('ngOnChanges called');
    console.log(changes);
  }

  ngOnInit(){
    console.log('ngonInit called');
    console.log("Text Content: " + this.header)
    console.log('Text Content of paragraph: ' + this.paragraph);
  }
  ngDoCheck() {
    console.log('ngDoCheck called!');
  }
  ngAfterContentInit() {
    console.log('ngAferContentInit called');
    console.log('Text Content of paragraph: ' + this.paragraph.nativeElement.textContent);
  }
  ngAfterContentChecked(){
    console.log('ngAfterContentChecked called');
  }
  ngAfterViewInit() {
    console.log('ngAferViewInit called');
    console.log("Text Content: " + this.header.nativeElement.textContent)
   
  }
  ngAfterViewChecked(){
    console.log('ngAfterViewChecked called');
  }
  ngOnDestroy(){
    console.log('ngOnDestroy called');
  }
 
}
