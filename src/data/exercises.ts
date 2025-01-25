interface Exercise {
    id: string;
    title: string;
    description: string;
    duration: number; // in minutes
    level: 'beginner' | 'intermediate' | 'advanced';
    categories: string[];
    benefits: string[];
    instructions: string[];
    tips?: string[];
    suitableFor: string[]; // e.g., ['stress', 'anxiety', 'focus']
    contraindications?: string[]; // health conditions to be aware of
  }
  
  export const exercises: Exercise[] = [
    {
      id: 'mindful-breathing',
      title: 'Mindful Breathing',
      description: 'A foundational practice focusing on breath awareness to anchor yourself in the present moment.',
      duration: 10,
      level: 'beginner',
      categories: ['meditation', 'breathing', 'stress-relief'],
      benefits: [
        'Reduces stress and anxiety',
        'Improves focus and concentration',
        'Helps calm racing thoughts',
        'Promotes emotional balance'
      ],
      instructions: [
        'Find a comfortable seated position',
        'Close your eyes or maintain a soft gaze',
        'Bring attention to your natural breath',
        'Notice the sensation of breathing in your body',
        'When mind wanders, gently return focus to breath',
        'Continue for the duration of the practice'
      ],
      tips: [
        'No need to change your breathing pattern',
        'Practice acceptance of wandering thoughts',
        'Start with shorter sessions and gradually increase duration'
      ],
      suitableFor: ['stress', 'anxiety', 'beginners', 'daily practice']
    },
    {
      id: 'body-scan',
      title: 'Body Scan Meditation',
      description: 'A practice of bringing awareness to different parts of the body, promoting relaxation and body awareness.',
      duration: 15,
      level: 'beginner',
      categories: ['meditation', 'relaxation', 'body-awareness'],
      benefits: [
        'Improves body awareness',
        'Releases physical tension',
        'Enhances sleep quality',
        'Reduces stress'
      ],
      instructions: [
        'Lie down in a comfortable position',
        'Close your eyes and take a few deep breaths',
        'Begin scanning from your toes upward',
        'Notice any sensations in each body part',
        'Release tension where you find it',
        'Continue until you reach the top of your head'
      ],
      tips: [
        'Use a blanket to stay warm',
        'Try not to judge any sensations',
        'It\'s okay to fall asleep during practice'
      ],
      suitableFor: ['stress', 'insomnia', 'chronic pain', 'anxiety'],
      contraindications: ['Recent surgery', 'Acute pain conditions']
    },
    {
      id: 'loving-kindness',
      title: 'Loving-Kindness Meditation',
      description: 'A heart-centered practice that cultivates compassion for yourself and others.',
      duration: 20,
      level: 'intermediate',
      categories: ['meditation', 'compassion', 'emotional-wellbeing'],
      benefits: [
        'Increases self-compassion',
        'Improves relationships',
        'Reduces negative emotions',
        'Enhances emotional resilience'
      ],
      instructions: [
        'Sit comfortably with eyes closed',
        'Begin by focusing on your heart center',
        'Direct loving wishes to yourself',
        'Extend wishes to a loved one',
        'Gradually expand to neutral people',
        'Finally, include difficult people',
        'End by sending love to all beings'
      ],
      tips: [
        'Use phrases that feel authentic to you',
        'Don\'t force positive emotions',
        'Practice self-compassion first'
      ],
      suitableFor: ['emotional healing', 'relationship issues', 'self-development'],
      contraindications: ['Recent trauma (consult professional first)']
    },
    {
      id: 'walking-meditation',
      title: 'Walking Meditation',
      description: 'A mindful movement practice that brings awareness to the simple act of walking.',
      duration: 15,
      level: 'beginner',
      categories: ['movement', 'outdoor', 'active-meditation'],
      benefits: [
        'Combines physical activity with mindfulness',
        'Improves balance and coordination',
        'Enhances body awareness',
        'Reduces anxiety'
      ],
      instructions: [
        'Find a quiet path or space',
        'Stand still and become aware of your body',
        'Begin walking at a slower pace than usual',
        'Notice the sensation of each step',
        'Feel the movement of your body',
        'Maintain awareness of your surroundings',
        'When mind wanders, return to walking sensations'
      ],
      tips: [
        'Walk at a comfortable pace',
        'Can be practiced indoors or outdoors',
        'Focus on different aspects of walking in each session'
      ],
      suitableFor: ['active people', 'outdoor enthusiasts', 'those who find sitting difficult'],
      contraindications: ['Severe balance issues', 'Acute injuries affecting walking']
    }
  ];