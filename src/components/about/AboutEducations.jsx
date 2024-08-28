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

    return (
        <>
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
                    Here are some of the technical skills that I have mastered, including programming languages, frameworks, and tools.
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
            <div className="mt-10 sm:mt-10">
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
                    marginBottom: '1rem'
                }}>
                    I have studied and am currently studying at the following programs and universities
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
        </>
    );
};

export default AboutEducations;