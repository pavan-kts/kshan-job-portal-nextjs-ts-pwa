import Link from 'next/link';

const categories = [
  { name: 'Business Development', jobs: 16, imgSrc: '/assets/img/handshake 1.png' },
  { name: 'NGO & Social Services', jobs: 6, imgSrc: '/assets/img/quality-of-life 1.png' },
  { name: 'Information Technology', jobs: 28, imgSrc: '/assets/img/it 1.png', link: './Category.html#searchByCategory' },
  { name: 'Finance', jobs: 2, imgSrc: '/assets/img/bars 1.png' },
  { name: 'Human Resource', jobs: 10, imgSrc: '/assets/img/id-card 1.png' }
];

const CategorySection = () => {
  return (
    <div className="flex flex-col items-center w-full py-12 bg-white dark:bg-gray-900">
      <div className="w-full max-w-7xl px-6">
        <h2 className="text-2xl font-semibold mb-8 dark:text-gray-200">Search by Category</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {categories.map((category, index) => (
            <Link key={index} href={category.link || '#'} passHref>
              <div className="flex flex-col items-center h-full p-6 bg-[#DEEFF9] dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="flex justify-center w-24 h-24 p-4 mb-4 bg-white dark:bg-gray-700 rounded-lg">
                  <img src={category.imgSrc} alt={category.name} className="w-full h-full object-contain" />
                </div>
                <h3 className="text-lg font-medium text-center dark:text-gray-300">{category.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">{category.jobs} Jobs</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
