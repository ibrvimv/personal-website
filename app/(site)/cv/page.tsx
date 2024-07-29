import React from 'react';
import { getCV } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import Button from '@/components/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default async function CV() {
  const data = await getCV();

  if (!data) return <div>{`Sorry CV is not avaiable now:(`}</div>;

  return (
    <div className='px-3 overflow-y-auto'>
      <div className='mb-10 animate-pulse '>
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
