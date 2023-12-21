import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  allowNewServer = false;
  @Output() serverCreated = new EventEmitter<{
    serverName: string, 
    serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{
    serverName: string, 
    serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
    @ViewChild('serverContentInput') serverContentInput!: ElementRef;


ngOnInit(){
  
}

  onAddServer(nameInput: HTMLInputElement){
    console.log(this.serverContentInput)
  this.serverCreated.emit({
    serverName: nameInput.value, 
    serverContent: this.serverContentInput.nativeElement.value
  });
  }

  onAddBlueprint(nameInput: HTMLInputElement){
   this.blueprintCreated.emit({
    serverName: nameInput.value,
    serverContent: this.serverContentInput.nativeElement.value
  })
  }
  constructor(){
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }


}
