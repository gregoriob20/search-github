import { Component, OnInit , Input, ChangeDetectionStrategy} from '@angular/core';
import { User } from 'src/app/models/user.model';
import { Repos } from 'src/app/models/repos.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class UserComponent implements OnInit {
  order: string = 'stargazers_count';
  reverse: boolean = true;
  @Input()
  user: User;

  @Input()
  repos: Repos;

  ngOnInit() {
  }

}
