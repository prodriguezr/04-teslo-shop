interface Props {
  children: React.ReactNode;
}

export default function authLayout({ children }: Props) {
  return <main className='min-h-screen bg-gray-500'>{children}</main>;
}
