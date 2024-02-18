'use client'
import React from 'react';
import { useEffect } from 'react';
import GridChildApi from './gridChildApi';
import Link from 'next/link';
import "./GridChildCSS.css"
import ModalContainer from '../modal/ModalContainer';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ChildComponentProps {
  childId: number;
  childName?: string;
  chipsOrder?: number;
  tagsOrder?: number;
  h1Order?: number;
  h2Order?: number;
  h3Order?: number;
  h4Order?: number;
  paragraphOrder?: number;
  assetOrder?: number;
  checkboxListOrder?: number;
  socialMediaOrder?: number;
  buttonOrder?: number;
  customHeaderCss?: string;
  modalTriggerOrder?: number;
}

const AnimatedGridChild = motion.div;


const GridChild: React.FC<ChildComponentProps> = ({ childName, childId, chipsOrder, tagsOrder, h1Order, h2Order, h3Order, h4Order, paragraphOrder, assetOrder, checkboxListOrder, socialMediaOrder, buttonOrder, customHeaderCss, modalTriggerOrder }) => {
  const gridChildData = GridChildApi;

  const [ref, inView] = useInView({
    triggerOnce: false, // Adjust the rootMargin as needed
  });

  const sectionAnimation = {
    initial: { y: 100 },
    animate: { y: 0 },
  };

  useEffect(() => {
    if (inView) {
      // Trigger animation logic here (if needed)
    }
  }, [inView]);

  return (
    <>
      {
          gridChildData && gridChildData.filter( currentElement => currentElement.id == childId ).map((currentElement) => {
              return (
                <AnimatedGridChild
              className={`${childName} flex flex-col gap-y-8 w-full justify-center`}
              key={currentElement.id}
              {...sectionAnimation}
              ref={ref}
              >
                      {/* Vector Shape */}
                      {/* {currentElement.vectorShape &&
                        currentElement.vectorShape.map((assetContentsData) => (
                          <div key={assetContentsData.id}>
                            {assetContentsData.vectorImageLink ? (
                              <Link href={assetContentsData.vectorImageLink}>
                                <img className='vectorShape' src={assetContentsData.vectorImage} alt={assetContentsData.imageAlt} />
                              </Link>
                            ) : (
                              assetContentsData.vectorImage && <img className='vectorShape' src={assetContentsData.vectorImage} alt={assetContentsData.imageAlt} />
                            )}
                          </div>
                        ))} */}

                      {/* Chip - eg. Limited Access */}
                      {/* {currentElement.Chips &&
                          currentElement.Chips.map((chipsContentData) => (
                            <div key={chipsContentData.id}>
                                {chipsContentData.chipLink ? (
                                  <Link href={chipsContentData.chipLink}>
                                    <div className='border border-fuchsia-500 w-max px-4 py-2 rounded-full'>{chipsContentData.chipText}</div>
                                  </Link>
                                ) : ( chipsContentData.chipText &&
                                  <div className='border border-fuchsia-500 w-max px-4 py-2 rounded-full'>{chipsContentData.chipText}</div>
                                )}
                            </div>
                      ))} */}

                      {/* Tags - eg. Technology */}
                      {/* Tags */}
                        {currentElement.Tags &&
                          currentElement.Tags.map((contentData) => (
                            contentData.tagText && (
                              <div key={contentData.id} className={`order-${tagsOrder}`}>
                                {contentData.tagLink ? (
                                  <Link href={contentData.tagLink}>
                                    <div className='w-max px-4 py-3 rounded-md bg-white'>{contentData.tagText}</div>
                                  </Link>
                                ) : (
                                  <div className='w-max px-4 py-3 rounded-md bg-white'>{contentData.tagText}</div>
                                )}
                              </div>
                            )
                          ))
                        }

                      {/* H1 title */}
                      {currentElement.headingH1 &&
                          currentElement.headingH1.map((headingContentData) => (
                            <div key={headingContentData.id} className={`order-${h1Order}`}>
                                {headingContentData.headingLink ?(
                                  <Link href={headingContentData.headingLink}>
                                      <h1 className={`text-h1 ${customHeaderCss}`}>{headingContentData.headingText}</h1>
                                  </Link>
                                ) : ( headingContentData.headingText &&
                                  <h1 className={`text-h1 ${customHeaderCss}`}>{headingContentData.headingText}</h1>
                                )}
                            </div>
                      ))}

                      {/* H2 title */}
                      {currentElement.headingH2 && currentElement.headingH2.length > 0 && (
                        currentElement.headingH2.map((headingContentData) => (
                          headingContentData.headingText && (  // Check if headingText is not an empty number
                            <div key={headingContentData.id} className={`order-${h2Order}`}>
                              {headingContentData.headingLink ? (
                                <Link href={headingContentData.headingLink}>
                                  <h2 className={`text-h2 ${customHeaderCss}`}>{headingContentData.headingText}</h2>
                                </Link>
                              ) : (
                                <h2 className={`text-h2 ${customHeaderCss}`}>{headingContentData.headingText}</h2>
                              )}
                            </div>
                          )
                        ))
                      )}




                      {/* H3 title */}
                      {currentElement.headingH3 && currentElement.headingH3.map((headingContentData) => (
                        headingContentData.headingText && (  // Check if headingText is not an empty number
                          <div key={headingContentData.id} className={`order-${h3Order}`}>
                            {headingContentData.headingLink ? (
                              <Link href={headingContentData.headingLink}>
                                <h3 className={`text-h3 ${customHeaderCss}`}>{headingContentData.headingText}</h3>
                              </Link>
                            ) : (
                              <h3 className={`text-h3 ${customHeaderCss}`}>{headingContentData.headingText}</h3>
                            )}
                          </div>
                        )
                      ))}

                      {/* H4 title */}
                      {currentElement.headingH4 && currentElement.headingH4.map((headingContentData) => (
                        headingContentData.headingText && (  // Check if headingText is not an empty number
                          <div key={headingContentData.id} className={`order-${h4Order}`}>
                            {headingContentData.headingLink ? (
                              <Link href={headingContentData.headingLink}>
                                <h4 className={`text-h4 ${customHeaderCss}`}>{headingContentData.headingText}</h4>
                              </Link>
                            ) : (
                              <h4 className={`text-h4 ${customHeaderCss}`}>{headingContentData.headingText}</h4>
                            )}
                          </div>
                        )
                      ))}


                      {/* Asset - image or video */}
                      {currentElement.Asset &&
                        currentElement.Asset.map((assetContentsData) => (
                          (assetContentsData.imageSrc || assetContentsData.videoSrc) && (
                            <div key={assetContentsData.id} className={`order-${assetOrder} asset`}>
                              {assetContentsData.imageSrc && (
                                assetContentsData.imageContainerLink ? (
                                  <Link href={assetContentsData.imageContainerLink}>
                                    <img className='w-full h-full object-contain' src={assetContentsData.imageSrc} alt={assetContentsData.imageAlt} />
                                  </Link>
                                ) : (
                                  <img className='w-full h-full object-contain' src={assetContentsData.imageSrc} alt={assetContentsData.imageAlt} />
                                )
                              )}

                              {assetContentsData.videoSrc && (
                                assetContentsData.videoContainerLink ? (
                                  <Link href={assetContentsData.videoContainerLink}>
                                    <video autoPlay className='w-full h-full'>
                                      <source src={assetContentsData.videoSrc} type="video/mp4" />
                                      Your browser does not support the video tag.
                                    </video>
                                  </Link>
                                ) : (
                                  <video autoPlay className='w-full h-full'>
                                    <source src={assetContentsData.videoSrc} type="video/mp4" />
                                    Your browser does not support the video tag.
                                  </video>
                                )
                              )}
                            </div>
                          )
                        ))}


                      {/* Paragraph - I posess excellent communication skills... */}
                      {currentElement.Paragraph &&
                        currentElement.Paragraph.map((paraContentsData) => (
                          paraContentsData.paraData && (
                            <div key={paraContentsData.id} className={`order-${paragraphOrder}`}>
                              {paraContentsData.paraLink ? (
                                <Link href={paraContentsData.paraLink}>
                                  <p className='text-paragraph opacity-80'>{paraContentsData.paraData}</p>
                                </Link>
                              ) : (
                                <p className='text-paragraph opacity-80'>{paraContentsData.paraData}</p>
                              )}
                            </div>
                          )
                        ))}

                      {/* Checkbox List */}
                        {currentElement.CheckboxList &&
                          currentElement.CheckboxList.map((checkboxListData) => (
                            checkboxListData.listIcon && (
                              <div key={checkboxListData.id} className={`order-${checkboxListOrder} flex flex-row items-center w-full gap-2`}>
                                <div className='w-20 h-20 rounded-md checkbox-list-img-container flex items-center shrink-0'>
                                  <img src={checkboxListData.listIcon} className='w-full h-full object-contain' alt='List Icon' />
                                </div>
                                {checkboxListData.listItemText && <p className='text-paragraph text-left'>{checkboxListData.listItemText}</p>}
                              </div>
                            )
                          ))
                        }

                        {/* Social Media */}
                        {/* {currentElement.SocialMedia &&
                          currentElement.SocialMedia.map((socialMediaData) => (
                            socialMediaData.mediaLink && (
                              <div key={socialMediaData.id} className={`order-${socialMediaOrder} flex flex-row flex-wrap gap-2`}>
                                <Link href={socialMediaData.mediaLink}>
                                  <div className='w-20 h-20 items-center rounded-md'>
                                    <img src={socialMediaData.mediaIcon} className='w-full h-full object-contain' alt='Social Media Icon' />
                                  </div>
                                </Link>
                              </div>
                            )
                          ))
                        } */}

                        {currentElement.SocialMedia && (
                            <div className={`order-${socialMediaOrder} flex flex-row flex-wrap gap-2`}>
                              {currentElement.SocialMedia.map((socialMediaData) => (
                                socialMediaData.mediaLink && (
                                  <Link key={socialMediaData.id} href={socialMediaData.mediaLink}>
                                    <div className='w-20 h-20 mr-4 items-center socialMediaIconContainer rounded-md'>
                                      <img src={socialMediaData.mediaIcon} className='w-full h-full object-contain' alt='Social Media Icon' />
                                    </div>
                                  </Link>
                                )
                              ))}
                            </div>
                        )}


                        {/* Button */}
                        {currentElement.Button &&
                          currentElement.Button.map((buttonContentData) => (
                            buttonContentData.buttonText && (
                              <div key={buttonContentData.id} className={`order-${buttonOrder}`}>
                                {buttonContentData.buttonLink ? (
                                  <Link href={buttonContentData.buttonLink}>
                                    <button className='filled-button py-4 px-8 my-4 rounded-full font-bold text-md'>{buttonContentData.buttonText}</button>
                                  </Link>
                                ) : (
                                  <button className='filled-button py-4 px-8 my-4 rounded-full font-bold text-md'>{buttonContentData.buttonText}</button>
                                )}
                              </div>
                            )
                          ))
                        }

                        {/* modal */}
                        {currentElement.ModalTrigger &&
                          currentElement.ModalTrigger.map((modalData) => (
                            <div key={modalData.id} className={`flex flex-row justify-end order-${modalTriggerOrder}`}>
                              <ModalContainer 
                              id = {modalData.id}
                              btnLabel = {modalData.modalTriggerLabel}
                              btnImageUrl = {modalData.modalTriggerImage}
                              btnClass = {modalData.modalTriggerClass} 
                              />
                            </div>
                          ))}

                  {/* </div> */}
                  </AnimatedGridChild>
              );
          }, [])
      }
    </>
  );
};

export default GridChild;
