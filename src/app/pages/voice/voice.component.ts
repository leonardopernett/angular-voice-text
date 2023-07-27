import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
import { VoiceService } from 'src/app/services/voice.service';

@Component({
  selector: 'app-voice',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
  templateUrl: './voice.component.html',
  styleUrls: ['./voice.component.scss']
})
export class VoiceComponent {

  @ViewChild('voice', { static: true }) voice!: ElementRef;
  isVisible:boolean = false

  constructor(
    public voiceService:VoiceService
  ) { }

  ngOnInit(): void {
    this.voiceService.init()
    this.voice.nativeElement.focus()
    console.log('ejecutandose')
  }

  recognitionStart(){
      this.voiceService.start()
      this.voice.nativeElement.focus()
      
  }

  recognitionStop(){
    this.voiceService.stop()
    this.voiceService.text =""
  }

  searchData(value:string){
    console.log(value)
  }

}
