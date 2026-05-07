import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export const HomeError = ({ message }) => (
  <Card className='border-destructive/50'>
    <CardHeader>
      <CardTitle className='text-destructive'>Something went wrong</CardTitle>
      <CardDescription>{message}</CardDescription>
    </CardHeader>
  </Card>
);
