import React from "react";
import MailList from "../../components/MailList";
import Layout from "../../components/layout/Layout";
import ToolBar from "../../components/ToolBar";
import { observer } from "mobx-react-lite";
import { Outlet, useParams } from "react-router-dom";
import mailStore from "../../store/MailStore";
import { IMail } from "../../components/Mail";

const MailListPage: React.FC = () => {
  let { folder } = useParams();
  const [mails, setMails] = React.useState<IMail[]>([]);

  console.log(folder);

  React.useEffect(() => {
    if (folder) {
      let data = localStorage.getItem(folder);
      if (data) {
        const parsedData = JSON.parse(data);
        setMails(parsedData);
      }
    }
  }, []);

  return (
    <Layout>
      <ToolBar isActive={mailStore.chosen.length > 0} />
      {mails.length === 0 ? <p>Loading...</p> : <MailList mails={mails} />}
    </Layout>
  );
};

export default observer(MailListPage);
