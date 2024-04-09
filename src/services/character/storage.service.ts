import { Injectable } from '@angular/core';
import { ArryCharacters, Character } from '../../models/character';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  characters: ArryCharacters[] = []
  addCharacters: Character[] = JSON.parse(localStorage.getItem('__add__characters__') || '[]')
  deletedCharactersID: number[] = JSON.parse(localStorage.getItem('__deleted__characters__') || '[]')
  updatedCharacters: Character[] = JSON.parse(localStorage.getItem('__updated__characters__') || '[]')
  countPageInApi: number = 43
  ID: number = -1;


  constructor() { }

  getCharacterByPage(page: number): Character[] | undefined {
    return this.characters.find(p => p.numberPage === page)?.characterInPage;
  }

  addNewCharacter(character: Character): void {
    console.log("in storage", this.addCharacters);
    this.addCharacters.push(character)
    localStorage.setItem('__add__characters__', JSON.stringify(this.addCharacters));

  }

  updateCharatcter(character: Character) {
    this.updatedCharacters.push(character)
    localStorage.setItem('__updated__characters__', JSON.stringify(this.updatedCharacters));
  }

  getCharacterByID(id: number): Character | undefined {
    // Search in the characters array
    for (const page of this.characters) {
      const foundInPage = page.characterInPage.find(character => character.id === id);
      if (foundInPage) {
        return foundInPage;
      }
    }
    // Search in the addCharacters array
    const foundInAddCharacters = this.addCharacters.find(character => character.id === id);
    if (foundInAddCharacters) {
      return foundInAddCharacters;
    }
    return undefined;
  }

  deleteCharacterByID(id: number): void {

    //delete from delete array
    for (const page of this.characters) {
      const foundInPage = page.characterInPage.findIndex(character => character.id === id);
      if (foundInPage !== -1) {
        console.log(foundInPage, "delete");

        page.characterInPage.splice(foundInPage, 1);
        // this.deletedCharactersID.push(foundInPage)
        this.deletedCharactersID.push(id)
        localStorage.setItem('__deleted__characters__', JSON.stringify(this.deletedCharactersID));
      }
    }

    //delete from add array
    const characterIndexInAddCharacters = this.addCharacters.findIndex(character => character.id === id);
    if (characterIndexInAddCharacters !== -1) {
      this.addCharacters.splice(characterIndexInAddCharacters, 1);
      localStorage.setItem('__add__characters__', JSON.stringify(this.addCharacters));

    }

    //delete from update array
    const characterIndexInupdateCharacters = this.updatedCharacters.findIndex(character => character.id === id);
    if (characterIndexInupdateCharacters !== -1) {
      this.updatedCharacters.splice(characterIndexInupdateCharacters, 1);
      localStorage.setItem('__update__characters__', JSON.stringify(this.updatedCharacters));
    }


  }

  // GetNewCharacters(): Character[] {
  //   const storedData = localStorage.getItem('__add__characters__');
  //   if (storedData) {
  //     this.addCharacters = JSON.parse(storedData);
  //   }
  //   return this.addCharacters;
  // }

}
