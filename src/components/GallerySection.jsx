import { ImagePlus } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import featureImage1 from '../assets/featureimage1.jpg'
import featureImage2 from '../assets/featureImage2.jpg'



export function GallerySection() {
  const images = [
    {
      image: featureImage1,
      label: 'Feature image 1',
      title: 'Feature image 1 URL slot',
    },
    {
      image: featureImage2,
      label: 'Feature image 2',
      title: ' ',
    },
  ]

  return (
    <section className="app-section reveal-section" id="gallery">
      <SectionHeading
        eyebrow="Visual studio"
        icon={ImagePlus}
        title="Secure your position among the elite. Deliver high-accuracy responses with velocity to showcase your profile in the featured arena."
        copy="True mastery requires both precision and velocity. By delivering high-accuracy responses under pressure, you will outpace the competition, maximize your scoring metrics, and solidify your rank. Prove your expertise to command attention and showcase your custom player profile prominently within our featured arena."
      />

      <div className="gallery-grid">
        {images.map((item) => (
          <img src={item.image} alt={item.title}/>
        ))}
      </div>
    </section>
  )
}
