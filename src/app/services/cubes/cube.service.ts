import { Injectable } from '@angular/core';
import { Cube } from 'src/app/shared/models/cube';
@Injectable({
  providedIn: 'root'
})
export class CubeService {

  constructor() {}

  getAll():Cube[] {
    return [
      {
        id: 1,
        name: "Mf8 Crazy Pyraminx Crystal",
        price: 67.96,
        tags:["Pyraminx", "Crazy Pyraminx"],
        bookmark: false,
        rating: 0,
        imgUrl: "/src/assets/images/cube/crazypyraminxcrystal_3.axd",
        origin: "China"
      }, {
        id: 2,
        name: "Okamoto Official Latch Cube",
        price: 31.99,
        tags:["Latch Cube"],
        bookmark: false,
        rating: 0,
        imgUrl: "/src/assets/images/cube/okamotolatchcubeb1.webp",
        origin:"China"
      }, {
        id: 3,
        name: "QiYi Super Floppy 3x3x1",
        price: 4.41,
        tags:["3x3x1"],
        bookmark: false,
        rating: 0,
        imgUrl: "/src/assets/images/cube/qiyi-super-floppy-3x3x1.webp",
        origin:"China"
      }, {
        id: 4,
        name: "Shengshou Mirror Blocks 3x3x3",
        price: 5.91,
        tags:["3x3x3"],
        bookmark: false,
        rating: 0,
        imgUrl: "/src/assets/images/cube/ShengShou-Mirror-Blocks-3x3-Black-Gold-Stickers.webp",
        origin:"China"
      }, {
        id: 5,
        name: "MoYu RS Skewb (Magnetic)",
        price: 8.46,
        tags:["Skewb", "Magnetic"],
        bookmark: false,
        rating: 0,
        imgUrl: "/src/assets/images/cube/",
        origin:"China"
      }, {
        id: 6,
        name: "YJ YuHu V2 Megaminx (Magnetic)",
        price: 10.99,
        tags:["Megaminx", "Magnetic"],
        bookmark: false,
        rating: 0,
        imgUrl: "/src/assets/images/cube/YJ-YuHu-V2-Megaminx-Magnetic-Stickerless.webp",
        origin: "China"
      }
    ]
  }
}
