import { ToastContainer } from "react-toastify";
import ContentForm from "./components/ContentForm";

function App() {
  return (
    <>
      <ContentForm></ContentForm>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
