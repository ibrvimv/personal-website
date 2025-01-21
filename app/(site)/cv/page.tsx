import React from 'react';
import { getCV } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Button from '@/components/Button';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default async function CV() {
  const data = await getCV();

  if (!data) return <div>{`Sorry CV is not avaiable now:(`}</div>;

  return (
    <div className='px-3 overflow-y-auto'>
      <div>
        <h1 className='font-bold mb-2 pb-3'>CV</h1>
      </div>
      <div className='my-5 animate-bounce delay-2 translate-y-[-25%]'>
        <Button icon={VisibilityIcon} text='VIEW CV' value='https://rxresu.me/ibrvimv/frontend' />
      </div>
      <div className='mb-10 animate-bounce '>
        <Button icon={DownloadIcon} text='DOWNLOAD CV' value='https://storage.rxresu.me/clz6sa3fh5c10vrn3rlvbhbez/resumes/Frontend.pdf' />
      </div>
      {data.map((item, key) => {
        return (
          <div key={key}>
            <div className='border-b'>
              <h3 className='text-lg mb-2 text-secondary'>{item.name}</h3>
            </div>
            <div>
              <br />
              <PortableText value={item.description} />
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
}
