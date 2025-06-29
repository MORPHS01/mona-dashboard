import { ContextProvider } from "@/contexts/ContextProvider";
import MobileSidebar from "./navigation/mobilesidebar";
import Sidebar from "./navigation/sidebar";
import FilterModal from "./modals/filterModal";
import { ToastContainer, Bounce } from "react-toastify";

type ModifiedChildrenProps = {
  children: React.ReactNode;
};

export default function ModifiedChildren(props: ModifiedChildrenProps) {
  const { children } = props;
  return (
    <ContextProvider>
      <main className="flex items-start max-w-screen">
        <Sidebar />
        <MobileSidebar />
        <div className="flex-1 overflow-hidden">{children}</div>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          toastClassName="!min-w-fit !px-6 !py-4 !z-[10000] !bg-[#0B6B2B] !text-[#ffffff]"
        />
        <FilterModal />
      </main>
    </ContextProvider>
  );
}
