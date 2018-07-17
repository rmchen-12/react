import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import Header from "../component/header";
import Footer from "../component/footer";
import Table from "../page/table";

// export default class RouteMap extends React.Component {
//   updateHandle() {
//     console.log("router已经改变了");
//   }

//   render() {
//     return (
//       <Router>
//         <React.Fragment>
//           <Header />
//           <main>
//             <Switch>
//               <Route path="/" exact component={Table} />

//               <Redirect path="/" component={Table} />
//             </Switch>
//           </main>
//           <Footer />
//         </React.Fragment>
//       </Router>
//     );
//   }
// }
const Routes = () => (
  <Router>
    <React.Fragment>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Table} />

          <Redirect path="/" component={Table} />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  </Router>
);

export default Routes;
