import AdminNav from "@/components/AdminNav";
import ProtectedRoute from "@/components/route/ProtectedRoute";

const admin = () => {
  return (
    <ProtectedRoute>
      <main className="main">
        <AdminNav />
      </main>
    </ProtectedRoute>
  );
};

export default admin;
