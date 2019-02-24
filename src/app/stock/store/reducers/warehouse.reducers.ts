import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Warehouse } from '../models/warehouse.model';
import { WarehouseActionsUnion, WarehouseActionTypes } from '../actions/warehouse.actions';

export interface WarehouseState extends EntityState<Warehouse> {
  // additional entities state properties
  selectedWarehouseId: number | null;
}

export const adapter: EntityAdapter<Warehouse> = createEntityAdapter<Warehouse>();

export const initialState: WarehouseState = adapter.getInitialState({
  // additional entities state properties
  selectedWarehouseId: null,
});

// warehouseReducer
export function reducer(state = initialState, action: WarehouseActionsUnion): WarehouseState {
  switch (action.type) {
    case WarehouseActionTypes.ADD_WAREHOUSE:
      return adapter.addOne(action.payload.warehouse, state);

    case WarehouseActionTypes.UPSERT_WAREHOUSE:
      return adapter.upsertOne(action.payload.warehouse, state);

    case WarehouseActionTypes.ADD_WAREHOUSES:
      return adapter.addMany(action.payload.warehouses, state);

    case WarehouseActionTypes.UPSERT_WAREHOUSES:
      return adapter.upsertMany(action.payload.warehouses, state);

    case WarehouseActionTypes.UPDATE_WAREHOUSE:
      return adapter.updateOne(action.payload.warehouse, state);

    case WarehouseActionTypes.UPDATE_WAREHOUSES:
      return adapter.updateMany(action.payload.warehouses, state);

    case WarehouseActionTypes.MAP_WAREHOUSES:
      return adapter.map(action.payload.entityMap, state);

    case WarehouseActionTypes.DELETE_WAREHOUSE:
      return adapter.removeOne(action.payload.id, state);

    case WarehouseActionTypes.DELETE_WAREHOUSES:
      return adapter.removeMany(action.payload.ids, state);

    case WarehouseActionTypes.DELETE_WAREHOUSES_BY_PREDICATE:
      return adapter.removeMany(action.payload.predicate, state);

    case WarehouseActionTypes.LOAD_WAREHOUSES:
      return adapter.addAll(action.payload.warehouses, state);

    case WarehouseActionTypes.CLEAR_WAREHOUSES:
      return adapter.removeAll({ ...state, selectedWarehouseId: null });

    default:
      return state;
  }
}

export const getSelectedWarehouseId = (state: WarehouseState) => state.selectedWarehouseId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of warehouse ids
export const selectWarehouseIds = selectIds;

// select the dictionary of warehouse entities
export const selectWarehouseEntities = selectEntities;

// select the array of warehouses
export const selectAllWarehouses = selectAll;

// select the total warehouse count
export const selectWarehouseTotal = selectTotal;
