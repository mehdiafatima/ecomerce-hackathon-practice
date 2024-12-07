import React from 'react';

const SidebarMenu = () => {
  const categories = [
    "Woman's Fashion",
    "Men's Fashion",
    "Electronics",
    'Home & Lifestyle',
    'Medicine',
    'Sports & Outdoor',
    "Baby's & Toys",
    'Groceries & Pets',
    'Health & Beauty',
  ];

  return (
    <aside className="bg-softBg w-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 p-4 mt-4 md:mt-0 lg:h-full  lg:mt-0 ">
      <ul className="space-y-4 text-softTextColor h-full lg:w-45 lg:mt-0 flex flex-col justify-center">
        {categories.map((category, index) => (
          <li
            key={index}
            className="flex justify-between items-center hover:text-blue-600 cursor-pointer lg:w-40 lg:mt-[-30px] "
          >
            {category} <span>  ›</span>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SidebarMenu;
