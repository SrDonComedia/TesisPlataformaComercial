import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

export const extModules = environment.production ? [] :
    StoreDevtoolsModule.instrument({
        maxAge: 25,
    });