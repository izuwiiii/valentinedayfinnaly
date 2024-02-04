import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-valent-page',
  standalone: true,
  imports: [],
  templateUrl: './valent-page.component.html',
  styleUrl: './valent-page.component.scss'
})
export class ValentPageComponent {
  
  constructor(private router: Router) {}
  
  phrases: string[] = [
    'No',
    'Are you sure?',
    'Really sure?',
    'Pookie please',
    "Don't do this to me",
    "I'm gonna cry...",
    "You're breaking my heart ;("
  ]

  gifUrl: string = 'https://media1.tenor.com/m/al4a1pG1f8YAAAAC/jump-bear.gif';

  yesClicked() {
    this.router.navigateByUrl('Yes')
  }

  width: number = 100;
  height: number = 100;
  fSize: number = 26;
  padding: number = 20;
  i: number = 0;
  curPhrase: string = this.phrases[0]

  noClicked(event: any) {
    const buttonElement: HTMLElement = event;

    this.width += 50
    this.height += 50
    this.fSize += 30

    buttonElement.style.width = this.width+'px'
    buttonElement.style.height = this.height+'px'
    buttonElement.style.fontSize = this.fSize+'px'
    buttonElement.style.padding = this.padding+'px'
    this.i++
    for (let ph of this.phrases) {
      console.log(this.i)
      if (this.curPhrase = ph) {
        this.curPhrase = this.phrases[this.i]
      }
      if (this.i > this.phrases.length - 1) {
        this.i = 0
      }
    }
  }
}
