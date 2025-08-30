import { formatDate } from '@/lib/utils'
import { EyeIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'

const StartupCard = ({post} : {post: StartupTypeCard}) => {

    const { _createdAt: createdAt, views, author: { _id: authorId, name: authorName }, title, category, _id: id, image, description } = post;

  return (
    <li className='bg-white border-[5px] border-black py-6 px-5 rounded-[22px] shadow-200 hover:border-primary1 transition-all duration-200 hover:shadow-300 hover:bg-primary1-100 group'>
        {/* views section */}
        <div className='flex justify-between items-center'> 
            <p className='font-medium text-[16px] bg-primary1-100 px-4 py-2 rounded-full group-hover:bg-white-100'>
                {formatDate(createdAt)}
            </p>
            <div className='flex gap-1.5'>
                <EyeIcon className='size-6 text-primary1'/>
                <span className='font-medium text-[16px] text-black'>{views}</span>
            </div>
        </div>
        {/* title and name section */}
        <div className='flex justify-between items-center mt-5 gap-5'>
            <div>
                <Link href={`/user/${authorId}`}>
                    <span className='font-medium text-[16px] text-black line-clamp-1'>{authorName}</span>
                </Link>
                <Link href={`/startups/${id}`}>
                    <h3 className='text-[26px] font-semibold text-black line-clamp-1'>{title}</h3>
                </Link>
            </div>
            <Link href={`/user/${authorId}`}>
                <Image src={'https://placehold.co/48x48'} alt="placeholder" width={48} height={48} className='rounded-full '/>
            </Link>
        </div>
        {/* startup details */}
        <div>
            <p className='font-normal text-[16px] line-clamp-2 my-3 text-black-100 break-all'>{description}</p>
            <img src={image} alt='placeholder' className='w-full h-[164px] rounded-[10px] object-cover'/>
        </div>
        <div className='flex items-center justify-between mt-5 gap-3'>
            <Link href={`/?query=${category.toLowerCase()}`}>
                <p className='text-[16px] font-medium text-black'>{category}</p>
            </Link>
            <Button className='rounded-full bg-black-200 font-medium text-[16px] text-white px-5 py-3' asChild>
                <Link href={`/startups/${id}`}>Details</Link>
            </Button>
        </div>
    </li>
  )
}

export default StartupCard