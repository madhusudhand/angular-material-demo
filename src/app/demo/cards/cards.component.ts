import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @ViewChild('cardContainer') cardContainer;

  cards = [];
  isotopeConfig = '';
  constructor() { }

  ngOnInit() {
    for (var i=0;i<12;i++) {
      this.cards.push({});
    }

    this.isotopeConfig = JSON.stringify({
      itemSelector: '.card',
      percentPosition: 'true',
      masonry: {
        columnWidth: 150
      }
    });
  }

  flip(card){
    card.flip = !card.flip;
    console.log(card.flip);
  }
}
