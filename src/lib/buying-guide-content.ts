export type BuyingGuideTopic = {
  id: string;
  title: string;
  summary: string;
};

export const buyingGuideTopics: BuyingGuideTopic[] = [
  {
    id: "coding",
    title: "Coding & development",
    summary:
      "Prioritize 16GB RAM, a comfortable keyboard, and a sharp display. An integrated GPU is fine for web and backend work; pick dedicated graphics only if you also game or edit video.",
  },
  {
    id: "students",
    title: "Students",
    summary:
      "Balance battery life, weight, and price. 8GB RAM can work for light use, but 16GB is safer for multitasking through college. Prefer SSD storage and a 1080p screen.",
  },
  {
    id: "gaming",
    title: "Gaming",
    summary:
      "Look at the GPU first, then cooling and display refresh rate. 16GB RAM and fast SSD storage help load times. Expect trade-offs in weight and battery life.",
  },
  {
    id: "video-editing",
    title: "Video editing & creators",
    summary:
      "Choose 16GB RAM minimum (32GB for heavy timelines), a color-accurate display, and an SSD large enough for projects. Dedicated graphics speed up exports in many tools.",
  },
  {
    id: "ai-ml",
    title: "AI / ML experiments",
    summary:
      "Local training needs strong CPU, plenty of RAM, and ideally an NVIDIA GPU with CUDA support. For learning and cloud notebooks, a balanced ultrabook with 16GB+ RAM may be enough.",
  },
  {
    id: "office",
    title: "Home & office",
    summary:
      "Reliability, webcam quality, and battery matter more than peak performance. A recent quad-core CPU, 8–16GB RAM, and SSD cover email, documents, and video calls.",
  },
];
