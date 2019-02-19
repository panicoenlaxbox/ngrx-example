// tslint:disable-next-line: max-line-length
import { Component, ElementRef, Input, OnInit, OnDestroy, Renderer2, HostBinding, Optional, SkipSelf, ViewChild, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  template:
    `<div class="app-modal" [style.zIndex]="zIndex">
            <div class="app-modal-body" #body>
                <ng-content></ng-content>
            </div>
    </div>
    <div class="app-modal-background" [style.zIndex]="zIndex-10" [style.display]="showModalBackground ? 'block': 'none'"></div>`
})

export class ModalComponent implements OnInit, OnDestroy {
  @Input()
  id: string;

  @Input()
  modal: false;

  @ViewChild('body')
  body: ElementRef;

  @HostBinding('style.display') public display = 'none';

  zIndex: number;

  public showModalBackground = true;

  @Input()
  offset = 0;

  public opened = false;

  // tslint:disable-next-line: max-line-length
  constructor(@Inject(DOCUMENT) private document: any, private modalService: ModalService, private el: ElementRef, private renderer: Renderer2, @Optional() @SkipSelf() private parent: ModalComponent) {
  }

  ngOnInit(): void {
    // ensure id attribute exists
    if (!this.id) {
      console.error('modal must have an id');
      return;
    }

    // move element to bottom of page (just before </body>) so it can be displayed above everything else
    this.renderer.appendChild(this.document.body, this.el.nativeElement);

    // close modal on background click
    this.renderer.listen(this.el.nativeElement, 'click', (e: any) => {
      if (e.target.className === 'jw-modal') {
        this.close(true);
      }
    });

    // add self (this modal instance) to the modal service so it's accessible from controllers
    this.modalService.add(this);
  }

  // remove self from modal service when directive is destroyed
  ngOnDestroy(): void {
    this.modalService.remove(this.id);
    this.renderer.destroyNode(this.el.nativeElement);
  }

  // open modal
  open(zIndex: number): void {
    this.zIndex = zIndex;
    this.opened = true;
    // this.renderer.setStyle(this.el.nativeElement, "display", "block");
    this.display = 'block';
    if (!this.parent) {
      this.renderer.addClass(this.document.body, 'jw-modal-open');
    } else {
      this.parent.showModalBackground = false;
      this.position();
    }
  }

  position(): void {
    if (!parent) {
      return;
    }
    let right = this.getRight(this.parent);
    if (this.offset) {
      right += this.offset;
    } else {
      right += this.getWidth(this.parent);
    }
    this.renderer.setStyle(this.body.nativeElement, 'right', right + 'px');
  }

  getRight(modal: ModalComponent): number {
    return parseInt(getComputedStyle(modal.body.nativeElement).right, 10);
  }

  getWidth(modal: ModalComponent): number {
    return parseInt(getComputedStyle(modal.body.nativeElement).width, 10);
  }

  // close modal
  close(dismissed: boolean = false): void {
    if (dismissed && this.modal) {
      return;
    }
    this.opened = false;
    this.display = 'none';
    // this.renderer.setStyle(this.el.nativeElement, "display", "none");
    if (this.parent) {
      this.parent.showModalBackground = true;
      if (dismissed) {
        this.parent.close(dismissed);
      }
    } else {
      this.renderer.removeClass(this.document.body, 'app-modal-open');
    }
  }
}
