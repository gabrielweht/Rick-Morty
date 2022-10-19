import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  public quantityPages!: number;
  private nameToSearch!: string;
  public actualPage: number = 1;

  onChange(value: number) {
    this.characterService.findCharacters(value, this.nameToSearch || '')
      .subscribe( (resp) => {
      this.characterService.characters$.emit(resp.results);
    })
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }


  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {

    this.characterService.quantityPages$.subscribe(response => {
      this.quantityPages = response
    })
    this.characterService.nameToSearch$.subscribe(response => {
      this.nameToSearch = response
    })
  }

  handleClick(value: any, e: any) {
    e.preventDefault()
    this.actualPage = parseInt(value.value)
    this.onChange(this.actualPage)
  }

  handleNext(e: any) {
    e.preventDefault()
    if(this.actualPage < this.quantityPages) {
      this.actualPage = this.actualPage + 1

      this.onChange(this.actualPage)
    }
  }

  handlePrev(e: any){
    e.preventDefault()
    if(this.actualPage > 1) {
      this.actualPage = this.actualPage - 1
      this.onChange(this.actualPage)
    }
  }

  checkActive(value: any) {
    if(parseInt(value.value) === this.actualPage) return true;
    else return false
  }

}
