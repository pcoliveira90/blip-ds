import IconService from '../src/services/icon-service';
import BLIPIconSet from './icons';

export function Init() {
  IconService.registerSet(BLIPIconSet, {
    name: "bds"
  });
}

export default Init;