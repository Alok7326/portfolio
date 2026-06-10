import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/routes/ProtectedRoute";

// Public pages
import Home from "@/pages/public/HomePage";
import About from "@/pages/public/AboutPage";
import Contact from "@/pages/public/ContactPage";
import Projects from "@/pages/public/ProjectsPage";
import Certificates from "@/pages/public/CertificatesPage";
import NotFound from "@/pages/public/NotFound";

// Admin pages
import Login from "@/pages/admin/Login";
import Dashboard from "@/pages/admin/Dashboard";
import ManageProjects from "@/pages/admin/projects/ManageProjects";
import AddProject from "@/pages/admin/projects/AddProject";
import EditProject from "@/pages/admin/projects/EditProject";
import ManageSkills from "@/pages/admin/skills/ManageSkills";
import ManageExperience from "@/pages/admin/experience/ManageExperience";
import ManageEducation from "@/pages/admin/education/ManageEducation";
import ManageCertificates from "@/pages/admin/certificates/ManageCertificates";
import ManageResume from "@/pages/admin/resume/ManageResume";
import ManageProfile from "@/pages/admin/profile/ManageProfile";
import ContactMessages from "@/pages/admin/messages/ContactMessages";

const router = createBrowserRouter([
  // Public routes with MainLayout (Navbar + Footer)
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/projects", element: <Projects /> },
      { path: "/certificates", element: <Certificates /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },

  // Admin login (standalone, no layout)
  {
    path: "/admin/login",
    element: <Login />,
  },

  // Admin routes (protected, with AdminLayout)
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "", element: <Dashboard /> },
      { path: "projects", element: <ManageProjects /> },
      { path: "projects/add", element: <AddProject /> },
      { path: "projects/edit/:id", element: <EditProject /> },
      { path: "skills", element: <ManageSkills /> },
      { path: "experience", element: <ManageExperience /> },
      { path: "education", element: <ManageEducation /> },
      { path: "certificates", element: <ManageCertificates /> },
      { path: "resume", element: <ManageResume /> },
      { path: "profile", element: <ManageProfile /> },
      { path: "messages", element: <ContactMessages /> },
    ],
  },
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
