"use client"
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ShoppingBag, Heart, Star } from 'lucide-react';
import Image from 'next/image';

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('blue');
  const [selectedImage, setSelectedImage] = useState(0);

  const colors = [
    { name: 'red', color: '#DC2626' },
    { name: 'blue', color: '#60A5FA' },
    { name: 'green', color: '#84CC16' },
    { name: 'gray', color: '#6B7280' },
    { name: 'dark', color: '#1F2937' }
  ];

  const images = [
    'image/src/id1.png',
    'image/src/id2.png',
    'image/src/id1.png'
  ];

  const reviews = [
    { name: 'Alex Daewn', rating: 4, date: '4 months ago', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit amet, consectetuer adipiscing elit, sed' },
    { name: 'Alex Daewn', rating: 4, date: '4 months ago', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit amet, consectetuer adipiscing elit, sed' },
    { name: 'Alex Daewn', rating: 4, date: '4 months ago', text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy dolor sit amet, consectetuer adipiscing elit, sed' }
  ];

  const similarProducts = [
    { 
      id: 1, 
      name: "JVER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow", 
      price: "AED 900", 
      rating: 4.5, 
      reviews: 1201, 
      discount: "25% OFF",
      images: ["image/src/new/id1.png"] 
    },{ 
      id: 2, 
      name: "JVER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow", 
      price: "AED 900", 
      oldPrice: "AED 1500", 
      rating: 4.5, 
      reviews: 1201, 
      discount: "25% OFF",
      images: ["image/src/new/id2.png"] 
    },{ 
      id: 3, 
      name: "JVER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow", 
      price: "AED 900", 
      rating: 4.5, 
      reviews: 1201,
      images: ["image/src/new/id3.png"]  
    },{ 
      id: 4, 
      name: "JVER Women's Dress Shirts Solid Long Sleeve Stretch Wrinkle-Free With Yellow", 
      price: "AED 900", 
      oldPrice: "AED 1500", 
      rating: 4.5, 
      reviews: 1201, 
      discount: "25% OFF",
      images: ["image/src/new/id4.png"] 
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white py-20   border-b">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-3xl font-bold text-center">Product Details</h1>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">Home</a>
          <ChevronRight size={16} className="mx-2" />
          <a href="#" className="hover:text-gray-900">Our Category</a>
          <ChevronRight size={16} className="mx-2" />
          <span className="text-gray-900">Product Details</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg p-6">
          {/* Images Section */}
          <div className="space-y-4">
            <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
              <img src={images[selectedImage]} alt="Product" className="w-full h-full object-cover" />
              <button 
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <ChevronRight size={20} />
              </button>
            </div>
            <div className="flex gap-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-24 h-24 bg-gray-100 rounded-lg overflow-hidden ${selectedImage === idx ? 'ring-2 ring-blue-600' : ''}`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
              <div className="w-24 h-24 bg-gray-800 rounded-lg flex items-center justify-center text-white font-bold">
                +2
              </div>
            </div>
          </div>

          {/* Product Info Section */}
          <div className="space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-sm text-gray-500">T-shirt</span>
                <h2 className="text-2xl font-bold mt-1">JVER Man Shirts Solid Long Sleeve Stretch Wrinkle-Free With Blue</h2>
              </div>
              <div className="flex gap-2">
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <ShoppingBag size={20} />
                </button>
                <button className="p-2 border rounded-lg hover:bg-gray-50">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">${quantity * 300}.00</span>
              <span className="text-lg text-gray-400 line-through">$360.00</span>
            </div>

            <p className="text-sm text-gray-500">This price is exclusive of taxes.</p>

            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy Lorem ipsum dolor sit amet, diam nonummy</p>

            {/* Type & Size Selects */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Type</label>
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>Cotton</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <select className="w-full border rounded-lg px-4 py-2">
                  <option>2XI</option>
                </select>
              </div>
            </div>

            {/* Colors */}
            <div>
              <label className="block text-sm font-medium mb-3">Colors</label>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 ${selectedColor === color.name ? 'border-gray-800' : 'border-gray-200'}`}
                    style={{ backgroundColor: color.color }}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600 mt-2 block capitalize">{selectedColor}</span>
            </div>

            {/* Quantity */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Quantity <span className="text-gray-500">(${300 * quantity}.00 for Piece)</span>
              </label>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="px-4 py-2 hover:bg-gray-50">-</button>
                  <span className="px-6 py-2 border-x">{quantity.toString().padStart(2, '0')}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="px-4 py-2 hover:bg-gray-50">+</button>
                </div>
                <span className="text-xl font-bold">${quantity * 300}.00</span>
                <button className="ml-auto bg-stone-400 hover:bg-rose-500 text-white px-8 py-3 rounded-lg flex items-center gap-2">
                  <ShoppingBag size={20} />
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="bg-white rounded-lg p-6 mt-8">
          <h3 className="text-2xl font-bold mb-6">Rating & Reviews</h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-6xl font-bold">4,5<span className="text-3xl text-stone-400">/5</span></div>
              <div className="flex justify-center gap-1 my-2">
                {[1,2,3,4].map(i => <Star key={i} size={20} fill="#BE968E" stroke="#BE968E" />)}
                <Star size={20} stroke="#BE968E" />
              </div>
              <p className="text-sm text-stone-400">Total Reviews</p>
            </div>

            <div className="space-y-2">
              {[5,4,3,2,1].map(rating => (
                <div key={rating} className="flex items-center gap-2">
                  <Star size={16} fill="#BE968E" stroke="#FCD34D" />
                  <span className="text-sm">{rating}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-600 h-2 rounded-full" style={{width: `${rating * 20}%`}}></div>
                  </div>
                  <span className="text-sm text-stone-400">%{rating * 15}</span>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="text-6xl font-bold">2,0K</div>
              <p className="text-sm text-stone-400 mt-2">Total Reviews</p>
            </div>
          </div>

          {/* Reviews List */}
          <div className="space-y-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="border-t pt-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-semibold">{review.name}</h4>
                    <div className="flex gap-1 my-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill={i < review.rating ? "#FCD34D" : "none"} stroke="#BE968E" />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-stone-400">{review.date}</span>
                </div>
                <p className="text-stone-400 text-sm">{review.text}</p>
              </div>
            ))}
          </div>

          <button className="w-full mt-6 py-3 border border-stone-400 text-stone-400 rounded-lg hover:bg-rose-50">
            View More Comments
          </button>
        </div>

        {/* Similar Items */}
        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-6">Similar Items</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition">
                <div className="relative">
                  {product.discount && (
                    <span className="absolute top-2 right-2 bg-rose-500 text-white text-xs px-2 py-1 rounded">{product.discount}</span>
                  )}
                  <img 
                    src={product.images && product.images.length > 0 ? product.images[0] : '/api/placeholder/300/300'} 
                    alt={product.name} 
                    className="w-full aspect-square object-cover" 
                  />
                  <div className="absolute top-2 left-2 flex gap-2">
                    <button className="bg-white p-2 rounded shadow hover:bg-gray-100"><ShoppingBag size={16} /></button>
                    <button className="bg-white p-2 rounded shadow hover:bg-gray-100"><Heart size={16} /></button>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-xs text-gray-500">Dresses</span>
                  <h4 className="text-sm font-medium mt-1 line-clamp-2">{product.name}</h4>
                  <div className="flex items-center gap-1 my-2">
                    <Star size={14} fill="#FCD34D" stroke="#FCD34D" />
                    <span className="text-sm">{product.rating}</span>
                    <span className="text-xs text-gray-500">({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold">{product.price}</span>
                    {product.oldPrice && <span className="text-sm text-gray-400 line-through">{product.oldPrice}</span>}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {colors.slice(0,2).map(c => (
                      <div key={c.name} className="w-6 h-6 rounded-full border" style={{backgroundColor: c.color}}></div>
                    ))}
                    <span className="text-sm text-gray-500">+2</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2 mt-6">
            <button className="p-2 border rounded-lg hover:bg-gray-50"><ChevronLeft size={20} /></button>
            <button className="p-2 border rounded-lg bg-rose-400 text-white"><ChevronRight size={20} /></button>
          </div>
        </div>
      </div>
    </div>
  );
}