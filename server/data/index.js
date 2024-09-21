import mongoose from 'mongoose';

const userIds = [
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
  new mongoose.Types.ObjectId(),
];

export const users = [
  {
    _id: userIds[0],
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath: 'p11.jpeg',
    friends: [],
    location: 'San Francisco, CA',
    occupation: 'Software Engineer',
    viewedProfile: 14561,
    impressions: 888822,
    createdAt: 1625211422,
    updatedAt: 1625211422,
    __v: 0,
  },
  {
    _id: userIds[1],
    firstName: 'Joe',
    lastName: 'Budden',
    email: 'jodbudden@example.com',
    password: '$2b$10$!FEAS@!O)_IDJda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath: 'joebudden.jpeg',
    friends: [],
    location: 'New York, NY',
    occupation: 'Podcaster/Former Rapper',
    viewedProfile: 12351,
    impressions: 55555,
    createdAt: 1595589072,
    updatedAt: 1595589072,
    __v: 0,
  },
  {
    _id: userIds[2],
    firstName: 'Emily',
    lastName: 'Johnson',
    email: 'emilyjohnson@example.com',
    password: '$2b$10$examplehash',
    picturePath: 'p4.jpeg',
    friends: [],
    location: 'Toronto, Canada',
    occupation: 'Data Scientist',
    viewedProfile: 45468,
    impressions: 19986,
    createdAt: 1588090662,
    updatedAt: 1588090662,
    __v: 0,
  },
  {
    _id: userIds[3],
    firstName: 'Michael',
    lastName: 'Lee',
    email: 'michaellee@example.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath: 'p6.jpeg',
    friends: [],
    location: 'Seoul, South Korea',
    occupation: 'Educator',
    viewedProfile: 41024,
    impressions: 55316,
    createdAt: 1619214568,
    updatedAt: 1619214568,
    __v: 0,
  },
  {
    _id: userIds[4],
    firstName: 'Sarah',
    lastName: 'Williams',
    email: 'sarahwilliams@example.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath: 'p5.jpeg',
    friends: [],
    location: 'Salt Lake City, UT',
    occupation: 'Cybersecurity Analyst',
    viewedProfile: 40212,
    impressions: 7758,
    createdAt: 1493463661,
    updatedAt: 1493463661,
    __v: 0,
  },
  {
    _id: userIds[5],
    firstName: 'David',
    lastName: 'Brown',
    email: 'davidbrown@example.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath: 'p7.jpeg',
    friends: [],
    location: 'Los Angeles, CA',
    occupation: 'Journalist',
    viewedProfile: 976,
    impressions: 4658,
    createdAt: 1381326073,
    updatedAt: 1381326073,
    __v: 0,
  },
  {
    _id: userIds[6],
    firstName: 'Linda',
    lastName: 'Davis',
    email: 'lindadavis@example.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath: 'p8.jpeg',
    friends: [],
    location: 'Chicago, IL',
    occupation: 'Nurse',
    viewedProfile: 1510,
    impressions: 77579,
    createdAt: 1714704324,
    updatedAt: 1642716557,
    __v: 0,
  },
  {
    _id: userIds[7],
    firstName: 'Jessica',
    lastName: 'Miller',
    email: 'jessicamiller@example.com',
    password: '$2b$10$dsasdgsagasda//G9JxQ4bQ8KXf4OAIe/X/AK9skyWUy',
    picturePath: 'p9.jpeg',
    friends: [],
    location: 'Washington, DC',
    occupation: 'Student',
    viewedProfile: 19420,
    impressions: 82970,
    createdAt: 1369908044,
    updatedAt: 1359322268,
    __v: 0,
  },
];
export const posts = [
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[1],
    firstName: 'Joe',
    lastName: 'Budden',
    location: 'New York, NY',
    description: 'Suffering from Success!! 💰',
    picturePath: 'joebuddeneating.jpg',
    userPicturePath: 'joebudden.jpeg',
    likes: new Map([
      [userIds[0], true],
      [userIds[2], true],
      [userIds[3], true],
      [userIds[4], true],
    ]),
    comments: [
      'Looks like fun!',
      'Awesome photo!',
      'Glad you enjoyed your day!',
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[3],
    firstName: 'Michael',
    lastName: 'Lee',
    location: 'Seoul, South Korea',
    description:
      'Just finished a marathon coding session. Time for some rest! 🛌',
    picturePath: 'post2.jpeg',
    userPicturePath: 'p6.jpeg',
    likes: new Map([
      [userIds[7], true],
      [userIds[4], true],
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      'Great job!',
      'Well-deserved rest.',
      'Keep up the good work!',
      'Inspiring dedication!',
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[4],
    firstName: 'Sarah',
    lastName: 'Williams',
    location: 'Salt Lake City, UT',
    description: 'Mountain hiking was breathtaking today! 🏔️',
    picturePath: 'post3.jpeg',
    userPicturePath: 'p5.jpeg',
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
      [userIds[5], true],
    ]),
    comments: [
      'Amazing view!',
      'I want to go there!',
      'So beautiful!',
      'Nature at its finest.',
      'Glad you enjoyed it!',
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[5],
    firstName: 'David',
    lastName: 'Brown',
    location: 'Los Angeles, CA',
    description:
      'Interviewed a celebrity today! Stay tuned for the article. 🎤',
    picturePath: 'post4.jpeg',
    userPicturePath: 'p7.jpeg',
    likes: new Map([
      [userIds[1], true],
      [userIds[6], true],
      [userIds[3], true],
    ]),
    comments: [
      'Can’t wait to read it!',
      'Awesome news!',
      'You’re doing great work.',
      'So cool!',
      'Keep it up!',
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[6],
    firstName: 'Linda',
    lastName: 'Davis',
    location: 'Chicago, IL',
    description:
      'Just completed a 12-hour shift at the hospital. Time for some me-time. 🧖‍♀️',
    picturePath: 'post5.jpeg',
    userPicturePath: 'p8.jpeg',
    likes: new Map([
      [userIds[1], true],
      [userIds[3], true],
      [userIds[5], true],
      [userIds[7], true],
    ]),
    comments: [
      'You deserve it!',
      'Thank you for your hard work.',
      'Enjoy your rest!',
      'Healthcare heroes!',
      'Take care!',
    ],
  },
  {
    _id: new mongoose.Types.ObjectId(),
    userId: userIds[7],
    firstName: 'Jessica',
    lastName: 'Miller',
    location: 'Washington, DC',
    description: 'Studying for finals week. Wish me luck! 📚',
    picturePath: 'post6.jpeg',
    userPicturePath: 'p9.jpeg',
    likes: new Map([
      [userIds[1], true],
      [userIds[2], true],
    ]),
    comments: [
      'Good luck!',
      'You’ve got this!',
      'Let me know if you need help.',
      'Study hard!',
      'Almost there!',
    ],
  },
];
