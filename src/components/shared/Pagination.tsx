"use client";

import { formUrlQuery } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "../ui/button";

type PaginationProps = {
  page: number | string;
  totalPages: number;
  urlParamName?: string;
  galleryRef?: React.MutableRefObject<HTMLElement | null>;
};

function Pagination({
  page,
  totalPages,
  urlParamName,
  galleryRef,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleClick = (btnType: string) => {
    const pageValue = btnType === "next" ? Number(page) + 1 : Number(page) - 1;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || "page",
      value: pageValue.toString(),
    });

    router.push(newUrl, { scroll: false });

    setTimeout(() => {
      if (galleryRef && galleryRef.current) {
        galleryRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
  };

  const handleActive = (currentPage: number) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: urlParamName || "page",
      value: currentPage.toString(),
    });

    router.push(newUrl, { scroll: false });

    setTimeout(() => {
      if (galleryRef && galleryRef.current) {
        galleryRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 250);
  };

  return (
    <div className="flex-center gap-4 mt-10">
      <Button
        variant="outline"
        className="border-2 hover:bg-secondary"
        onClick={() => handleClick("prev")}
        disabled={Number(page) <= 1}
      >
        Previous
      </Button>

      <ul className="flex-center gap-2">
        {[...Array(totalPages)].map((_, index) => {
          const currentPage = index + 1;

          return (
            <li
              key={`number-${index}`}
              className={`${
                currentPage === Number(page)
                  ? "text-white bg-primary"
                  : "bg-secondary text-black"
              } px-3 py-2 text-1 rounded-lg cursor-pointer select-none`}
              onClick={() => handleActive(currentPage)}
            >
              {currentPage}
            </li>
          );
        })}
      </ul>

      <Button
        variant="outline"
        className="border-2 hover:bg-secondary"
        onClick={() => handleClick("next")}
        disabled={Number(page) >= totalPages}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;
