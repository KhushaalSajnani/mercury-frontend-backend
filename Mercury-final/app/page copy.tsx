'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import GridContainer from './components/gridData/GridContainer'
import GridChild from './components/gridData/GridChild'
import Link from 'next/link'
import 'react-intersection-observer'
import FeaturedVideo from './components/featuredVideo/FeaturedVideo'

export default function Home() {

  const [loadedMPay, setLoadedMPay] = useState(false);
  const [inViewMPay, setInViewMPay] = useState(false);

  const [loadedMTouch, setLoadedMTouch] = useState(false);
  const [inViewMTouch, setInViewMTouch] = useState(false);

  const [loadedM360, setLoadedM360] = useState(false);
  const [inViewM360, setInViewM360] = useState(false);

  const [loadedMHub, setLoadedMHub] = useState(false);
  const [inViewMHub, setInViewMHub] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mPayEntry = entries.find((entry) => entry.target.classList.contains('mPayHeroImage'));
    
        if (mPayEntry && mPayEntry.isIntersecting) {
          setInViewMPay(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    const observer2 = new IntersectionObserver(
      (entries) => {
        const mTouchEntry = entries.find((entry) => entry.target.classList.contains('mTouchHeroImage'));
    
        if (mTouchEntry && mTouchEntry.isIntersecting) {
          setInViewMTouch(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    const observer3 = new IntersectionObserver(
      (entries) => {
        const m360Entry = entries.find((entry) => entry.target.classList.contains('m360HeroImage'));
    
        if (m360Entry && m360Entry.isIntersecting) {
          setInViewM360(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );

    const observer4 = new IntersectionObserver(
      (entries) => {
        const mHubEntry = entries.find((entry) => entry.target.classList.contains('mHubHeroImage'));
    
        if (mHubEntry && mHubEntry.isIntersecting) {
          setInViewMHub(true);
        }
      },
      { threshold: 0.2 } // Adjust the threshold as needed
    );
    

    // Apply observer to the target element
    const target = document.querySelector(".mPayHeroImage");
    const target2 = document.querySelector(".mTouchHeroImage");
    const target3 = document.querySelector(".m360HeroImage");
    const target4 = document.querySelector(".mHubHeroImage");
    if (target) {
      observer.observe(target);
    }
    if (target2) {
      observer2.observe(target2);
    }
    if (target3) {
      observer3.observe(target3);
    }
    if (target4) {
      observer4.observe(target4);
    }

    return () => {
      observer.disconnect();
      observer2.disconnect();
      observer3.disconnect();
      observer4.disconnect();
    };
  }, []);

  useEffect(() => {
    if (inViewMPay) {
      // If the section is in view, simulate loading time for the image asset
      const timeout = setTimeout(() => {
        setLoadedMPay(true);
      }, 200); // Adjust the timeout duration as needed

      return () => clearTimeout(timeout);
    }
  }, [inViewMPay]);

  useEffect(() => {
    if (inViewMTouch) {
      // If the section is in view, simulate loading time for the image asset
      const timeout = setTimeout(() => {
        setLoadedMTouch(true);
      }, 200); // Adjust the timeout duration as needed

      return () => clearTimeout(timeout);
    }
  }, [inViewMTouch]);

  useEffect(() => {
    if (inViewM360) {
      // If the section is in view, simulate loading time for the image asset
      const timeout = setTimeout(() => {
        setLoadedM360(true);
      }, 200); // Adjust the timeout duration as needed

      return () => clearTimeout(timeout);
    }
  }, [inViewM360]);

  useEffect(() => {
    if (inViewMHub) {
      // If the section is in view, simulate loading time for the image asset
      const timeout = setTimeout(() => {
        setLoadedMHub(true);
      }, 200); // Adjust the timeout duration as needed

      return () => clearTimeout(timeout);
    }
  }, [inViewMHub]);


  return (
    <>
    {/* <section className='m-auto w-full max-parent-grid-container-width py-10'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
            <GridChild 
              childId={1}
              customHeaderCss="font-bold"
              childName="homeHeroTitle"
            />
        </GridContainer>
    </section> */}

    {/* <section 
      className='m-auto w-full max-parent-grid-container-width max990px:pb-10 min991px:pb-60'>
        <GridContainer gridCols="grid-cols-1">
            <GridChild 
              childId={2}
              childName="marcuryMap"
            />
        </GridContainer>
    </section> */}

    <section 
      className='m-auto w-full relative z-50 overflow-visible max990px:pb-10 min991px:pb-30'>
        <FeaturedVideo featuredVideoApiId={1} />
    </section>

    {/* <FeaturedVideo featuredVideoApiId={2} /> */}

    <section className='sectionContainer m-auto w-full max-parent-grid-container-width max990px:pb-10 min991px:pb-20'>
        <GridContainer gridCols="grid-cols-1 text-center">
            <GridChild 
              childId={3}
              customHeaderCss="font-medium"
              childName="OurPortfolio"
            />
        </GridContainer>
    </section>

    <section className='sectionContainer m-auto w-full max990px:pb-10 min991px:pb-60 max990px:bg-gray-100'>
      <div className='sectionBackgroundCP absolute overflow-visible w-full h-full'>
      </div>
      <div className='relative max990px:pt-20 max990px:pb-20 pt-60 pb-40 flex flex-col items-center align-center justify-center w-full'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1 max-parent-grid-container-width">
            <GridChild 
              childId={4}
              customHeaderCss=""
              childName="mPayBrief"
              h3Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
            <div className={` fade-up-wrapper ${loadedMPay ? 'visibleTransition' : 'hiddenTransition'}`}>
              <GridChild 
                childId={5}
                childName="mPayHeroImage"
              />
            </div>
        </GridContainer>
      </div>
    </section>

    <section className='sectionContainer m-auto w-full max-parent-grid-container-width max990px:pt-20 max990px:pb-20 min991px:pb-30'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
        <div className={` fade-up-wrapper ${loadedMTouch ? 'visibleTransition' : 'hiddenTransition'}`}>
              <GridChild 
                  childId={6}
                  childName="mTouchHeroImage"
                />
        </div>
            <GridChild 
              childId={7}
              childName="mTouchBrief"
              h3Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
        </GridContainer>
    </section>

    <section className='sectionContainer m-auto w-full max990px:pb-10 min991px:pb-60 max990px:bg-gray-100'>
    <div className='sectionBackgroundCP absolute overflow-visible w-full h-full'>
      </div>
      <div className='relative max990px:pt-20 max990px:pb-20 pt-60 pb-40 flex flex-col items-center align-center justify-center w-full'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1 max-parent-grid-container-width">
          <GridChild 
              childId={8}
              childName="m360Brief"
              h3Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
            <div className={` fade-up-wrapper ${loadedM360 ? 'visibleTransition' : 'hiddenTransition'}`}>
                <GridChild 
                    childId={9}
                    childName="m360HeroImage"
                  />
            </div>
        </GridContainer>
      </div>
    </section>

    <section className='sectionContainer m-auto w-full max-parent-grid-container-width max990px:pt-20 max990px:pb-20 min991px:pb-60'>
        <GridContainer gridCols="grid-cols-2 max990px:grid-cols-1">
        <div className={` fade-up-wrapper ${loadedMHub ? 'visibleTransition' : 'hiddenTransition'}`}>
                <GridChild 
                    childId={10}
                    childName="mHubHeroImage"
                  />
        </div>
            <GridChild 
              childId={11}
              childName="mHubBrief"
              h3Order={2}
              assetOrder={1}
              buttonOrder={3}
            />
        </GridContainer>
    </section>
    </>
  )
}