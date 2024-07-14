import Message from "./components/Message";
import Nav from "./components/Nav";
import Alert from "./components/Alert";
import Button from "./components/Button";
import OrderAlert from "./components/OrderAlert";
import { useState } from "react";

function App() {
  let items = ["Home", "Cart", "Contact", "Profile"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [orderAlertVisible, setOrderAlertVisible] = useState(false);
  return (
    <div>
      <Message />
      <Nav items={items} heading="heading" onSelectItem={handleSelectItem} />
      <Alert>
        hello <span> world </span>
      </Alert>
      {orderAlertVisible && <OrderAlert onClose={() => setOrderAlertVisible(false)}></OrderAlert>}
      <Button color="primary" onClick={() => setOrderAlertVisible(true)}>
        {/* {" "} */}
        Add To Cart
      </Button>
    </div>
  );
}

export default App;
