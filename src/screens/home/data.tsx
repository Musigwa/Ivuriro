import { genRandomCoords } from '@/helpers';

export const healthArticles = [
  {
    title: 'Benefits of Mindfulness for Mental and Physical Well-Being',
    content:
      'Explore how mindfulness meditation enhances mental clarity, reduces stress, and improves physical health. Learn to incorporate mindfulness practices for a healthier lifestyle.',
    updatedAt: '2023-08-15T10:30:00Z', // ISOString format
    readingTime: '6 mins',
  },
  {
    title: "Gut Health's Influence on Mood: Unveiling the Connection",
    content:
      'Discover the intriguing link between gut health and mental well-being. Explore strategies to support a healthy gut-brain axis through diet and lifestyle.',
    updatedAt: '2023-08-14T09:45:00Z',
    readingTime: '5 mins',
  },
  {
    title: 'Dispelling Vaccine Myths: Separating Facts from Fiction',
    content:
      'Address common vaccine misconceptions with evidence-based information. Understand the importance of vaccines in disease prevention and community immunity.',
    updatedAt: '2023-08-13T11:15:00Z',
    readingTime: '4 mins',
  },
  {
    title: 'The Science of Sleep: Secrets to Restful Nights',
    content:
      'Delve into the role of sleep in overall health. Learn ways to improve sleep quality, manage sleep disorders, and establish healthy sleep habits.',
    updatedAt: '2023-08-12T08:20:00Z',
    readingTime: '7 mins',
  },
  {
    title: 'Nutrition for a Strong Immune System',
    content:
      'Discover key nutrients and dietary choices that boost the immune system. Learn about immune-supporting foods rich in antioxidants, vitamins, and minerals.',
    updatedAt: '2023-08-11T14:00:00Z',
    readingTime: '5 mins',
  },
  {
    title: 'Managing Stress: Strategies for a Healthier You',
    content:
      'Explore stress management techniques for modern challenges. From relaxation exercises to time management, find ways to reduce stress and promote well-being.',
    updatedAt: '2023-08-10T12:30:00Z',
    readingTime: '6 mins',
  },
  {
    title: 'Fitness Beyond the Gym: Everyday Activities for Health',
    content:
      'Break from traditional exercise routines. Discover how everyday activities like walking and gardening contribute to physical well-being.',
    updatedAt: '2023-08-09T13:15:00Z',
    readingTime: '4 mins',
  },
  {
    title: 'Healthy Aging: Maintaining Vitality as You Age',
    content:
      'Explore factors supporting graceful aging. Learn about exercise, nutrition, social engagement, and cognitive activities for well-being in seniors.',
    updatedAt: '2023-08-08T16:45:00Z',
    readingTime: '7 mins',
  },
  {
    title: 'Navigating Allergies: Identifying Triggers and Management',
    content:
      'Learn about common allergy triggers and prevention strategies. Get insights into testing, treatments, and lifestyle adjustments for allergies.',
    updatedAt: '2023-08-07T10:00:00Z',
    readingTime: '5 mins',
  },
  {
    title: 'Digital Detox: Balancing Screen Time and Mental Health',
    content:
      'Examine the impact of screen time on mental well-being. Discover tips for creating healthy tech habits to improve mental health.',
    updatedAt: '2023-08-06T15:20:00Z',
    readingTime: '6 mins',
  },
  // Add more articles with updated properties
];

export const doctors = [
  {
    name: 'Dr. Olivia Bennett',
    speciality: 'Cardiology',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Marcus Rodriguez',
    speciality: 'Orthopedic Surgery',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Emily Carter',
    speciality: 'Pediatric Neurology',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Samuel Nguyen',
    speciality: 'Gastroenterology',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Isabella Patel',
    speciality: 'Dermatology',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Elijah Foster',
    speciality: 'Oncology',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Sophia Mitchell',
    speciality: 'Psychiatry',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Alexander Chen',
    speciality: 'Neurosurgery',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Ava Williams',
    speciality: 'Obstetrics & Gynecology',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
  {
    name: 'Dr. Jackson Davis',
    speciality: 'Emergency Medicine',
    rating: (Math.random() * 5).toFixed(1),
    location: genRandomCoords(),
  },
];
