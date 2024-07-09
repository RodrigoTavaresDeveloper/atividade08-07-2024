import { Suspense } from "react";
import Paths from "./Routes/Paths";

const App = () => {
  return (
    <Suspense>
      <Paths />
    </Suspense>
  );
}
 
export default App
