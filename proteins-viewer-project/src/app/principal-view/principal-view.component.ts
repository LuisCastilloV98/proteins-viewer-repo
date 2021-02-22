import { Component, OnInit } from '@angular/core';
import * as NGL from "ngl";

@Component({
  selector: 'app-principal-view',
  templateUrl: './principal-view.component.html',
  styleUrls: ['./principal-view.component.css']
})
export class PrincipalViewComponent implements OnInit {

  princial_view = null;

  constructor() { }

  ngOnInit(): void {
    this.active_principal("viewport");
  }

  active_principal(view_name) {

    this.princial_view = new NGL.Stage(view_name);
    var self = this;
    // Handle window resizing
    window.addEventListener("resize", function (event) {
      self.princial_view.handleResize();
    }, false);

    //Test
    //var shape = new NGL.Shape( "shape", { disableImpostor: true } );
    var shape = new NGL.Shape("shape");
    var sphereBuffer = new NGL.SphereBuffer({
      position: new Float32Array([0, 0, 0]),
      color: new Float32Array([1, 0, 0]),
      radius: new Float32Array([1])
    });
    shape.addBuffer(sphereBuffer);
    //{ opacity: 0.5 }
    var shapeComp = this.princial_view.addComponentFromObject(shape);
    shapeComp.addRepresentation("buffer");
  }

  saveImage(){
    this.princial_view.makeImage({
      factor: 1,
      antialias: false,
      trim: false,
      transparent: false
    }).then(function (blob) {
      NGL.download(blob, "screenshot.png")
    })
  }

  testFuntion(){
    alert("Test");
    this.princial_view.eachComponent(function (o) {
      console.log(o);
    });
  }

  viewCenter(){
    this.princial_view.autoView(1000);
  }

  viewToggleSpin(){
    this.princial_view.toggleSpin();
  }

  viewToggleRock(){
    this.princial_view.toggleRock();
  }

  handleFileInput(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      var file = files.item(index);
      this.load_biomolecular_file(this.princial_view, file);
    }
  }

  handleFileInputPDB(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      var file = files.item(index);
      this.load_pdb_blob_1(this.princial_view, file);
      //this.load_pdb_blob_2(this.princial_view, file);
      //this.load_pdb_blob_3(this.princial_view, file);
    }
  }

  handleFileInputMRC(files: FileList) {
    for (let index = 0; index < files.length; index++) {
      var file = files.item(index);
      this.load_mrc_blob_3(this.princial_view, file);
    }
  }

  load_biomolecular_file(stage, file) {
    var result = stage.loadFile(file, { defaultRepresentation: true });
    console.log(result);
  }

  load_pdb_blob_1(stage, file) {
    var r = new FileReader();
    r.onload = function () {
      alert(r.result);
      var stringBlob = new Blob([r.result], { type: 'text/plain' });
      var result = stage.loadFile(stringBlob, { ext: "pdb", defaultRepresentation: true });
      console.log(result);
    };
    r.readAsBinaryString(file);
  }

  load_pdb_blob_2(stage, file) {
    var r = new FileReader();
    r.onload = function () {
      alert(r.result);
      var stringBlob = new Blob([r.result], { type: 'text/plain' });
      stage.loadFile(stringBlob, { ext: "pdb", defaultRepresentation: true  });
    };
    r.readAsText(file);
  }

  load_pdb_blob_3(stage, file) {
    var r = new FileReader();
    r.onload = function () {
      alert(r.result);
      var stringBlob = new Blob([r.result], { type: 'text/plain' });
      stage.loadFile(stringBlob, { ext: "pdb", defaultRepresentation: true  });
    };
    r.readAsArrayBuffer(file);
  }

  load_mrc_blob_3(stage, file) {
    var r = new FileReader();
    r.onload = function () {
      alert(r.result);
      var binaryBlob = new Blob([r.result], { type: 'application/octet-binary' });
      stage.loadFile(binaryBlob, { ext: "ccp4", defaultRepresentation: true });
    };
    r.readAsArrayBuffer(file);
  }
}
