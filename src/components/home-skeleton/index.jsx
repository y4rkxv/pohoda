import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardHeader } from '@/components/ui/card';

export const HomeSkeleton = () => (
  <div className='space-y-6'>
    <Card>
      <CardHeader className='space-y-3'>
        <Skeleton className='h-4 w-24' />
        <Skeleton className='h-16 w-40' />
        <Skeleton className='h-4 w-32' />
      </CardHeader>
    </Card>
    <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5'>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} className='h-20 w-full' />
      ))}
    </div>
  </div>
);
