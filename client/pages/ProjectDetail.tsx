import { Link, useParams } from 'react-router-dom';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();

  const projects: { [key: string]: any } = {
    'vista-ridge-residence': {
      title: 'Vista Ridge Residence',
      location: 'Beverly Hills, CA',
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
      title: 'Pacific Modern Residence',
      location: 'Manhattan Beach, CA',
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
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F71742fbf1a724df5a170aecf06ae2123?format=webp&width=1200'
      ]
    },
    'sculptural-modern-estate': {
      title: 'Sculptural Modern Estate',
      location: 'Bel Air, CA',
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
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F50c4323a832d4035b3bd92bf54681c02?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F98ee00bebbcd48319f6650e3c4a2a221?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd4a1079c959f4038bba3f923a6cf1215?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F7c96c93058f04c159bf6a55e6cab9efb?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fadc249d9afd64958b2c69e281dc78ce5?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6c2a2cbe006749c0831e91d31b895e42?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fd361b99537e44f058ac933a972ad1671?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F628f0af182ce47e6a3c5ec268b30df79?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F20181e61fb7c4cd79e15da3455202c51?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F4c460e3dbce646cfad6bfa6a8fc79519?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F86f2c36b4c93492a844dbab02d0e86e3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F34998e4021244400b47e03f889a6157c?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F813809e0d8a44383814dc5f6426c41e3?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Ffa73e0b1371f446fbb24275759c3df5b?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F06f3674678c1411c97f4900afcd2c85f?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F835512a5fd854ef6a994c7435b7e8908?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F1fc548a7ef2644f982f008bcdad74efd?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3e8ae2bd011a416b8f055dcfe9039408?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F839d58cc04994a579ebd2a4b6ca8c7a0?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F615b8b59fdc249239b5f5bbbba7bb116?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F6006aa6c59044e5c971f31760cf123da?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F889a9208c6684eddb976f7eacac9612b?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F27e33a1da27c4365bddad2f27ba75ae6?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F75d7222bae504e5b80f111f834eb7d6d?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fec77f9c4b7144eefbc628636be2fdcaa?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fb289e4ac34194c01861f30682243da66?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F31784cec3ee74a4190e5aae10378c425?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fc7784b31fdac4b0a8f1491eeee4d6544?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F3cbbf7e82aa94b1b8c991a3e6a5c9f25?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Fac4fcf335e344bb09fcf4f0ddf4977cc?format=webp&width=1200'
      ]
    },
    'modern-farmhouse-estate': {
      title: 'Modern Farmhouse Estate',
      location: 'Montecito, CA',
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
      title: 'Contemporary Curve Residence',
      location: 'Santa Barbara, CA',
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
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2Feea17289b522401f95edeedca8073c9a?format=webp&width=1200'
      ]
    },
    'classical-estate-pavilion': {
      title: 'Classical Estate Pavilion',
      location: 'Pasadena, CA',
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
      title: 'Desert Contemporary Residence',
      location: 'Palm Springs, CA',
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
      title: 'Modular Container Retreat',
      location: 'Big Sur, CA',
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
      title: 'Contemporary Twin Homes',
      location: 'Venice, CA',
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
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8235235c11594480b4e40970683ee6bd?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8235235c11594480b4e40970683ee6bd?format=webp&width=1200',
        'https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F8235235c11594480b4e40970683ee6bd?format=webp&width=1200'
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
      
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-8 py-4">
            <div className="flex justify-between items-center gap-8">
              {/* Logo */}
              <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Ff273f29613d947e0adfbbfd1507382bb%2F93f0681227f84f838c19b8d437489630?format=webp&width=800"
                  alt="Studio Yona"
                  className="h-20 md:h-28 w-auto"
                />
              </Link>

              {/* Navigation Links */}
              <div className="flex space-x-8 md:space-x-16 text-base md:text-xl tracking-[0.2em] font-medium">
                <Link to="/projects" className="text-black py-2 px-2">
                  PROJECTS
                </Link>
                <Link to="/about" className="text-black hover:text-gray-600 transition-colors py-2 px-2">
                  ABOUT
                </Link>
                <Link to="/contact" className="text-black hover:text-gray-600 transition-colors py-2 px-2">
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Image Section */}
        <section className="relative" style={{ height: '75vh', width: '100vw' }}>
          <img
            src={project.hero}
            alt={project.title}
            className="w-full h-full object-cover object-center"
          />

          {/* Hero Overlay Text */}
          <div className="absolute bottom-12 left-16 text-white">
            <h1 className="text-5xl font-bold mb-2 text-white">
              {project.title}
            </h1>
            <p className="text-lg font-normal text-white">
              {project.location} · {project.year}
            </p>
          </div>
        </section>

        {/* Project Intro Paragraph */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <p className="text-xl font-light leading-relaxed" style={{
              color: '#222222',
              lineHeight: '34px',
              maxWidth: '880px',
              margin: '0 auto'
            }}>
              {project.description[0]}
            </p>
          </div>
        </section>

        {/* Alternating Image + Text Sections */}
        {project.description.slice(1).map((paragraph: string, index: number) => (
          <section key={index} className="py-16 bg-white">
            <div className="project-container mx-auto px-8">
              <div className={`flex project-split ${index % 2 === 0 ? '' : 'flex-row-reverse'}`} style={{ gap: '36px' }}>
                {/* Image Column */}
                <div className="image-col">
                  <img
                    src={project.images[Math.min(index + 1, project.images.length - 1)]}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Text Column */}
                <div className="text-col flex flex-col justify-center">
                  <p className="text-lg font-light leading-8" style={{
                    color: '#222222',
                    lineHeight: '32px'
                  }}>
                    {paragraph}
                  </p>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* Full-Width Image Section */}
        <section className="py-16 bg-white">
          <div className="w-full">
            <img
              src={project.images[project.images.length - 1]}
              alt={`${project.title} - Full Width`}
              className="w-full object-cover"
              style={{ width: '100vw', height: '60vh' }}
              loading="lazy"
            />
          </div>
        </section>

        {/* Image Gallery Grid */}
        <section className="py-16 bg-white">
          <div className="project-container mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.slice(0, 6).map((image: string, index: number) => (
                <div key={index} className="w-full" style={{ height: '50vh' }}>
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
              <div className="flex space-x-8 text-sm font-medium" style={{ fontFamily: '"Work Sans", sans-serif', color: '#222222' }}>
                <Link to="/projects" className="hover:text-gray-600 transition-colors">Projects</Link>
                <Link to="/about" className="hover:text-gray-600 transition-colors">About</Link>
                <Link to="/contact" className="hover:text-gray-600 transition-colors">Contact</Link>
              </div>
              
              {/* Center: Copyright */}
              <div className="text-center">
                <p className="text-sm font-medium" style={{ fontFamily: '"Work Sans", sans-serif', color: '#222222' }}>
                  © Studio Yona. All rights reserved.
                </p>
              </div>
              
              {/* Right: Social */}
              <div className="flex justify-end space-x-8 text-sm font-medium" style={{ fontFamily: '"Work Sans", sans-serif', color: '#222222' }}>
                <a href="#" className="hover:text-gray-600 transition-colors">Instagram</a>
                <a href="#" className="hover:text-gray-600 transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
