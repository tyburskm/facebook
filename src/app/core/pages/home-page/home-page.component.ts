import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  allPosts = [
    {
      id: "asd123",
      body: "whooah!",
      author: {
        name: "admin admin"
      },
      images: [
        "https://picsum.photos/200/100"
      ]
    },
    {
      id: "qwe321",
      body: "omg!",
      author: {
        name: "user user"
      },
      images: [
        "https://picsum.photos/200/100"
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
