import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PracticeServiceService {

  constructor() { }

    ServicePractice() : String {
      return "Invoked from practice-service.ts just to hands on ANGULAR SERVICE and I am using this service in practice component ";
    }
}
