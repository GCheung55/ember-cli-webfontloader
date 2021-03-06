/* jshint node: true */
'use strict';

module.exports = {
    name: 'ember-cli-webfontloader',

    included(app) {
        this._super.included(app);
        this.app.import('vendor/webfontloader.js', {
            type: 'vendor'
        });
        this.app.import('vendor/webfontloader.shim.js', {
            type: 'vendor',
            exports: { 'webfontloader': ['WebFont'] }
        });
    }

};
