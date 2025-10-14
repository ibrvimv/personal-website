import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { getAbout } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';

export default async function Home() {
  const data = await getAbout();
  if (!data) return <div>Sorry service is not available!</div>;

  return (
    <div className='px-3 flex gap-10 md:flex-row flex-col '>
      {/* <video
        className='absolute -z-10 inset-0 object-cover opacity-30  h-full w-full'
        autoPlay
        muted
        loop
        controls={false}
      >
        <source src='steam15.mp4' type='video/mp4' />
      </video> */}
      <div className='md:w-1/2 w-full max-md:order-2'>
        <div className='flex mb-10 gap-2 justify-between'>
          <div className='flex flex-col'>
            <h1 className='font-bold mb-2'>{data.name}</h1>
            <PortableText value={data.subtitle} />
          </div>
        </div>
        <div className='text-justify'>
          <PortableText value={data.description} />
        </div>
      </div>
      <div className='md:w-1/2  md:h-auto max-md:aspect-square  relative max-md:order-1'>
        <div
          className='absolute inset-0 z-30  '
          style={{ boxShadow: '0 0 7px 7px #fff inset' }}
        ></div>
        <Image
          className='object-cover'
          src={urlForImage(data.image).fit('crop').width(800).height(800).url()}
          alt={data.image?.alt}
          fill={true}
          loading='eager'
          placeholder='blur'
          blurDataURL={data.image?.asset?.metadata?.lqip}
        />
      </div>
    </div>
  );
}
