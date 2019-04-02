import { Component, OnInit } from '@angular/core';
import { Character } from 'src/Character.model';
import { ListCharactersService } from '../list-characters.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];
  searchProperty: string;
  constructor(private _listCharactersService: ListCharactersService,
    private router: Router) { }

  ngOnInit() {
    this.getCharacters();
  }

  searchClicked() {
    this.characters.forEach(character => {
      if(character.name.includes(this.searchProperty)) {
        this.router.navigateByUrl('/characters/'+character.id);
      }
    });
  }

  getCharacters(): void {
    this._listCharactersService.getCharacters()
      .subscribe(getResult => {
        this.characters = getResult.results;
      });
  }
}
