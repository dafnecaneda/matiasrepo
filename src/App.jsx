import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <section>
        <h1>Fixed Table header</h1>
        <div class="tbl-header">
          <table cellpadding="0" cellspacing="0" border="0">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Completed Name</th>
                <th>Email</th>
                <th>Savings Bank</th>
              </tr>
            </thead>
          </table>
        </div>
        <div class="tbl-content">
          <table cellpadding="0" cellspacing="0" border="0">
            <tbody>
              <tr>
                <td>AAC</td>
                <td>AUSTRALIAN COMPANY </td>
                <td>$1.38</td>
                <td>+2.01</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default App;
