type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    // <div
    //   className={`bg-container-background mx-auto max-w-[px]  px-4 sm:px-6 lg:px-8 ${className}`}
    // >

    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}