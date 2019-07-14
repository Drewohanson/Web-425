/*
============================================
; Title:  hennessy-assignment-1.4.ts
; Author: Professor Krasso
; Date:   13 July 2019
; Modified By: Drew Hanson
; Description: TypeScript
;===========================================
*/

let firstName: string = 'Drew';
let lastName: string = 'Hanson';

function myName(firstName: string, lastName: string): string{
    return 'Hello I am' + firstName + ' ' + lastName;
};

console.log(myName(firstName, lastName));
