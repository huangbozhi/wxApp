const Grid = require('./grid.js');

function GameManager(size, startTiles = 2) {
    this.size = size;
    this.startTiles = startTiles
}
GameManager.prototype = {
    setup: function() {
        this.grid = new Grid(this.size);
        // 随机添加方块
        this.addStartTiles();
        return this.grid.cells;
    },
    addStartTiles(){
        // 调用次数
        for(let i=0;i<this.startTiles;i++){
            this,addRandomTiles()
        }
    },
    addRandomTiles(){
        // 添加方块
        //  1.位置  2.数值
        const value = Math.random() < 0.9 ? 2 : 4
        // grid 有数据，知道
        const position = this.grid.randomAvailablecell()
    }
}


module.exports = GameManager;