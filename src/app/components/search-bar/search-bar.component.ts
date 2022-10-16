import { Component, EventEmitter, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})

export class SearchBarComponent implements OnInit {

  names: any = []
  responses: any = {}
  value$: string = ''

  constructor(private searchComponent: CharactersService) { }

  ngOnInit(): void {
  }

  search(event: any) {

    this.value$ = event.target.value

    this.searchComponent.searchCharacter(event.target.value.trim()).subscribe(results => {
      if(event.target.value === '') this.names = []
      else this.names = results.results.slice(0, 10).map( char => {
        return {
          name: char.name,
          id: char.id
        }
      });
      this.responses = results.results
    })

  }

  goToCharacterId(){
    this.names = []
    this.value$ = ''
  }

  searchCharacters(){
    this.searchComponent.characters$.emit(this.responses)
    this.names = []
    this.value$ = ''
  }

}
