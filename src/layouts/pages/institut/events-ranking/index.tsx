import React from 'react'
import './_style.scss'
import { useTranslation } from 'react-i18next';
const EventsRanking :React.FC = () => {
  const {t} = useTranslation("EventsRanking")
  return (
    <section className='container mx-auto px-4 py-8'>
      <h2 className='text-center text-2xl'>{t("title")}</h2>
    </section>
  )
}

export default EventsRanking
