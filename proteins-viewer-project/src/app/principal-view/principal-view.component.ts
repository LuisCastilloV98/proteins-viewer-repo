import { Component, OnInit } from '@angular/core';
import * as NGL from "ngl";

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.active_principal("viewport");
  }

  active_principal(view_name) {

    var stage = new NGL.Stage(view_name);

    // Handle window resizing
    window.addEventListener("resize", function (event) {
      stage.handleResize();
    }, false);

    // Load PDB entry 1CRN
    stage.loadFile("rcsb://1crn", { defaultRepresentation: true });

  }

}
