import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Character } from '../../../models/character';
import { StorageService } from '../../../services/character/storage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-character-form',
  templateUrl: './character-form.component.html',
  styleUrls: ['./character-form.component.scss']
})
export class CharacterFormComponent implements OnInit {

  characterForm!: FormGroup;
  characterId?: number;
  characterToUpdate?: Character;
  isUpdate: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private storageService: StorageService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.extractID();
    if (this.characterId) {
      console.log("in form", this.characterId);
      this.isUpdate = true;
      this.characterToUpdate = this.storageService.getCharacterByID(this.characterId!)
    }
    this.initForm();
  }

  initForm(): void {
    this.characterForm = this.formBuilder.group({
      name: [this.characterToUpdate?.name || '', [Validators.required, Validators.minLength(2)]],
      status: [this.characterToUpdate?.status],
      species: [this.characterToUpdate?.species || ''],
      type: [this.characterToUpdate?.type || ''],
      gender: [this.characterToUpdate?.gender || ''],
      origin: [this.characterToUpdate?.gender || '']/*this.formBuilder.group({})*/,
      location: [this.characterToUpdate?.location || []]/*this.formBuilder.group({})*/,
      image: [this.characterToUpdate?.image || []],
      episode: [this.characterToUpdate?.episode || []]/*this.formBuilder.array([])*/,
      url: [this.characterToUpdate?.url || ''],
      created: [this.characterToUpdate?.created || '']
    });
  }

  extractID(): void {
    this.route.params.subscribe(params => {
      this.characterId = params['id'] ? +params['id'] : undefined;
      console.log(params['id']);
    });
  }

  onSubmit(): void {
    if (this.characterForm.valid) {
      if (this.characterId) {
        this.storageService.updateCharatcter({ id: this.characterId, ...this.characterForm.value });
      }
      else {
        this.storageService.addNewCharacter({ id: this.storageService.ID--, ...this.characterForm.value });
      }
      this.characterForm.reset(); 
      this.location.back();
    }
  }
}
