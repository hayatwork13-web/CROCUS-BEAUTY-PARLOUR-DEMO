/* Crocus Beauty Parlour - Premium Salon Interactive Functionality */

// Initial services data structured for dynamic interactive rendering
const SERVICES_DATA = [
  {
    id: 'bridal-signature',
    name: 'Crocus Signature Bridal Makeup',
    category: 'bridal',
    price: 'Rs. 35,000',
    duration: '3 - 4 Hours',
    description: 'Our crown jewel service. Flawless HD airbrush or traditional luxury bridal makeup with customized hair styling, dupatta setting, jewelry setting, and pre-makeup skin prep.',
    features: ['HD Premium Airbrush', 'Lashes & Contouring included', 'Dupatta & Jewelry Setting', 'Premium Skin Prep Consultation']
  },
  {
    id: 'bridal-valima',
    name: 'Luxury Valima / Reception Look',
    category: 'bridal',
    price: 'Rs. 30,000',
    duration: '3 Hours',
    description: 'An elegant, soft, and radiant look designed for reception brides. Includes hair design, nail polish application, and full bridal setting.',
    features: ['Radiant Glow Finish', 'Premium Hair Styling', 'Setting & Prep', 'Lashes Included']
  },
  {
    id: 'bridal-engagement',
    name: 'Engagement & Nikkah Makeup',
    category: 'bridal',
    price: 'Rs. 20,000',
    duration: '2.5 Hours',
    description: 'Delicate, sophisticated and timeless makeup designed for your Nikkah or Engagement day with high-end designer styling.',
    features: ['Dewy, Soft Traditional Look', 'Designer Hair Styling', 'Setting & Jewellery Prep']
  },
  {
    id: 'makeup-party-signature',
    name: 'Signature Party Makeup',
    category: 'makeup',
    price: 'Rs. 8,000',
    duration: '1.5 Hours',
    description: 'Flawless look customized for any formal event, wedding guest look, or party. High-end contouring and eye makeup included.',
    features: ['Flawless HD Base', 'Stunning Eye Artistry', 'Contour & Highlight', 'Setting Spray Finish']
  },
  {
    id: 'makeup-glam-party',
    name: 'Heavy Glam Party Makeup',
    category: 'makeup',
    price: 'Rs. 10,000',
    duration: '2 Hours',
    description: 'Dramatic, high-impact heavy glam eye makeup with glitter or smokey effect, long-wear foundation, and luxury lashes.',
    features: ['Glitter / Smokey Eye', '3D Mink Lashes', 'Ultra-long Wear Base', 'Custom Lip Styling']
  },
  {
    id: 'makeup-mineral-glow',
    name: 'Soft Mineral Glow (Day Look)',
    category: 'makeup',
    price: 'Rs. 6,000',
    duration: '1 Hour',
    description: 'Natural makeup base using premium mineral products, perfect for daytime gatherings, luncheons, or soft pre-wedding events.',
    features: ['Lightweight Base', 'Soft Natural Blush', 'Neutral Eye tones']
  },
  {
    id: 'hair-styling-signature',
    name: 'Crocus Signature Updo & Styling',
    category: 'hair-styling',
    price: 'Rs. 3,500',
    duration: '1 Hour',
    description: 'Premium hair updos, sleek buns, high-fashion braids, or intricate traditional hair styling tailored for weddings and parties.',
    features: ['Intricate Braids/Updos', 'Setting Accessories Placement', 'Volumizing Blow-dry']
  },
  {
    id: 'hair-styling-curls',
    name: 'Luxury Hollywood Waves & Curls',
    category: 'hair-styling',
    price: 'Rs. 3,000',
    duration: '45 Mins',
    description: 'Soft, bouncy Hollywood curls, textured beachy waves, or structured barrel curls with long-lasting premium hold spray.',
    features: ['Heat Protection Shield', 'Long-lasting Setting', 'High-shine Finish']
  },
  {
    id: 'hair-styling-blowdry',
    name: 'Premium Volumizing Blow-dry',
    category: 'hair-styling',
    price: 'Rs. 2,000',
    duration: '30 Mins',
    description: 'Bouncy, professional blow-out giving your hair maximum volume, shine, and motion for any corporate or family gathering.',
    features: ['Shine Oil Treatment', 'Inward/Outward Blow-out', 'Volumizing Root Lift']
  },
  {
    id: 'hair-treatment-keratin',
    name: 'Premium Keratin Smoothing Treatment',
    category: 'hair-treatment',
    price: 'Rs. 15,000',
    duration: '3 - 4 Hours',
    description: 'Say goodbye to frizz. Rejuvenates, straightens, and adds mirror-like shine to rough, damaged, or unmanageable hair.',
    features: ['Frizz-Free up to 5 months', 'Intense Keratin Infusion', 'Damage Repair Formula']
  },
  {
    id: 'hair-treatment-protein',
    name: 'Ultra Protein Nourishing Therapy',
    category: 'hair-treatment',
    price: 'Rs. 8,000',
    duration: '2 Hours',
    description: 'Intense reconstructive treatment to restore essential amino acids and proteins back into chemically treated or bleached hair.',
    features: ['Elasticity Restored', 'Split End Prevention', 'Deep Conditioning Steam']
  },
  {
    id: 'hair-treatment-hairspa',
    name: 'Crocus Luxury Hair Spa & Steam',
    category: 'hair-treatment',
    price: 'Rs. 4,500',
    duration: '1.5 Hours',
    description: 'Relaxing hot oil massage, herbal scalp peel, nutrient-dense mask, and custom ionic steam to stimulate healthy hair growth.',
    features: ['Relaxing Scalp Massage', 'Ionic Hair Steaming', 'Deep Herbal Hydration']
  },
  {
    id: 'skin-hydrafacial',
    name: 'Advanced HydraFacial MD & Glow',
    category: 'skincare',
    price: 'Rs. 10,000',
    duration: '1.5 Hours',
    description: 'Multi-step advanced non-invasive facial combining cleansing, deep exfoliation, painless extraction, hydration, and antioxidant infusion.',
    features: ['Deep Pore Exfoliation', 'Blackhead Extraction', 'Hyaluronic Acid Infusion', 'LED Light Therapy']
  },
  {
    id: 'skin-gold-brightening',
    name: '24K Gold Luxury Brightening Facial',
    category: 'skincare',
    price: 'Rs. 7,500',
    duration: '1.25 Hours',
    description: 'Infuses real 24K gold particles to improve skin elasticity, clear complexion, boost blood circulation, and reduce dark spots.',
    features: ['Real 24K Gold Mask', 'Lymphatic Face Massage', 'Immediate Radiance Booster']
  },
  {
    id: 'skin-whitening',
    name: 'Organic Herbal Glow Whitening Facial',
    category: 'skincare',
    price: 'Rs. 5,000',
    duration: '1 Hour',
    description: 'Perfect natural skincare therapy using high-grade herbal extracts, cucumber, mint, and pure essential oils for skin lightening.',
    features: ['100% Organic Products', 'Gentle Soothing Scrub', 'Ice Roller Soothing']
  },
  {
    id: 'nails-pedi-mani',
    name: 'Crocus Royal Manicure & Pedicure Spa',
    category: 'nails-waxing',
    price: 'Rs. 5,500',
    duration: '1.5 Hours',
    description: 'The ultimate pampering session. Deep sea salt soak, lavender sugar scrub, clay mask, dead skin filing, nourishing oil massage, and nail polishing.',
    features: ['Dead Skin Removal', 'Soothing Lavender Scrub', 'Extended Muscle Massage', 'Nail Trim, Shape & Color']
  },
  {
    id: 'nails-paraffin',
    name: 'Paraffin Wax Deep Hydration Treatment',
    category: 'nails-waxing',
    price: 'Rs. 3,500',
    duration: '45 Mins',
    description: 'Warm, therapeutic liquid paraffin wax soak to soften dry hands and feet, boosting hydration and relieving minor joint stiffness.',
    features: ['Deep Thermal Softening', 'Essential Oil Finish', 'Nail Whitening Therapy']
  },
  {
    id: 'waxing-full-body',
    name: 'Premium Full-Body Organic Waxing',
    category: 'nails-waxing',
    price: 'Rs. 8,000',
    duration: '2 Hours',
    description: 'Hygiene-first waxing using premium, pain-minimizing warm organic honey wax. Gently removes root hair for silky smooth skin.',
    features: ['Ultra-Hygiene Single Use Wax', 'Soothing Aloevera Gel Finish', 'Soft Skin Re-growth']
  },
  {
    id: 'package-luxury-glow',
    name: 'The Luxury Bridal Glow Countdown',
    category: 'packages',
    price: 'Rs. 25,000',
    duration: 'Spread over 2 Visits',
    description: 'Complete pre-wedding pampering. Includes HydraFacial MD, Luxury Hair Spa, Hair Treatment, Royal Mani-Pedi, and Full-Body waxing.',
    features: ['Complete Pre-Bridal Care', '2 Dedicated Luxury Sessions', 'Bridal Skin Consult included', 'Save 15% on individual services']
  },
  {
    id: 'package-bridesmaid',
    name: 'Royal Bridesmaid / Sister Package',
    category: 'packages',
    price: 'Rs. 12,500',
    duration: '2.5 Hours',
    description: 'Premium Party Makeup, Custom Updo/Hairstyle, and designer dupatta/jewelry setting, perfect for bride\'s sister or best friends.',
    features: ['Full Glow Party Makeup', 'Intricate Updo Styling', 'Jewelry/Dupatta Setting']
  }
];

// Dom Elements Ready Listener
document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initServicesTabs();
  initBookingWidget();
  initAnimations();
  initFaqAccordion();
});

/* Mobile Navigation Drawer Toggle */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuCloseBtn = document.getElementById('mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  if (!menuBtn || !mobileMenu) return;

  function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    document.body.classList.toggle('overflow-hidden');
  }

  menuBtn.addEventListener('click', toggleMenu);
  if (menuCloseBtn) menuCloseBtn.addEventListener('click', toggleMenu);

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
      document.body.classList.remove('overflow-hidden');
    });
  });
}

/* Service Navigation and live filtering engine */
function initServicesTabs() {
  const tabContainer = document.getElementById('services-tabs');
  const servicesGrid = document.getElementById('services-grid');
  const searchInput = document.getElementById('services-search');
  
  if (!tabContainer || !servicesGrid) return;

  let currentCategory = 'bridal';
  let searchQuery = '';

  // Function to render filtered services list
  function renderServices() {
    servicesGrid.innerHTML = '';

    const filtered = SERVICES_DATA.filter(service => {
      const matchesCategory = currentCategory === 'all' || service.category === currentCategory;
      const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            service.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      servicesGrid.innerHTML = `
        <div class="col-span-full py-12 text-center">
          <svg class="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
          <p class="text-lg font-serif-luxury text-gray-600 mb-2">No treatments found</p>
          <p class="text-sm text-gray-400">Try adjusting your search terms or selecting a different category.</p>
        </div>
      `;
      return;
    }

    // Render cards
    filtered.forEach((service, index) => {
      const card = document.createElement('div');
      card.id = `service-${service.id}`;
      card.className = 'premium-card p-6 flex flex-col justify-between rounded-2xl bg-white hover:-translate-y-1 transition-all duration-300 relative';
      
      // Features checklist HTML
      const featuresHTML = service.features.map(feat => `
        <li class="flex items-start text-xs text-gray-600 gap-2 mb-1.5">
          <svg class="h-4 w-4 text-accentPink shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>${feat}</span>
        </li>
      `).join('');

      card.innerHTML = `
        <div>
          <div class="flex justify-between items-start gap-4 mb-3">
            <span class="inline-block px-2.5 py-1 rounded-full text-[10px] font-semibold tracking-wider uppercase bg-[#FDEEF4] text-accentPink border border-[#F4D9E5]">
              ${service.category.replace('-', ' ')}
            </span>
            <span class="text-xs text-mutedText font-mono flex items-center gap-1">
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              ${service.duration}
            </span>
          </div>
          
          <h3 class="text-lg font-serif-luxury font-semibold text-darkText mb-2 group-hover:text-accentPink transition-colors">
            ${service.name}
          </h3>
          <p class="text-xs text-mutedText leading-relaxed mb-4">
            ${service.description}
          </p>
          
          <ul class="mb-6 border-t border-dashed border-[#F4D9E5] pt-4">
            ${featuresHTML}
          </ul>
        </div>
        
        <div class="flex items-center justify-between mt-auto border-t border-[#F4D9E5] pt-4">
          <div>
            <span class="block text-[10px] text-mutedText uppercase tracking-wider font-semibold">Investment</span>
            <span class="text-lg font-bold text-accentPink font-display">${service.price}</span>
          </div>
          <button onclick="bookThisService('${service.category}', '${service.name}')" 
            class="px-4 py-2 text-xs font-semibold rounded-lg border border-[#D96A9A] text-accentPink hover:bg-accentPink hover:text-white transition-all duration-300 shadow-sm flex items-center gap-1.5 cursor-pointer">
            Quick Select
            <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      `;

      servicesGrid.appendChild(card);
    });
  }

  // Bind category tabs click
  const tabs = tabContainer.querySelectorAll('[data-category]');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tab-active', 'bg-accentPink', 'text-white'));
      tabs.forEach(t => t.classList.add('bg-white', 'text-darkText'));

      tab.classList.add('tab-active');
      tab.classList.remove('bg-white', 'text-darkText');
      
      currentCategory = tab.getAttribute('data-category');
      renderServices();
    });
  });

  // Bind live search
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderServices();
    });
  }

  // Initial render
  renderServices();
}

/* Dynamic Live WhatsApp Booking Form Engine */
function initBookingWidget() {
  const categorySelect = document.getElementById('book-category');
  const serviceSelect = document.getElementById('book-service');
  const dateInput = document.getElementById('book-date');
  const nameInput = document.getElementById('book-name');
  const timeInput = document.getElementById('book-time');
  const notesInput = document.getElementById('book-notes');
  const submitBtn = document.getElementById('whatsapp-submit-btn');
  const bookingSummaryMsg = document.getElementById('booking-summary-message');

  if (!categorySelect || !serviceSelect || !submitBtn) return;

  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute('min', today);

  // Update services select options on category change
  categorySelect.addEventListener('change', () => {
    const selectedCat = categorySelect.value;
    serviceSelect.innerHTML = '<option value="">-- Choose Treatment --</option>';
    
    const filtered = SERVICES_DATA.filter(s => s.category === selectedCat || selectedCat === 'all');
    filtered.forEach(s => {
      const option = document.createElement('option');
      option.value = s.name;
      option.textContent = `${s.name} (${s.price})`;
      serviceSelect.appendChild(option);
    });

    serviceSelect.removeAttribute('disabled');
    updateBookingSummary();
  });

  // Update preview on inputs change
  [serviceSelect, dateInput, timeInput, nameInput, notesInput].forEach(elem => {
    if (elem) elem.addEventListener('input', updateBookingSummary);
  });

  function updateBookingSummary() {
    const clientName = nameInput.value.trim() || 'Valued Guest';
    const selectedService = serviceSelect.value || 'None selected yet';
    const selectedDate = dateInput.value || 'Not selected';
    const selectedTime = timeInput.value || 'Not selected';
    const notes = notesInput.value.trim() ? `\n*Note:* ${notesInput.value.trim()}` : '';

    if (bookingSummaryMsg) {
      bookingSummaryMsg.innerHTML = `
        <div class="space-y-1 text-sm bg-[#FFF8FB] border border-[#F4D9E5] rounded-xl p-4">
          <div class="flex justify-between border-b border-pink-100 pb-1.5 mb-1.5">
            <span class="text-xs font-semibold text-accentPink uppercase">Live Consultation Summary</span>
            <span class="flex h-2 w-2 rounded-full bg-green-500 animate-pulse mt-1"></span>
          </div>
          <p class="text-xs text-mutedText"><strong class="text-darkText">Guest Name:</strong> ${clientName}</p>
          <p class="text-xs text-mutedText"><strong class="text-darkText">Selected Styling:</strong> ${selectedService}</p>
          <p class="text-xs text-mutedText"><strong class="text-darkText">Desired Date:</strong> ${selectedDate}</p>
          <p class="text-xs text-mutedText"><strong class="text-darkText">Booking Time Slot:</strong> ${selectedTime}</p>
          ${notesInput.value.trim() ? `<p class="text-xs text-mutedText"><strong class="text-darkText">Custom Request:</strong> ${notesInput.value.trim()}</p>` : ''}
        </div>
      `;
    }
  }

  // WhatsApp Message Compiler & Redirector
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    const clientName = nameInput.value.trim();
    const selectedService = serviceSelect.value;
    const selectedDate = dateInput.value;
    const selectedTime = timeInput.value;
    const customNotes = notesInput.value.trim();

    // Validation
    if (!clientName) {
      showToast('Please enter your lovely name to personalize your booking!');
      nameInput.focus();
      return;
    }
    if (!selectedService) {
      showToast('Please select a luxury treatment/styling from the services menu.');
      serviceSelect.focus();
      return;
    }
    if (!selectedDate) {
      showToast('Please choose a preferred date for your treatment.');
      dateInput.focus();
      return;
    }
    if (!selectedTime) {
      showToast('Please select a timing slot.');
      timeInput.focus();
      return;
    }

    // Compose formatted WhatsApp text
    let messageText = `Hello Crocus Beauty Parlour, I would like to book a premium styling appointment.

🌟 *BOOKING DETAILS* 🌟
----------------------------------
👑 *Client Name:* ${clientName}
💇‍♀️ *Selected Treatment:* ${selectedService}
📅 *Preferred Date:* ${selectedDate}
⏰ *Time Slot:* ${selectedTime}
📝 *Client Notes:* ${customNotes ? customNotes : 'None'}
----------------------------------
Thank you! Looking forward to your prompt confirmation.`;

    // Compile into clean URL
    const encodedMessage = encodeURIComponent(messageText);
    const whatsappURL = `https://wa.me/923162722503?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappURL, '_blank');
  });

  // Export helper globally so service cards can auto-select treatments
  window.bookThisService = function(category, serviceName) {
    // Switch select values
    categorySelect.value = category;
    
    // Trigger change manually to populate options
    const event = new Event('change');
    categorySelect.dispatchEvent(event);
    
    serviceSelect.value = serviceName;
    
    // Smooth scroll to booking section
    const bookingSection = document.getElementById('booking');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Highlight fields and show validation tips
    showToast(`"${serviceName}" selected! Complete your preferred details below.`);
    updateBookingSummary();
  }
}

/* Collapsible luxury Accordion FAQs */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');
    
    if (!trigger || !answer || !icon) return;
    
    trigger.addEventListener('click', () => {
      const isOpen = !answer.classList.contains('hidden');
      
      // Close all other FAQs for smooth accordion action
      faqItems.forEach(otherItem => {
        const otherAnswer = otherItem.querySelector('.faq-answer');
        const otherIcon = otherItem.querySelector('.faq-icon');
        if (otherAnswer && otherIcon) {
          otherAnswer.classList.add('hidden');
          otherIcon.style.transform = 'rotate(0deg)';
          otherItem.classList.remove('border-accentPink');
          otherItem.classList.add('border-[#F4D9E5]');
        }
      });
      
      if (!isOpen) {
        answer.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
        item.classList.remove('border-[#F4D9E5]');
        item.classList.add('border-accentPink');
      } else {
        answer.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
        item.classList.remove('border-accentPink');
        item.classList.add('border-[#F4D9E5]');
      }
    });
  });
}

/* Custom Scroll Fade-In triggers using Intersection Observer */
function initAnimations() {
  const fadeElements = document.querySelectorAll('.fade-up-element');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Trigger only once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    fadeElements.forEach(el => observer.observe(el));
  } else {
    // Fallback if browser doesn't support IntersectionObserver
    fadeElements.forEach(el => el.classList.add('visible'));
  }
}

/* Elegant Floating Toast Notification Helper */
function showToast(message) {
  // Check if toast already exists, remove it
  const existingToast = document.getElementById('salon-toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.id = 'salon-toast';
  toast.className = 'fixed bottom-6 right-6 bg-white border border-[#F4D9E5] text-darkText px-5 py-3.5 rounded-2xl shadow-xl z-50 flex items-center gap-3 transform translate-y-20 opacity-0 transition-all duration-300 max-w-sm';
  toast.innerHTML = `
    <div class="h-8 w-8 rounded-full bg-[#FDEEF4] flex items-center justify-center text-accentPink shrink-0">
      <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
      </svg>
    </div>
    <p class="text-xs font-medium">${message}</p>
  `;

  document.body.appendChild(toast);

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-20', 'opacity-0');
  }, 100);

  // Animate out after 4 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}
