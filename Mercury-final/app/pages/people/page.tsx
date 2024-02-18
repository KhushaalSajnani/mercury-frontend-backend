'use client'
import GridContainer from '../../components/gridData/GridContainer'
import GridChild from '../../components/gridData/GridChild'
import CareersForm from '@/app/components/form/CareersForm'
import TopNav from '@/app/components/top-nav/TopNav'
import AssetLightboxCareers from '@/app/components/asset-lightbox/AssetLightboxCareers'
import 'react-intersection-observer'
import AnimatedSection from '@/app/components/animated-section/AnimatedSection'


export default function Careers () {
  return (
    <>
    <TopNav />

    <AnimatedSection>
        <section className='m-auto w-full max-parent-grid-container-width max554px:pt-2 min555px:pt-10 max554px:pb-10 min555px:pb-20'>
            <GridContainer gridCols="grid-cols-1 text-center">
                <GridChild 
                  childId={63}
                  customHeaderCss="font-bold"
                  childName="CareersAtMercury max554px:gap-y-0"
                  h1Order={1}
                  paragraphOrder={2}
                />
            </GridContainer>
        </section>
    </AnimatedSection>

        {/* photo section */}
    <AnimatedSection>
        <AssetLightboxCareers />
    </AnimatedSection>

    <AnimatedSection>
          <section className='m-auto w-full max-parent-grid-container-width max554px:pt-32 min555px:pt-60'>
            <GridContainer gridCols="grid-cols-1 text-center">
                <GridChild 
                  childId={68}
                  customHeaderCss="font-medium"
                  childName="OurInclusiveValues"
                  h2Order={1}
                />
            </GridContainer>
        </section>
    </AnimatedSection>

    <AnimatedSection>
        <section className='ourInclusiveValues m-auto w-full max-w-7xl pt-20 pb-30 max554px:pt-8'>
            <GridContainer gridCols="grid-cols-4 !gap-5 max990px:grid-cols-2 px-5">
              <GridChild 
                  childId={64}
                  childName="determination hover:scale-110 w-full bg-tintRed text-center h-80 max554px:h-52 items-center rounded-lg"
                  customHeaderCss="font-bold"
                  h4Order={2}
                  assetOrder={1}
                />
                <GridChild 
                  childId={65}
                  childName="empathy hover:scale-110 w-full bg-tintRed text-center h-80 max554px:h-52 items-center rounded-lg"
                  customHeaderCss="font-bold"
                  h4Order={2}
                  assetOrder={1}
                />
                <GridChild 
                  childId={66}
                  childName="agility hover:scale-110 w-full bg-tintRed text-center h-80 max554px:h-52 items-center rounded-lg"
                  customHeaderCss="font-bold"
                  h4Order={2}
                  assetOrder={1}
                />
                <GridChild 
                  childId={67}
                  childName="diversity hover:scale-110 w-full bg-tintRed text-center h-80 max554px:h-52 items-center rounded-lg"
                  customHeaderCss="font-bold"
                  h4Order={2}
                  assetOrder={1}
                />
            </GridContainer>
        </section>
    </AnimatedSection>


        {/* How will you make a difference? */}
        {/* <section className='flex justify-center m-auto w-full !py-32 mt-32 bg-tintGreen'>
                <GridContainer gridCols="grid-cols-1 max-parent-grid-container-width">
                    <GridChild 
                      childId={76}
                      customHeaderCss="font-bold"
                      childName="makeADifference"
                      h2Order={1}
                      paragraphOrder={2}
                      checkboxListOrder={3}
                    />
                </GridContainer>
        </section> */}

        {/* Meet Our Tribe */}
    <AnimatedSection>
        <section className='m-auto w-full max-parent-grid-container-width pt-40 pb-20'>
            <GridContainer gridCols="grid-cols-1 text-center">
                <GridChild 
                  childId={69}
                  customHeaderCss="font-medium"
                  childName="happyFaces"
                />
            </GridContainer>
        </section>
    </AnimatedSection>

        {/* people grid */}
    <AnimatedSection>
        <section className='m-auto flex !w-full min1661px:justify-center max1366px:overflow-scroll min1367px:overflow-hidden min1367px:justify-center'>
            <GridContainer gridCols="!flex !gap-5 ml-5 mr-5 !shrink-0 items-start flex-nowrap overflow-auto !flex-row pb-20">
                <GridChild 
                  childId={70}
                  childName="peopleContainer !gap-y-4 !w-60"
                  assetOrder={1}
                  h3Order={2}
                  h4Order={3}
                  paragraphOrder={4}
                  // socialMediaOrder={5}
                  customHeaderCss=''
                />
                <GridChild 
                  childId={73}
                  childName="peopleContainer !gap-y-4 !w-60"
                  assetOrder={1}
                  h3Order={2}
                  h4Order={3}
                  // socialMediaOrder={5}
                  paragraphOrder={4}
                  customHeaderCss=''
                />
                <GridChild 
                  childId={74}
                  childName="peopleContainer !gap-y-4 !w-60"
                  assetOrder={1}
                  h3Order={2}
                  h4Order={3}
                  paragraphOrder={4}
                  // socialMediaOrder={5}
                  customHeaderCss=''
                />
                <GridChild 
                  childId={71}
                  childName="peopleContainer !gap-y-4 !w-60"
                  assetOrder={1}
                  h3Order={2}
                  h4Order={3}
                  paragraphOrder={4}
                  // socialMediaOrder={5}
                  customHeaderCss=''
                />
                <GridChild 
                  childId={72}
                  childName="peopleContainer !gap-y-4 !w-60"
                  assetOrder={1}
                  h3Order={2}
                  h4Order={3}
                  paragraphOrder={4}
                  // socialMediaOrder={5}
                  customHeaderCss=''
                />
            </GridContainer>
        </section>
    </AnimatedSection>
    
    <AnimatedSection>
        <section id='careersFormSection' className='m-auto w-full max-parent-grid-container-width my-32 flex justify-center'>
                <GridContainer gridCols="grid-cols-1 max-parent-grid-container-width">
                    <GridChild 
                      childId={77}
                      customHeaderCss="font-bold"
                      childName="joinUsHeading"
                      h2Order={1}
                    />
                    <div className='max-w-3xl'><CareersForm /></div>
                </GridContainer>
        </section>
    </AnimatedSection>
    
    {/* footer */}
    </>
  )
}