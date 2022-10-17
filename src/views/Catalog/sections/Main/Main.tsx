  import {
  ChevronDown,
  ChevronForward,
  ChevronBack,
} from "@styled-icons/ionicons-outline";
import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";
import { BarProgress, CircularProgress } from "../../../../components/Loaders";
import ArticleCard from "../../components/ArticleCard";
import { QUERY_LIMIT } from "../../constants";
import { CatalogCard } from "../../types";
import getContentfulCatalog from "../../utils/getContentfulCatalog";
import { FILTERS } from "./constants";

export type MainProps = {
  services: CatalogCard[];
  totalCount: number;
  defaultFilter?: string;
};

const Main: React.FC<MainProps> = ({
  services,
  totalCount: initialTotalCount,
  defaultFilter,
}) => {
  const [page, setPage] = useState(0);
  const [filterValue, setFilterValue] = useState(
    defaultFilter || FILTERS[0].value
  );
  const [totalCount, setTotalCount] = useState(initialTotalCount);
  const [renderServices, setRenderServices] = useState(services);
  const [loading, setLoading] = useState(false);
  const hasPrevPage = page > 0;
  const hasNextPage = totalCount > (page + 1) * QUERY_LIMIT;
  const totalPages = Math.floor(totalCount / QUERY_LIMIT);

  const handleFilterChange = async (
    e?: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setLoading(true);
    const inputValue = e?.target.value;
    setFilterValue(inputValue || FILTERS[0].value);
    const result = await getContentfulCatalog({
      page: 0,
      limit: QUERY_LIMIT,
      category: inputValue,
    });
    if (result?.items?.length) {
      setRenderServices([...result.items]);
      setTotalCount(result.totalCount);
      setPage(0);
    }
    document.getElementById("catalogo")?.scrollIntoView();
    setLoading(false);
  };

  const handleChangePage = async (newPage: number) => {
    setLoading(true);
    const result = await getContentfulCatalog({
      page: newPage,
      limit: QUERY_LIMIT,
      category: filterValue,
    });
    if (result?.items?.length) {
      setRenderServices(result.items);
      setPage(newPage);
      setTotalCount(result.totalCount);
    }
    document.getElementById("catalogo")?.scrollIntoView();
    setLoading(false);
  };

  return (
    <section id="catalogo" className="pb-8">
      {loading && <BarProgress className="fixed top-0 z-50" />}
      <div className="container mx-auto flex flex-col items-center pt-24 px-6 pb-6 md:px-8 lg:pt-36">
        <div className="w-full md:flex flex-row justify-between items-center mb-6 sm:mb-12">
          <h1 className="font-h1 text-center md:text-start">Catálogo</h1>
          {/* Category filter */}
          <div className="flex flex-col relative mt-4">
            <label htmlFor="filter" className="pl-2">
              Categoría
            </label>
            <select
              value={filterValue}
              onChange={handleFilterChange}
              name="filter"
              className="appearance-none min-w-[200px] hover:cursor-pointer text-left pt-1.5 pb-2 pr-8 pl-4 text-2xl border border-solid border-dark-600 rounded-xl"
            >
              {FILTERS.map((filter, i) => (
                <option key={`catalog-filter-${i}`} value={filter.value}>
                  {filter.label}
                </option>
              ))}
            </select>
            <ChevronDown
              size={14}
              className="absolute right-0 bottom-0 mb-4 mr-4  pointer-events-none"
            />
          </div>
        </div>
        {/* Articles list */}
        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {renderServices.map((service) => {
            return (
              <Link
                href={`/servicios/${service.category}/${service.slug}/`}
                key={service.id}
                passHref
              >
                <a className="flex">
                  <ArticleCard service={service} />
                </a>
              </Link>
            );
          })}
        </div>
        <div className="flex self-end flex-row items-center mt-6">
          {loading && <CircularProgress size={24} className="mr-4" />}
          {/* Navigation */}
          <div className="flex flex-row items-center justify-between py-5 cursor-pointer">
            <button
              id="navigation-prev"
              onClick={() => handleChangePage(page - 1)}
              disabled={!hasPrevPage}
              className={clsx({
                "text-secondary-300": hasPrevPage,
                "text-gray-300": !hasPrevPage,
              })}
            >
              <ChevronBack size={32} />
            </button>

            <p className="font-sans text-xl mx-8">
              {`${(page + 1).toString().padStart(2, "0")} 
              / 
             ${totalPages.toString().padStart(2, "0")}`}
            </p>

            <button
              id="navigation-forward"
              onClick={() => handleChangePage(page + 1)}
              className={clsx({
                "text-secondary-300": hasNextPage,
                "text-gray-300": !hasNextPage,
              })}
            >
              <ChevronForward size={32} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
