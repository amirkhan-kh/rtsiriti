import React from 'react'
import { useTranslation } from 'react-i18next'
import BasicDoc from '../../../../shared/ui-components/org-chart'
const InstitutStructure :React.FC = () => {
  const {t} = useTranslation("InstitutStructure")
  return (
    <section className='container mx-auto px-4 '>
      <h2 className='text-2xl px-4 dm:px-10 text-center pb-6 dark:text-white'>{t("title")}</h2>
    
      <BasicDoc/>
    </section>
  )
}

export default InstitutStructure
