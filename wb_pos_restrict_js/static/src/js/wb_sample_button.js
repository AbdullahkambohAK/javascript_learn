/** @odoo-module **/
/** This code is use for hide the button **/

import { PosGlobalState } from 'point_of_sale.models';
import Registries from 'point_of_sale.Registries';

const PosButtonRestrict = (PosGlobalState) => class PosButtonRestrict extends PosGlobalState{

    async _processData(loaded_data){
        await super._processData(...arguments);
        this.visible_backspace_btn = loaded_data['visible_backspace_btn']
    }
}

Registries.Model.extend(PosGlobalState, PosButtonRestrict)