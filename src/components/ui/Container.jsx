function Container({ children, className = '', as: Component = 'div', ...rest }) {
  return (
    <Component className={`mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`.trim()} {...rest}>
      {children}
    </Component>
  );
}

export default Container;
