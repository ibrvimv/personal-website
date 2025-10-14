import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '../../../components/Button';
import ChatIcon from '@mui/icons-material/Chat';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { getContacts } from '@/sanity/sanity-utils';

type IconMapper = {
  [key: string]: React.ElementType;
};
const iconMapper: IconMapper = {
  telegram: TelegramIcon,
  instagram: InstagramIcon,
  email: EmailIcon,
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  custom: ChatIcon,
  phone: LocalPhoneIcon,
};

export default async function Contacts() {
  const data = await getContacts();

  if (!data) return <div>No contacts founded</div>;

  return (
    <div className='px-3 flex flex-col gap-4 py-16'>
      <div>
        <h1 className='font-bold mb-2 pb-3'>CONTACTS</h1>
      </div>
      {data?.contacts.map((item, key) => {
        const IconComponent = item?.socialMedia
          ? iconMapper[item?.socialMedia]
          : iconMapper['custom'];

        return (
          <Button
            key={key}
            icon={IconComponent} // Render the icon component directly
            text={item.name} // Assuming 'name' corresponds to the text to be displayed
            value={item.link} // Assuming 'link' corresponds to the value of the button
          />
        );
      })}
    </div>
  );
}
