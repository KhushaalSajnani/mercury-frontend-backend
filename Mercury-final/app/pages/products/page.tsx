'use client'
import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import expandIcon from "../../../public/assets/icons/expand.svg"
import { motion } from 'framer-motion'
import TopNavInternal from '../../components/top-nav-inner/TopNavInner'
import leafPattern from "../../../public/assets/patterns/leaf.svg"
import 'react-intersection-observer'
import AnimatedSection from '@/app/components/animated-section/AnimatedSection'


export default function Products() {
  return (
    <>
    <TopNavInternal />

    {/* MPay begins */}

    <AnimatedSection>
        <section id='mPaySection' className='m-auto w-full max-parent-grid-container-width max990px:pb-20 min991px:pb-60'>
            <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
                <GridChild 
                  childId={19}
                  customHeaderCss=""
                  childName="mPayBrief max554px:gap-y-0 image-position-left"
                  h3Order={2}
                  assetOrder={1}
                  buttonOrder={3}
                />
                <GridChild 
                  childId={5}
                  childName="mPayHeroImage"
                />
            </GridContainer>
        </section>
    </AnimatedSection>

        {/* Payment cards for every purpose */}

    <AnimatedSection>
        <section className='m-auto mPayCard1 w-full max-parent-grid-container-width bg-tintRed rounded-xl px-12 py-20 mb-10 relative overflow-hidden'>
            <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
                <GridChild 
                  childId={28}
                  childName="CoveringTransitPayments !justify-start"
                  customHeaderCss="font-bold"
                  h3Order={2}
                />
                <GridChild 
                  childId={29}
                  childName="CoveringTransitPaymentsDetails"
                  paragraphOrder={1}
                  checkboxListOrder={2}
                />
            </GridContainer>
            <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
        </section>
    </AnimatedSection>

    <AnimatedSection>
        <section className='m-auto mPayCard2 w-full max-parent-grid-container-width bg-tintGreen rounded-xl px-12 py-20 min991px:mb-40 mb-20 relative overflow-hidden'>
            <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
                <GridChild 
                  childId={30}
                  childName="CoveringTransitPayments !justify-start"
                  customHeaderCss="font-bold"
                  h3Order={2}
                />
                <GridChild 
                  childId={31}
                  childName="CoveringTransitPaymentsDetails"
                  paragraphOrder={1}
                  checkboxListOrder={2}
                />
            </GridContainer>
            <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
        </section>
    </AnimatedSection>

        {/* mTouch begins */}

    <AnimatedSection>
        <section id='mTouchSection' className='m-auto w-full max-parent-grid-container-width max990px:pb-20 min991px:pb-60'>
            <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
                <GridChild 
                  childId={27}
                  childName="mTouchBrief max554px:gap-y-0 image-position-left"
                  customHeaderCss=""
                  h3Order={2}
                  assetOrder={1}
                  buttonOrder={3}
                />
                <GridChild 
                  childId={6}
                  childName="mTouchHeroImage"
                />
            </GridContainer>
        </section>
    </AnimatedSection>

        {/* Cashless solutions for the transit ecosystem */}

    <AnimatedSection>
        <section className='m-auto w-full max-parent-grid-container-width bg-tintGray rounded-xl px-12 py-20 min991px:mb-40 mb-20 relative overflow-hidden'>
            <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
                <GridChild 
                  childId={79}
                  childName="CoveringTransitPayments !justify-start"
                  customHeaderCss="font-bold"
                  h3Order={2}
                />
                <GridChild 
                  childId={80}
                  childName="CoveringTransitPaymentsDetails"
                  paragraphOrder={1}
                  checkboxListOrder={2}
                />
            </GridContainer>
            <div className='patternPosition max990px:hidden'><img src={leafPattern.src} alt=""></img></div>
        </section>
    </AnimatedSection>
    </>
  )
}