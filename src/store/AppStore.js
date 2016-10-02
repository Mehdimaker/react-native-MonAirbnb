import {observable, toJS} from 'mobx';

class AppStore {
  @observable name = '';
  @observable birthday = new Date();
  @observable gender = 'Homme';
  @observable isHost = false;

  getName(){
    return this.name;
  }

  setName(value){
    this.name = value;
  }

  getValues(){
    return{
      // ici this.name est un Object Mobx (primitif)
      // donc on ajout toJS pour recuperer la vrai valeur
      name: toJS(this.name),
      birthday: toJS(this.birthday),
      gender: toJS(this.gender),
      isHost: toJS(this.isHost),
    }
  }
}

export default new AppStore();
