import "./App.css";
import { useToast } from "./hooks/useToast";

function App() {
  const toast = useToast();
  const handleSuccess = () => {
    toast.success("this is a success message");
  };

  const handleWarning = () => {
    toast.warning("this is a warning toast");
  };

  const handleInfo = () => {
    toast.info("this is an info toast");
  };

  const handleError = () => {
    toast.error("this is an error toast");
  };

  return (
    <div className="w-full">
      <h2>Testing Armoire</h2>
      <div className="flex w-3/4  justify-between m-auto">
        <button onClick={handleSuccess}>Success</button>
        <button onClick={handleError}>Error</button>
        <button onClick={handleWarning}>Warning</button>
        <button onClick={handleInfo}>Info</button>
      </div>
    </div>
  );
}

export default App;
