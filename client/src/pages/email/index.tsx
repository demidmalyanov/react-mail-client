import React from "react";
import EmailsTable from "../../components/EmailsTable";
import Layout from "../../components/layout/Layout";
import Toolslist from "../../components/ToolsList";

const EmailPage: React.FC = () => {
  return (
    <Layout>
      <Toolslist/>
      <EmailsTable />
    </Layout>
  );
};

export default EmailPage;
