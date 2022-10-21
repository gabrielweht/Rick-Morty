import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public character: any = {}
  public episodes: any = []

  constructor(
    private ruta: ActivatedRoute,
    private characterService: CharactersService
  ) {

    // this.character.episode?.forEach( (url: string) => {
    //   this.characterService.findEpisodes(url).subscribe( (response: any) =>
    //     this.episodes.push({
    //       name: response.name,
    //       air_date: response.air_date,
    //       episode: response.episode
    //     })
    //   )
    // })

  }

  ngOnInit(): void {

    this.ruta.params.subscribe(params => {
      this.characterService.findOneCharacter(params['id'])
      .subscribe( (resp) => {
        console.log(resp);
        this.character = resp
        resp.episode?.forEach( (url: string) => {
          this.characterService.findEpisodes(url).subscribe( (response: any) =>
            this.episodes.push({
              name: response.name,
              air_date: response.air_date,
              episode: response.episode
            })
          )
        })
      })
    })


  }

}
