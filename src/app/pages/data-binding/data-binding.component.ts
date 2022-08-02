import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  name: string = "Gustavo Ordoño Poma";
  age: number = 42;

  constructor() { }

  ngOnInit(): void {
  }

}
