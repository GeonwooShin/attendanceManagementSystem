import { ReactNode } from 'react';

const MyPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      My Page Layout
      {children}
    </div>
  );
};

MyPageLayout.displayName = 'MyPageLayout';

export default MyPageLayout;
