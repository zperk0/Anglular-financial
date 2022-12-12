import { InjectionToken } from '@angular/core';
import { createStore, select, withProps } from '@ngneat/elf';
import {
    persistState,
    sessionStorageStrategy,
} from '@ngneat/elf-persist-state';

import { AddRelationshipType } from '../models/add-relationship-type.model';
import { RelationshipTypesListItem } from '../models/relationship-types-list-item.model';

export interface EntitiesRelationshipTypesModel {
    relationshipTypesList: RelationshipTypesListItem[];
    relationshipTypeDetails: AddRelationshipType;
}

const store = createStore(
    {
        name: 'Entities Relationship Types List',
    },
    withProps<EntitiesRelationshipTypesModel>({
        relationshipTypesList: [],
        relationshipTypeDetails: {} as AddRelationshipType,
    })
);

persistState(store, {
    storage: sessionStorageStrategy,
});

export const relationshipTypesList$ = store.pipe(select(({ relationshipTypesList }) => relationshipTypesList));
export const relationshipTypeDetails$ = store.pipe(select(({ relationshipTypeDetails }) => relationshipTypeDetails));


export type EntitiesRelationshipTypesStore = typeof store;
export const ENTITIES_Relationship_Types_LIST_STORE = new InjectionToken<
    ReturnType<typeof createStore>
>('Injection Token For Entities Relationship Types List Store', {
    providedIn: 'root',
    factory: (): EntitiesRelationshipTypesStore => store,
});
