// TODO: Change this to the module way
// import { State } from "model";

import { State } from "../../../../model";
import { Entity } from "../../../../model";

export class FSMService {
    private state: State;

    constructor() {
        this.state = new State();
    }

    public setNewState(): void {

    }

    public update(entity: Entity): void {

    }

    public goToPreviousState(): void {
        
    }
}