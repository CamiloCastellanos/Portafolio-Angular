import { Component, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-type-writer',
  templateUrl: './type-writer.component.html',
  styleUrl: './type-writer.component.scss'
})
export class TypeWriterComponent {
  @ViewChild("textElement") textElement!: ElementRef;
  @ViewChild("blinkElement") blinkElement!: ElementRef;
  @Input() wordArray: string[] = [];
  @Input() textColor: string = "black";
  @Input() fontSize: string = "30px";
  @Input() blinkWidth: string = "2px";
  @Input() typingSpeedMilliseconds: number = 300;
  @Input() deleteSpeedMilliseconds: number = 50;
  @Input() classText: string = ''
  private wordIndex = 0;

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.initVariables();
    if (this.wordArray.length > 0 && this.textElement) {
      this.typingEffect();
    }
  }

  private initVariables(): void {
    this.renderer.setStyle(
      this.textElement.nativeElement,
      "color",
      this.textColor
    );

    this.renderer.setStyle(this.textElement.nativeElement, "padding", "0.1em");

    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-width",
      this.blinkWidth
    );
    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "border-right-color",
      this.textColor
    );

    this.renderer.setStyle(
      this.textElement.nativeElement,
      "font-size",
      this.fontSize
    );

    this.renderer.setStyle(
      this.blinkElement.nativeElement,
      "font-size",
      this.fontSize
    );
  }

  private typingEffect(): void {
    const word = this.wordArray[this.wordIndex].split("");
    const loopTyping = () => {
      if (word.length > 0) {
        this.textElement.nativeElement.innerHTML += word.shift();
      } else {
        this.deletingEffect();
        return;
      }
      setTimeout(loopTyping, this.typingSpeedMilliseconds);
    };
    loopTyping();
  }

  private deletingEffect(): void {
    const word = this.wordArray[this.wordIndex].split("");
    const loopDeleting = () => {
      if (word.length > 0) {
        word.pop();
        this.textElement.nativeElement.innerHTML = word.join("");
      } else {
        this.wordIndex = this.wordArray.length > this.wordIndex + 1 ? ++this.wordIndex : 0;
        this.typingEffect();
        return false;
      }
      setTimeout(loopDeleting, this.deleteSpeedMilliseconds);
      return false;
    };
    loopDeleting();
  }
}
