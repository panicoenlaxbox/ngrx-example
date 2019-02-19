import { ModalComponent } from './modal/modal.component';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modals: ModalComponent[] = [];

  add(modal: ModalComponent) {
    this.modals.push(modal);
  }

  remove(id: string) {
    this.modals = this.modals.filter(x => x.id !== id);
  }

  open(id: string) {
    const zIndex = 500 + (100 * this.modals.filter(x => x.opened).length);
    this.getModalById(id).open(zIndex);
  }

  private getModalById(id: string): ModalComponent {
    return this.modals.filter(x => x.id === id)[0];
  }

  close(id: string) {
    this.getModalById(id).close();
  }
}
