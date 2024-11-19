import { observable, action, makeAutoObservable } from "mobx";

export class AppStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable private data: undefined = undefined;

  @action
  setData(value: undefined) {
    this.data = value;
  }

  @action
  getData() {
    return this.data;
  }
}
