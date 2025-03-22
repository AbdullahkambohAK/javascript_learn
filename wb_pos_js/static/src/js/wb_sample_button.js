odoo.define("wb_pos_js.WBSampleButton", function (require) {
    "use strict";

    const PosComponent = require("point_of_sale.PosComponent");
    const ProductScreen = require("point_of_sale.ProductScreen");
    const Registries = require("point_of_sale.Registries");
    const { useListener } = require("@web/core/utils/hooks");
    const core = require("web.core");
    var _t = core._t;

    class WBSampleButton extends PosComponent {

        setup(){
            useListener("click", this.wb_sample_button_click)
        }

        async wb_sample_button_click(){

            // This code is use for search dynamic language using with like domain and controller side define here
            var multi_lang = await this.rpc({
                route:"/pos/rpc/example",
                params:{},
            })

            console.log("Language ------>", multi_lang);

            var multi_lang_list = [];

            multi_lang.forEach(function(value){
                multi_lang_list.push({"id":value.id,
                "label":value.name,
                "item":value});
            });

            console.log(multi_lang_list)

            var {confirmed, payload: selectedOption} = await this.showPopup("SelectionPopup", {
                title: "Active Languages!",
                list: multi_lang_list
            })

            console.log(confirmed, selectedOption)

            // This code is use for search the language using with like domain
//            var result = await this.rpc({
//                'model': "res.lang",
//                "method": "search_read",
//                "args":[[],['id','name','code']],
//            });


            // This code is use for search the language controller side and define here
//            var result = await this.rpc({
//                route: '/pos/rpc/example',
//                params: {}
//            });
//
//            console.log(result);
//
//            result.forEach(function(value){
//                console.log("Record------>",value);
//            })

            // This code is use for simple error popup message
//            this.showPopup("ErrorPopup",{
//                title: this.env._t("Error Message"),
//                body:this.env._t("The simple Error message screen.")
//            });

            // This code is use for confirmed popup message
//            const { confirmed } = await this.showPopup("ConfirmPopup",{
//                title:"Confirm Popup",
//                body:"Are you sure want to continue?",
//                confirmText:"Yes",
//                cancelText:"No"
//            });
//            if (confirmed){
//                console.log("Clicked to Yes Button")
//            }
//            else{
//                console.log("Clicked to No Button")
//            }

            // This code is use for Warning popup message
//            this.showPopup("OfflineErrorPopup",{
//                title:"Odoo Error",
//                body:"Hey this is test popup screen don't take seriously!"
//            });

            // This code is use for Selection popup message
//            const { confirmed, payload: selectedOption } = await this.showPopup("SelectionPopup",{
//                title:"Are you good JS developer ?",
//                list:[{ 'id':1, 'label':"Yes", 'item':"You pressed Yes"},
//                       { 'id':2, 'label':"No", 'item':"You pressed No"},
//                       { 'id':3, 'label':"Not Sure", 'item':"You pressed Not Sure"}]
//            });
//
//            console.log(confirmed);
//            console.log(selectedOption);

            // This code is use for Close popup message
//            const info = await this.env.pos.getClosePosInfo();
//            this.showPopup("ClosePosPopup",{
//                info:info,
//                keepBehind:true
//            });

            console.log("Hello this is button click event pressed............");
        }


    }

    WBSampleButton.template = "WBSampleButton";

    ProductScreen.addControlButton({
        component: WBSampleButton,
        position: ["before", "OrderlineCustomerNoteButton"],
    });

    Registries.Component.add(WBSampleButton);

    return WBSampleButton;
});
