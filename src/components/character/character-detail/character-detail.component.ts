import { Component, Input } from '@angular/core';
import { Character } from '../../../models/character';
import { ActivatedRoute, Router } from "@angular/router";
import { StorageService } from '../../../services/character/storage.service';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrl: './character-detail.component.scss'
})
export class CharacterDetailComponent {
  @Input() character: Character | undefined;
  @Input() showButtons: boolean = true;
  characterId?: number;
  constructor(
    private router: Router,
    private storageService: StorageService,
    public dialog: MatDialog
  ) { }

  delete() {
    console.log("id", this.character?.id);
    this.storageService.deleteCharacterByID(this.character!.id!)
  }

  navigateForm() {
    this.router.navigate(['/character/update', this.character?.id]);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: this.character,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      result && this.storageService.deleteCharacterByID(result);
    });
  }
}
