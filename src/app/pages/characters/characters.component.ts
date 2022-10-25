import { Component, OnDestroy, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit, OnDestroy{

  public characters: any = [];
  private nameToSearch!: string;
  private charToEmit: any = []

  constructor( private characterService: CharactersService) {}



  ngOnInit(): void {

    this.characterService.nameToSearch$.subscribe(response => {
      this.nameToSearch = response
    })

    if(this.characterService.characters$.length > 0) {
      this.characterService.characters$.subscribe( response => this.characters = response)
    }

    else {
      this.characterService.findCharacters(1, this.nameToSearch || '')
      .subscribe( (resp) => {
        resp.results.map( res => {
            this.characterService.findEpisodes(res.episode[0]).subscribe( (resp) => {
              this.charToEmit.push({
                ...res,
                firstEpisode: resp.name
            })
          })

        }
        )
        this.characterService.characters$.emit(this.charToEmit);
        this.characterService.quantityPages$.emit(resp.info.pages)
      })


      this.characterService.characters$.subscribe( response => {
        this.characters = response
      })
    }


  }


  //hay que hacer que se mantengan los personajes buscados
  ngOnDestroy(): void {
    this.characterService.characters$.emit(this.characters);
  }

}
