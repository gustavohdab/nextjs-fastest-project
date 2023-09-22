import Image from 'next/image'
import Link from 'next/link'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Resource } from '@/types/resource-types'

const ResourceCard = ({ title, image, views, _id, downloadLink }: Resource) => {
  return (
    <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
      <Link
        href={downloadLink}
        className="w-full"
        referrerPolicy="no-referrer"
        target="_blank"
      >
        <CardHeader className="flex-center flex-col gap-2.5 !p-0">
          <div className="h-fit w-full">
            <Image
              src={image}
              alt={title}
              width={384}
              height={440}
              className="rounded-xl"
            />
          </div>
          <CardTitle className="paragraph-semibold line-clamp-1 w-full text-left text-white">
            {title}
          </CardTitle>
        </CardHeader>
      </Link>

      <CardContent className="flex-between mt-4 p-0">
        <div className="flex-center body-medium gap-1.5 text-white">
          <Image src="/downloads.svg" alt="Downloads" width={20} height={20} />
          {views}
        </div>
        <Link
          href={`/resources/${_id}`}
          className="flex-center text-gradient_purple-blue body-semibold gap-1.5"
        >
          Download Now
          <Image src="/arrow-blue.svg" alt="Arrow" width={13} height={13} />
        </Link>
      </CardContent>
    </Card>
  )
}

export default ResourceCard
