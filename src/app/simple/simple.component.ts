import { Component } from "@angular/core";
//import * as faker from 'faker';
import { SortableSpec, DraggedItem } from "@angular-skyhook/sortable";

interface SimpleData {
    id: number;
    name: string;
    height: number;
}

@Component({
    selector: 'app-simple-sortable',
    styleUrls: ['./simple.component.scss'],
    templateUrl: './simple.component.html',
})
export class SimpleComponent {

    //    fake = () => faker.fake('{{hacker.adjective}} the {{hacker.abbreviation}} {{hacker.noun}}')

    // you need data types that have a unique value, like SimpleData.id
    list: SimpleData[] = [
        { id: 1, name: 'Name 1', height: 1 },
        { id: 2, name: 'Name 2', height: 2 },
        { id: 3, name: 'Name 3', height: 1 },
        { id: 4, name: 'Name 4', height: 4 },
        { id: 5, name: 'Name 5', height: 8 },
        { id: 6, name: 'Name 6', height: 3 }
    ];

    // for holding modifications while dragging
    tempList: SimpleData[] = this.list;

    move(item: DraggedItem<SimpleData>) {
        // shallow clone the list
        // do this so we can avoid overwriting our 'saved' list.
        const temp = this.list.slice(0);
        // delete where it was previously
        temp.splice(item.index, 1);
        // add it back in at the new location
        temp.splice(item.hover.index, 0, item.data);
        return temp;
    }

    simpleSpec: SortableSpec<SimpleData> = {
        type: "PRIORITY",
        // trackBy is required
        trackBy: x => x.id,
        hover: item => {
            this.tempList = this.move(item)
        },
        drop: item => { // save the changes
            this.tempList = this.list = this.move(item);
        },
        endDrag: _item => { // revert
            this.tempList = this.list;
        }
    }

}