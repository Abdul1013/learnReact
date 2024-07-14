import  { ReactNode } from "react";
interface Props{
    children:  ReactNode;
    onClose: ()=> void;

}
const OrderAlert = ({children, onClose } : Props) => {
  return (
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" onClick={onClose} data-bs-dismiss=""></button>
    </div>
  );
};

export default OrderAlert;
