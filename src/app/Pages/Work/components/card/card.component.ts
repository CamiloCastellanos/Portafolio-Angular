import { Component, Input } from '@angular/core';
import { Work } from '../../../../models/Work.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() language: string = 'es';
  @Input() workList: Work[] = [];
  textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  ngOnChanges() {
    this.textButton = this.language == 'es' ? 'Página de la Empresa' : 'Company Page'
  }
}
