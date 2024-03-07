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

/* =======| CATEGORY PARAMS |======= */
export type CreateCategoryParams = {
  categoryName: string;
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
