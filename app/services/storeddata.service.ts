import { Injectable } from '@angular/core';
import { Ngo } from './../shared/ngo.model';

@Injectable({
  providedIn: 'root'
})
export class StoreddataService {

  ngo = new Ngo();
 
  constructor() { }
}
