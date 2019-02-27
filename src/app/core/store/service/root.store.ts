import { Injectable } from '@angular/core';
import { Store } from 'rxjs-observable-store';

// State definition to its own file
export class RootState {
    appVersion: { version: number, name: string } = { version: 1, name: 'example' };
}

@Injectable({providedIn: 'root'})
export class RootStore extends Store<RootState> {

    constructor() {
        super(new RootState());
    }

    setAppVersion(appVersion: { version: number, name: string }): void {
        this.setState({
            ...this.state,
            appVersion: { version: appVersion.version, name: appVersion.name }
        });
    }
}
