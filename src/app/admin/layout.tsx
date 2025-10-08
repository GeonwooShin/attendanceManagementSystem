import { ReactNode } from 'react';

const AdminPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      Admin Page Layout
      {children}
    </div>
  );
};

AdminPageLayout.displayName = 'AdminPageLayout';

export default AdminPageLayout;
