import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  };

  return (
    <div>
      <div className=" flex justify-center items-center justify-between py-4 m-4 ">
        <div className="w-[100%] p-4">
          <img className="w-[200px]" src={item.image} />
        </div>
        <div className=" w-[100%] flex flex-col">
          <h1 className="font-bold">{item.title}</h1>
          <h1 className="max-w-md">{item.description}</h1>
          <div>
            <p>{item.price}</p>
            <div onClick={removeFromCart}>
              <FcDeleteDatabase className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
