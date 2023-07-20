// useBreadcrumb.tsx

import { useMemo } from 'react';
import { useRouter } from 'next/router';

type BreadcrumbItem = {
  label: string;
  link: string;
};

const useBreadcrumb = (): BreadcrumbItem[] => {
  const router = useRouter();

  const breadcrumb = useMemo<BreadcrumbItem[]>(() => {
    const pathArray = router.asPath.split('/').filter(Boolean); // Remove empty elements
    const breadcrumbItems: BreadcrumbItem[] = [];

    pathArray.reduce((acc, curr, index) => {
      const link = `${acc}/${curr}`;
      const label = curr.replace(/-/g, ' '); // Replace hyphens with spaces if needed

      breadcrumbItems.push({ label, link });

      return link;
    }, '');

    return breadcrumbItems;
  }, [router.asPath]);

  return breadcrumb;
};

export default useBreadcrumb;


//then in components
// YourComponent.tsx

// import React from 'react';
// import useBreadcrumb from '../hooks/useBreadcrumb';

// const YourComponent: React.FC = () => {
//   const breadcrumb = useBreadcrumb();

//   return (
//     <div>
//       {breadcrumb.map((item) => (
//         <span key={item.link}>
//           <a href={item.link}>{item.label}</a> /
//         </span>
//       ))}
//       Current Page
//     </div>
//   );
// };

// export default YourComponent;
