import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as NGL from "ngl";

@Component({
  selector: 'app-proteins-view',
  templateUrl: './proteins-view.component.html',
  styleUrls: ['./proteins-view.component.css']
})
export class ProteinsViewComponent implements OnInit, AfterViewInit{

  code = `/* tslint:disable */
  import { Component } from '@angular/core';
   
  @Component({
    selector: 'demo',
    templateUrl: './demo.component.html',
    styleUrls: ['./demo.component.scss']
  })
  export class DemoComponent {
    switchStatus: boolean = true;
  }`
  
  pdb_list = [
    ["viewport_bio_1", "1crn", [this.code, this.code]],
    ["viewport_bio_2", "100d", [this.code]],
    ["viewport_bio_3", "6pm0", [this.code, this.code]],
    ["viewport_bio_4", "230d", [this.code, this.code]],
    ["viewport_bio_5", "234l", [this.code]],

  ]

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    this.pdb_list.forEach(element => {
      this.active_pdb(element[0], element[1]);
    });
  }

  active_pdb(view_name, pdb_id) {
    var stage = new NGL.Stage(view_name);

    // Handle window resizing
    window.addEventListener("resize", function (event) {
      stage.handleResize();
    }, false);


    // Load PDB entry 1CRN
    stage.loadFile("rcsb://" + pdb_id, { defaultRepresentation: true });
  }



}
