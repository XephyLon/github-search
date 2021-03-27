import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import {
  faExternalLinkAlt,
  faEye,
  faGlobe,
  faIdCard,
  faSignInAlt,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
import { User } from "../models/search-response.model";
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
  faGlobe = faGlobe;
  faEye = faEye;
  faSign = faSignInAlt;
  faTwitter = faTwitter;

  
  @Input() dataSource!: User
  
  @HostListener('click') onClick() {
    return window.open(this.dataSource.html_url)
  }
  constructor() {}
}
