import React, { useState, useEffect } from "react"
import styles from "./productTable.module.scss"
import img from "./../../assets/icons/img.svg"
import { Input } from "../input/input"
export const ProductTable = () => {
  const [products, setProducts] = useState<any>([]);
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);

  const fetchData = async (query: string, limit: number, page: number) => {
    try {
      const response = await fetch(
        `https://mammoth-testing-api.webinone.com/items?query=${query}&limit=${limit}&page=${page}&prop_ModuleId=2053`
      );
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error('Error fetching data:', error);
      return { items: [] };
    }
  };


  useEffect(() => {
    const getData = async () => {
      const data = await fetchData(query, limit, page);
      setProducts(data.items);
    };
    getData();
  }, [query, limit, page]);
  console.log(products);
  return (
    <div className={styles.productTable}>
      <h3 className={styles.productTable__title}>Product List</h3>
      <p>Review and manage the products available on the marketplace.</p>
      <Input type="text" placeholder="Search" />
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
        {/* <tbody>
          {products && products.Items && products.Items.length > 0 ? (
            products.Items.map((product: any) => (
              <tr key={product.id}>
                <td className={styles.table__cell}>
                  <img src={product.imageUrl} alt={`Image of ${product.name}`} />
                </td>
                <td className={styles.table__cell}>{product.name}</td>
                <td className={styles.table__cell}>{product.category}</td>
                <td className={styles.table__cell}>
                  {new Intl.NumberFormat().format(product.price)}
                </td>
                <td className={styles.table__cell}>{product.country}</td>
                <td className={styles.table__cell}>{product.marketplaceStatus}</td>
                <td className={styles.table__cell}>
                  <button>Edit</button>
                  <button>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td >No products available.</td>
            </tr>
          )}
        </tbody> */}
        <tbody className={styles.table__body}>
          <tr>
            <td className={styles.table__cell}><img src={img} alt="img" /></td>
            <td className={styles.table__cell}>$100</td>
            <td className={styles.table__cell}>Category 1</td>
            <td className={styles.table__cell}>10</td>
            <td className={styles.table__cell}>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td className={styles.table__cell}><img src={img} alt="img" /></td>
            <td className={styles.table__cell}>$200</td>
            <td className={styles.table__cell}>Category 2</td>
            <td className={styles.table__cell}>20</td>
            <td className={styles.table__cell}>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td className={styles.table__cell}><img src={img} alt="img" /></td>
            <td className={styles.table__cell}>$300</td>
            <td className={styles.table__cell}>Category 3</td>
            <td className={styles.table__cell}>30</td>
            <td className={styles.table__cell}>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button className={styles.productTable__button}>Submit</button>
    </div>
  )
}