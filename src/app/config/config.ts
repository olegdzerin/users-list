import { AbstractControl, ValidationErrors } from "@angular/forms";

export interface User {
   id: number;
   name: string;
   username: string;
   email: string;
   role: string;
   phone: string;
   website: string;
   age?: number;
   urlImg?: string
};

export interface ValidatorFn {
   (control: AbstractControl): ValidationErrors | null
 };

 export interface ValFn {
    (con: string): Number
 }