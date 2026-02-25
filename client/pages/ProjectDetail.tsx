import { Link, useParams } from 'react-router-dom';
import Header from '../components/Header';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const projects: { [key: string]: any } = {
    'vista-ridge-residence': {
      title: 'Malibu Residence',
      location: 'Malibu, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '6,800 SF',
      materials: 'White oak, natural stone, steel, glass',
      services: 'Architecture, Interior Design, Landscape Coordination',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6075aa98e58e4e8ab515b72283788bc6?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Vista Ridge Residence represents the pinnacle of contemporary luxury living. This architectural masterpiece seamlessly blends indoor and outdoor spaces through carefully orchestrated material choices and spatial relationships that celebrate both privacy and panoramic city views.',
        'The design strategy embraces a sophisticated material palette of warm white oak, natural stone, and precision steel detailing. Floor-to-ceiling glazing dissolves traditional boundaries while custom millwork and integrated storage solutions maintain the clean aesthetic throughout. Each space is designed as a curated experience, from the dramatic entry sequence to the serene master suite.',
        'Sustainable design principles guide every decision, from passive solar orientation to high-performance building systems. The result is a home that not only reduces environmental impact but creates healthier, more comfortable living spaces. Natural ventilation, abundant daylight, and thoughtful material selection contribute to an atmosphere of refined tranquility.',
        'The landscape design extends the architectural language into the outdoor spaces, creating seamless transitions between interior and exterior living. Carefully selected plantings, water features, and outdoor living areas complete this vision of modern California living at its finest.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F755101a7a8b94d54b1ab72b8479e8d3a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd313f09f11b149e69b27441c42e32058?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb692eeb7a94644debac0bed5edeaf500?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff033852197d740d09e27104901029c88?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff980f05a580849aa948acd3f7e51c14d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4555307562e4417eb6b17c7e72c15831?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F018470904fc44c269cc5104763fa7596?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2d25ab7bcd7145df9751df3ddb334aa5?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1ca7a0921e984f129c063ffc92144307?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F430f8e5abce54bf38c35e0058a4d7dcd?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb537230b4179400cabd2ad02f8f2947e?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe5eebc3cf15748dfb7ef32c49d908e2e?format=webp&width=1200'
      ]
    },
    'pacific-modern-residence': {
      title: 'Cantara Residence',
      location: 'Moorpark, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '4,200 SF',
      materials: 'Stucco, steel, glass, native plantings',
      services: 'Architecture, Interior Design, Landscape Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Pacific Modern Residence exemplifies contemporary California living through its clean geometric forms and seamless integration with the landscape. This single-story design prioritizes horizontal lines and expansive glazing to create a strong connection between interior and exterior spaces.',
        'The architectural approach emphasizes simplicity and material honesty, with crisp white stucco walls providing a neutral backdrop for the carefully curated landscape design. Floor-to-ceiling windows flood the interior with natural light while maintaining privacy through thoughtful orientation and strategic plantings.',
        'Sustainable design principles guide the project, from drought-tolerant native plantings to high-performance building systems. The landscape design features bold strips of hardscape alternating with planted areas, creating a contemporary interpretation of the classic California garden.',
        'The result is a residence that feels both timeless and thoroughly modern, offering a serene retreat that celebrates the beauty of simplified living and the California indoor-outdoor lifestyle.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200'
      ]
    },
    'sculptural-modern-estate': {
      title: 'Westwood condo',
      location: 'Westwood, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '8,500 SF',
      materials: 'White oak, Calacatta marble, polished concrete, glass',
      services: 'Architecture, Interior Design, Custom Millwork Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb66eca013a5a426b81bb00efe4c8a2ae?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Sculptural Modern Estate represents a revolutionary approach to residential design where architecture becomes art. This extraordinary residence challenges conventional forms through fluid, sculptural geometries that create a truly immersive living experience. Every surface, every curve, every detail has been meticulously crafted to blur the boundaries between art and habitation.',
        'The design philosophy centers on flowing, organic forms that seamlessly integrate living spaces into a cohesive sculptural whole. Custom millwork in warm white oak contrasts beautifully with the pristine Calacatta marble surfaces, while strategically placed lighting emphasizes the dramatic architectural curves. The wine storage becomes a focal point, enclosed in glass to showcase the collection as living art.',
        'Advanced construction techniques were employed to achieve the complex geometries, with custom-formed concrete and precision millwork creating spaces that feel both monumental and intimate. The material palette emphasizes tactile richness: the warmth of oak against cool marble, the play of natural and artificial light across curved surfaces, and the seamless integration of storage and display.',
        'Each room flows effortlessly into the next, creating a spatial narrative that unfolds as one moves through the residence. This is architecture as sculpture, living as art – a testament to the power of bold design vision executed with uncompromising craftsmanship and attention to detail.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fdad90f77fff549209726ceaffd0070dc?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feb03949d992d404f9ce6ba3af0e58a1e?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa18f76f6822149c78464e1739bcf079d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0e89bcb2084645c384250b19e88ce930?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7d2ec64131ec45b79eb33e10371629e9?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd4a1079c959f4038bba3f923a6cf1215?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fadc249d9afd64958b2c69e281dc78ce5?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6c2a2cbe006749c0831e91d31b895e42?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F628f0af182ce47e6a3c5ec268b30df79?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4c460e3dbce646cfad6bfa6a8fc79519?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F86f2c36b4c93492a844dbab02d0e86e3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F34998e4021244400b47e03f889a6157c?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F813809e0d8a44383814dc5f6426c41e3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffa73e0b1371f446fbb24275759c3df5b?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F06f3674678c1411c97f4900afcd2c85f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3e8ae2bd011a416b8f055dcfe9039408?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F839d58cc04994a579ebd2a4b6ca8c7a0?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F615b8b59fdc249239b5f5bbbba7bb116?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6006aa6c59044e5c971f31760cf123da?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F27e33a1da27c4365bddad2f27ba75ae6?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F75d7222bae504e5b80f111f834eb7d6d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fec77f9c4b7144eefbc628636be2fdcaa?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb289e4ac34194c01861f30682243da66?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F31784cec3ee74a4190e5aae10378c425?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3cbbf7e82aa94b1b8c991a3e6a5c9f25?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fac4fcf335e344bb09fcf4f0ddf4977cc?format=webp&width=1200'
      ]
    },
    'modern-farmhouse-estate': {
      title: 'Old Agoura Residence',
      location: 'Old Agoura, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '7,200 SF',
      materials: 'Board and batten siding, natural stone, steel, glass',
      services: 'Architecture, Landscape Design, Pool Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0ab0e4828dab4ed98d07468046290137?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Modern Farmhouse Estate reimagines the classic American farmhouse through a contemporary lens. This sophisticated residence seamlessly blends traditional farmhouse charm with cutting-edge design principles, creating a home that feels both timeless and thoroughly modern. The dramatic pool area serves as the centerpiece of outdoor living, while carefully orchestrated landscaping creates privacy and natural beauty.',
        'The architectural approach emphasizes clean lines and honest materials, with board and batten siding in crisp white contrasting beautifully against dark metal accents and natural stone elements. The gabled rooflines and timber framing nod to farmhouse tradition while floor-to-ceiling windows and open-plan living spaces embrace contemporary lifestyle needs.',
        'Landscape design plays a crucial role in the overall composition, with native plantings and mature trees creating a parklike setting. The infinity-edge pool integrates seamlessly with the architecture, while the separate guest pavilion and utility structures complete the compound-style layout. Every detail, from the custom garage doors to the pool deck materials, reflects a commitment to quality and design excellence.',
        'This project demonstrates how traditional architectural typologies can be evolved for contemporary living while maintaining their essential character and charm. The result is a residence that celebrates both California\'s indoor-outdoor lifestyle and the enduring appeal of American farmhouse design.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff6dab669a17e41d69957b3ce4e4e4683?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F67ffde0eccc8412c9449a5628e22b74f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F711b3c945aac48f7989432f84c91137f?format=webp&width=1200'
      ]
    },
    'contemporary-curve-residence': {
      title: 'Oak Park Residence',
      location: 'Oak Park, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '5,400 SF',
      materials: 'Stucco, glass, steel, natural stone',
      services: 'Architecture, Landscape Design, Interior Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Contemporary Curve Residence represents a masterful exploration of modern residential design through the subtle interplay of curved and linear elements. This single-story home embraces a sophisticated approach to contemporary living, where clean architectural lines are softened by organic curves that create visual interest and enhance the human experience of space.',
        'The design strategy centers on creating seamless indoor-outdoor connections through floor-to-ceiling glazing and carefully planned sight lines. The curved driveway and entry sequence choreograph arrival, while the dramatic corner window bay becomes a focal point that brings abundant natural light into the main living spaces. The material palette emphasizes simplicity and elegance with crisp white stucco contrasting against dark window frames and natural landscaping.',
        'Landscape design plays an integral role in the overall composition, with native drought-tolerant plantings creating layers of texture and seasonal interest. The palm trees anchor the composition while providing vertical counterpoints to the horizontal emphasis of the architecture. Every detail, from the entry pathway to the garage integration, reflects a commitment to both aesthetic excellence and functional clarity.',
        'This residence demonstrates how contemporary design can achieve both sophistication and warmth, creating spaces that feel both monumental and intimate. The result is a home that celebrates California\'s year-round outdoor lifestyle while providing a serene retreat from urban intensity.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200'
      ]
    },
    'classical-estate-pavilion': {
      title: 'Lake Sherwood Residence',
      location: 'Lake Sherwood, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '9,200 SF',
      materials: 'Limestone, white oak, steel, natural stone',
      services: 'Architecture, Landscape Design, Outdoor Living Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F61a87c373e2b40e19a476563cd2b425d?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Classical Estate Pavilion represents the sophisticated evolution of traditional estate living through contemporary outdoor design. This extraordinary residence celebrates the art of entertaining with meticulously crafted outdoor pavilions that seamlessly extend the interior living spaces into beautifully landscaped gardens and terraces.',
        'The architectural approach emphasizes timeless classical proportions while embracing modern functionality and comfort. The outdoor kitchen pavilion features professional-grade appliances housed within elegant architectural frameworks, while the separate entertainment pavilion provides intimate spaces for relaxation and gathering. Each structure is carefully positioned to capture optimal views and create natural circulation patterns throughout the estate.',
        'Material selection reflects a commitment to both beauty and durability, with natural limestone, rich white oak millwork, and precision steel detailing creating a cohesive design language. The outdoor living spaces feature custom furniture and built-in seating areas that encourage both intimate conversations and larger gatherings, while sophisticated lighting systems extend the usability into evening hours.',
        'This project demonstrates how classical architectural principles can be adapted for contemporary lifestyle needs, creating outdoor spaces that rival the finest interior rooms in their comfort and sophistication. The result is an estate that truly embodies the California dream of seamless indoor-outdoor living.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0fabb3b1cb674cc9a5e8dd83f1cd0c17?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe93c29e40fdf442bb3645a07339b1785?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1daa5098e1564a80be04dd03288e3c8a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F34f713e747c74c67965ac5b0eba03f48?format=webp&width=1200'
      ]
    },
    'desert-contemporary-residence': {
      title: 'Donna Residence 1',
      location: 'Tarzana, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '4,800 SF',
      materials: 'Natural stone, stucco, steel, glass',
      services: 'Architecture, Landscape Design, Sustainable Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc8a9ada427c446d7990b3d28801e1531?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Desert Contemporary Residence embodies the essence of desert modern living through its masterful integration with the natural landscape. This thoughtfully designed home celebrates the unique beauty of the desert environment while providing sophisticated comfort and contemporary functionality for year-round living.',
        'The architectural approach emphasizes horizontal lines and low-profile massing that respectfully responds to the expansive desert landscape. Natural stone walls anchor the structure to its site, while clean stucco surfaces provide a contemporary counterpoint. The design carefully balances privacy with openness, creating protected outdoor spaces that capture cooling breezes and frame views of the surrounding mountains.',
        'Sustainable design principles guide every aspect of the project, from passive solar orientation to drought-tolerant landscaping featuring native desert plants and sculptural rocks. The material palette emphasizes natural textures and earth tones that harmonize with the desert setting, while strategic placement of glass maximizes natural light while minimizing heat gain.',
        'This residence demonstrates how contemporary architecture can achieve both environmental sensitivity and luxurious comfort, creating a home that feels perfectly at home in its desert setting while providing all the amenities of modern living.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1cc6530b08004d73b81cae8a3f15554d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc8a9ada427c446d7990b3d28801e1531?format=webp&width=1200'
      ]
    },
    'modular-container-retreat': {
      title: 'Tennessee Airbnb',
      location: 'Tennessee',
      year: '2024',
      program: 'Modular Residence',
      size: '3,200 SF',
      materials: 'Shipping containers, cedar cladding, steel, glass',
      services: 'Architecture, Modular Design, Sustainable Systems',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe8caa55f02bc40609e1e62e78f6eeac4?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Modular Container Retreat represents a revolutionary approach to sustainable architecture through the innovative reuse of shipping containers. This groundbreaking project transforms industrial infrastructure into sophisticated living spaces that challenge conventional notions of modular design while creating a unique retreat experience in the dramatic Big Sur landscape.',
        'The architectural strategy embraces the inherent modularity of shipping containers while elevating them through careful composition and premium materials. Each container is thoughtfully positioned to capture specific views and create protected outdoor spaces, while warm cedar cladding softens the industrial aesthetic and helps the structure integrate with its natural surroundings. The elevated deck system unifies the composition while minimizing site impact.',
        'Innovative details include custom geometric windows that frame views like living artwork, rooftop gardens that provide insulation and habitat, and flexible interior configurations that can adapt to changing needs. The material palette balances industrial honesty with natural warmth, featuring weathered steel containers, sustainably sourced cedar, and precision steel details that celebrate the project\'s modular logic.',
        'This project demonstrates how sustainable design principles can drive architectural innovation, creating spaces that are both environmentally responsible and experientially rich. The result is a retreat that feels both futuristic and timeless, offering a new model for how we might live more sustainably while maintaining the highest standards of design and comfort.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2b91e6f4172947d8ab7a9049ac9bc684?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffdd4f368186c4d9b93d66e9d782da6f8?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F99f991dd02d34f72b0bf052abc9a3709?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F789bc3aee5264b09832a8f2143ae9bfc?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4c92fe1d66f04d619620c8941cd90e10?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F5b513a75e8844f598112568366729520?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0168b3a36b164fb3855bc3e51cb56bb4?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc267410031f24d40a46db6a22b1b951f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc9897f0670a84d7cb71578b498ccbc2c?format=webp&width=1200'
      ]
    },
    'contemporary-twin-homes': {
      title: 'The Ingomar Residence',
      location: 'Reseda, CA',
      year: '2024',
      program: 'Duplex Residence',
      size: '2,800 SF each unit',
      materials: 'Stucco, steel siding, glass, concrete',
      services: 'Architecture, Urban Design, Landscape Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8235235c11594480b4e40970683ee6bd?format=webp&width=1920',
      description: [
        'Located in the heart of Los Angeles, Contemporary Twin Homes explores the possibilities of thoughtful urban densification through sophisticated architectural design. These mirror-image residences demonstrate how contemporary living can be both private and community-minded, offering modern families the benefits of homeownership within an increasingly dense urban environment.',
        'The architectural approach emphasizes clean geometric forms and material honesty, with each unit featuring two stories of carefully planned living space. The design balances privacy with openness through strategic window placement and landscaping, while the shared central courtyard creates opportunities for neighborly interaction. Flat roofs and angular forms give each home a distinctly modern character that complements Venice\'s eclectic architectural landscape.',
        'Material selection reflects both aesthetic and practical considerations, with durable stucco and steel siding providing low-maintenance exteriors that age gracefully in the coastal environment. The landscaping design uses drought-tolerant plants that create privacy barriers while adding natural softness to the geometric architecture. Each unit includes private outdoor space and dedicated parking, ensuring functional independence.',
        'This project demonstrates how urban infill housing can achieve both architectural distinction and neighborhood compatibility, offering a sustainable model for housing density that maintains human scale and quality of life. The result is a development that feels both contemporary and timeless, contributing positively to the evolving character of Venice.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8235235c11594480b4e40970683ee6bd?format=webp&width=1200'
      ]
    },
    'altadena-project-1': {
      title: 'Altadena project 1',
      location: 'Altadena, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '8,000 SF',
      materials: 'White siding, brick, glass, wood accents',
      services: 'Architecture, Interior Design, Landscape Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1e4c493f101949e789ddc9e75d5f594a?format=webp&width=1920',
      description: [
        'Altadena project 1 represents a thoughtful contemporary residence that seamlessly blends traditional architectural elements with modern design principles. This sophisticated home celebrates clean lines, quality materials, and thoughtful spatial organization to create a serene family residence that respects both the local context and contemporary lifestyle needs.',
        'The architectural approach emphasizes a harmonious relationship between indoor and outdoor spaces, with carefully positioned windows and transitions that create visual connection to the surrounding landscape. The design strategy balances privacy and openness through strategic massing and landscape integration, creating multiple outdoor living zones that extend the home\'s usable space.',
        'Material selection reflects a commitment to both beauty and durability, with natural materials including white siding, brick elements, and warm wood accents creating a rich and textured aesthetic. The design incorporates flexible spaces that adapt to modern living patterns while maintaining the timeless appeal of traditional residential architecture.',
        'This project demonstrates how contemporary design can honor architectural traditions while creating spaces perfectly suited for modern life. The result is a residence that feels both welcoming and refined, a true reflection of contemporary California living that balances sophistication with comfortable family living.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F40620fe760bd4cd2ba923a907546ce2c?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F12cfa5b80ebf4f429ac84d74385bcd30?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93c823ad12a24a3f93188b8f89987072?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F701baca9a21c4862a836499486375105?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1e4c493f101949e789ddc9e75d5f594a?format=webp&width=1200'
      ]
    },
    'stafford-road-residence': {
      title: 'Stafford Road Residence',
      location: 'Thousand Oaks, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '7,500 SF',
      materials: 'Stone, steel, glass, wood',
      services: 'Architecture, Interior Design, Landscape Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffecc4596708c45f38a593ff0ccf9eb68?format=webp&width=1920',
      description: [
        'Stafford Road Residence stands as a masterwork of contemporary design set in the serene Thousand Oaks landscape. This sophisticated residence seamlessly integrates luxury living spaces with extensive outdoor entertainment areas, creating a residence that truly celebrates the California indoor-outdoor lifestyle.',
        'The architectural vision emphasizes clean lines, premium material selection, and sophisticated proportions. The design features expansive covered patio spaces that serve as outdoor rooms, complemented by a dedicated fitness pavilion that extends the home\'s functional offerings. Each space is thoughtfully positioned to capture optimal views and natural light.',
        'The material palette reflects a commitment to quality and durability, with natural stone, precision steelwork, and expansive glazing creating a cohesive design language. The multi-level outdoor living areas accommodate both intimate gatherings and larger entertaining, while the integrated fitness facility adds contemporary amenities to the classic residence typology.',
        'This project demonstrates how modern architecture can elevate the residential experience through careful spatial planning and premium material execution. The result is a residence that transcends conventional living to create a comprehensive lifestyle environment.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffecc4596708c45f38a593ff0ccf9eb68?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff788bd2d9b77425eace5ab366a9532f0?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F50e13dc355374439a2102555a2442927?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F5c7dfae0c9374593bbbc1bb4f6c7b0a3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2eede87db79a4f9b84eca96908b90b3a?format=webp&width=1200'
      ]
    },
    'dumaine-ave-residence': {
      title: 'Dumaine Ave Residence',
      location: 'Oak Park, CA',
      year: '2024',
      program: 'Single-Family Residence',
      size: '9,800 SF',
      materials: 'Stucco, glass, steel, natural finishes',
      services: 'Architecture, Interior Design, Landscape Design',
      hero: 'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0de45d8040df45ea9b3cc57eb27d41eb?format=webp&width=1920',
      description: [
        'Dumaine Ave Residence represents a pinnacle of contemporary residential design in Oak Park. This exceptional home seamlessly blends sophisticated architectural aesthetics with uncompromising functional excellence. The residence celebrates the art of luxurious California living through thoughtfully curated spaces that flow seamlessly from intimate interiors to expansive outdoor entertaining areas.',
        'The design philosophy emphasizes clean geometric forms, premium material selection, and meticulous attention to detail. Every element has been carefully orchestrated to create a cohesive design narrative that elevates the everyday experience of living. The architecture balances openness with intimate spaces, creating multiple zones for both family life and sophisticated entertaining.',
        'Advanced finishes and custom millwork throughout the residence demonstrate a commitment to quality craftsmanship. The integration of natural light, carefully positioned views, and premium materials creates an environment of refined elegance. The outdoor spaces extend the home\'s functionality, offering multiple entertainment and relaxation zones.',
        'This residence stands as a testament to thoughtful design execution and superior craftsmanship. Every detail, from material selection to spatial planning, reflects a comprehensive design vision that creates a truly exceptional home for refined living.'
      ],
      images: [
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F0de45d8040df45ea9b3cc57eb27d41eb?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8adea755af0a415e86cc84282134dd18?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb4f03be6036f49dab9453681eaa8cef6?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F901dadfaf9674be3a9d21b36d6b0152f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4e3c107fdc874c4e853a31cce124ea2a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F260f7283889348cd964e23d2e37daa67?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8a176e96cd024a068cd45f1df89c1f49?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc9cac461c72e4ae083a3590e2edc58fa?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Faddc422a00d44767a32457ff3f607960?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2440b7d98e89461fb322dfa756a1707f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F146bc33315d44fcc8c84fce7652c0baf?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F74f6f94310204225a6e20d30b90850b3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F82916cfffbc341648bcf3c1bbda7bdcc?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F430bdc15014f448dab5d023d534967e1?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fba9a1c261f944ace837a7bf1ac9d92af?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8eb2802c5ea4452abc2f1aff21a7f2ac?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1a0280a475b94ba3bb12317565aead2f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1873c32354514769896bb53741a96f1d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb125825379084804b59145ab009e6bc1?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F00aeb105ef5547bf860cf2711524c509?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F92e6d5b73a5b4ab2b23efe502090bd8e?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa0a2e2a45c734eac8d097245c8cac31c?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbecf620b289849e4ba222497cf20a9c3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F9f50b95ecd4c47fba17760aa648e1c9d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa14e56a3de6642a3a671fbdfb7f4d9a6?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F14144d7c9d8f4ffea9055dc2018d0b5d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4c9d6e7bff16498aa8b8457b42ccc613?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fbe45bd11284e447b81b5d4ee7c374416?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fedc1fedd07094c009d4b411ef7d5f7b7?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6d1088716f72491e950c9aa2cad6ef59?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4003985837e84ae3b40e50663901771e?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F420ee551d1994a4cbb6ca59871e6f9b3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ff3c8a550cd5b45c880d4e63abec04def?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F60e21003597e48adb8f4420b4d9aafbc?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffe70b134900b423eb67d39ae68bf4bac?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb6c94490ee434879b005cf3426e222ae?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd1e6be107509422cb543990e18a7264a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8e4f1d92067e4de8a2fb72272e79a246?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F527317e39811465699c5c2633f50c6ce?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F68ac89bcc7844c5ab071457415a20f32?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fcf6c79351856444b90c19e8ae47e1540?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3d061271cb824aa895286e22d3734c6b?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fef61502b6b2e4e5db02b0490f411e20b?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fe16e225de9e841229943a978a30d1b5d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F45d053a88c364c6ca0b02b5d6466bf9a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd36e06a0fb31442894ddf1e8b4ae8e07?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fa06065ba063641999e1a13ea02500035?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Faa6e9b8e3ead4301b3a73b7fa7bd8dd4?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd268ab2a11964100a8a8f32915ee0592?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb8178ef99e124a18b80fa04be13c5652?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F2dda71c9865849199dc50db188d8b017?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7611fb7703e746e69622f987b9beb171?format=webp&width=1200'
      ]
    }
  };

  const project = projects[id || ''] || {
    title: 'Project',
    location: 'California',
    year: '2024',
    program: 'Residential',
    size: 'TBD',
    materials: 'Various sustainable materials',
    services: 'Full Design Services',
    hero: 'https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg',
    description: ['Located in the heart of Los Angeles, this project page is currently being developed. Please check back soon for detailed information about this Studio Yona design.'],
    images: ['https://www.woodsdangaran.com/th/w1600_q70_aarmczda30cz2hh0prbxzehw.jpg']
  };

  return (
    <>
      <title>{project.title} - Studio Yona</title>

      <Header bgColor="white" invertLogo={false} />

      <div className="min-h-screen bg-white">

        {/* Image Gallery Grid */}
        <section className="py-16 bg-white header-offset">
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
              {project.images.map((image: string, index: number) => (
                <div key={index} className="w-full" style={{ height: '60vh' }}>
                  <img
                    src={image}
                    alt={`${project.title} - Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-12">
          <div className="max-w-7xl mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              {/* Left: Navigation */}
              <div className="flex space-x-8 text-sm font-medium" style={{ color: '#222222' }}>
                <Link to="/projects" className="hover:text-gray-600 transition-colors">Projects</Link>
                <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
              </div>
              
              {/* Center: Copyright */}
              <div className="text-center">
                <p className="text-sm font-medium" style={{ color: '#222222' }}>
                  © Studio Yona. All rights reserved.
                </p>
              </div>
              
              {/* Right: Social */}
              <div className="flex justify-end space-x-8 text-sm font-medium" style={{ color: '#222222' }}>
                <a
                  href="https://www.instagram.com/studio.yona/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/in/adam-yona-962892156?trk=people-guest_people_search-card"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-600 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
