import React, { useState, useEffect } from "react"
import styles from "./productTable.module.scss"
import imgTempl from "./../../assets/icons/img.svg"
import prev from "./../../assets/icons/prev.svg"
import next from "./../../assets/icons/next.svg"
import arrowdown from "./../../assets/icons/arrow-down.svg"
import { Input } from "../input/input"

interface IProduct {
  Name: string;
  Category: string;
  ProductPrice: number;
  Country: string;
  Status: string;
  Image: string;
}

export const ProductTable = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async (query: string, limit: number, page: number) => {
    try {
      const response = await fetch(
        `https://mammoth-testing-api.webinone.com/items?query=${query}&limit=${limit}&page=${page}&prop_ModuleId=2053`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { items: [] };
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(query, limit, page);
      setProducts(data.Items);
    };
    getData();
  }, [query, limit, page]);

  const filteredProducts = products.filter((product: IProduct) => {
    return product.Name.toLowerCase().includes(searchTerm.toLowerCase())
  })
  const totalItems = products.length;
  const totalPages = Math.ceil(totalItems / limit);
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * limit + 1;
  const endIndex = Math.min(currentPage * limit, totalItems);

  const paginatedProducts = filteredProducts.slice(startIndex - 1, endIndex);

  return (
    <div className={styles.productTable}>
      <h3 className={styles.productTable__title}>Product List</h3>
      <p>Review and manage the products available on the marketplace.</p>
      <Input type="text" placeholder="Search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <div className={styles.productTable__table}>
        <table className={styles.table}>
          <thead className={styles.table__header}>
            <tr className={styles["table__header-row"]}>
              <th className={styles.table__headerCell}>Image</th>
              <th className={styles.table__headerCell}>Name</th>
              <th className={styles.table__headerCell}>Category</th>
              <th className={styles.table__headerCell}>Price</th>
              <th className={styles.table__headerCell}>Country</th>
              <th className={styles.table__headerCell}> Marketplace Status</th>
              <th className={styles.table__headerCell}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts ? (
              paginatedProducts.map((product: IProduct, index: number) => (
                <tr key={index}>
                  <td className={styles.table__cell}>
                    {
                      !!product.Image ? <img src={product.Image} alt={`${product.Name}`} width={50} /> : <img src={imgTempl} alt="product templete" />
                    }
                  </td>
                  <td className={styles.table__cell}>{product.Name}</td>
                  <td className={styles.table__cell}> {product.Category}
                  </td>
                  <td className={styles.table__cell}>
                    ${product.ProductPrice}
                  </td>
                  <td className={styles.table__cell}>{JSON.parse(product.Country).join(", ")}</td>
                  <td className={styles.table__cell}>{product.Status}</td>
                  <td className={styles.table__cell}>
                    <div className={styles['table__cell-actions']}>
                      <button className={styles['table__cell-action']}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="40" height="40" rx="5" fill="#E3E8F3" />
                          <g clipPath="url(#clip0_2_425)">
                            <path d="M11 25.25V29H14.75L25.81 17.94L22.06 14.19L11 25.25ZM28.71 15.04C29.1 14.65 29.1 14.02 28.71 13.63L26.37 11.29C25.98 10.9 25.35 10.9 24.96 11.29L23.13 13.12L26.88 16.87L28.71 15.04Z" fill="#363F4F" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_425">
                              <rect width="24" height="24" fill="white" transform="translate(8 8)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <button className={styles['table__cell-action']}>
                        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="40" height="40" rx="5" fill="#E3E8F3" />
                          <g clipPath="url(#clip0_2_442)">
                            <path d="M15 27C15 28.1 15.9 29 17 29H25C26.1 29 27 28.1 27 27V15H15V27ZM28 12H24.5L23.5 11H18.5L17.5 12H14V14H28V12Z" fill="#363F4F" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2_442">
                              <rect width="24" height="24" fill="white" transform="translate(9 8)" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className={styles.table__cell}>No products available.</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className={styles.pagination}>
          <div className={styles.pagination__itemsPerPage}>
            <span>Items per page:{" "}</span>
            <div className={styles.pagination__selectContainer}>
              <select
                className={styles.pagination__select}
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setCurrentPage(1);
                }}
              >
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="50">50</option>
              </select>
              <img src={arrowdown} alt="arrow down" className={styles.pagination__arrow} />
            </div>
          </div>

          <div className={styles.pagination__controls}>
            <span>
              Showing {(currentPage - 1) * limit + 1}-
              {Math.min(currentPage * limit, totalItems)} of {totalItems} items{" "}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              <img src={prev} alt="prev" />
            </button>

            {currentPage}

            <button
              onClick={() => { setCurrentPage((prev) => Math.min(prev + 1, totalPages)) }}
              disabled={currentPage === totalPages}
            >
              <img src={next} alt="next" />
            </button>
          </div>
        </div>
      </div>
      <button className={styles.productTable__button}>Submit</button>
    </div>
  )
}