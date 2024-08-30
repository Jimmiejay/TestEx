import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import "./main.css";
import TestTab3 from "./pages/Tab3/Testtab3";
import Reward from "./pages/Reward/Reward";
import Ranking from "./pages/Ranking/Ranking";
import Marketplace from "./pages/Marketplace/Marketplace";
import MyProduct from "./pages/Marketplace/MyProducts/MyProducts";
import FormProduct from "./pages/Marketplace/FormProduct/FormProduct";
import LeaveRequestForm from "./pages/LeaveRequestForm/LeaveRequestForm";
import MedicalLeaveForm from "./pages/LeaveRequestForm/FormLeave/MedicalLeaveForm/MedicalLeaveForm";
import PersonalLeaveForm from "./pages/LeaveRequestForm/FormLeave/PersonalLeaveForm/PersonalLeaveForm";
import WFHForm from "./pages/LeaveRequestForm/FormLeave/WFHForm/WFHForm";
import MedicalConfirm from "./pages/LeaveRequestForm/FormLeave/MedicalLeaveForm/MedicalLeaveConfirm/MedicalConfirm";
import MemberCard from "./pages/MemberCard/MemberCard";
import PersonalLeaveConfirm from "./pages/LeaveRequestForm/FormLeave/PersonalLeaveForm/PersonalLeaveConfirm/PersonalLeaveConfirm";
import WFHConfirm from "./pages/LeaveRequestForm/FormLeave/WFHForm/WFHConfirm/WFHConfirm";
import RewardConfirm from "./pages/Reward/RewardConfirm/RewardConfirm";




const router = createBrowserRouter([
    {
        path: "/",
        element: <div>page one</div>,
    },
    { //ใช้อันนี้ tab3
        path: "/api/tab3",
        element: (<TestTab3 />),
    },
    { 
        path: "/api/reward",
        element: (<Reward />),
    },
    { 
        path: "/api/reward/rewardconfirm",
        element: (<RewardConfirm />),
    },
    { 
        path: "/api/membercard",
        element: (<MemberCard />),
    },
    { 
        path: "/api/ranking",
        element: (< Ranking/>),
    },
    { 
        path: "/api/marketplace",
        element: (<Marketplace />),
    },
    { 
        path: "/api/marketplace/myproducts",
        element: (<MyProduct />),
    },
    { 
        path: "/api/marketplace/formproduct",
        element: (<FormProduct />),
    },
    { 
        path: "/api/leaverequestform",
        element: (<LeaveRequestForm />),
    },
    { 
        path: "/api/leaverequestform/medicalleaveform",
        element: (<MedicalLeaveForm />),
    },
    { 
        path: "/api/leaverequestform/personalleaveform",
        element: (<PersonalLeaveForm />),
    },
    { 
        path: "/api/leaverequestform/workfromhomeform",
        element: (<WFHForm />),
    },
    { 
        path: "/api/leaverequestform/medicalleaveform/medicalconfirm",
        element: (<MedicalConfirm />),
    },
    { 
        path: "/api/leaverequestform/personalleaveform/personalconfirm",
        element: (<PersonalLeaveConfirm />),
    },
    { 
        path: "/api/leaverequestform/workfromhomeform/workfromhomeconfirm",
        element: (<WFHConfirm/>),
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);