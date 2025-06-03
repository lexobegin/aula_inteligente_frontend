import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  //constructor() { }
  private message = '';
  private title = 'Sistema';
  private success = true;

  setToast(message: string, success = true, title = 'Sistema') {
    this.message = message;
    this.success = success;
    this.title = title;
  }

  getToast() {
    return {
      message: this.message,
      title: this.title,
      success: this.success,
    };
  }

  clearToast() {
    this.message = '';
    this.title = 'Sistema';
    this.success = true;
  }
}
