import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import {
  faExternalLinkAlt,
  faIdCard,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-result-card',
  templateUrl: './result-card.component.html',
  styleUrls: ['./result-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultCardComponent {
  faExternal = faExternalLinkAlt;
  faIdCard = faIdCard;
  faStar = faStar;
  
  @Input() profilePicture!: string;
  @Input() name!: string;
  @Input() followerCount!: number;
  @Input() starCount!: number;
  @Input() description!: string;
  @Input() profileUrl!: string;
  
  @HostListener('click') onClick() {
    return window.open(this.profileUrl)
  }
  constructor() {}
}
