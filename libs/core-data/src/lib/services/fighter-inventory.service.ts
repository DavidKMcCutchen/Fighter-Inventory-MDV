import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Fighter } from "@fighter-inventory/api-interfaces";

const BASE_URL = 'http://localhost:3000/';


@Injectable({
  providedIn: 'root'
})
export class FighterInventoryService {
  model = 'fighters'

  constructor(private httpClient: HttpClient ) {}

  all() {
    return this.httpClient.get<Fighter[]>(this.getUrl());
  };

  find(fighterId: string) {
    return this.httpClient.get<Fighter>(this.getUrlById(fighterId))
  };

  create(fighters: Fighter) {
    return this.httpClient.post<Fighter>(this.getUrl(), fighters)
  };

  update(fighters: Fighter) {
    return this.httpClient.patch<Fighter>(this.getUrlById(fighters.id), fighters)
  };

  delete({ id}: Fighter) {
    return this.httpClient.delete<Fighter>(this.getUrlById(id))
  };

  private getUrl() {
    return `${BASE_URL}${this.model}`
  }

  private getUrlById(id) {
    return `${this.getUrl()}/${id}`
  }
}
