import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { CommonService } from '../shared/services/common.service';
import {
  DEFAULT_CURRENCY,
  DEFAULT_LANGUAGE,
  DEFAULT_SUBREGION,
  DEFAULT_OPTIONS_ARRAY,
  DEFAULT_NAME,
  KEY_NAME,
} from '../shared/utils/constants';

/**
 * @title CountriesTable
 */
@Component({
  selector: 'app-countriesTable',
  styleUrls: ['./countriesTable.component.scss'],
  templateUrl: './countriesTable.component.html',
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-360deg)' })),
      transition('rotated => default', animate('2000ms ease-out')),
      transition('default => rotated', animate('2000ms ease-in')),
    ]),
  ],
})
export class CountriesTableComponent implements AfterViewInit, OnInit {
  isFilterApplied = false;
  filters = <any>[];
  inputVal: any;
  filterDictionary = new Map<string, string>();
  state: string = 'default';

  constructor(private _commonService: CommonService) {}

  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  columnsToDisplay = [
    KEY_NAME.name,
    KEY_NAME.capital,
    KEY_NAME.subregion,
    KEY_NAME.currencies,
    KEY_NAME.languages,
  ];

  refreshData() {
    this.state = this.state === 'default' ? 'rotated' : 'default';
    this.resetAllFilters();
    this.fetchCountriesList();
  }

  ngOnInit(): void {
    this.fetchCountriesList();
  }

  fetchCountriesList() {
    this._commonService.getCountriesList().subscribe(
      (response) => {
        this.dataSource.data = response;
        this.dataSource.paginator = this.paginator;
        this.setSorting();
        this.populateSelectFilters();
        this.dataSource.filterPredicate = function (record: any, filter) {
          var map = new Map(JSON.parse(filter));
          let isMatch = false;
          for (let [key, value] of map) {
            if (key === KEY_NAME.currencies || key === KEY_NAME.languages) {
              isMatch =
                DEFAULT_OPTIONS_ARRAY.includes(String(value)) ||
                record[key as keyof any].some((el: any) => el.name === value);
            } else {
              isMatch =
                DEFAULT_OPTIONS_ARRAY.includes(String(value)) ||
                record[key as keyof any] == value ||
                record[key as keyof any]
                  .split(' ')
                  .join('')
                  .toLowerCase()
                  .includes(value);
            }
            if (!isMatch) return false;
          }
          return isMatch;
        };
      },
      (err) => {
        console.log('error in fetching');
      }
    );
  }

  populateSelectFilters() {
    this.filters = [];
    let newCurrenciesArr = this.dataSource.data.map((item: any) =>
      item.currencies.map((el: any) => el.name)
    );
    let currienciesOptions = [...new Set(newCurrenciesArr.flat())];
    currienciesOptions.unshift(DEFAULT_CURRENCY);
    let newLanguagesArr = this.dataSource.data.map((item: any) =>
      item.languages.map((el: any) => el.name)
    );
    let languagesOptions = [...new Set(newLanguagesArr.flat())];
    languagesOptions.unshift(DEFAULT_LANGUAGE);
    let subregionOptions = [
      ...new Set(this.dataSource.data.map((el: any) => el.subregion)),
    ];
    subregionOptions.unshift(DEFAULT_SUBREGION);
    this.filters.push({
      name: KEY_NAME.subregion,
      options: subregionOptions,
      defaultValue: DEFAULT_SUBREGION,
    });
    this.filters.push({
      name: KEY_NAME.currencies,
      options: currienciesOptions,
      defaultValue: DEFAULT_CURRENCY,
    });
    this.filters.push({
      name: KEY_NAME.languages,
      options: languagesOptions,
      defaultValue: DEFAULT_LANGUAGE,
    });
  }

  applyFilter(ob: any, filter: any) {
    this.isFilterApplied = true;
    this.filterDictionary.set(
      filter.name,
      ob.value ||
        (ob.target as HTMLInputElement)?.value
          .trim()
          .split(' ')
          .join('')
          .toLowerCase() ||
        ''
    );

    var jsonString = JSON.stringify(
      Array.from(this.filterDictionary.entries())
    );

    this.dataSource.filter = jsonString;
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  setPillFilter(value: any, name: any) {
    this.applyFilter({ value: value }, { name: name });
    let requiredFilter = this.filters.find((el: any) => el.name === name);
    requiredFilter.defaultValue = value;
  }

  setSorting() {
    this.dataSource.sort = this.sort;
    const sortState: Sort = { active: 'name', direction: 'asc' };
    this.sort.active = sortState.active;
    this.sort.direction = sortState.direction;
    this.sort.sortChange.emit(sortState);
  }

  resetAllFilters() {
    this.populateSelectFilters();
    this.applyFilter(
      { value: DEFAULT_SUBREGION },
      { name: KEY_NAME.subregion }
    );
    this.applyFilter(
      { value: DEFAULT_CURRENCY },
      { name: KEY_NAME.currencies }
    );
    this.applyFilter({ value: DEFAULT_LANGUAGE }, { name: KEY_NAME.languages });
    this.applyFilter({ value: DEFAULT_NAME }, { name: KEY_NAME.name });
    this.isFilterApplied = false;
    this.inputVal = '';
  }
}
