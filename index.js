var _counter = 1;

module.exports = {
    website: {
        assets: "./assets"
    },

    blocks: {
        zingchart: {
            process: function(block) {
                if (this.output.name === 'website') {
                    var id = 'zingchart-' + _counter++;
                    var div = '<div id="' + id + '"></div>';
                    var args = block.kwargs;
                    var width = '';
                    var height = '';
                    if (args && args.width) {
                        width = ', width:' + args.width;
                    }

                    if (args && args.height) {
                        height = ', height:' + args.height;
                    }

                    var script = "<script>zingchart.render({ id: '" + id + "', data: " + JSON.stringify(block.body) + width + height + "});</script>";
                    return div + script;
                }
                else{
                    return '';
                }
            }
        }
    }
};
