import { Component, OnInit } from '@angular/core';
import { Character } from '../../../shared/interfaces/character-interface';
import { MarvelService } from '../../../shared/services/marvel-service.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [],
  templateUrl: './character.component.html',
  styleUrl: './character.component.scss'
})
export class CharacterComponent implements OnInit {
  characters!: Character[];

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  public async getCharacters() {
    try {
      this.characters = await this.marvelService.getCharacters();
    } catch (error){
      console.log(error)
    }
  }
}
