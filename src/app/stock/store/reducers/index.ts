import {
  createSelector,
  createFeatureSelector,
  ActionReducerMap,
} from '@ngrx/store';
import * as fromWarehouse from './warehouse.reducers';

export interface StockState {
  warehouses: fromWarehouse.WarehouseState;
}

export const reducers: ActionReducerMap<StockState> = {
  warehouses: fromWarehouse.reducer
};

export const selectWarehouseState = createFeatureSelector<fromWarehouse.WarehouseState>('warehouses');

export const selectWarehouseIds = createSelector(
  selectWarehouseState,
  fromWarehouse.selectWarehouseIds
);
export const selectWarehouseEntities = createSelector(
  selectWarehouseState,
  fromWarehouse.selectWarehouseEntities
);
export const selectAllWarehouses = createSelector(
  selectWarehouseState,
  fromWarehouse.selectAllWarehouses
);
export const selectWarehouseTotal = createSelector(
  selectWarehouseState,
  fromWarehouse.selectWarehouseTotal
);
export const selectCurrentWarehouseId = createSelector(
  selectWarehouseState,
  fromWarehouse.getSelectedWarehouseId
);

export const selectCurrentWarehouse = createSelector(
  selectWarehouseEntities,
  selectCurrentWarehouseId,
  (warehouseEntities, warehouseId) => warehouseEntities[warehouseId]
);
