import ReactPopup from 'components/react-popup';

let instance;

export default class ReactPopupCtrl {
  static createInstance(inProps) {
    instance = instance || ReactPopup.newInstance(inProps);
    return instance;
  }
  static show(){
    instance.component.show();
  }
  static hide(){
    instance.component.hide();
  }
}
