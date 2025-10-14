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
    <div className='px-3 overflow-y-auto py-16'>
      {/* <div className='my-5 animate-bounce delay-2 translate-y-[-25%]'>
        <Button icon={VisibilityIcon} text='VIEW CV' value='https://drive.google.com/file/d/1AZ5M1GGgkHbp2nW2T-VDkuPtij3yvTsM/view?usp=sharing' />
      </div> */}
      <div className='my-5 mb-10'>
        <Button icon={DownloadIcon} text='DOWNLOAD CV' value='https://drive.google.com/file/d/1Q8HtepZj1xrRP6sxaqiV57-xTpB1Ne3v/view?usp=sharing' />
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
