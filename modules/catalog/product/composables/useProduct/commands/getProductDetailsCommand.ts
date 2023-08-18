import { UseContextReturn } from '~/types/core';
import type { GetProductSearchParams } from '~/modules/catalog/product/types';

export const getProductDetailsCommand = {
  execute: async (context: UseContextReturn, searchParams: GetProductSearchParams, customQuery = { productDetails: 'productDetails' }, customHeaders = {}) => {
    const { data } = await context.app.$vsf.$magento.api.productDetails(searchParams, customQuery, customHeaders);

    return data?.products ?? null;
  },
};
