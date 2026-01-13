import React from "react";
import { Typography } from "antd";

import SalesKpis from "../components/antd/SalesKpis";
import SalesProgress from "../components/antd/SalesProgress";
import SalesTable from "../components/antd/SalesTable";
import AntSupportBox from "../components/antd/AntSupportBox";

const { Title, Paragraph } = Typography;

export default function HomeAnt() {
    return (
        <>
        <Title level={2} style={{ marginBottom: 6 }}>Dashboard de Ventas</Title>
        <Paragraph type="secondary">KPIs + progreso + tabla (demo).</Paragraph>

        <SalesKpis />
        <SalesProgress />
        <SalesTable />
        <AntSupportBox />
        </>
    );
}