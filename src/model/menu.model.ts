export interface ComponentModel {
  key?: string;
  parentKey?: string;
}

export interface MetaModel {
  title?: string;
  icon?: string;
}

export interface MenuModel {
  path?: string;
  component?: ComponentModel;
  meta?: MetaModel;
  children?: MenuModel[];
}
