import {Observable} from 'rxjs';
import {User} from '@learning-nx/data-models';

export interface LayoutDataset {
    user$: Observable<User|null>
}
