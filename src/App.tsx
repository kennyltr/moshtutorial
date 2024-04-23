import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible === true && (
        <Alert onClose={() => setAlertVisible(false)}>Uh oh!</Alert>
      )}
      <Button onClick={() => setAlertVisible(true)}>My Button</Button>
    </div>
  );
}

export default App;
