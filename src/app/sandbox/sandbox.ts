import { Component } from '@angular/core';
import {avatars, places, abstract } from "../data/images"


@Component({
  selector: 'sandbox',
  templateUrl: './sandbox.html',
  styleUrls: ['./sandbox.css']
})
export class Sandbox  {
  
  abstract = abstract;
  avatars = avatars;
  places = places;

}
