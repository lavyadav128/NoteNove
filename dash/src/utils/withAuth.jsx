import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/auth");
      } else {
        setLoading(false);
      }
    }, [navigate]);

    if (loading) return null; // or loading spinner
    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
