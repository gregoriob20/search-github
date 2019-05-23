import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl ,FormGroup,} from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {
  search = new FormGroup({
    name: new FormControl('')
  });
  constructor( private router: Router) { }

  ngOnInit() {
  }
  onSubmit() {
    // redirect at component search the User
    this.router.navigateByUrl('/users/' + this.search.value.name);
  }
}
