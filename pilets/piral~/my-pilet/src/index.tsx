import { PiletApi } from '../../shells/my-app/dist/emulator/my-app-0.0.1.tgz';
import * as Blazor from './blazor.codegen';
import './my-pilet.styles.css';

export function setup(app: PiletApi) {
    Blazor.initPiralBlazorApi(app);
    Blazor.registerDependencies(app);
    Blazor.registerOptions(app);
    Blazor.registerPages(app);
    Blazor.registerExtensions(app);
    Blazor.setupPilet(app);
}
