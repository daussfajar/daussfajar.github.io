import React, { useState, useContext } from 'react';
import SingleProjectContext from '../../context/SingleProjectContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Lightbox from 'yet-another-react-lightbox';
import 'swiper/css';
import 'swiper/css/navigation';
import 'yet-another-react-lightbox/styles.css';
import "yet-another-react-lightbox/plugins/thumbnails.css";

const ProjectGallery = ({ project }) => {
	const { singleProjectData } = useContext(SingleProjectContext);
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [currentIndex, setCurrentIndex] = useState(0);

	if (!project) return null;

	singleProjectData.ProjectImages = project.ProjectImages;

	const handleImageClick = (index) => {
		setCurrentIndex(index);
		setLightboxOpen(true);
	};

	return (
		<div className="mt-12">
			{singleProjectData.ProjectImages.length > 3 ? (
				<Swiper
					modules={[Navigation]}
					spaceBetween={16}
					slidesPerView={1}
					breakpoints={{
						640: {
							slidesPerView: 2, 
							spaceBetween: 20,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 30,
						},
					}}
					navigation
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
				>
					{singleProjectData.ProjectImages.map((img, index) => (
						<SwiperSlide key={img.id} className="w-full">
							<img
								src={img.img}
								className="w-full h-full rounded-xl cursor-pointer shadow-lg object-cover"
								alt={img.title}
								style={{ 
									height: '200px',
									transition: 'transform 0.5s ease' 
								}}
								onMouseEnter={(e) => {
									e.currentTarget.style.transform = 'scale(1.05)';
								}}
								onMouseLeave={(e) => {
									e.currentTarget.style.transform = 'scale(1)';
								}}
								onClick={() => handleImageClick(index)}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			) : (
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
					{singleProjectData.ProjectImages.map((img, index) => (
						<div key={img.id} className="w-full">
							<img
								src={img.img}
								className="w-full h-full rounded-xl cursor-pointer shadow-lg object-cover"
								alt={img.title}
								style={{ height: '200px' }}
								onClick={() => handleImageClick(index)}
							/>
						</div>
					))}
				</div>
			)}

			{lightboxOpen && (
				<Lightbox
					plugins={[Thumbnails]}
					open={lightboxOpen}
					index={currentIndex}
					close={() => setLightboxOpen(false)}
					slides={singleProjectData.ProjectImages.map((img) => ({
						src: img.img,
						alt: img.title,
						thumbnail: img.thumbnail || img.img,
					}))}
					options={{ thumbnails: true }}
				/>
			)}
		</div>
	);
};

export default ProjectGallery;