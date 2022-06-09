import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListCharactersService  {
  characterSolo: any = null;
  characterArray: any = [];

  constructor(private http: HttpClient) {
    this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5').subscribe(
      (result) => {
        this.characterArray = result;
      },
      (error) => {
        console.log('problemas');
      }
    );
  }



  getArray(){
    return this.characterArray;
  }

  setCharacterSolo(id: number){
    this.characterSolo = this.retornarId(id);
    sessionStorage.setItem('id',id.toString());
  }
  getCharacterSolo(){
    return this.characterSolo;
  }

  retornarId(id:number){
    let list = this.characterArray;
    for (const character of list) {
      if (character.id === id) {
        return character;
      }
    } return null;
  }
}
