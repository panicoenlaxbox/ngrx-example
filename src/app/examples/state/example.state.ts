import { State, Action, StateContext, Selector } from '@ngxs/store';

// Action definition to file / folder
export class IncrementCounter {
    static readonly type = '[Example] Increment counter';

    constructor() {}
}

export class DecrementCounter {
    static readonly type = '[Example] Decrement counter';

    constructor() {}
}

@State<number>({
    name: 'counter',
    defaults: 0
})

export class ExampleState2 {

    @Selector()
    static getCounter(state: number) {
        return state;
    }

    @Action(IncrementCounter)
    increment(ctx: StateContext<number>) {
        const state = ctx.getState();
        ctx.setState(state + 1);
    }

    @Action(DecrementCounter)
    decrement(ctx: StateContext<number>) {
        const state = ctx.getState();
        ctx.setState(state - 1);
    }
}
