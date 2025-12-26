import React from 'react'
import { Card } from '../../../components/ui/card'
import  { newsCards } from '../../../store/news'
import { useTranslation } from 'react-i18next';
import ResponsiveOptimizedImage from '../../../shared/utils/responsive-srcest';

const News:React.FC = () => {
  const { t } = useTranslation("Carousel");

  return (
    <div className='px-2'>
      
      {newsCards.map((newsItem, index) => (
        <Card key={index} className="mb-4">
          <div className="relative w-full aspect-video ">
            <ResponsiveOptimizedImage
              imageName={newsItem.img} 
              alt={t(newsItem.title)}
              className="w-full h-full object-contain"
              breakpoints={{
                sm: 400,  
                md: 800,  
                lg: 1200  
              }}
            />
          </div>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2">{t(newsItem.title)}</h2>
          <p className="text-gray-700">{t(newsItem.description)}</p>

        </div>
      </Card>
      ))}
      
    </div>
  )
}

export default News
