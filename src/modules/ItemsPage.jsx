import '../styles/ItemsPage.css';
import ItemsPageCart from './ItemsPageCart';
import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../main';
import { observer } from 'mobx-react-lite';
import ItemCartSkeleton from './ItemCartSkeleton';
const ItemsPage = () => {
  const { productStore } = useContext(Context);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const handleGetValue = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      await productStore.fetchProducts(search);
      setLoading(false);
    };
    fetchData();
  }, [search, productStore]);

  const filterItems = productStore.products.filter((item) =>
    item.productName.toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <div className="content-itemsPage">
      <div className="content-input">
        <input
          value={search}
          onChange={handleGetValue}
          placeholder="Поиск"
          className="element-input"
          type="text"
        />
      </div>
      <div className="content-cart">
        {loading
          ? Array.from({ length: productStore.products.length }).map((_, index) => (
              <ItemCartSkeleton key={index} />
            ))
          : filterItems.map((res) => (
              <ItemsPageCart
                key={res.id}
                title={res.productName}
                price={res.price}
                image={res.image}
              />
            ))}
      </div>
    </div>
  );
};

export default observer(ItemsPage);
