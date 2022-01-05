import { Directive } from "@angular/core";
import { Validator, FormGroup } from "@angular/forms";

@Directive({
  selector: "[validateLocation]"
})
export class LocationValidator implements Validator {
  validate(formGroup: FormGroup): { [key: string]: any } {
    let addressControl = formGroup.controls["address"];
    let cityControl = formGroup.controls["city"];
    let countryControl = formGroup.controls["country"];
    let onlineUrlControl = (<FormGroup>formGroup.root).controls["onlineUrl"];

    if (
      (addressControl &&
        addressControl.value &&
        cityControl &&
        cityControl.value &&
        countryControl &&
        countryControl.value) ||
      (onlineUrlControl && onlineUrlControl.value)
    ) {
      return null; //means that there is no problem
    } else {
      return { validateLocation: false }; //validator failing -> we get a validation error
    }
  }
}
