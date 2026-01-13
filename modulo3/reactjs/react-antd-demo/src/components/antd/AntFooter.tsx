import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

export default function AntFooter() {
    return (
        <Footer style={{ textAlign: "center" }}>
        © {new Date().getFullYear()} SalesBoard
        </Footer>
    );
}