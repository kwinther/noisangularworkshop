import { Component, OnInit } from '@angular/core';
import { Character } from 'src/Character.model';
import { ListCharactersService } from '../list-characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  character: Character;
  constructor(private _listCharacterService: ListCharactersService, private route: ActivatedRoute) {
   }

  ngOnInit() {
    this.getCharacter();

  }

  setMyStyles() {
    let styles = {
      'background-color': this.character.status ==="Dead" ? 'red' : 'green',
    };
    return styles;
  }

  getCharacter(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._listCharacterService.getCharacter(id)
      .subscribe(character => {
        this.character = character;
      });
  }
}
