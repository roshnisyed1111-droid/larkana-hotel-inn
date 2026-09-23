import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  User,
  Phone,
  Mail,
  Users,
  Home,
  Clock,
  FileText,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
} from 'lucide-react';
import { HOTEL_CONFIG } from '../data/hotelConfig.ts';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedRoomId?: string;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({
  isOpen,
  onClose,
  preselectedRoomId,
}) => {
  const [step, setStep] = useState<'form' | 'summary' | 'ready'>('form');

  // Today's date in YYYY-MM-DD format for min check-in date
  const todayStr = new Date().toISOString().split('T')[0];

  // Default check-out tomorrow
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowStr = tomorrow.toISOString().split('T')[0];

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [roomId, setRoomId] = useState('');
  const [checkIn, setCheckIn] = useState(todayStr);
  const [checkOut, setCheckOut] = useState(tomorrowStr);
  const [adults, setAdults] = useState('2');
  const [children, setChildren] = useState('0');
  const [numberOfRooms, setNumberOfRooms] = useState('1');
  const [arrivalTime, setArrivalTime] = useState('14:00 (Standard Check-in)');
  const [specialRequest, setSpecialRequest] = useState('');

  // Validation Error State
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (preselectedRoomId) {
      setRoomId(preselectedRoomId);
    } else if (!roomId && HOTEL_CONFIG.rooms.length > 0) {
      setRoomId(HOTEL_CONFIG.rooms[0].id);
    }
  }, [preselectedRoomId]);

  if (!isOpen) return null;

  const selectedRoomObj = HOTEL_CONFIG.rooms.find((r) => r.id === roomId) || HOTEL_CONFIG.rooms[0];

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }
    if (!phone.trim()) {
      newErrors.phone = 'Phone / WhatsApp number is required';
    } else if (phone.trim().length < 8) {
      newErrors.phone = 'Please provide a valid phone number';
    }
    if (!checkIn) {
      newErrors.checkIn = 'Check-in date is required';
    } else if (checkIn < todayStr) {
      newErrors.checkIn = 'Check-in date cannot be in the past';
    }
    if (!checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (checkOut <= checkIn) {
      newErrors.checkOut = 'Check-out date must be after check-in date';
    }
    if (!adults || parseInt(adults, 10) < 1) {
      newErrors.adults = 'At least 1 adult is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleProceedToSummary = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setStep('summary');
    }
  };

  const handleConfirmViaWhatsApp = () => {
    const roomName = selectedRoomObj ? selectedRoomObj.name : 'Standard Room';

    // Construct dynamic message according to exact specified template
    const rawMessage = `Hello Larkana Hotel Inn,

I would like to make a reservation request.

━━━━━━━━━━━━━━━━
RESERVATION DETAILS
━━━━━━━━━━━━━━━━

Guest Name:
${fullName.trim()}

Room:
${roomName}

Check-in:
${checkIn}

Check-out:
${checkOut}

Adults:
${adults}

Children:
${children || '0'}

Number of Rooms:
${numberOfRooms || '1'}

Phone:
${phone.trim()}

Email:
${email.trim() || 'Not provided'}

Special Request:
${specialRequest.trim() || 'None'}

━━━━━━━━━━━━━━━━

Please confirm the room availability and reservation details.

Thank you.`;

    const encodedMessage = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${HOTEL_CONFIG.whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    // Transition to 'ready' stage
    setStep('ready');
  };

  const handleResetAndClose = () => {
    setStep('form');
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200"
    >
      <div className="relative bg-[#FAF8F5] w-full max-w-2xl rounded-sm shadow-2xl border border-[#E6DFD5] overflow-hidden my-6">
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 bg-white border-b border-[#E6DFD5]">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[#5B141D]">
              DIRECT RESERVATION REQUEST
            </span>
            <h3 className="font-serif text-2xl text-[#1E1B18] font-normal">
              {step === 'form' && 'RESERVE YOUR STAY'}
              {step === 'summary' && 'YOUR RESERVATION REQUEST'}
              {step === 'ready' && 'RESERVATION REQUEST READY'}
            </h3>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-2 text-[#4A453F] hover:text-[#1E1B18] hover:bg-[#FAF8F5] rounded-sm transition-colors cursor-pointer"
            aria-label="Close reservation modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* STEP 1: FORM */}
        {step === 'form' && (
          <form onSubmit={handleProceedToSummary} className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            <p className="text-xs sm:text-sm text-[#5C564F] leading-relaxed">
              Complete your stay details below and continue to confirm your reservation request directly with Larkana Hotel Inn through WhatsApp.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Full Name */}
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Full Name <span className="text-[#5B141D]">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    placeholder="e.g. Tariq Ahmed"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] placeholder:text-[#999] focus:outline-none focus:border-[#5B141D]"
                  />
                </div>
                {errors.fullName && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.fullName}</span>
                  </p>
                )}
              </div>

              {/* Phone / WhatsApp */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Phone / WhatsApp <span className="text-[#5B141D]">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] placeholder:text-[#999] focus:outline-none focus:border-[#5B141D]"
                  />
                </div>
                {errors.phone && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.phone}</span>
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Email Address <span className="text-xs text-[#736B63] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="guest@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] placeholder:text-[#999] focus:outline-none focus:border-[#5B141D]"
                  />
                </div>
              </div>

              {/* Room Selection */}
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Selected Room <span className="text-[#5B141D]">*</span>
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={roomId}
                    onChange={(e) => setRoomId(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] focus:outline-none focus:border-[#5B141D] cursor-pointer"
                  >
                    {HOTEL_CONFIG.rooms.map((r) => (
                      <option key={r.id} value={r.id}>
                        {r.name} ({r.bedType})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Check-In Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Check-in Date <span className="text-[#5B141D]">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    required
                    min={todayStr}
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] focus:outline-none focus:border-[#5B141D]"
                  />
                </div>
                {errors.checkIn && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.checkIn}</span>
                  </p>
                )}
              </div>

              {/* Check-Out Date */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Check-out Date <span className="text-[#5B141D]">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    required
                    min={checkIn || todayStr}
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] focus:outline-none focus:border-[#5B141D]"
                  />
                </div>
                {errors.checkOut && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center space-x-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.checkOut}</span>
                  </p>
                )}
              </div>

              {/* Adults */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Adults <span className="text-[#5B141D]">*</span>
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={adults}
                    onChange={(e) => setAdults(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] focus:outline-none focus:border-[#5B141D]"
                  >
                    {[1, 2, 3, 4, 5, 6].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Adult' : 'Adults'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Children */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Children
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={children}
                    onChange={(e) => setChildren(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] focus:outline-none focus:border-[#5B141D]"
                  >
                    {[0, 1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>
                        {n} Children
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Number of Rooms */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Number of Rooms
                </label>
                <div className="relative">
                  <Home className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <select
                    value={numberOfRooms}
                    onChange={(e) => setNumberOfRooms(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] focus:outline-none focus:border-[#5B141D]"
                  >
                    {[1, 2, 3, 4, 5].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Room' : 'Rooms'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Estimated Arrival Time */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Arrival Time
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 text-[#736B63] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="e.g. 14:00 or Afternoon"
                    value={arrivalTime}
                    onChange={(e) => setArrivalTime(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] placeholder:text-[#999] focus:outline-none focus:border-[#5B141D]"
                  />
                </div>
              </div>

              {/* Special Request */}
              <div className="sm:col-span-2">
                <label className="block text-xs uppercase tracking-wider font-semibold text-[#1E1B18] mb-1.5">
                  Special Request <span className="text-xs text-[#736B63] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <FileText className="w-4 h-4 text-[#736B63] absolute left-3.5 top-3 pointer-events-none" />
                  <textarea
                    rows={2}
                    placeholder="Early check-in, ground floor room, airport / bus stop pickup assistance..."
                    value={specialRequest}
                    onChange={(e) => setSpecialRequest(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#E6DFD5] rounded-sm text-sm text-[#1E1B18] placeholder:text-[#999] focus:outline-none focus:border-[#5B141D]"
                  />
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="p-3 bg-[#F4EFEA] rounded-sm border border-[#E6DFD5] text-xs text-[#736B63]">
              Notice: This is a reservation request. Rates and availability are confirmed manually by Larkana Hotel Inn staff upon WhatsApp message receipt.
            </div>

            {/* Submit */}
            <div className="pt-2 flex items-center justify-end space-x-3">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="px-5 py-2.5 text-xs uppercase tracking-wider text-[#4A453F] hover:text-[#1E1B18] cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-sm border border-[#7D222E] flex items-center space-x-2 cursor-pointer"
              >
                <span>REVIEW RESERVATION</span>
                <ArrowRight className="w-4 h-4 text-[#C9A86A]" />
              </button>
            </div>
          </form>
        )}

        {/* STEP 2: SUMMARY REVIEW */}
        {step === 'summary' && (
          <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
            <p className="text-xs sm:text-sm text-[#5C564F] leading-relaxed">
              Please review your reservation details. Clicking below will open WhatsApp with your pre-formatted request ready to send to Larkana Hotel Inn.
            </p>

            <div className="bg-white rounded-sm border border-[#E6DFD5] p-5 space-y-3.5 text-xs text-[#1E1B18]">
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE3]">
                <span className="text-[#736B63] uppercase tracking-wider">Guest Name:</span>
                <span className="font-semibold text-sm">{fullName}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE3]">
                <span className="text-[#736B63] uppercase tracking-wider">Selected Room:</span>
                <span className="font-semibold text-sm text-[#5B141D]">{selectedRoomObj?.name}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE3]">
                <span className="text-[#736B63] uppercase tracking-wider">Check-in Date:</span>
                <span className="font-semibold">{checkIn}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE3]">
                <span className="text-[#736B63] uppercase tracking-wider">Check-out Date:</span>
                <span className="font-semibold">{checkOut}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE3]">
                <span className="text-[#736B63] uppercase tracking-wider">Guests:</span>
                <span className="font-semibold">
                  {adults} Adults {children !== '0' && `· ${children} Children`}
                </span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE3]">
                <span className="text-[#736B63] uppercase tracking-wider">Number of Rooms:</span>
                <span className="font-semibold">{numberOfRooms}</span>
              </div>
              <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE3]">
                <span className="text-[#736B63] uppercase tracking-wider">Phone / WhatsApp:</span>
                <span className="font-mono font-medium">{phone}</span>
              </div>
              {email && (
                <div className="flex items-center justify-between pb-3 border-b border-[#F0EBE3]">
                  <span className="text-[#736B63] uppercase tracking-wider">Email:</span>
                  <span>{email}</span>
                </div>
              )}
              {specialRequest && (
                <div className="pb-3 border-b border-[#F0EBE3]">
                  <span className="text-[#736B63] uppercase tracking-wider block mb-1">Special Request:</span>
                  <p className="italic text-[#4A453F] bg-[#FAF8F5] p-2.5 rounded-sm border border-[#E6DFD5]">
                    {specialRequest}
                  </p>
                </div>
              )}
              {/* Mandatory Official Pricing Notice */}
              <div className="flex items-center justify-between pt-2">
                <span className="text-[#736B63] uppercase tracking-wider">PRICE:</span>
                <span className="text-xs uppercase font-semibold text-[#5B141D] bg-[#FAF8F5] px-2.5 py-1 rounded-sm border border-[#E6DFD5]">
                  To be confirmed by hotel
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3">
              <button
                type="button"
                onClick={() => setStep('form')}
                className="w-full sm:w-auto px-5 py-3 text-xs uppercase tracking-wider font-semibold text-[#4A453F] hover:text-[#1E1B18] bg-white border border-[#E6DFD5] rounded-sm flex items-center justify-center space-x-2 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>EDIT DETAILS</span>
              </button>

              <button
                type="button"
                onClick={handleConfirmViaWhatsApp}
                className="w-full sm:w-auto bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-sm shadow-md flex items-center justify-center space-x-2.5 cursor-pointer transition-transform duration-150 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>CONFIRM VIA WHATSAPP</span>
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: RESERVATION REQUEST READY (CONFIRMATION STATE) */}
        {step === 'ready' && (
          <div className="p-6 sm:p-10 space-y-6 text-center">
            <div className="w-14 h-14 rounded-full bg-[#EBF7EE] border border-[#25D366]/40 flex items-center justify-center mx-auto text-[#25D366]">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2 max-w-md mx-auto">
              <h4 className="font-serif text-2xl text-[#1E1B18] font-normal">
                RESERVATION REQUEST READY
              </h4>
              <p className="text-xs sm:text-sm text-[#4A453F] leading-relaxed">
                Your reservation request has been prepared in WhatsApp. Please send the message to Larkana Hotel Inn so the hotel can confirm availability.
              </p>
            </div>

            <div className="bg-[#FAF8F5] p-4 rounded-sm border border-[#E6DFD5] text-xs text-[#736B63] max-w-sm mx-auto">
              Hotel Reception Desk: <span className="font-mono font-semibold text-[#1E1B18]">{HOTEL_CONFIG.phoneNumber}</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <button
                type="button"
                onClick={handleResetAndClose}
                className="w-full sm:w-auto px-6 py-3 text-xs uppercase tracking-wider font-semibold text-[#1E1B18] bg-white hover:bg-[#FAF8F5] border border-[#E6DFD5] rounded-sm transition-colors cursor-pointer"
              >
                RETURN TO WEBSITE
              </button>

              <a
                href={`tel:${HOTEL_CONFIG.phoneCallNumber}`}
                className="w-full sm:w-auto btn-embossed bg-[#5B141D] hover:bg-[#480E15] text-[#FAF8F5] text-xs uppercase tracking-wider font-semibold px-6 py-3 rounded-sm border border-[#7D222E] flex items-center justify-center space-x-2"
              >
                <Phone className="w-4 h-4 text-[#C9A86A]" />
                <span>CALL HOTEL</span>
              </a>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
