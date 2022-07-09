import React from "react";
import MailList from "../../components/MailList";
import Layout from "../../components/layout/Layout";
import ToolBar from "../../components/ToolBar";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";
import mailStore from "../../store/MailStore";

interface IEmailPageProps {
  folder: string;
}

const EmailPage: React.FC<IEmailPageProps> = observer(() => {
  let { folder } = useParams();

  if (!folder) {
    folder = "";
  }

  let mails = window.localStorage.getItem(folder);

  if (!mails) {
    mails = "[]";
  }

  return (
    <Layout>
      <ToolBar isActive={mailStore.chosen.length > 0} />
      <MailList mails={JSON.parse(mails)} />
    </Layout>
  );
});

export default EmailPage;
