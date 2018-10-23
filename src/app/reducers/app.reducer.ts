export interface AppVersionState {
    id: number;
    name: string;
}

const initialState: AppVersionState = {
    id: 1,
    name: 'Example'
};

export function appVersionReducer(state = initialState): AppVersionState {
    return state;
}
