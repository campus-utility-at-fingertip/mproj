import React, { useState } from "react";
const TransportCommon = (props) => {
  const [data, setData] = useState({
    fullname: "",
    reg: "",
    hireaddress: "",
    address: "",
  });
  const formSubmit = (e) => {
    e.preventDefault();
    var hire = "";
    if (data.hireaddress !== "") {
      hire = `\nYour Hire from address ${data.hireaddress}`;
    }
    alert(
      `Your Name is ${data.fullname} \nYour Registration No is ${data.reg} ${hire} \nYour destination address is ${data.address}`
    );
    setData({
      fullname: "",
      reg: "",
      hireaddress: "",
      address: "",
    });
  };
  const inputEvent = (event) => {
    const { name, value } = event.target;
    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">{props.name} SERVICE REQUEST</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit} action="" autoComplete="off">
              <div class="mb-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Full Name:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={inputEvent}
                  placeholder="Enter your Name "
                />
              </div>
              <div class="mb-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Registration Number
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="reg"
                  value={data.reg}
                  onChange={inputEvent}
                  placeholder="Enter Registration No"
                />
              </div>
              <div
                class="mb-5"
                style={{ display: `${props.name === "BICYCLE" ? "" : "none"}` }}
              >
                <label for="exampleFormControlInput1" className="form-label">
                  Hire From
                </label>
                <input
                  type="address"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="hireaddress"
                  value={data.hireaddress}
                  onChange={inputEvent}
                  placeholder="Enter Address"
                />
              </div>
              <div class="mb-5">
                <label for="exampleFormControlInput1" className="form-label">
                  Destination Address
                </label>
                <input
                  type="address"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="address"
                  value={data.address}
                  onChange={inputEvent}
                  placeholder="Enter Your Address"
                />
              </div>

              <div class="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  REQUEST
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default TransportCommon;
