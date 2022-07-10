import React from "react";
import MailList from "../../components/MailList";
import Layout from "../../components/layout/Layout";
import ToolBar from "../../components/ToolBar";
import { observer } from "mobx-react-lite";
import { Outlet, useParams } from "react-router-dom";
import mailStore from "../../store/MailStore";

interface IEmailPageProps {
  folder: string;
}

const MailListPage: React.FC<IEmailPageProps> = observer(() => {
  let { folder } = useParams();

  if (!folder) {
    folder = "";
  }

  let mails = localStorage.getItem(folder);

  if (!mails) {
    mails = "[]";
  }

  return (
    <Layout>
      <ToolBar isActive={mailStore.chosen.length > 0} />
      <MailList mails={JSON.parse(mails)} />
      <Outlet />
    </Layout>
  );
});

export default MailListPage;
