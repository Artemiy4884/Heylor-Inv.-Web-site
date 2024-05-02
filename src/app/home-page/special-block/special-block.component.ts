import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-special-block',
  templateUrl: './special-block.component.html',
  styleUrls: ['./special-block.component.css']
})
export class SpecialBlockComponent {
  @Input() title: string = "";
  @Input() image: string = "";
  @Input() text: string = "";
}
