import React from 'react';
import { getCV } from '@/sanity/sanity-utils';
import Button from '@/components/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default async function CV() {
  const data = await getCV();

  if (!data) return <div>{`Sorry CV is not avaiable now:(`}</div>;

  const first = data[0];
  const pdfUrl = first?.cvFileUrl;

  if (!pdfUrl) {
    return (
      <div className='px-3 overflow-y-auto py-24'>
        <div className='my-5 mb-10'>
          <div className='text-red-400'>
            {`CV PDF is not configured in Admin. Please upload 'CV PDF File' to the 'cv' document.`}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className='px-3 overflow-y-auto py-24'>
      <div className='flex flex-col'>
        <h1 className='font-bold mb-2 uppercase'>Curriculum Vitae</h1>
      </div>
      <div className='my-5 mb-10'>
        <Button icon={DownloadIcon} text='DOWNLOAD CV' value={pdfUrl} />
      </div>
      <div className='w-full h-[100vh] md:h-[200vh] bg-white'>
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
          className='lg:w-4/5 w-full md:rounded-md h-full mx-auto  '
          loading='lazy'
        />
      </div>
    </div>
  );
}
