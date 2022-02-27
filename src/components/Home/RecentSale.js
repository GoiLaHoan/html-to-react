import React from "react";
import { Link } from "react-router-dom";
const RecentSale = () => {
  return (
    <div>
      <div className="container-fluid pt-4 px-4">
        <div className="bg-light text-center rounded p-4">
          <div className="d-flex align-items-center justify-content-between mb-4">
            <h6 className="mb-0">Recent Salse</h6>
            <Link to="/">Show All</Link>
          </div>
          <div className="table-responsive">
            <table className="table text-start align-middle table-bordered table-hover mb-0">
              <thead>
                <tr className="text-dark">
                  <th scope="col">
                    <input className="form-check-input" type="checkbox" />
                  </th>
                  <th scope="col">Date</th>
                  <th scope="col">Invoice</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Amount</th>
                  <th scope="col">Status</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <Link className="btn btn-sm btn-primary" to="/">
                      Detail
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <Link className="btn btn-sm btn-primary" to="/">
                      Detail
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <Link className="btn btn-sm btn-primary" to="/">
                      Detail
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <Link className="btn btn-sm btn-primary" to="/">
                      Detail
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input className="form-check-input" type="checkbox" />
                  </td>
                  <td>01 Jan 2045</td>
                  <td>INV-0123</td>
                  <td>Jhon Doe</td>
                  <td>$123</td>
                  <td>Paid</td>
                  <td>
                    <Link className="btn btn-sm btn-primary" to="/">
                      Detail
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecentSale;
