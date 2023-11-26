import { Component, OnInit } from '@angular/core';
import { CubeService } from '../services/cubes/cube.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cubes:String[] = [];
  constructor(private cubeService: CubeService) { }

  ngOnInit(): void {
    this.cubes = this.cubeService.getAll();
  }

}
