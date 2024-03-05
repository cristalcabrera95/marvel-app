import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { DataContainer, DataWrapper } from '../interfaces/general-interface';
import { Character } from '../interfaces/character-interface';


@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  readonly apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  public async getCharacters(): Promise<Character[]> {
    const url = `${this.apiUrl}/characters`;
    try {
      const { data: { results } } = await firstValueFrom(this.http.get<DataWrapper<DataContainer<Character>>>(url, {
        params: { limit: 50}
      }));
      return results;
    } catch (error) {
      console.error('Error fetching Marvel characters:', error);
      throw error;
    }
  }
}
