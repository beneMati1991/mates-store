import Item from "./Item";

const ItemList = ({ itemList }) => {
  return (
    <div className="row row-cols-auto m-auto">
      {itemList.map((item) => (
        <Item key={item.id} item={item}></Item>
      ))}
    </div>
  );
};

export default ItemList;
