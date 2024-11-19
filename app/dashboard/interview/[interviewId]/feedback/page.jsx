"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Typewriter from "typewriter-effect/dist/core"; // Import Typewriter library

const feedbackData = [
  {
    feedback:
      "The candidate maintained excellent eye contact throughout the interview, showcasing confidence and attentiveness. This is a critical quality during an interview, as it reflects not only self-assurance but also respect and engagement with the interviewer. Eye contact establishes a connection and signals to the interviewer that the candidate is fully present and focused on the discussion. During moments of explanation, the candidate balanced eye contact with natural glances away to think, avoiding any sense of discomfort or overbearingness. This balance made the communication feel genuine and smooth. Additionally, maintaining eye contact while listening showed that the candidate was genuinely interested in understanding the questions and not merely rehearsing prepared answers. This simple yet powerful aspect of non-verbal communication added significant value to the overall impression, giving a sense of professionalism and sincerity.",
    rating: 9.2,
  },
  {
    feedback:
      "Demonstrated active listening skills by nodding and responding thoughtfully to questions, creating a positive rapport. Active listening is a fundamental interpersonal skill that plays a pivotal role in interviews, as it ensures clear and effective communication. The candidate consistently acknowledged the interviewer’s points with subtle gestures like nodding, which encouraged a collaborative atmosphere. When asked a question, they took a moment to think before responding, which reflected a thoughtful approach rather than impulsive answers. This behavior not only helped in understanding the questions better but also showed respect for the interviewer’s time and effort. Furthermore, their ability to paraphrase or summarize the question before answering ensured there was no miscommunication. This trait demonstrated the candidate’s eagerness to engage in meaningful dialogue, which is highly valued in professional environments where teamwork and clarity are essential.",
    rating: 8.7,
  },
  {
    feedback:
      "The candidate had a calm and composed demeanor, which made the conversation feel natural and engaging. Interviews can often be stressful, but the candidate’s ability to maintain a relaxed yet professional attitude stood out. This composure conveyed a sense of reliability and maturity, qualities that are crucial in any workplace. The candidate spoke clearly and with a steady tone, showing they were in control of their thoughts and emotions. Even when faced with challenging or unexpected questions, they handled the situation gracefully, taking their time to form coherent responses. Their demeanor created a comfortable environment for both the interviewer and themselves, allowing for an open and productive discussion. This level of self-possession indicates that the candidate is likely to perform well under pressure and remain a stable presence in dynamic or high-stress scenarios.",
    rating: 9.0,
  },
  {
    feedback:
      "The candidate displayed an approachable and friendly attitude, which contributed to a positive interview experience. Beyond technical competence, creating a good first impression often comes down to interpersonal skills, and the candidate excelled in this aspect. From the initial greeting to the closing moments, they were polite, warm, and receptive. Their natural smile and cheerful tone of voice made the conversation engaging and pleasant. This friendliness extended to how they reacted to feedback or clarifications, always showing a willingness to learn and adapt. An approachable demeanor is essential for team dynamics and fosters collaboration, and the candidate’s behavior suggested they would be a valuable team player. This ability to make others feel comfortable is an underrated but crucial soft skill in professional settings.",
    rating: 8.9,
  },
  {
    feedback:
      "The candidate exhibited a strong sense of clarity and confidence in their communication, ensuring that their ideas were conveyed effectively. Good communication is more than just technical jargon; it’s about delivering messages in a structured and impactful way, which the candidate managed exceptionally well. They articulated their thoughts with precision, avoiding unnecessary complexity while still providing depth to their responses. This skill not only demonstrates their understanding of the subject but also their ability to tailor their communication to different audiences. Additionally, the candidate’s pauses and pacing allowed the conversation to flow seamlessly, showing that they were mindful of the listener’s ability to absorb information. Such clarity is a crucial trait, especially in roles that require collaboration across teams or presentations to stakeholders, and the candidate proved they excel in this regard.",
    rating: 9.4,
  },
];

function Feedback() {
  const typewriterContainer = useRef(null);
  const router = useRouter();

  const randomFeedback = feedbackData[Math.floor(Math.random() * feedbackData.length)];

  useEffect(() => {
    const typewriter = new Typewriter(typewriterContainer.current, {
      loop: false,
      delay: 5, // Typing speed
    });
  
    typewriter
      .pauseFor(500) // Pause before typing starts
      .typeString(`${randomFeedback.feedback} (Rating: ${randomFeedback.rating}/10)`)
      .start();
  }, []);

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-green-500 mb-4">Congratulations!</h2>
      <h2 className="font-bold text-2xl mb-3">Your Interview Feedback</h2>
      <p className="text-gray-600 mb-5">
        Here is a detailed breakdown of your interview performance:
      </p>
      <div
        ref={typewriterContainer} // Reference for the typewriter effect
        className="text-lg text-gray-700 whitespace-pre-line"
      ></div>
      <Button onClick={() => router.replace("/dashboard")} className="mt-5">
        Go Home
      </Button>
    </div>
  );
}

export default Feedback;
