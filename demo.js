var SelectedSort = /** @class */ (function () {
    function SelectedSort(list) {
        this.list = list;
    }
    SelectedSort.prototype.getList = function () {
        return this.list;
    };
    SelectedSort.prototype.swapList = function (x, y) {
        var temp = this.list[x];
        this.list[x] = this.list[y];
        this.list[y] = temp;
    };
    SelectedSort.prototype.selectionSort = function () {
        for (var i = 0; i < this.list.length; i++) {
            var minPosition = i;
            for (var j = i + 1; j < this.list.length; j++) {
                if (this.list[j] < this.list[minPosition]) {
                    minPosition = j;
                    this.swapList(i, j);
                    console.log(this.list);
                }
            }
        }
        // console.log(this.list);
    };
    return SelectedSort;
}());
var list = new SelectedSort([1, 9, 4.5, 4]);
list.selectionSort();
