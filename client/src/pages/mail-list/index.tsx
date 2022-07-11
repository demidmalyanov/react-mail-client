import React from "react";
import MailList from "../../components/features/Mail/MailList";
import Layout from "../../components/layout/Layout";
import ToolBar from "../../components/features/Toolbar/ToolBar";
import { observer } from "mobx-react-lite";
import mailStore from "../../store/MailStore";
import { useParams } from "react-router-dom";
import { IMail } from "../../components/features/Mail/Mail";
import FolderStore from "../../store/FolderStore";
import { IFolder } from "../../components/features/Folder/Folder";
import { initApp, shouldInit } from "../../data/initData";

const MailListPage: React.FC = () => {
  let { folder }: any = useParams();
  const [mails, setMails] = React.useState<IMail[]|null>(null);
  
  
  


  React.useEffect(() => {
    let data = FolderStore.getFolderData(folder);
    setMails(data);
  }, [folder,mailStore.chosen]);

  return (
    <Layout>
      <ToolBar isActive={mailStore.chosen.length > 0} />
      <MailList mails={mails} />
    </Layout>
  );
};

export default observer(MailListPage);
