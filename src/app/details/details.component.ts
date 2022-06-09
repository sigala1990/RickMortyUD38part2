import { Component, OnInit } from '@angular/core';
import { ListCharactersService } from '../list-characters.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  character: any = [];
  characterArray: any = [];

  constructor(private listCharService: ListCharactersService) {


  }
  ngOnInit(): void {
    this.character = this.listCharService.getCharacterSolo();
    console.log("char " +this.character);

    // for (let index = 0; index < this.character.length; index++) {
    //   const element = this.character[index];
    //   console.log("aqui element :"+element);
    // }

  }

}
