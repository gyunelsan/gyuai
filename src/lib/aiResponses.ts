

import { Language } from "@/types";

export const aiResponses: Record<Language, string[]> = {
  en: [
    "That's a great question! Let me think through this carefully.\n\nBased on my understanding, I'd approach this by considering the key factors involved. The most important thing to keep in mind is that context matters greatly here — every situation is unique and deserves thoughtful analysis.",
    "Absolutely! Here's what I know about this topic:\n\n**Key points to consider:**\n1. First, it's worth noting the fundamental principles at play\n2. Additionally, there are several nuanced aspects to consider\n3. Finally, the practical implications are quite significant\n\nWould you like me to elaborate on any of these points?",
    "Interesting! I can definitely help with that. The answer involves understanding a few interconnected concepts — once you see how they relate to each other, everything clicks into place beautifully.\n\nLet me break it down step by step so it's easy to follow.",
    "Great topic! Here's a concise overview:\n\nThe core idea revolves around efficiency and clarity. By focusing on what truly matters, we can arrive at elegant solutions that stand the test of time.\n\nIs there a specific aspect you'd like to explore further?",
    "I'd be happy to help you with that! This is actually a fascinating area that touches on several important concepts.\n\nThe short answer is: it depends on the context. But let me give you a more detailed breakdown of the key considerations you should keep in mind.",
  ],
  ru: [
    "Отличный вопрос! Позвольте мне обдумать это внимательно.\n\nИсходя из моего понимания, я бы подошёл к этому, рассмотрев ключевые факторы. Самое важное — учитывать контекст, поскольку каждая ситуация уникальна и заслуживает вдумчивого анализа.",
    "Конечно! Вот что я знаю по этой теме:\n\n**Ключевые моменты:**\n1. Прежде всего, стоит отметить фундаментальные принципы\n2. Кроме того, есть несколько нюансов для рассмотрения\n3. Наконец, практические последствия весьма значительны\n\nХотите, чтобы я подробнее остановился на каком-то из этих пунктов?",
    "Интересно! Я определённо могу помочь с этим. Ответ включает понимание нескольких взаимосвязанных концепций — как только вы увидите, как они соотносятся друг с другом, всё встанет на свои места.\n\nДавайте разберём это шаг за шагом.",
    "Прекрасная тема! Вот краткий обзор:\n\nОсновная идея вращается вокруг эффективности и ясности. Сосредоточившись на том, что действительно важно, мы можем прийти к элегантным решениям, которые выдержат испытание временем.",
  ],
  az: [
    "Əla sual! İcazə verin bunu diqqətlə düşünüm.\n\nAnladığıma görə, burada əsas amilləri nəzərə alaraq yanaşardım. Ən vacib şey — kontekstin böyük rol oynadığını yadda saxlamaqdır, çünki hər vəziyyət özünəməxsusdur.",
    "Əlbəttə! Bu mövzu haqqında bildiklərim:\n\n**Əsas məqamlar:**\n1. İlk növbədə, əsas prinsipləri qeyd etmək lazımdır\n2. Bundan əlavə, nəzərə alınmalı bir neçə incə məqam var\n3. Nəhayət, praktiki nəticələr olduqca əhəmiyyətlidir\n\nHər hansı bir məqamı daha ətraflı izah etməyimi istərdinizmi?",
    "Maraqlıdır! Mən bununla bağlı mütləq kömək edə bilərəm. Cavab bir neçə bir-biri ilə əlaqəli anlayışı başa düşməyi tələb edir — onların bir-biri ilə necə əlaqəli olduğunu görəndə hər şey öz yerini tapır.\n\nGəlin addım-addım izah edim.",
    "Əla mövzu! Qısa icmal:\n\nƏsas fikir səmərəlilik və aydınlıq ətrafında fırlanır. Həqiqətən vacib olana diqqət yetirərək, zamanın sınağından keçən zərif həllərə gələ bilərik.",
  ],
};

export function getRandomResponse(lang: Language): string {
  const responses = aiResponses[lang] ?? aiResponses.en;
  return responses[Math.floor(Math.random() * responses.length)];
}

export function getTypingDelay(): number {
  return 1000 + Math.random() * 1500;
}
