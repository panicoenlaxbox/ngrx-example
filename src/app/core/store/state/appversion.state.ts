import { State, Action, StateContext, Selector } from '@ngxs/store';

// Model definition to models file / folder
export interface AppVersionStateModel {
    version: number;
    name: string;
}

// Action definition to file / folder
export class SetAppVersion {
    static readonly type = '[APPVERSION] Set';

    constructor(public payload: AppVersionStateModel) {}
}

@State<AppVersionStateModel>({
    name: 'appversion',
    defaults: {
        version: 1,
        name: 'example'
    }
})

export class AppVersionState {

    @Selector()
    static getAppVersionNumber(state: AppVersionStateModel) {
        return state.version;
    }

    @Selector()
    static getAppVersionName(state: AppVersionStateModel) {
        return state.name;
    }

    @Action(SetAppVersion)
    set({getState, patchState}: StateContext<AppVersionStateModel>, { payload }: SetAppVersion) {
        const state = getState();
        patchState({
            version: payload.version,
            name: payload.name,
        });
    }
}
