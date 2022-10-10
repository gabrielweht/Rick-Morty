import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public character: any = {}

  constructor(
    private ruta: ActivatedRoute,
    private characterService: CharactersService
  ) {
    this.ruta.params.subscribe(params => {
      this.characterService.findOneCharacter(params['id'])
      .subscribe( (resp) => {
        console.log(resp);
        this.character = resp
      })
    })
  }

  ngOnInit(): void {
  }

}
