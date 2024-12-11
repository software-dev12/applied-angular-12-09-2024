import { signalStoreFeature, type } from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { Friend } from '../../types';

export function withServerFriendData() {
  return signalStoreFeature(
    withEntities({ collection: 'server', entity: type<Friend>() }),
  );
}
