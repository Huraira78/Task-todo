// import Image from "next/image";
// import Layout from "./layout";
// import DefaultPage from "@/Components/default/default";

// export default function Home() {
  
//   return <><DefaultPage/>
//   </>;
// }
// page.js
import Layout from "./layout";
import DefaultPage from "@/Components/default/default";
import { Provider } from 'react-redux';
import store from '../Redux/store'; 

export default function Home() {
  return (
    <Provider store={store}>
      <Layout>
        <DefaultPage />
      </Layout>
    </Provider>
  );
}
