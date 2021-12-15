import { Injectable } from "@angular/core";

declare let toastr: any;

@Injectable()
export class ToastrService {
  success(message: String, title?: string) {
    toastr.success(message, title);
  }
  info(message: String, title?: string) {
    toastr.info(message, title);
  }
  warning(message: String, title?: string) {
    toastr.warning(message, title);
  }
  error(message: String, title?: string) {
    toastr.error(message, title);
  }
}
