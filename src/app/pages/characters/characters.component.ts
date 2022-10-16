import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy{

  public characters: any = [];

  constructor( private characterService: CharactersService) { }



  ngOnInit(): void {

    if(this.characterService.characters$.length > 0) {
      this.characterService.characters$.subscribe( response => this.characters = response)
    }

    else {
      this.characterService.findCharacters()
      .subscribe( (resp) => {
        this.characterService.characters$.emit(resp.results);
      })

      this.characterService.characters$.subscribe( response => this.characters = response)
    }


  }


  //hay que hacer que se mantengan los personajes buscados
  ngOnDestroy(): void {
    this.characterService.characters$.emit(this.characters);
  }

}
