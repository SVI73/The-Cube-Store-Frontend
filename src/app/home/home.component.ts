import { Component, OnInit } from '@angular/core';
import { CubeService } from '../services/cubes/cube.service';
import { Cube } from '../shared/models/cube';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cubes:Cube[] = [];
  constructor(private cubeService: CubeService) { }

  ngOnInit(): void {
    this.cubes = this.cubeService.getAll();
  }

}
