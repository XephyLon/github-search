import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faAngular, faGithub } from "@fortawesome/free-brands-svg-icons";
import { SearchService } from "src/app/search/search.service";

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent {
  faGithub = faGithub
  faAngular = faAngular

  constructor(private ss: SearchService) {}

  getData(query: string) {
    this.ss.query = query;
    return this.ss.get();
  }
}
