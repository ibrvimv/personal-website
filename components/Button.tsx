import CallMadeIcon from '@mui/icons-material/CallMade';
import Link from 'next/link';
/**
 * The shared footer component.
 */

interface PropsType {
  icon: React.ElementType;
  text: string;
  value: string;
}
export default function Button(props: PropsType) {
  return (
    <Link
      target='_blank'
      href={props.value}
      className='border rounded-md px-3 py-3 hover:-translate-y-1 hover:-translate-x-1 hover:border-secondary hover:text-secondary transition-all duration-100 flex justify-between '
    >
      <div className='flex gap-2'>
        <props.icon />
        <div>{props.text}</div>
      </div>
      <CallMadeIcon />
    </Link>
  );
}
