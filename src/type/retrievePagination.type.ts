interface ParamsPagination {
  page: number;
  size: number;
}

export declare type retrievePaginationFunction = (params: ParamsPagination) => Promise<any>
