# -*- coding: utf-8 -*-
# from odoo import http


# class WbPosRestrictJs(http.Controller):
#     @http.route('/wb_pos_restrict_js/wb_pos_restrict_js', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/wb_pos_restrict_js/wb_pos_restrict_js/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('wb_pos_restrict_js.listing', {
#             'root': '/wb_pos_restrict_js/wb_pos_restrict_js',
#             'objects': http.request.env['wb_pos_restrict_js.wb_pos_restrict_js'].search([]),
#         })

#     @http.route('/wb_pos_restrict_js/wb_pos_restrict_js/objects/<model("wb_pos_restrict_js.wb_pos_restrict_js"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('wb_pos_restrict_js.object', {
#             'object': obj
#         })
