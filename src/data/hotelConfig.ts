/**
 * Central Hotel Configuration & Data Structure for Larkana Hotel Inn
 * Editable from this single file.
 */

import heroLobbyImg from '../assets/images/larkana_hero_lobby_1790147171277.jpg';
import deluxeRoomImg from '../assets/images/larkana_deluxe_room_1790147186263.jpg';
import twinRoomImg from '../assets/images/larkana_twin_room_1790147202845.jpg';
import diningRestaurantImg from '../assets/images/larkana_dining_restaurant_1790147217255.jpg';
import teaHospitalityImg from '../assets/images/larkana_tea_hospitality_1790147232309.jpg';

export interface RoomItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  gallery: string[];
  amenities: string[];
  bedType: string;
  idealFor: string;
  pricingNote: string;
}

export interface AmenityCategory {
  title: string;
  items: {
    name: string;
    description: string;
    icon: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'ROOMS' | 'DINING' | 'INTERIORS' | 'HOTEL';
  image: string;
  description: string;
}

export const HOTEL_CONFIG = {
  hotelName: 'Larkana Hotel Inn',
  locationCity: 'Larkana, Sindh, Pakistan',
  address: 'H626+8W3, Larkana, Pakistan',
  phoneNumber: '+92 303 3893092',
  phoneCallNumber: '+923033893092',
  whatsappNumber: '923033893092',
  whatsappDisplay: '+92 303 3893092',
  googleRating: 4.2,
  reviewCount: 166,
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Larkana+Hotel+Inn+H626%2B8W3+Larkana+Pakistan',
  googleReviewsUrl: 'https://www.google.com/maps/search/?api=1&query=Larkana+Hotel+Inn+H626%2B8W3+Larkana+Pakistan',

  images: {
    hero: heroLobbyImg,
    deluxeRoom: deluxeRoomImg,
    twinRoom: twinRoomImg,
    dining: diningRestaurantImg,
    tea: teaHospitalityImg,
  },

  rooms: [
    {
      id: 'deluxe-guest-room',
      name: 'Deluxe Guest Room',
      category: 'King Suite',
      tagline: 'Refined comfort with handcrafted wooden finishes & ambient cove lighting.',
      description:
        'Designed for quiet relaxation and peaceful stays, the Deluxe Guest Room features an authentic wooden platform king bed, soft linens, recessed architectural vertical lighting, an en-suite private bathroom, comfortable armchair seating, and dedicated climate control.',
      image: deluxeRoomImg,
      gallery: [deluxeRoomImg, twinRoomImg, heroLobbyImg],
      amenities: [
        'King Platform Bed',
        'Private En-suite Bathroom',
        'Ambient Cove Lighting',
        'Air Conditioning & Heating',
        'Complimentary High-Speed Wi-Fi',
        'Flat Screen Television',
        'Luggage Bench & Wardrobe',
        'Room Service Available',
      ],
      bedType: '1 King Bed',
      idealFor: '1-2 Guests',
      pricingNote: 'Rate confirmed upon reservation request',
    },
    {
      id: 'twin-guest-room',
      name: 'Twin Guest Room',
      category: 'Double Accommodation',
      tagline: 'Spacious dual-bed setting ideal for family visits and business travelers.',
      description:
        'The Twin Guest Room provides two separate wooden single beds with fresh bedding, decorative architectural headboard panels with warm backlighting, nightstand, seating space, and easy hallway access.',
      image: twinRoomImg,
      gallery: [twinRoomImg, deluxeRoomImg, heroLobbyImg],
      amenities: [
        'Two Separate Beds',
        'Custom Geometric Headboard',
        'Private Bathroom Facilities',
        'Air Conditioning',
        'High-Speed Wi-Fi',
        'Work / Dressing Table',
        'Daily Housekeeping',
        'Room Service Available',
      ],
      bedType: '2 Single Beds',
      idealFor: '2-3 Guests',
      pricingNote: 'Rate confirmed upon reservation request',
    },
    {
      id: 'comfort-guest-room',
      name: 'Comfort Guest Room',
      category: 'Executive Comfort',
      tagline: 'A peaceful, serene accommodation tailored for restful stopovers.',
      description:
        'A restful guest sanctuary appointed with handcrafted woodwork, quiet interior positioning, soft lighting, and all verified hotel essentials for a rejuvenating night in Larkana.',
      image: deluxeRoomImg,
      gallery: [deluxeRoomImg, twinRoomImg, diningRestaurantImg],
      amenities: [
        'Plush Double Bed',
        'Private Bathroom',
        'Climate Controlled',
        'Wi-Fi Access',
        'Tea & Beverage Service',
        'Wardrobe Storage',
        '24/7 Front Desk Assistance',
      ],
      bedType: '1 Double Bed',
      idealFor: '1-2 Guests',
      pricingNote: 'Rate confirmed upon reservation request',
    },
  ] as RoomItem[],

  diningServices: [
    { title: 'Dine-in Service', desc: 'Comfortable restaurant dining with traditional hospitality' },
    { title: 'Takeaway & Pick-up', desc: 'Freshly prepared orders packaged securely for your journey' },
    { title: 'No-Contact Delivery', desc: 'Prompt direct doorstep delivery within Larkana' },
    { title: 'Private & Group Dining', desc: 'Reserved table settings for family gatherings and banquets' },
    { title: 'Event Catering', desc: 'Authentic catering for celebrations and private gatherings' },
    { title: 'Traditional Tea Service', desc: 'Freshly brewed hot Karak Chai & refreshing beverages' },
  ],

  amenityCategories: [
    {
      title: 'Accessibility',
      items: [
        { name: 'Wheelchair Accessible Entrance', description: 'Step-free hotel access for all guests', icon: 'accessibility' },
        { name: 'Wheelchair Accessible Parking', description: 'Dedicated accessible parking bays on premise', icon: 'parking' },
        { name: 'Wheelchair Accessible Restroom', description: 'Spacious accessible facilities', icon: 'restroom' },
        { name: 'Wheelchair Accessible Seating', description: 'Comfortable seating arrangements across dining halls', icon: 'chair' },
      ],
    },
    {
      title: 'Dining & Service Options',
      items: [
        { name: 'Dine-in Restaurant', description: 'Warm sit-down hospitality and table service', icon: 'utensils' },
        { name: 'Takeout Service', description: 'Convenient packaging for travel and on-the-go', icon: 'package' },
        { name: 'Delivery & No-Contact', description: 'Reliable doorstep meals in Larkana', icon: 'bike' },
        { name: 'Table Reservations', description: 'Advance booking for lunch and dinner', icon: 'calendar' },
        { name: 'Event Catering', description: 'Specialized menu catering for gatherings', icon: 'users' },
      ],
    },
    {
      title: 'Property Highlights',
      items: [
        { name: 'Rooftop Seating', description: 'Breezy evening dining and open-air relaxation', icon: 'sun' },
        { name: 'Sports Screenings', description: 'Live matches on high-definition displays in lounge', icon: 'tv' },
        { name: 'Specialty Coffee & Karak Chai', description: 'Freshly prepared traditional teas & coffees', icon: 'coffee' },
        { name: 'Desserts & Sweets', description: 'Sweet treats to complete every meal', icon: 'cake' },
        { name: 'Fireplace & Warm Ambiance', description: 'Welcoming communal atmosphere for chillier nights', icon: 'flame' },
      ],
    },
    {
      title: 'Payment & Family Amenities',
      items: [
        { name: 'Card Payments Accepted', description: 'Supports standard credit and debit cards', icon: 'credit-card' },
        { name: 'Family & Kid Friendly', description: 'Welcoming environment for children of all ages', icon: 'smile' },
        { name: 'Kids Birthday Gatherings', description: 'Private space options for family milestone celebrations', icon: 'party-popper' },
        { name: 'High Chairs Available', description: 'Safe dining chairs for toddlers and infants', icon: 'baby' },
      ],
    },
    {
      title: 'Parking & Vehicle Convenience',
      items: [
        { name: 'Free Parking Lot', description: 'Secured on-site guest parking', icon: 'car' },
        { name: 'Free Street Parking', description: 'Convenient street-level parking spaces adjacent to entrance', icon: 'compass' },
      ],
    },
  ] as AmenityCategory[],

  whyStayWithUs: [
    {
      title: 'COMFORTABLE STAYS',
      subtitle: 'Peaceful Guest Rooms',
      desc: 'Thoughtfully arranged rooms equipped with handcrafted wood furniture, soft bedding, air conditioning, and quiet surroundings.',
    },
    {
      title: 'WARM HOSPITALITY',
      subtitle: 'Attentive Staff',
      desc: 'Authentic Sindhi and Pakistani hospitality where front desk staff attend to your comfort, arrival, and requests around the clock.',
    },
    {
      title: 'ELEGANT DINING',
      subtitle: 'Fresh Meals & Chai',
      desc: 'On-site restaurant dining serving freshly prepared hot meals, traditional chai, savory specials, and dedicated room service.',
    },
    {
      title: 'CONVENIENT LOCATION',
      subtitle: 'Prime Larkana Access',
      desc: 'Centrally located at H626+8W3 in Larkana with accessible parking, quick city connectivity, and welcoming lobby lounges.',
    },
  ],

  galleryItems: [
    {
      id: 'gal-1',
      title: 'Grand Reception & Lounge',
      category: 'HOTEL',
      image: heroLobbyImg,
      description: 'The welcoming main reception desk and lobby lounge at Larkana Hotel Inn.',
    },
    {
      id: 'gal-2',
      title: 'Deluxe Guest Room',
      category: 'ROOMS',
      image: deluxeRoomImg,
      description: 'Deluxe accommodation with natural wood finishes and warm architectural backlighting.',
    },
    {
      id: 'gal-3',
      title: 'Twin Guest Room',
      category: 'ROOMS',
      image: twinRoomImg,
      description: 'Spacious twin bedroom setting for family and corporate guests.',
    },
    {
      id: 'gal-4',
      title: 'Hotel Restaurant & Dining Hall',
      category: 'DINING',
      image: diningRestaurantImg,
      description: 'Elegant dining area with diamond-tufted chairs and attentive service.',
    },
    {
      id: 'gal-5',
      title: 'Traditional Karak Chai Service',
      category: 'DINING',
      image: teaHospitalityImg,
      description: 'Fresh steaming milk tea served throughout the day to hotel guests.',
    },
    {
      id: 'gal-6',
      title: 'Lobby Seating & Architecture',
      category: 'INTERIORS',
      image: heroLobbyImg,
      description: 'Carefully appointed interior architecture with marble floors and soft lighting.',
    },
  ] as GalleryItem[],
};
