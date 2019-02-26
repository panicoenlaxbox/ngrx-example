import { Injectable } from '@angular/core';
import { Store } from 'rxjs-observable-store';
import { RootState } from './root.state';

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
