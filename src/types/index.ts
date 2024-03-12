/* =======| URL QUERY PARAMS |======= */
export type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

export type RemoveUrlQueryParams = {
  params: string;
  keysToRemove: string[];
};

export type SearchParamProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

/* =======| CATEGORY PARAMS |======= */
export type CreateCategoryParams = {
  categoryName: string;
};

/* =======| PRODUCT PARAMS |======= */
export type GetAllProductsParams = {
  query: string;
  category: string;
  limit: number;
  page: number;
};

export type GetRelatedProductsByCategoryParams = {
  categoryId: string;
  productId: string;
  limit?: number;
  page: number | string;
};

/* =======| ORDER PARAMS |======= */
export type CheckoutOrderParams = {
  productTitle: string;
  productId: string;
  price: string;
  isFree: boolean;
  buyerId: string;
};

export type CreateOrderParams = {
  stripeId: string;
  productId: string;
  buyerId: string;
  totalAmount: string;
  createdAt: Date;
};

export type GetOrdersByProductParams = {
  productId: string;
  searchString: string;
};

export type GetOrdersByUserParams = {
  userId: string | null;
  limit?: number;
  page: string | number | null;
};
