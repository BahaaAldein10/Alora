import Gallery from "@/components/shared/Gallery";
import Header from "@/components/shared/Header";
import Title from "@/components/shared/Title";
import { getOrdersByUser } from "@/lib/actions/order.actions";
import { IOrder } from "@/lib/database/models/order.model";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";

async function Profile({ searchParams }: SearchParamProps) {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const ordersPage = Number(searchParams?.ordersPage) || 1;

  const orders = await getOrdersByUser({ userId, page: ordersPage });
  const orderedProducts =
    orders?.data.map((order: IOrder) => order.product) || [];

  return (
    <section className="w-full">
      {/* =======| HEADER |======= */}
      <Header />

      <div className="container mt-10">
        {/* =======| TITLE |======= */}
        <Title mainTitle="My" subTitle="Orders" />

        {/* =======| GALLERY |======= */}
        <Gallery
          data={orderedProducts}
          emptyTitle="No Orders Found"
          emptyStateSubtext="You haven't made any orders yet."
          limit={4}
          page={ordersPage}
          totalPages={orders?.totalPages}
          urlParamName="ordersPage"
        />
      </div>
    </section>
  );
}

export default Profile;
