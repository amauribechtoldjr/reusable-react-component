interface LayoutProps {
  children: React.ReactNode | React.ReactNode[];
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full h-screen bg-gray-50 flex items-center justify-center">
      {children}
    </div>
  );
}
