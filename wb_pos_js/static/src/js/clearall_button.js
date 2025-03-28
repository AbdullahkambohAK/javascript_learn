odoo.define("wb_pos_js.WBClearAllButton", function (require) {
    "use strict";

    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");
    const { useListener } = require("@web/core/utils/hooks");

    class WBClearAllButton extends PosComponent {

        setup(){
            useListener("click", this.wb_clear_all_lines)
        }

        async wb_clear_all_lines(){

            const { confirmed } = await this.showPopup("ConfirmPopup",{
                title:"Confirm Popup",
                body:"Are you sure want to continue?",
                confirmText:"Yes",
                cancelText:"No"
            });
            if (confirmed){
                console.log("Clicked to Yes Button")

                console.log("wb_clear_all_lines method called............");
                var current_order = this.env.pos.get_order();
                console.log(current_order);
                current_order.orderlines.filter(line=> line.get_product()).forEach(single_line=> current_order.remove_orderline(single_line));

            }
            else{
                console.log("Clicked to No Button")
            }




        }


    }

    WBClearAllButton.template = "WBClearAllButton";

    ProductScreen.addControlButton({
        component: WBClearAllButton,
        position: ["after", "OrderlineCustomerNoteButton"],
    });

    Registries.Component.add(WBClearAllButton);

    return WBClearAllButton;
});
