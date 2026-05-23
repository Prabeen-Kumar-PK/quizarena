import { BrainCircuit, GalleryHorizontalEnd, Radar, UserPlus } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { FEATURE_SLIDES } from '../data/quizContent'
import { FeatureSlide } from './FeatureSlide'
import { SectionHeading } from './SectionHeading'
import 'swiper/css'

const icons = [BrainCircuit, Radar, UserPlus, GalleryHorizontalEnd]

export function FeatureCarousel() {
  return (
    <section className="app-section reveal-section" id="features">
      <div className="section-grid">
        <SectionHeading
          eyebrow="Quiz system"
          title="A sophisticated learning engine engineered to elevate your cognitive edge."
          copy="Immerse yourself in a dynamic, motion-driven environment where responsive design meets personal progress tracking, seamlessly accelerating your intellectual growth."
        />

        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2600, disableOnInteraction: false }}
          breakpoints={{
            720: { slidesPerView: 2 },
            1120: { slidesPerView: 3 },
          }}
          slidesPerView={1.08}
          spaceBetween={16}
          className="feature-swiper"
        >
          {FEATURE_SLIDES.map((slide, index) => (
            <SwiperSlide key={slide.title}>
              <FeatureSlide {...slide} icon={icons[index % icons.length]} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
