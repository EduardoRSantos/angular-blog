import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {

  @Input()
  photoCover: string = "https://www.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg";
  @Input()
  cardTitles: string = "Saiu a nova versão do Angular";
  @Input()
  cardDescription: string = " Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  + "Architectonostrum at hic recusandae perferendis sapiente quisquam aliquam,"
  + "blanditiis, suscipit consectetur porro eius corporis veniam corrupti "
  + "earum ea beatae magnam consequatur?";

  constructor() {}
}
