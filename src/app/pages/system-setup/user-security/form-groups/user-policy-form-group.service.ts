import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Injectable } from '@angular/core';
import { UserPolicy } from '../models/user-policy.model';

@Injectable({
    providedIn: 'root',
})
export class UserPolicyFormGroup {
    fg: FormGroup;
    constructor(public fb: FormBuilder) { }

    getFormGroup(item?: UserPolicy): FormGroup {
        this.fg = this.fb.group({
            isComplexPasswordForced: new FormControl(item?.isComplexPasswordForced || null, [Validators.required]),
            isChangePasswordForced: new FormControl(item?.isChangePasswordForced || null, [Validators.required]),
            minPasswordLength: new FormControl(item?.minPasswordLength || null, [Validators.required]),
            maxTrialsBeforeLockingLength: new FormControl(item?.maxTrialsBeforeLockingLength || null, [Validators.required]),
            numberOfDays: new FormControl(item?.numberOfDays || null, [Validators.required]),
        });
        return this.fg;
    }

    getValueFromFormGroup(fg: FormGroup): UserPolicy {
        return {
            isComplexPasswordForced: fg.controls.isComplexPasswordForced.value,
            isChangePasswordForced: fg.controls.isChangePasswordForced.value,
            minPasswordLength: fg.controls.minPasswordLength.value,
            maxTrialsBeforeLockingLength: fg.controls.maxTrialsBeforeLockingLength.value,
            numberOfDays: fg.controls.numberOfDays.value
        };
    }
}