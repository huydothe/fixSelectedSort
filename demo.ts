class SelectedSort {
    list:number[];

    constructor(list: number[]) {
        this.list = list;
    }
    getList(){
        return this.list;
    }
    swapList(x,y){
        let temp=this.list[x];
        this.list[x]=this.list[y];
        this.list[y]=temp;
    }

    selectionSort(){
        for (let i=0; i<this.list.length; i++){
            let minPosition=i;
            for(let j=i+1; j<this.list.length; j++){
                if(this.list[j]<this.list[minPosition]){
                    minPosition=j;
                    this.swapList(i,j);
                    console.log(this.list)
                }
            }
        }
        // console.log(this.list);
    }
}
let list= new SelectedSort([1, 9, 4.5,4]);
list.selectionSort();
