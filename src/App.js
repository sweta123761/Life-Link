import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Navbar */}
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
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container my-4 flex-grow-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/banks" element={<NearbyBanks />} />
            <Route path="/needed" element={<BloodNeeded />} />
            <Route path="/donor" element={<BecomeDonor />} />
          </Routes>
        </div>

        {/* Footer */}
        <footer className="bg-light text-center p-3">
          © 2025 Life Link. All rights reserved.
        </footer>
      </div>
    </Router>
  );
}

// Dashboard Page
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
  {/* Left side: Image */}
  <div className="me-4 mb-3" style={{ animation: "fadeInLeft 1s" }}>
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZEquO3pmpzQVn3sTIsIlq1Y6ZkqMQjmYXw&s"
      alt="Blood Donation"
      style={{ width: "100px", height: "100px" }}
    />
  </div>

  {/* Right side: Text */}
  <div style={{ animation: "fadeInRight 1s" }}>
    <h2 className="mb-4 fw-bold text-danger">❤️ LifeLink</h2>

    <p className="text-muted mb-5">Tracking Blood Requests and Donations</p>
  </div>
</div>

{/* Features Section */}
<div className="row my-4">
  {[
    { title: "🔴 Emergency Blood Request", desc: "Raise a real-time SOS for urgent blood needs based on blood type, hospital location, and urgency level.", button: "Request Now", bg: "bg-danger" },
    { title: "📍 Nearby Donor Discovery", desc: "Find verified donors nearby matching your required blood group and availability.", button: "Find Donors", bg: "bg-danger" },
    { title: "🏥 Blood Bank Locator", desc: "Search nearby blood banks with available units, distance, contact info, and working hours.", button: "Locate Banks", bg: "bg-danger" },
  ].map((item, index) => (
    <div key={index} className="col-md-4">
      <div
        className={`card mb-3 shadow-sm feature-card ${item.bg} text-white`}
        style={{ transition: "transform 0.3s", cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-body text-center">
          <h5 
            className="card-title mb-3 fw-bold text-warning" 
            style={{ animation: "fadeInUp 1s ease-in-out" }}
          >
            {item.title}
          </h5>
          <p className="card-text">{item.desc}</p>
          <button
            className="btn btn-light mt-3"
            style={{ transition: "all 0.3s" }}
            onMouseEnter={handleButtonEnter}
            onMouseLeave={handleButtonLeave}
          >
            {item.button}
          </button>
        </div>
      </div>
    </div>
  ))}
</div>


      {/* Raised and Pending Section */}
      <div className="row my-4">
        <div className="col-md-6">
          <div
            className="card text-white bg-success mb-3 shadow"
            style={{ transition: "transform 0.3s", cursor: "pointer" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-header">Raised</div>
            <div className="card-body">
              <h5 className="card-title">120 Units</h5>
              <p className="card-text">Total Blood Raised</p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <div
            className="card text-white bg-warning mb-3 shadow"
            style={{ transition: "transform 0.3s", cursor: "pointer" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="card-header">Pending</div>
            <div className="card-body">
              <h5 className="card-title">30 Requests</h5>
              <p className="card-text">Still Needing Attention</p>
            </div>
          </div>
        </div>
      </div>

      {/* Goal Progress */}
      <div
        className="card mb-4 shadow"
        style={{ transition: "transform 0.3s", cursor: "pointer" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="card-header bg-dark text-white">Goal Progress</div>
        <div className="card-body">
          <h5 className="card-title">Goal: 200 Units</h5>
          <div className="progress mb-2" style={{ height: "20px" }}>
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style={{ width: "60%" }}
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              60%
            </div>
          </div>
          <p className="card-text">We're getting closer!</p>
        </div>
      </div>
    </div>
    
  );
}





      {/* Recent Donations */}
      <div className="card mb-4">
        <div className="card-header">Recent Donations</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">John Doe - 2 Units</li>
          <li className="list-group-item">Jane Smith - 1 Unit</li>
          <li className="list-group-item">Mike Johnson - 3 Units</li>
        </ul>
      </div>

      {/* Top Donors */}
      <div className="card mb-4">
        <div className="card-header">Top Donors</div>
        <div className="card-body">
          <h5 className="card-title">🏆 Sarah Williams</h5>
          <p className="card-text">Donated 10 Units</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="my-4">
        <button className="btn btn-primary mx-2">Request Blood</button>
        <button className="btn btn-danger mx-2">Donate Now</button>
      </div>
  


// Nearby Blood Banks Page
function NearbyBanks() {
  return (
    <div>
      <h2>Nearby Blood Banks</h2>
      <p className="text-muted">Find blood banks near you.</p>
      <div className="alert alert-info">Google Maps integration coming soon...</div>
    </div>
  );
}

// Blood Needed Page
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

// Become a Donor Page
function BecomeDonor() {
  return (
    <div>
      <h2>Become a Donor</h2>
      <form className="row g-3">
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Full Name" required />
        </div>
        <div className="col-md-6">
          <input type="text" className="form-control" placeholder="Blood Group" required />
        </div>
        <div className="col-12">
          <input type="tel" className="form-control" placeholder="Phone Number" required />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-danger">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default App;
