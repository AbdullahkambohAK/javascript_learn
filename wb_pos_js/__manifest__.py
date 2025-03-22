# -*- coding: utf-8 -*-
{
    'name': "wblearn Point of Sale JS Tutorial",

    'summary': """
        Short (1 phrase/line) summary of the module's purpose, used as
        subtitle on modules listing or apps.openerp.com""",

    'description': """
        Long description of module's purpose
    """,

    'author': "My Company",
    'wbsite': "https://www.yourcompany.com",
    'category': 'Point of Sale',
    'version': '0.1',
    'depends': ['point_of_sale'],

    'data': [
        # 'security/ir.model.access.csv',
    ],

    'demo': [
        'demo/demo.xml',
    ],

    'assets': {
        'point_of_sale.assets': [
            "wb_pos_js/static/src/js/wb_sample_button.js",
            "wb_pos_js/static/src/xml/wb_sample_button.xml",
            "wb_pos_js/static/src/js/clearall_button.js",
            "wb_pos_js/static/src/xml/cleareall_button.xml",
        ],
    }
}
