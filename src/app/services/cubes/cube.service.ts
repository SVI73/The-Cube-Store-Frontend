import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CubeService {

  constructor() {}

  getAll():String[] {
    return [
      '/assets/images/cube/crazypyraminxcrystal_1.axd',
      '/assets/images/cube/crazypyraminxcrystal_2.axd',
      '/assets/images/cube/crazypyraminxcrystal_3.axd',
      '/assets/images/cube/evgeniybuttoncube_1.axd',
      '/assets/images/cube/evgeniybuttoncube_2.axd',
      '/assets/images/cube/evgeniybuttoncube_3.axd'
    ]
  }
}
