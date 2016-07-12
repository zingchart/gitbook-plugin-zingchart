var fs = require('fs');
var Q = require('q');
var path = require('path');

var _counter = 1;
var _currentPage;

module.exports = {
    website: {
        assets: "./assets"
    },

    hooks: {
        "page:before": function(page) {
            _currentPage = page;
            return page;
        }
    },

    blocks: {
        zingchart: {
            process: function(block) {
                if (this.output.name === 'website') {
                    var id = 'zingchart-' + _counter++;
                    var div = '<div id="' + id + '"></div>';
                    var args = block.kwargs;

                    var obj = {id: id};
                    if (block.body.trim() !== '') {
                        obj.data = block.body;
                    }

                    for (var key in args) {
                        if (args.hasOwnProperty(key)) {
                            var name = (key === 'src') ? 'dataurl' : key;
                            obj[name] = args[key];
                        }
                    }

                    var script = "<script>zingchart.render(" + JSON.stringify(obj) + ");</script>";
                    return div + script;
                }
                else{
                    return '';
                }
            }
        }
    }
};
