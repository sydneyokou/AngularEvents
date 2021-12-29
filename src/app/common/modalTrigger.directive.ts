import { Directive, OnInit, Inject, ElementRef } from "@angular/core";
import { JQ_TOKEN } from "./jQuery.service";

@Directive({
  selector: "[modal-trigger]" //a directive is an attribute of a component, so it is indicated within []
})
export class ModalTriggerDirective implements OnInit {
  private el: HTMLElement;
  constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any) {
    this.el = ref.nativeElement;
  }

  ngOnInit() {
    this.el.addEventListener("click", (e) => {
      this.$("#simple-modal").modal("show");
    });
  }
}
