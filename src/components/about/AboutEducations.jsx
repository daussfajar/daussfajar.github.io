import { useContext } from 'react';
import AboutMeContext from '../../context/AboutMeContext';
import AboutClientSingle from './AboutClientSingle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const AboutEducations = () => {
    const { educationsData, educationsHeading } = useContext(AboutMeContext);
    const { skillsData, skillsHeading } = useContext(AboutMeContext);
    const { frameworksData, frameworksHeading } = useContext(AboutMeContext);

    return (
        <>
        <div className="mt-10 sm:mt-20">
                <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
                    {educationsHeading}
                </p>
                <p style={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: '#6b7280',
                    cursor: 'default',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    marginBottom: '3rem'
                }}>
                    I have studied and am currently studying at the following programs and universities, and I am always eager to learn new things.
                </p>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={2}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 30,
                        },
                    }}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {educationsData.map((client) => (
                        <SwiperSlide key={client.id} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '150px'
                        }}>
                            <AboutClientSingle
                                title={client.title}
                                image={client.img}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>            
            <div className="mt-10 sm:mt-20">
                <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
                    {skillsHeading}
                </p>
                <p style={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: '#6b7280',
                    cursor: 'default',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    marginBottom: '1rem'
                }}>
                    I have experience with the following programming languages and strive to stay up to date with their developments.
                </p>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={2}
                    breakpoints={{
						640: {
							slidesPerView: 1, 
							spaceBetween: 20,
						},
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
						1024: {
							slidesPerView: 5,
							spaceBetween: 30,
						},
					}}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {skillsData.map((client) => (
                        <SwiperSlide key={client.id} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '150px'
                        }}>
                            <AboutClientSingle
                                title={client.title}
                                image={client.img}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="mt-10 sm:mt-20">
                <p className="font-general-medium text-2xl sm:text-3xl text-center text-primary-dark dark:text-primary-light">
                    {frameworksHeading}
                </p>
                <p style={{
                    fontSize: '1rem',
                    fontWeight: 'normal',
                    color: '#6b7280',
                    cursor: 'default',
                    textAlign: 'center',
                    marginTop: '0.5rem',
                    marginBottom: '1rem'
                }}>
                    I have experience with the following frameworks and strive to stay up to date with their developments.
                </p>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    spaceBetween={30}
                    slidesPerView={2}
                    breakpoints={{
						640: {
							slidesPerView: 1, 
							spaceBetween: 20,
						},
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
						1024: {
							slidesPerView: 5,
							spaceBetween: 30,
						},
					}}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                >
                    {frameworksData.map((client) => (
                        <SwiperSlide key={client.id} style={{
                            display: 'flex',
                            justifyContent: 'center',
                            height: '150px'
                        }}>
                            <AboutClientSingle
                                title={client.title}
                                image={client.img}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </>
    );
};

export default AboutEducations;