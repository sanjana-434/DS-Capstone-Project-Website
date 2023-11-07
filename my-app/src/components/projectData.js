import img1 from "../assets/projectImages/1.jpg";
import img2 from "../assets/projectImages/2.png";
import img3 from "../assets/projectImages/3.jpg";
import img4 from "../assets/projectImages/4.png";
import img5 from "../assets/projectImages/5.jpg";
import img6 from "../assets/projectImages/6.jpg";
import img7 from "../assets/projectImages/7.jfif";
import img8 from "../assets/projectImages/8.webp";
import img9 from "../assets/projectImages/9.png";
import img10 from "../assets/projectImages/10.png";
import img11 from "../assets/projectImages/11.jpg";
import img12 from "../assets/projectImages/12.png";
import img13 from "../assets/projectImages/13.jpg";
import img14 from "../assets/projectImages/14.png";
import img15 from "../assets/projectImages/15.jpg";
import img16 from "../assets/projectImages/16.png";
import img17 from "../assets/projectImages/17.webp";
import img18 from "../assets/projectImages/18.jpg";
import img19 from "../assets/projectImages/19.jpg";

// src/projectsData.js
const projectsData = [
    {
      id: 1,
      title: 'BREAST CANCER DETECTION',
      description: 'The project takes up mammogram images and medical information as input and detects the presence of cancer cells using various algorithms.',
      // developers:'21PD12 - Harshini TS | 21PD14 - Jaisubasri K',
      developers:'21PD12 | 21PD14',
      imageUrl: img1,
      link: 'https://github.com/HARSHINITHANGAVEL/BREAST-CANCER-DETECTION',
    },
    {
      id: 2,
      title: 'MUSIC PLAYER AND RECOMMENDATION SYSTEM',
      description: "A simple and easy to use music player that uses the concepts of linked lists to scrub through songs .New songs can also be added hassle free. New songs are also recommended based on the  user's current library.",
      // developers:'21PD23 Nithish R | 21PD28 Rohith Krishna',
      developers:'21PD23 | 21PD28',
      imageUrl: img2,
      link: 'https://github.com/Nitaksh/MusicPlayerX',
    },
    {
      id: 3,
      title: 'TWITTER BOT DETECTION',
      description: 'This project employs machine learning to identify Twitter bots. By leveraging diverse features and innovative methods like Locality-Sensitive Hashing (LSH), it enhances accuracy and efficiency.  It provides insights into bots\' behaviours, empowering users to recognize them.',
      // developers:'21PD32 - Sanjay Ram R R | 21PD24 - Parthasarathi',
      developers:'21PD32 | 21PD24',
      imageUrl: img3,
      link: 'https://github.com/rrsr28/Twitter-Bot-Detection'
    },
    {
      id: 4,
      title: 'YTCRISP',
      description: 'This project redefines how we engage with YouTube videos, focusing exclusively on audio content. We seamlessly integrate advanced audio-to-text conversion technology, enabling the transformation of spoken words into written text. With just a video link, our state-of-the-art system elegantly converts audio dialogues into precise transcriptions, paving the way for comprehensive analysis.',
      // developers:'21PD01 - Abinaya V | 21PD34 - Shivani E',
      developers:'21PD01 | 21PD34',
      imageUrl: img4,
      link: 'https://github.com/ShivEla/YTCrisp.git'
    },
    {
      id: 5,
      title: 'PAVE GUARD |Safeguarding streets with Pothole Detection',
      description: 'Potholes are a prevalent problem on roadways, causing damage to vehicles and posing risks to road safety. Detecting and addressing these road defects in a timely manner is crucial. This project aims to develop a real-time pothole detection system using YOLO (You Only Look Once), a state-of-the-art deep learning model for object detection.',
      // developers:'20PD18 - Naren Balu, 21PD02 - Ashere Jeswin, 21PD29 - Sai Vignesh J',
      developers:'20PD18 | 21PD02 | 21PD29',
      imageUrl: img5,
      link: 'https://github.com/SaiVignesh2003/PaveGuard-Safeguarding-streets-with-Pothole-Detection.git'
    },
    {
      id: 6,
      title: 'CAPTION CRAFT',
      description: 'CaptionCraft is an innovative image captioning project that harnesses the power of Long Short-Term Memory (LSTM) networks and Convolutional Neural Networks (CNN) to automatically generate descriptive and contextually relevant captions for images. Unlike traditional computer vision-based captioning systems, CaptionCraft relies on the seamless synergy of LSTM and CNN, making it a unique solution for the task of image caption generation.',
      // developers:'21PD16 - Kaif Shaheem J | 21PD11 - Harish R',
      developers:'21PD16 | 21PD11',
      imageUrl: img6,
      link: 'https://github.com/harish-123445/CaptionCraft'
    },
    {
      id: 7,
      title: 'DRONE VS BIRD | Support Vector Machine, PCA, Ensemble Models ',
      description: 'An approach for classifying, identifying and tracking Drone and Bird based on their trajectories(temporalinformation) and physical appearance (spatial information) from the frames.Around 350+ drone & bird trajectory data were collected from various sources. Those data were mined to get decision boundary to classify drone vs bird.',
      // developers:'21PD19 - Krithika L | 21PD04 - Bharathi Shankar',
      developers:'21PD19 | 21PD04',
      imageUrl: img7,
      link: 'https://github.com/krithikaa04/Drone-vs-Bird'
    },
    {
      id: 8,
      title: 'TEXT AND SPEECH EMOTION RECOGNITION',
      description: 'We\'ve developed a speech emotion recognition system using pretrained models and HuggingFace transformers. Our unique feature is a live chat interface that instantly displays emotions as users type, enhancing digital communication with real-time emotional insights.',
      // developers:'21PD03 - Benny Abhishek M | 21PD25 - R Aayush Srivatsav',
      developers:'21PD03 | 21PD25',
      imageUrl: img8,
      link: 'https://github.com/AayushSrivatsav/Capstone-Project.git'
    },
    {
      id: 9,
      title: 'FURNISH AR | Augmented Reality Home Decor Visualization ',
      description: 'FurnishAR is a cross-platform mobile application developed with Unity Hub for AR integration and Flutter for the front-end. With augmented reality, it allows users to visualize furniture and home decor in real-time within their own spaces.',
      // developers:'21PD20- M Aiswarya | 21PD30- Samyugtha M',
      developers:'21PD20 | 21PD30',
      imageUrl: img9,
      link: 'https://github.com/SAMYUGTHA-MOORTHY/Augmented-Reality-FurnishAR'
    },
    {
      id: 10,
      title: 'VIDEO CAPTIONING',
      description: 'Video captioning project, the process of automatically generating descriptive text for video content, is a comprehensive solution designed to make video content more accessible and informative. The goal is to create a seamless and inclusive experience for all users, regardless of their reading ability or accessibility needs. By offering a combination of image-based captions, redundancy reduction, and text-to-voice conversion, it makes the video content universally understandable and engaging.       ',
      // developers:'21PD08 - Prethika G S',
      developers:'21PD08',
      imageUrl: img10,
      link: 'https://github.com/PrethikaGS/VideoCaptioning'
    },
    {
      id: 11,
      title: 'AUTOMATED MINUTES OF MEETING | Speech to text Summarization',
      description: 'This project aims at providing minutes for the recorded meeting or the meeting transcripts which are available. The model we proposed will be capable of transforming an audio file into text using Whisper (pre-trained model) for automatic speech recognition and thereby translating speech into meeting transcripts. Further the meeting transcripts are summarized into condensed minutes with the help of Transformers.',
      // developers:'21PD06 - Dhivyadharshini B | 21PD35 - Sreenidhi R',
      developers:'21PD06 | 21PD35',
      imageUrl: img11,
      link: 'https://github.com/Sreenidhi-1/Automated-Minutes-of-the-Meeting.git',
      
    },
    {
      id: 12,
      title: 'DIGITS DECODED',
      description: 'Utilizing the MNIST dataset, this project explores optimal CNN architectures for digit classification. Through systematic experimentation, the goal is to balance accuracy and computational efficiency, determining the most effective architecture. ',
      // developers:'21PD31 - Sanjana R',
      developers:'21PD31',
      imageUrl: img12,
      link: 'https://github.com/sanjana-434/Digits-Decoded-CNN.git'
    },
    {
      id: 13,
      title: 'ARTISTIC ALCHEMY',
      description: 'This project aims to revolutionize the art world by harnessing the power of artificial intelligence. By learning the intricacies of different artistic styles, techniques, and patterns, the AI becomes adept at creating art that mimics the works of artists, as well as producing entirely original pieces.',
      // developers:'21PD18 - Kanishka K | 21PD27 - Rajaneha R',
      developers:'21PD18 | 21PD27',
      imageUrl: img13,
      link: 'https://github.com/Rajaneha/Artistic-Alchemy.git'
    },
    {
      id:14,
      title:'SIDE-SCAN SONAR IMAGE CLASSIFICATION |Based on Neural Style Transfer and Pre-Trained CNN',
      description: 'This project improves object classification in side-scan sonar images for applications like underwater rescue missions and target detection. It addresses data scarcity and imbalance by generating synthetic sonar-like images from optical data using a style transfer network. These synthetic images are used to fine-tune a pre-trained CNN originally trained on optical images, making it effective for sonar image classification.',
      // developers:'21PD09 - Harini K R | 21PD10 - Harini K V | 21PD26 - R Dhikshitha',
      developers:'21PD09 | 21PD10 | 21PD26',
      imageUrl: img14,
      link: 'https://github.com/HariniKV04/Neural-Style-Transfer'
    },
    {
      id:15,
      title:'MUSIC RECOMMENDATION |Based on facial emotion',
      description:'Developing a pioneering system utilizing Convolutional Neural Networks to detect user emotions, recommending music for enhanced engagement. The core involves building a robust CNN model for emotion detection across text, voice, and facial expressions. Diverse datasets of emotional inputs and labeled music data underpin this innovative system. It aims to precisely match user emotions with suitable music choices.',
      // developers:'21PD17 - Kamal Nithish P | 21PD36 - Subash S',
      developers:'21PD17 | 21PD36',
      imageUrl: img15,
      link: 'https://github.com/kAmal-NithisH18/MusicRecommendation-based-on-facial-emotion'
    },
    {
      id:16,
      title:'INFO BOT',
      description:'Creating an information bot for students interested to take admission from PSGCT using pre-trained BERT model. BERT enables the chatbot to understand and respond to admission-related queries with human-like accuracy. Prospective students can easily access comprehensive information about admission procedures and prerequisites streamlining their journey into the college.',
      // developers:'21PD05 - Dhisha C S | 21PD37 - V K Deeksha',
      developers:'21PD05 | 21PD37',
      imageUrl: img16,
      link: 'https://github.com/dhishacs/InfoBot'
    },
    {
      id:17,
      title:"PERSONAL YOGA TRAINER",
      description:'Elevate your yoga practice with real-time AI-powered feedback. This tool predicts and corrects yoga poses, making it perfect for enthusiasts and AI developers. Utilizes Tensorflow Movenet Model and custom neural networks for accurate pose recognition. Seamless browser integration through TensorflowJS.',
      // developers:'21PD22 - Nilavini B M | 21PD39 - Varsha S',
      developers:'21PD22 | 21PD39',
      imageUrl: img17,
      link: 'https://github.com/varshasenthil2003/Personal-Yoga-Trainer'
    },
    {
      id:18,
      title:"AUTOMATIC GRADING SYSTEM",
      description:"The main purpose of this application is to evaluate user’s descriptive answers (text as input) and provide a corresponding rating. Using CNN model, it understands the positioning and importance of each words",
      // developers:'21PD13 - Jagadeesh E | 21PD38 - Vamsi Krishna U',
      developers:'21PD13 | 21PD38',
      imageUrl:img18,
      link:'https://github.com/21pd38/Automatic-Grading-system'

    },
    {
      id:19,
      title:'SUPPLY CHAIN MANAGEMENT |Using Reinforcement learning',
      description:'Supply Chain Management ensures smooth product flow and demand balance. It involves stages like production and retail, posing forecasting challenges. Our study explores reinforcement learning in SCM to optimize processes and improve decision-making amidst these challenges.',
      // developers:'21PD33 - Sharmila J',
      developers:'21PD33',
      imageUrl:img19,
      link:'https://github.com/SharmilaJ14/SCM'
    }
  ];
  
  export default projectsData;
  