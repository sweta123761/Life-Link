import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">Life Link</Link>
            <div>
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex flex-row gap-3">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/banks">Blood Banks</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/needed">Blood Needed</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/donor">Become Donor</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/donors">View Donors</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/banks" element={<NearbyBanks />} />
            <Route path="/needed" element={<BloodNeeded />} />
            <Route path="/donor" element={<BecomeDonor />} />
            <Route path="/donors" element={<ViewDonors />} />
          </Routes>
        </div>

        <footer className="bg-light text-center p-3">
          © 2025 Life Link. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

function Dashboard() {
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };
  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };
  const handleButtonEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.1)";
  };
  const handleButtonLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  return (
    <div className="text-center" style={{ backgroundColor: "#f8f9fa", minHeight: "100vh", padding: "30px" }}>
      <div className="d-flex align-items-center justify-content-center flex-wrap my-5">
        <div className="me-4 mb-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZEquO3pmpzQVn3sTIsIlq1Y6ZkqMQjmYXw&s"
            alt="Blood Donation"
            style={{ width: "100px", height: "100px" }}
          />
        </div>
        <div>
          <h2 className="mb-4 fw-bold text-danger">❤️ LifeLink</h2>
          <p className="text-muted mb-5">Tracking Blood Requests and Donations</p>
        </div>
      </div>

      <div className="row my-4">
        {["🔴 Emergency Blood Request", "📍 Nearby Donor Discovery", "🏥 Blood Bank Locator"].map((title, i) => (
          <div key={i} className="col-md-4">
            <div className="card mb-3 shadow-sm bg-danger text-white" style={{ transition: "transform 0.3s" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <div className="card-body text-center">
                <h5 className="card-title mb-3 fw-bold text-warning">{title}</h5>
                <p className="card-text">Feature description placeholder</p>
                <button className="btn btn-light mt-3" onMouseEnter={handleButtonEnter} onMouseLeave={handleButtonLeave}>Action</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="row my-4">
        <div className="col-md-6">
          <div className="card text-white bg-success mb-3 shadow" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-header">Raised</div>
            <div className="card-body">
              <h5 className="card-title">120 Units</h5>
              <p className="card-text">Total Blood Raised</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div className="card text-white bg-warning mb-3 shadow" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="card-header">Pending</div>
            <div className="card-body">
              <h5 className="card-title">30 Requests</h5>
              <p className="card-text">Still Needing Attention</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mb-4 shadow" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="card-header bg-dark text-white">Goal Progress</div>
        <div className="card-body">
          <h5 className="card-title">Goal: 200 Units</h5>
          <div className="progress mb-2" style={{ height: "20px" }}>
            <div className="progress-bar progress-bar-striped progress-bar-animated bg-success" style={{ width: "60%" }}>60%</div>
          </div>
          <p className="card-text">We're getting closer!</p>
        </div>
      </div>
    </div>
  );
}

function NearbyBanks() {
  return (
    <div>
      <h2>Nearby Blood Banks</h2>
      <p className="text-muted">Find blood banks near you.</p>
      <div className="alert alert-info">Google Maps integration coming soon...</div>
    </div>
  );
}

function BloodNeeded() {
  return (
    <div>
      <h2>Urgent Blood Needed</h2>
      <ul className="list-group my-3">
        <li className="list-group-item list-group-item-danger">O+ needed at City Hospital</li>
        <li className="list-group-item list-group-item-danger">A- needed at General Hospital</li>
        <li className="list-group-item list-group-item-danger">B+ needed at Central Blood Bank</li>
      </ul>
    </div>
  );
}

function BecomeDonor() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const donorData = {
      name: e.target.fullName.value,
      bloodGroup: e.target.bloodGroup.value,
      phone: e.target.phoneNumber.value,
    };

    fetch('http://localhost:5000/api/donors', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(donorData)
    })
      .then(res => res.json())
      .then(data => {
        alert('Donor registered successfully!');
      })
      .catch(err => {
        alert('Failed to register donor.');
      });
  };

  return (
    <div>
      <h2>Become a Donor</h2>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <input type="text" name="fullName" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="col-md-6">
          <input type="text" name="bloodGroup" className="form-control" placeholder="Blood Group" required />
        </div>
        <div className="col-12">
          <input type="tel" name="phoneNumber" className="form-control" placeholder="Phone Number" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-danger">Submit</button>
        </div>
      </form>
    </div>
  );
}

function ViewDonors() {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/donors')
      .then(res => res.json())
      .then(data => setDonors(data))
      .catch(err => console.error("Error fetching donors", err));
  }, []);

  return (
    <div>
      <h2>Registered Donors</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Blood Group</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor, idx) => (
            <tr key={idx}>
              <td>{donor.name}</td>
              <td>{donor.bloodGroup}</td>
              <td>{donor.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;