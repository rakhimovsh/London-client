import {FC} from 'react';
import {Outlet} from "react-router-dom";

import Header from "../components/General/Header";
import Footer from "../components/General/Footer";

const Dashboard: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Dashboard;