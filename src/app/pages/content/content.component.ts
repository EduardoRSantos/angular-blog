import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {

  photoCover: string = 'https://www.aut.ac.nz/__data/assets/image/0006/92328/placeholder-image10.jpg';
  contentTitle: string = 'MINHA NOTICIAL';
  contentDescription: string = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit."
  +"Architecto incidunt reprehenderit perferendis, officia"
  +"aliquid consequuntur! Necessitatibus quae enim hic suscipit"
  +"explicabo sit porro corrupti quam incidunt beatae. Autem,"
  +"consequatur ipsa'"
}
