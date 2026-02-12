import service1 from "../../../public/images/baby-care.jpg"
import service2 from "../../../public/images/elderly-care.jpg"
import service3 from "../../../public/images/sick-care.jpg"

export const SERVICES = [
  {
    id: 'baby-care',
    title: "Baby Care",
    description: "Expert nurturing and supervision for your little ones, from newborns to toddlers.",
    image: service1, // Use the warm, safe focus assets we discussed
    action: "Book Babysitter"
  },
  {
    id: 'elderly-care',
    title: "Elderly Service",
    description: "Dignified assistance with daily living, companionship, and medication reminders.",
    image: service2,
    action: "Find Elderly Care"
  },
  {
    id: 'sick-care',
    title: "Sick People Service",
    description: "Compassionate specialized support for those recovering from illness or surgery.",
    image: service3,
    action: "Request Medical Aid"
  }
];