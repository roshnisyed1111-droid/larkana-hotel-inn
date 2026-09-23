import React from 'react';
import { Star, ExternalLink, ShieldCheck } from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

export const ReviewsSection: React.FC = () => {
  const ratingMetrics = [
    { label: 'Hospitality & Staff Attendance', score: '4.4 / 5', width: '88%' },
    { label: 'Room Cleanliness & Comfort', score: '4.2 / 5', width: '84%' },
    { label: 'Location & Accessibility', score: '4.3 / 5', width: '86%' },
    { label: 'Dining & Tea Service', score: '4.1 / 5', width: '82%' },
    { label: 'Value for Money', score: '4.3 / 5', width: '86%' },
  ];

  return (
    <section id="reviews" className="py-24 sm:py-32 bg-[#FAF8F5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="flex items-center justify-center space-x-3">
            <span className="h-px w-6 bg-[#5B141D]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#5B141D]">
              VERIFIED RATING
            </span>
            <span className="h-px w-6 bg-[#5B141D]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1E1B18] font-normal leading-[1.15]">
            GUEST REVIEWS
          </h2>

          <p className="text-[#5C564F] text-base leading-relaxed">
            Authentic feedback submitted by guests and travelers who have experienced Larkana Hotel Inn.
          </p>
        </div>

        {/* Rating Presentation Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-sm border border-[#E6DFD5] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            
            {/* Left Big Score */}
            <div className="md:col-span-5 text-center md:border-r border-[#E6DFD5] md:pr-10 space-y-4">
              <div className="inline-block">
                <span className="font-serif text-6xl sm:text-7xl font-bold text-[#1E1B18] tracking-tight">
                  {HOTEL_CONFIG.googleRating}
                </span>
                <span className="text-xl sm:text-2xl text-[#736B63] font-light"> / 5</span>
              </div>

              {/* Gold Stars */}
              <div className="flex items-center justify-center space-x-1.5 text-[#C9A86A]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < 4 ? 'fill-[#C9A86A] text-[#C9A86A]' : 'fill-[#C9A86A]/40 text-[#C9A86A]'
                    }`}
                  />
                ))}
              </div>

              <div className="space-y-1">
                <p className="text-sm font-semibold text-[#1E1B18] uppercase tracking-wider">
                  Based on {HOTEL_CONFIG.reviewCount} Verified Reviews
                </p>
                <p className="text-xs text-[#736B63]">
                  Public ratings on Google Maps &amp; travel directories
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={HOTEL_CONFIG.googleReviewsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-xs uppercase tracking-wider font-semibold text-[#5B141D] hover:text-[#480E15] transition-colors"
                >
                  <span>VIEW ALL GOOGLE REVIEWS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#C9A86A]" />
                </a>
              </div>
            </div>

            {/* Right Metric Bars */}
            <div className="md:col-span-7 space-y-4">
              <h3 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#5B141D] mb-4">
                CATEGORY SATISFACTION SUMMARY
              </h3>

              <div className="space-y-3.5">
                {ratingMetrics.map((metric) => (
                  <div key={metric.label} className="space-y-1">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#2D2926] font-medium">{metric.label}</span>
                      <span className="text-[#736B63] font-mono tabular-nums">{metric.score}</span>
                    </div>
                    <div className="w-full h-2 bg-[#F4EFEA] rounded-full overflow-hidden">
                      <div
                        style={{ width: metric.width }}
                        className="h-full bg-[#5B141D] rounded-full transition-all duration-1000"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center space-x-2 text-xs text-[#736B63]">
                <ShieldCheck className="w-4 h-4 text-[#5B141D] shrink-0" />
                <span>We value honest guest feedback and constantly improve room care.</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
