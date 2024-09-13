import React, { useEffect, useState } from 'react'
import './productdetail.css'
import ProductCard from '../ProductCard'
import Image1 from '../../../assets/123.png'
import Image2 from '../../../assets/124.png'
import Image3 from '../../../assets/125.png'
import Image4 from '../../../assets/126.png'
import Image5 from '../../../assets/127.png'
import Image6 from '../../../assets/128.png'
import Image7 from '../../../assets/129.png'
import Image8 from '../../../assets/130.png'

const ProductDetail = ({ owner }) => {
  const [productImage, setProductImage] = useState([]);
  const [productName, setProductName] = useState([]);
  const [name, setName] = useState([]);
  const [point, setPoint] = useState([]);


  useEffect(() => {
    // กำหนดค่าต่างๆ ที่คุณต้องการภายใน useEffect
    setName(['Bambam', 'aom', 'numfon','aom','aom','aom','aom','numfon']);
    setProductImage([Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]);
    setProductName([
      'CHAKA Light Sprite Series Figures',
      'CRYBABY × Powerpuff Girls Series-Vinyl Face Plush Blind Box',
      'MEGA SPACE MOLLY 100% Series 3',
      'CRYBABY Sunset Concert Series-Phone Case',
      'CRYBABY Sunset Concert Series-Plush Pendant Blind Box', 
      'CRYBABY × Powerpuff Girls Series-Cable Blind Box',
      'THE MONSTERS Lazy Yoga Series Figures',
      'CRYBABY Sad Club Series'  
    ]);
    setPoint(['380', '430', '550','430','380','230','430','430'])
  }, []);

  

  // กรองสินค้าตาม owner
  const filteredProducts = name.map((n, index) => ({
    image: productImage[index],
    title: productName[index],
    points: point[index],
    byname: n
  })).filter(product => !owner || product.byname === owner); // กรองถ้ามี owner ส่งมา

  return (
    <div className="product-grid">
      {filteredProducts.map((product, index) => (
        <ProductCard
          key={index}
          image={product.image}
          title={product.title}
          points={product.points}
          byname={`By ${product.byname}`}
        />
      ))}
    </div>
  )
}

export default ProductDetail