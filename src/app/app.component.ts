import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public selectedValue: string;

  public myControl = new FormControl();
  public options: string[] = ['One', 'Two', 'Three'];
  public filteredOptions: Observable<string[]>;

  public selectOptions = [
    {name: 'Angular', value: 'angular'},
    {name: 'React', value: 'react'},
    {name: 'Vue', value: 'vue'},
  ]

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
