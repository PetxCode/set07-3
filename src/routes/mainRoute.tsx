import { createBrowserRouter, useLocation } from "react-router-dom"
import { Layout } from "../components/Block/Layout"
import LandingPage from "../pages/LandingPage"
import { MainLayout } from "../components/Block/MainLayout"
import StartUp from "../pages/Start/StartUp"
import Register from "../pages/Register/Register"
import SignIn from "../pages/Register/SignIn"
import PasswordReset from "../pages/Register/PasswordReset"
import ConfirmAccount from "../pages/Register/ConfirmAccount"
import ResetConfirm from "../pages/Register/REsetConfirmed"
import SettingPage from "../pages/Settings/SettingsPage"
import UpdateInfos from "../pages/Update/UpdateInfos"
import MyHistoryPage from "../pages/history/HistoryPage"
import PaymentPage from "../pages/payment/PaymentPage"
import PrivateRoute from "./privateRoute"



export const mainRoute = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <StartUp />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "sign-in",
                element: <SignIn />
            },
            {
                path: "/confirm/:id/:token/verify",
                element: <SignIn />
            },
            {
                path: "reset",
                element: <PasswordReset />
            },
            {
                path: "confirm-account",
                element: <ConfirmAccount />
            },
            {
                path: "reset-password-message",
                element: <ResetConfirm />
            },

        ]
    },
    {
        path: "/dashboard",
        element: <PrivateRoute>
            <MainLayout />
        </PrivateRoute>,
        children: [
            {
                index: true,
                // path: "dashboard",
                element: <LandingPage />

            },
            {
                path: "settings",
                element: <UpdateInfos />
            },
            {
                path: "history",
                element: <MyHistoryPage />
            },
            {
                path: "bookings",
                element: <PaymentPage />
            },

        ]
    }
])

