import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "Home": "Home",
      "Services": "Services",
      "About": "About",
      "Blog": "Blog",
      "FAQ": "FAQ",
      "Contact": "Contact",
      "Nerva Consulting": "Nerva Consulting",
      "Transform Your Business with Expert Consulting": "Transform Your Business with Expert Consulting",
      "We help businesses optimize operations, increase profitability, and achieve sustainable growth through data-driven strategies and proven methodologies.": "We help businesses optimize operations, increase profitability, and achieve sustainable growth through data-driven strategies and proven methodologies.",
      "Schedule a Consultation": "Schedule a Consultation",
      "Latest Blog Articles": "Latest Blog Articles",
      "Read More": "Read More",
      "Frequently Asked Questions": "Frequently Asked Questions",
      "What documents do I need to start a company in Poland?": "What documents do I need to start a company in Poland?",
      "How can I apply for a residence permit in Poland?": "How can I apply for a residence permit in Poland?",
      "What are the tax obligations for expats in Poland?": "What are the tax obligations for expats in Poland?",
      "How can I find housing in Poland?": "How can I find housing in Poland?",
      "What is the process for obtaining a PESEL number?": "What is the process for obtaining a PESEL number?",
      "How can I open a bank account in Poland?": "How can I open a bank account in Poland?",
      "What healthcare options are available for expats in Poland?": "What healthcare options are available for expats in Poland?",
      "How can I learn the Polish language?": "How can I learn the Polish language?",
      // Add more translations as needed
    }
  },
  tr: {
    translation: {
      "Home": "Ana Sayfa",
      "Services": "Hizmetler",
      "About": "Hakkımızda",
      "Blog": "Blog",
      "FAQ": "SSS",
      "Contact": "İletişim",
      "Nerva Consulting": "Nerva Danışmanlık",
      "Transform Your Business with Expert Consulting": "İşinizi Uzman Danışmanlık ile Dönüştürün",
      "We help businesses optimize operations, increase profitability, and achieve sustainable growth through data-driven strategies and proven methodologies.": "Veriye dayalı stratejiler ve kanıtlanmış yöntemlerle işletmelerin operasyonlarını optimize etmelerine, karlılığı artırmalarına ve sürdürülebilir büyümeyi sağlamalarına yardımcı oluyoruz.",
      "Schedule a Consultation": "Danışma Planlayın",
      "Latest Blog Articles": "Son Blog Yazıları",
      "Read More": "Devamını Oku",
      "Frequently Asked Questions": "Sıkça Sorulan Sorular",
      "What documents do I need to start a company in Poland?": "Polonya'da şirket kurmak için hangi belgelere ihtiyacım var?",
      "How can I apply for a residence permit in Poland?": "Polonya'da oturma izni nasıl başvurabilirim?",
      "What are the tax obligations for expats in Poland?": "Polonya'da yabancılar için vergi yükümlülükleri nelerdir?",
      "How can I find housing in Poland?": "Polonya'da nasıl konut bulabilirim?",
      "What is the process for obtaining a PESEL number?": "PESEL numarası almak için süreç nedir?",
      "How can I open a bank account in Poland?": "Polonya'da nasıl banka hesabı açabilirim?",
      "What healthcare options are available for expats in Poland?": "Polonya'da yabancılar için hangi sağlık hizmetleri mevcuttur?",
      "How can I learn the Polish language?": "Polonya dilini nasıl öğrenebilirim?",
      // Add more translations as needed
    }
  },
  pl: {
    translation: {
      "Home": "Strona Główna",
      "Services": "Usługi",
      "About": "O Nas",
      "Blog": "Blog",
      "FAQ": "FAQ",
      "Contact": "Kontakt",
      "Nerva Consulting": "Nerva Consulting",
      "Transform Your Business with Expert Consulting": "Przekształć swoją firmę dzięki profesjonalnemu doradztwu",
      "We help businesses optimize operations, increase profitability, and achieve sustainable growth through data-driven strategies and proven methodologies.": "Pomagamy firmom optymalizować operacje, zwiększać rentowność i osiągać zrównoważony wzrost dzięki strategiom opartym na danych i sprawdzonym metodom.",
      "Schedule a Consultation": "Umów się na konsultację",
      "Latest Blog Articles": "Najnowsze artykuły na blogu",
      "Read More": "Czytaj więcej",
      "Frequently Asked Questions": "Najczęściej zadawane pytania",
      "What documents do I need to start a company in Poland?": "Jakie dokumenty są potrzebne do założenia firmy w Polsce?",
      "How can I apply for a residence permit in Poland?": "Jak mogę ubiegać się o zezwolenie na pobyt w Polsce?",
      "What are the tax obligations for expats in Poland?": "Jakie są obowiązki podatkowe dla obcokrajowców w Polsce?",
      "How can I find housing in Poland?": "Jak mogę znaleźć mieszkanie w Polsce?",
      "What is the process for obtaining a PESEL number?": "Jaki jest proces uzyskania numeru PESEL?",
      "How can I open a bank account in Poland?": "Jak mogę otworzyć konto bankowe w Polsce?",
      "What healthcare options are available for expats in Poland?": "Jakie opcje opieki zdrowotnej są dostępne dla obcokrajowców w Polsce?",
      "How can I learn the Polish language?": "Jak mogę nauczyć się języka polskiego?",
      // Add more translations as needed
    }
  },
  ar: {
    translation: {
      "Home": "الصفحة الرئيسية",
      "Services": "الخدمات",
      "About": "معلومات عنا",
      "Blog": "مدونة",
      "FAQ": "الأسئلة الشائعة",
      "Contact": "اتصل",
      "Nerva Consulting": "نيرفا للاستشارات",
      "Transform Your Business with Expert Consulting": "حوّل عملك من خلال الاستشارات المتخصصة",
      "We help businesses optimize operations, increase profitability, and achieve sustainable growth through data-driven strategies and proven methodologies.": "نساعد الشركات على تحسين العمليات وزيادة الربحية وتحقيق النمو المستدام من خلال استراتيجيات تعتمد على البيانات ومنهجيات مثبتة.",
      "Schedule a Consultation": "جدولة استشارة",
      "Latest Blog Articles": "أحدث مقالات المدونة",
      "Read More": "اقرأ المزيد",
      "Frequently Asked Questions": "الأسئلة الشائعة",
      "What documents do I need to start a company in Poland?": "ما هي الوثائق المطلوبة لبدء شركة في بولندا؟",
      "How can I apply for a residence permit in Poland?": "كيف يمكنني التقدم للحصول على تصريح إقامة في بولندا؟",
      "What are the tax obligations for expats in Poland?": "ما هي الالتزامات الضريبية للمغتربين في بولندا؟",
      "How can I find housing in Poland?": "كيف يمكنني العثور على سكن في بولندا؟",
      "What is the process for obtaining a PESEL number?": "ما هي عملية الحصول على رقم PESEL؟",
      "How can I open a bank account in Poland?": "كيف يمكنني فتح حساب مصرفي في بولندا؟",
      "What healthcare options are available for expats in Poland?": "ما هي خيارات الرعاية الصحية المتاحة للمغتربين في بولندا؟",
      "How can I learn the Polish language?": "كيف يمكنني تعلم اللغة البولندية؟",
      // Add more translations as needed
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;