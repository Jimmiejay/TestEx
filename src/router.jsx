import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./main.css";
import Reward from "./pages/Reward/Reward";
import Ranking from "./pages/Ranking/Ranking";
import Marketplace from "./pages/Marketplace/Marketplace";
import ChangeHistory from "./pages/Marketplace/ChangeHistory/ChangeHistory";
import MyProduct from "./pages/Marketplace/MyProducts/MyProducts";
import FormProduct from "./pages/Marketplace/FormProduct/FormProduct";
import ProductConfirm from "./pages/Marketplace/FormProduct/ProductConfirm/ProductConfirm";
import LeaveRequestForm from "./pages/LeaveRequestForm/LeaveRequestForm";
import MedicalLeaveForm from "./pages/LeaveRequestForm/FormLeave/MedicalLeaveForm/MedicalLeaveForm";
import PersonalLeaveForm from "./pages/LeaveRequestForm/FormLeave/PersonalLeaveForm/PersonalLeaveForm";
import WFHForm from "./pages/LeaveRequestForm/FormLeave/WFHForm/WFHForm";
import MedicalConfirm from "./pages/LeaveRequestForm/FormLeave/MedicalLeaveForm/MedicalLeaveConfirm/MedicalConfirm";
import MemberCard from "./pages/MemberCard/MemberCard";
import PersonalLeaveConfirm from "./pages/LeaveRequestForm/FormLeave/PersonalLeaveForm/PersonalLeaveConfirm/PersonalLeaveConfirm";
import WFHConfirm from "./pages/LeaveRequestForm/FormLeave/WFHForm/WFHConfirm/WFHConfirm";
import RewardConfirm from "./pages/Reward/RewardConfirm/RewardConfirm";
import MarketplaceDetail from "./pages/Marketplace/MarketplaceDetail/MarketplaceDetail";




const router = createBrowserRouter([
    {
        path: "/",
        element: <div>page one</div>,
    },
    { 
        path: "/reward",
        element: (<Reward />),
    },
    { 
        path: "/reward/rewardconfirm",
        element: (<RewardConfirm />),
    },
    { 
        path: "/membercard",
        element: (<MemberCard />),
    },
    { 
        path: "/ranking",
        element: (< Ranking/>),
    },
    { 
        path: "/marketplace",
        element: (<Marketplace />),
    },
    { 
        path: "/marketplace/marketplacedetail",
        element: (<MarketplaceDetail />),
    },
    { 
        path: "/marketplace/changehistory",
        element: (<ChangeHistory />),
    },
    { 
        path: "/marketplace/myproducts",
        element: (<MyProduct />),
    },
    { 
        path: "/marketplace/formproduct",
        element: (<FormProduct />),
    },
    { 
        path: "/marketplace/formproduct/productconfirm",
        element: (<ProductConfirm />),
    },
    { 
        path: "/leaverequestform",
        element: (<LeaveRequestForm />),
    },
    { 
        path: "/leaverequestform/medicalleaveform",
        element: (<MedicalLeaveForm />),
    },
    { 
        path: "/leaverequestform/personalleaveform",
        element: (<PersonalLeaveForm />),
    },
    { 
        path: "/leaverequestform/workfromhomeform",
        element: (<WFHForm />),
    },
    { 
        path: "/leaverequestform/medicalleaveform/medicalconfirm",
        element: (<MedicalConfirm />),
    },
    { 
        path: "/leaverequestform/personalleaveform/personalconfirm",
        element: (<PersonalLeaveConfirm />),
    },
    { 
        path: "/leaverequestform/workfromhomeform/workfromhomeconfirm",
        element: (<WFHConfirm/>),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);