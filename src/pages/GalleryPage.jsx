import React, { useState } from 'react';
import PageBanner from '../components/PageBanner';
import Breadcrumb from '../components/Breadcrumb';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import './css/GalleryPage.css';

const galleryData = {
  "HYUNDAI SANTAFE": [
    '/assets/imgs/gallery/santafe1.jpg',
    '/assets/imgs/gallery/santafe2.jpg',
    '/assets/imgs/gallery/santafe3.jpg',
    '/assets/imgs/gallery/santafe4.jpg',
    '/assets/imgs/gallery/santafe5.jpg',
    '/assets/imgs/gallery/santafe7.jpg',
  ],
  "HONDA CRV": [
    '/assets/imgs/gallery/crv1.jpg',
    '/assets/imgs/gallery/crv2.jpg',
    '/assets/imgs/gallery/crv3.jpg',
    '/assets/imgs/gallery/crv4.jpg',
    '/assets/imgs/gallery/crv5.jpg',
    '/assets/imgs/gallery/crv6.jpg',
    '/assets/imgs/gallery/crv7.jpg',
    '/assets/imgs/gallery/crv8.jpg',
  ],
  "FORD FOCUS": [
    '/assets/imgs/gallery/focus1.jpg',
    '/assets/imgs/gallery/focus2.jpg',
    '/assets/imgs/gallery/focus3.jpg',
    '/assets/imgs/gallery/focus4.jpg',
    '/assets/imgs/gallery/focus5.jpg',
    '/assets/imgs/gallery/focus6.jpg',
  ],
  "TOYOTA VANGUARD": [
    '/assets/imgs/gallery/vanguard1.jpg',
    '/assets/imgs/gallery/vanguard2.jpg',
    '/assets/imgs/gallery/vanguard3.jpg',
    '/assets/imgs/gallery/vanguard4.jpg',
  ],
  "TOYOTA AURIS": [
    '/assets/imgs/gallery/auris1.jpg',
    '/assets/imgs/gallery/auris2.jpg',
    '/assets/imgs/gallery/auris3.jpg',
    '/assets/imgs/gallery/auris4.jpg',
    '/assets/imgs/gallery/auris5.jpg',
    '/assets/imgs/gallery/auris6.jpg',
  ],
  "MERCEDES ML350": [
    '/assets/imgs/gallery/ml350-1.jpg',
    '/assets/imgs/gallery/ml350-2.jpg',
    '/assets/imgs/gallery/ml350-3.jpg',
    '/assets/imgs/gallery/ml350-4.jpg',
    '/assets/imgs/gallery/ml350-5.jpg',
    '/assets/imgs/gallery/ml350-6.jpg',
  ],
  "TOYOTA HIGHLANDER": [
    '/assets/imgs/gallery/highlander1.jpg',
    '/assets/imgs/gallery/highlander2.jpg',
    '/assets/imgs/gallery/highlander3.jpg',
    '/assets/imgs/gallery/highlander4.jpg',
    '/assets/imgs/gallery/highlander5.jpg',
    '/assets/imgs/gallery/highlander6.jpg',
    '/assets/imgs/gallery/highlander7.jpg',
    '/assets/imgs/gallery/highlander8.jpg',
  ],
  "TOYOTA RAV4": [
    '/assets/imgs/gallery/rav4-1.jpg',
    '/assets/imgs/gallery/rav4-2.jpg',
    '/assets/imgs/gallery/rav4-3.jpg',
    '/assets/imgs/gallery/rav4-4.jpg',
    '/assets/imgs/gallery/rav4-5.jpg',
    '/assets/imgs/gallery/rav4-6.jpg',
    '/assets/imgs/gallery/rav4-7.jpg',
    '/assets/imgs/gallery/rav4-8.jpg',
  ],
  "HYUNDAI TUCSON": [
    '/assets/imgs/gallery/tucson1.jpg',
    '/assets/imgs/gallery/tucson2.jpg',
    '/assets/imgs/gallery/tucson3.jpg',
    '/assets/imgs/gallery/tucson4.jpg',
    '/assets/imgs/gallery/tucson5.jpg',
    '/assets/imgs/gallery/tucson6.jpg',
    '/assets/imgs/gallery/tucson7.jpg',
    '/assets/imgs/gallery/tucson8.jpg',
  ]
};

const tabNames = ["ALL", ...Object.keys(galleryData)];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState('ALL');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [currentImages, setCurrentImages] = useState([]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleImageClick = (index, images) => {
    setCurrentImages(images.map(img => ({ src: img })));
    setSelectedIndex(index);
    setLightboxOpen(true);
  };

  let imagesToShow = [];
  if (activeTab === 'ALL') {
    Object.values(galleryData).forEach(group => {
      imagesToShow.push(...group.slice(0, 2));
    });
  } else {
    imagesToShow = galleryData[activeTab];
  }

  return (
    <main>
      <PageBanner
        title="Photo Gallery"
        backgroundImage="/assets/imgs/banner/reserve-banner.jpg"
      />
      <Breadcrumb current="Gallery" />

      <section className="gallery-section">
        <div className="container">
          <h3 className="gallery-title">Photo Gallery</h3>

          <div className="gallery-tabs">
            {tabNames.map(tab => (
              <button
                key={tab}
                onClick={() => handleTabClick(tab)}
                className={tab === activeTab ? 'active' : ''}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="gallery-grid">
            {imagesToShow.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Gallery Car"
                onClick={() => handleImageClick(index, imagesToShow)}
              />
            ))}
          </div>
        </div>
      </section>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={currentImages}
        index={selectedIndex}
      />
    </main>
  );
}