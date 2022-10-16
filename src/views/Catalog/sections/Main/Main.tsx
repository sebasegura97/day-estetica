import { ChevronDown } from "@styled-icons/ionicons-outline";
import Image from "next/image";
import { useState } from "react";
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
  defaultFilter
}) => {
  const [page, setPage] = useState(1);
  const [filterValue, setFilterValue] = useState(defaultFilter || FILTERS[0].value);
  const [totalCount, setTotalCount] = useState(initialTotalCount);
  const [renderServices, setRenderServices] = useState(services);
  const hasNextPage = totalCount > page * QUERY_LIMIT;

  const handleFilterChange = async (
    e?: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilterValue(e?.target.value || FILTERS[0].value);
    const result = await getContentfulCatalog({
      page: 0,
      limit: QUERY_LIMIT,
      category: e?.target.value,
    });
    if (result?.items?.length) {
      setRenderServices([...result.items]);
      setTotalCount(result.totalCount);
      setPage(1);
    }
  };

  const handleSeeMore = async () => {
    const result = await getContentfulCatalog({
      page,
      limit: QUERY_LIMIT,
      category: filterValue,
    });
    if (result?.items?.length) {
      setRenderServices([...renderServices, ...result.items]);
      setPage((page) => page + 1);
      setTotalCount(result.totalCount);
    }
  };

  return (
    <div className="flex flex-col items-center pt-24  lg:pt-36  pb-8 md:px-8">
      <div className="container mx-auto md:flex flex-row justify-between items-center  mb-12">
        <h1 className="font-h1 text-center md:text-start">Catalogo</h1>
        <div className="flex flex-col relative">
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
      <div className="container  mx-auto grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {renderServices.map((service) => {
          return (
            <article
              key={service.id}
              className="w-80 flex flex-col sm:w-full max-w-6xl mx-auto pb-6 border-b border-primary-50 md:border-none"
            >
              <div className="relative w-full h-52 rounded-xl overflow-hidden mr-4 shrink-0">
                <Image
                  alt={service.title}
                  src={`https:${service.heroImage.fields.file.url}`}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="flex h-full justify-between flex-col items-start">
                <div>
                  <h3 className="font-serif text-2xl font-bold mt-4 mb-1 ">
                    {service.title}
                  </h3>
                  <p className="font-body">{service.shortDescription}</p>
                </div>

                <button className="btn-primary py-1 px-8 float-right mt-4 self-end">
                  Ver mas
                </button>
              </div>
            </article>
          );
        })}
      </div>
      {hasNextPage && (
        <button className="text-link block" onClick={handleSeeMore}>
          Siguiente
        </button>
      )}
    </div>
  );
};

export default Main;
