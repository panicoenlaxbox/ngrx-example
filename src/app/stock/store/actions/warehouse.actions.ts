import { Action } from '@ngrx/store';
import { Update, Predicate, EntityMap } from '@ngrx/entity';

import { Warehouse } from '../models/warehouse.model';

// const instead enum
export enum WarehouseActionTypes {
  LOAD_WAREHOUSES = '[Warehouse] Load Warehouses',
  ADD_WAREHOUSE = '[Warehouse] Add Warehouse',
  UPSERT_WAREHOUSE = '[Warehouse] Upsert Warehouse',
  ADD_WAREHOUSES = '[Warehouse] Add Warehouses',
  UPSERT_WAREHOUSES = '[Warehouse] Upsert Warehouses',
  UPDATE_WAREHOUSE = '[Warehouse] Update Warehouse',
  UPDATE_WAREHOUSES = '[Warehouse] Update Warehouses',
  MAP_WAREHOUSES = '[Warehouse] Map Warehouses',
  DELETE_WAREHOUSE = '[Warehouse] Delete Warehouse',
  DELETE_WAREHOUSES = '[Warehouse] Delete Warehouses',
  DELETE_WAREHOUSES_BY_PREDICATE = '[Warehouse] Delete Warehouses By Predicate',
  CLEAR_WAREHOUSES = '[Warehouse] Clear Warehouses',
}

export class LoadWarehouses implements Action {
  readonly type = WarehouseActionTypes.LOAD_WAREHOUSES;

  constructor(public payload: { warehouses: Warehouse[] }) { }
}

export class AddWarehouse implements Action {
  readonly type = WarehouseActionTypes.ADD_WAREHOUSE;

  constructor(public payload: { warehouse: Warehouse }) { }
}

export class UpsertWarehouse implements Action {
  readonly type = WarehouseActionTypes.UPSERT_WAREHOUSE;

  constructor(public payload: { warehouse: Warehouse }) { }
}

export class AddWarehouses implements Action {
  readonly type = WarehouseActionTypes.ADD_WAREHOUSES;

  constructor(public payload: { warehouses: Warehouse[] }) { }
}

export class UpsertWarehouses implements Action {
  readonly type = WarehouseActionTypes.UPSERT_WAREHOUSES;

  constructor(public payload: { warehouses: Warehouse[] }) { }
}

export class UpdateWarehouse implements Action {
  readonly type = WarehouseActionTypes.UPDATE_WAREHOUSE;

  constructor(public payload: { warehouse: Update<Warehouse> }) { }
}

export class UpdateWarehouses implements Action {
  readonly type = WarehouseActionTypes.UPDATE_WAREHOUSES;

  constructor(public payload: { warehouses: Update<Warehouse>[] }) { }
}

export class MapWarehouses implements Action {
  readonly type = WarehouseActionTypes.MAP_WAREHOUSES;

  constructor(public payload: { entityMap: EntityMap<Warehouse> }) { }
}

export class DeleteWarehouse implements Action {
  readonly type = WarehouseActionTypes.DELETE_WAREHOUSE;

  constructor(public payload: { id: string }) { }
}

export class DeleteWarehouses implements Action {
  readonly type = WarehouseActionTypes.DELETE_WAREHOUSES;

  constructor(public payload: { ids: string[] }) { }
}

export class DeleteWarehousesByPredicate implements Action {
  readonly type = WarehouseActionTypes.DELETE_WAREHOUSES_BY_PREDICATE;

  constructor(public payload: { predicate: Predicate<Warehouse> }) { }
}

export class ClearWarehouses implements Action {
  readonly type = WarehouseActionTypes.CLEAR_WAREHOUSES;
}

// WarehouseActions
export type WarehouseActionsUnion =
  | LoadWarehouses
  | AddWarehouse
  | UpsertWarehouse
  | AddWarehouses
  | UpsertWarehouses
  | UpdateWarehouse
  | UpdateWarehouses
  | MapWarehouses
  | DeleteWarehouse
  | DeleteWarehouses
  | DeleteWarehousesByPredicate
  | ClearWarehouses;
