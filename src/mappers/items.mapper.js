const mappers = {
    newAllItems: (items) => {
      try {
        if (items.paging.total === 0) return {};
  
        const results = items.results;
        const filtersAvailable = items.available_filters.filter(
          (filter) => filter.id === "category"
        );
        const categories = filtersAvailable.length > 0 ? filtersAvailable.map((filter) => filter.values)[0]: [];
  
        const newModel = {
          ...author(),
          categories: categories.map((categorie) => categorie.name),
          items: results.map((item) => {
            return {
              ...itemBasic(item),
              city: item.address.city_name,
            };
          }),
        };
  
        return newModel;
      } catch (error) {
        throw new Error(error);
      }
    },
    newItemsByIdWithDescription: (objectItemById, { plain_text }) => {
      try {
        const item = objectItemById;
        const description = plain_text;
  
        const newModel = {
          ...author(),
          item: {
            ...itemBasic(item),
            sold_quantity: item.sold_quantity,
            description,
          },
        };
  
        return newModel;
      } catch (error) {
        throw new Error(error);
      }
    },
  };
  
  const author = () => {
    return {
      author: {
        name: "Lizeth Natalia",
        lastname: "Nuñez Sanchez",
      },
    };
  };
  
  const itemBasic = ({
    id,
    title,
    currency_id,
    price,
    thumbnail,
    condition,
    shipping: { free_shipping },
  }) => {
    return {
      id: id,
      title: title,
      price: {
        currency: currency_id,
        amount: Math.trunc(price),
        decimals: parseFloat(price.toFixed(2).split(".")[1]),
      },
      picture: thumbnail,
      condition: condition,
      free_shipping: free_shipping
    };
  };
  
  module.exports = mappers;
  