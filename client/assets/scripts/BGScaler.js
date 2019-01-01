//背景图缩放器。用于缩放背景
cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },

        //适配模式
        //
        //
        //
        scaleMethod:0,
    },

    // LIFE-CYCLE CALLBACKS:
    start () {
        //0、居中（居中其实不需要挂这个脚本，浪费效率）
        //1、宽高都根据高度拉伸
        //2、长边充满
        var cvs = cc.find('Canvas').getComponent(cc.Canvas);
        var size = cc.view.getFrameSize();
        //
        var scaleMethod = this.scaleMethod;
        if(scaleMethod == 1){
            if(cvs.fitWidth){
                this.node.height = this.node.width/size.width * size.height;
            }
            else{
                this.node.width = this.node.height/size.height * size.width;
            }
        }
        else if(scaleMethod == 2){
            if(cvs.fitWidth){
                var oldHeight = this.node.height;
                this.node.height = this.node.width/size.width * size.height;
                this.node.width = this.node.height/oldHeight * this.node.width;
            }
            else{
                var oldWidth = this.node.width;
                this.node.width = this.node.height/size.height * size.width;
                this.node.height = this.node.width / oldWidth * this.node.height;
            }
        }
    },

    // update (dt) {},
});
