import React from 'react'
import { useAppContext } from '../../context/AppContext';
import { useParams } from 'react-router';
import { categories } from '../../assets/assets';

const ProductCategory = () => {
    const {products} = useAppContext();
    const {category} = useParams();

    const searchCategory = categories.find((item) => item.path.toLowerCase() === category.toLowerCase() )

    const filteredProducts = products.filter((product)=> product.category.toLowerCase() === category.toLowerCase());

  return (
    <div>
      {searchCategory && (
        <div className=' flex flex-col items-end w-max mt-16'>
            <p className='text-2xl font-medium'> {searchCategory.text.toUpperCase()}</p>
            <div className='w-16 h-0.5 bg-primary rounded-full'></div>
        </div>
        )}
    </div>
  )
}

export default ProductCategory
