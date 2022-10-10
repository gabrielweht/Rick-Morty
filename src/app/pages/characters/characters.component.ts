import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  public characters: any = [];

  constructor( private characterService: CharactersService) { }

  ngOnInit(): void {

    this.characterService.findCharacters()
      .subscribe( (resp) => {
        console.log(resp.results);
        this.characters = resp.results;
      })

  }

}
