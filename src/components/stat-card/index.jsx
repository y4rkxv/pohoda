import { Card, CardContent } from '@/components/ui/card';

export const StatCard = ({ icon: Icon, label, value, hint }) => (
  <Card>
    <CardContent className='flex items-center gap-4 p-4'>
      <div className='flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-muted'>
        <Icon className='h-5 w-5 text-muted-foreground' />
      </div>
      <div className='min-w-0'>
        <p className='text-xs text-muted-foreground'>{label}</p>
        <p className='truncate text-lg font-semibold'>{value}</p>
        {hint && <p className='text-xs text-muted-foreground'>{hint}</p>}
      </div>
    </CardContent>
  </Card>
);
