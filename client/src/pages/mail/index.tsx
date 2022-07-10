import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/layout/Layout";
import { IMail } from "../../components/Mail";
import mailStore from "../../store/MailStore";

const MailPage: React.FC = () => {
  const { id, folder } = useParams();
  const [mail, setMail] = React.useState<IMail | null>(null);

  React.useEffect(() => {
    if (folder && id) {
      const mail = mailStore.getMailById(folder, parseInt(id));
      if (mail) {
        mailStore.markAsRead(folder, parseInt(id));
        setMail(mail);
      }
    }
  }, []);

  return (
    <Layout>
      {mail && (
        <>
          <p className="text-lg mb-2">Тема сообщения: {mail?.subject}</p>
          <p className="mb-2">От кого: {mail.author}</p>
          <p>{mail.text}</p>
        </>
      )}
    </Layout>
  );
};

export default MailPage;
