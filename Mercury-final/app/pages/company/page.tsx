'use client'
import Image from 'next/image'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import Link from 'next/link'
import HeroAssetShowcase from '@/app/components/heroAssetShowcase/HeroAssetShowcase'
import TopNavInner from '@/app/components/top-nav-inner/TopNavInner'
import officePeople from '../../../public/assets/images/office/company-hero.png'
import TopNav from '@/app/components/top-nav/TopNav'
import AnimatedSection from '@/app/components/animated-section/AnimatedSection'
import 'react-intersection-observer'


export default function Company () {
  return (
    <>

    <TopNav />

    <AnimatedSection>

        <HeroAssetShowcase image={officePeople.src} customCSS="companyHeroImageContainer" />

        <section className='m-auto w-full hero-asset-showcase-max-parent-grid-container-width py-14 px-4 min555px:mb-36 max554px:mb-10 bg-tintGreen text-black rounded-t-none min710px:rounded-b-3xl overflow-hidden'>
            <section className='m-auto w-full min555px:px-10'>
                <GridContainer gridCols="grid-cols-1 text-center">
                    <GridChild 
                      childId={90}
                      customHeaderCss="companyHeroText"
                      childName=""
                    />
                </GridContainer>
            </section>
        </section>

        <section className='m-auto w-full pl-10 pr-10 pb-10 max554px:px-10'>
                <GridContainer gridCols="grid-cols-1 text-center">
                    <GridChild 
                      childId={51}
                      customHeaderCss="font-medium"
                      childName=""
                    />
                </GridContainer>
        </section>
    </AnimatedSection>

    {/* management people grid */}
    <AnimatedSection>
        <section className='m-auto w-full pb-20'>
            <GridContainer gridCols="!flex !gap-5 justify-center flex-row flex-wrap !align-start min555px:pb-20 m-auto max554px:!gap-y-14">
                <GridChild 
                  childId={52}
                  childName="muzafferHamid peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
                <GridChild 
                  childId={53}
                  childName="gururaj peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
                <GridChild 
                  childId={54}
                  childName="nihad peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
                {/* <GridChild 
                  childId={55}
                  childName="rizwan peopleManagementGrid h-full !justify-between"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                /> */}
                <GridChild 
                  childId={56}
                  childName="ashish peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
            </GridContainer>
        </section>
    </AnimatedSection>

    {/* the board */}
    <AnimatedSection>
        <section className='m-auto w-full max-parent-grid-container-width pb-20 max554px:pb-8'>
            <GridContainer gridCols="grid-cols-1 text-center">
                <GridChild 
                  childId={57}
                  customHeaderCss="font-medium"
                  childName="theManagement"
                />
            </GridContainer>
        </section>
    </AnimatedSection>

    {/* board people grid */}
    <AnimatedSection>
        <section className='m-auto w-full max-parent-grid-container-width pb-10'>
            <GridContainer gridCols="!flex justify-center flex-row flex-wrap !align-start pb-20 max554px:pb-12 m-auto max554px:gap-y-14">
                <GridChild 
                  childId={58}
                  childName="muzaffarKhokhar peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
                <GridChild 
                  childId={59}
                  childName="sanjeev peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
                <GridChild 
                  childId={60}
                  childName="jun peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
            </GridContainer>
            <GridContainer gridCols="!flex justify-center flex-row flex-wrap !align-start min555px:pb-20 m-auto max554px:gap-y-14">
                <GridChild 
                  childId={61}
                  childName="matt peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
                <GridChild 
                  childId={89}
                  childName="sivarama peopleManagementGrid h-full !justify-between max554px:gap-y-2"
                  assetOrder={1}
                  h4Order={2}
                  paragraphOrder={3}
                  socialMediaOrder={4}
                />
            </GridContainer>
        </section>
    </AnimatedSection>

    {/* grow with us section */}
    {/* <section className='m-auto bg-tintGray w-full py-40 mb-10'>
        <GridContainer gridCols="m-auto grid-cols-1 max-parent-grid-container-width text-center">
            <GridChild 
              childId={62}
              customHeaderCss="font-medium"
              childName="GrowWithUs m-auto"
              h2Order={1}
              paragraphOrder={2}
              buttonOrder={3}
            />
        </GridContainer>
    </section> */}
    
    {/* footer */}
    </>
  )
}