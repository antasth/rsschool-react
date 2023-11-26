import React from 'react';

const Layout = ({
  children,
}: {
  children: React.ReactElement;
}): React.ReactElement => {
  return (
    <div>
      <header>Header</header>
      {children}
      <footer>Footer</footer>
    </div>
  );
};

export default Layout;
