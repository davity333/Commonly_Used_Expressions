// Commonly Used Expressions - Volumen 2
// Datos de expresiones preposicionales del material proporcionado.
import createPronunciationVol2 from './pronunciationVol2';
import createStructureVol2 from './structureVol2';
import createVerbFormsVol2 from './verbFormsVol2';
import examplesVol2 from './examplesVol2';

const source = [
  {
    "expression": "Arrive at (building, room)",
    "translation": "Llegar a (edificio, habitación)",
    "definition": "To reach a destination.",
    "examples": [
      {
        "en": "He is arriving at the mall right now."
      }
    ]
  },
  {
    "expression": "Arrive in (city, country)",
    "translation": "Llegar a (ciudad, país)",
    "definition": "To reach a destination.",
    "examples": [
      {
        "en": "I will arrive in Italy next month."
      }
    ]
  },
  {
    "expression": "Ask (person) about",
    "translation": "Preguntarle a alguien sobre algo",
    "definition": "When you are asking someone to gather information for you.",
    "examples": [
      {
        "en": "I need to ask Jenny about my promotion."
      }
    ]
  },
  {
    "expression": "Ask (person) for",
    "translation": "Pedirle algo a alguien",
    "definition": "To request something from someone.",
    "examples": [
      {
        "en": "I asked the waiter for a glass of water."
      }
    ]
  },
  {
    "expression": "Angry at/with",
    "translation": "Enojado con",
    "definition": "To be really upset at someone for something he or she has done badly.",
    "examples": [
      {
        "en": "My father is angry at my brother because he is disrespectful."
      }
    ]
  },
  {
    "expression": "Apologize to (person) for (something)",
    "translation": "Disculparse con alguien por algo",
    "definition": "To ask for forgiveness for a fault.",
    "examples": [
      {
        "en": "I apologized to my sister for breaking her glasses."
      }
    ]
  },
  {
    "expression": "Believe in",
    "translation": "Creer en",
    "definition": "To accept as true or real.",
    "examples": [
      {
        "en": "We believe in marriage."
      }
    ]
  },
  {
    "expression": "Belong to",
    "translation": "Pertenecer a",
    "definition": "to be owned by someone.",
    "examples": [
      {
        "en": "The blue book belongs to me."
      }
    ]
  },
  {
    "expression": "Bored with/by",
    "translation": "Aburrido de / por",
    "definition": "To lack interest on something.",
    "examples": [
      {
        "en": "She was bored with the story that Mike was telling her."
      }
    ]
  },
  {
    "expression": "Borrow (something) from (person)",
    "translation": "Pedirle algo prestado a alguien",
    "definition": "To receive something temporarily from a person to give it back at a later time.",
    "examples": [
      {
        "en": "Natalie, can I borrow your car to go the movies?"
      }
    ]
  },
  {
    "expression": "Busy with",
    "translation": "Ocupado con",
    "definition": "To be occupied with something at the moment.",
    "examples": [
      {
        "en": "I have been so busy with everything going on, that I haven't had a chance to call my family."
      }
    ]
  },
  {
    "expression": "Bothered by/with",
    "translation": "Molesto por / con",
    "definition": "To make someone angry or upset.",
    "examples": [
      {
        "en": "I am really bothered with these new laws imposed by the government."
      }
    ]
  },
  {
    "expression": "Crazy about",
    "translation": "Loco por",
    "definition": "To be very enthusiastic or devoted about someone or something.",
    "examples": [
      {
        "en": "Henry is really crazy about soccer."
      }
    ]
  },
  {
    "expression": "Concentrate on",
    "translation": "Concentrarse en",
    "definition": "To focus on a specific situation.",
    "examples": [
      {
        "en": "I need to concentrate on my duties at work."
      }
    ]
  },
  {
    "expression": "Care about/for",
    "translation": "Preocuparse por / cuidar de",
    "definition": "To have a special interest on someone or something.",
    "examples": [
      {
        "en": "She is helping you with your homework because she cares for you."
      }
    ]
  },
  {
    "expression": "Compare to",
    "translation": "Comparar con",
    "definition": "To analyze the differences between things, persons or situations to realize which one is better or more convenient.",
    "examples": [
      {
        "en": "Daniel's work is outstanding and it doesn't compare to Joseph's work."
      }
    ]
  },
  {
    "expression": "Call up",
    "translation": "Llamar por teléfono / reclutar",
    "definition": "To enlist on the military. To Make a telephone Call",
    "examples": [
      {
        "en": "I was called up to join the US army."
      },
      {
        "en": "My friend called me up last night to go to the movies but I didn't hear my phone ringing."
      }
    ]
  },
  {
    "expression": "Call on",
    "translation": "Pedir o instar a",
    "definition": "To order or request to undertake a particular activity",
    "examples": [
      {
        "en": "There is a call on to volunteer as a firefighter."
      }
    ]
  },
  {
    "expression": "Cut out",
    "translation": "Eliminar / dejar de hacer",
    "definition": "To exclude something or someone.",
    "examples": [
      {
        "en": "We need to cut out some people off the weeding."
      }
    ]
  },
  {
    "expression": "Depend on",
    "translation": "Depender de",
    "definition": "to need something, or need the help and support of someone or something.",
    "examples": [
      {
        "en": "My vacations budget depend on how much I work this month."
      }
    ]
  },
  {
    "expression": "Decide on/about",
    "translation": "Decidir sobre",
    "definition": "To make a choice about something or someone.",
    "examples": [
      {
        "en": "We have decided on being on a diet."
      }
    ]
  },
  {
    "expression": "Different from",
    "translation": "Diferente de",
    "definition": "To specify that a thing or a person are not the same.",
    "examples": [
      {
        "en": "The weather in Alaska is different from the weather in Hawaii."
      }
    ]
  },
  {
    "expression": "Divide into",
    "translation": "Dividir entre",
    "definition": "To do a mathematical calculation to find out how many times a smaller number will fit into a larger number.",
    "examples": [
      {
        "en": "If you divide two into four it equals two."
      }
    ]
  },
  {
    "expression": "Deal with",
    "translation": "Lidiar con",
    "definition": "To take action respectfully about a situation.",
    "examples": [
      {
        "en": "The principal has to deal with difficult children."
      }
    ]
  },
  {
    "expression": "Dream of/about",
    "translation": "Soñar con",
    "definition": "To think and desire something that you want really much.",
    "examples": [
      {
        "en": "I am dreaming of going to the Coliseum in Rome, next month."
      }
    ]
  },
  {
    "expression": "Hand out",
    "translation": "Repartir",
    "definition": "To distribute or give something.",
    "examples": [
      {
        "en": "They are going to hand out the exams in a minute."
      }
    ]
  },
  {
    "expression": "Hang over",
    "translation": "Colgar sobre",
    "definition": "To hang something on a static point.",
    "examples": [
      {
        "en": "The towels are hanging over the door."
      }
    ]
  },
  {
    "expression": "Hold on",
    "translation": "Esperar",
    "definition": "To wait for something wanted or requested.",
    "examples": [
      {
        "en": "We need to hold on that project a little bit longer."
      }
    ]
  },
  {
    "expression": "Hope for",
    "translation": "Esperar / tener esperanza de",
    "definition": "to look forward to with desire and reasonable confidence.",
    "examples": [
      {
        "en": "I always hope for the best these days."
      }
    ]
  },
  {
    "expression": "Hear from/about/of",
    "translation": "Tener noticias de / sobre",
    "definition": "To receive news or information",
    "examples": [
      {
        "en": "It's good to hear from you again after all these years."
      }
    ]
  },
  {
    "expression": "Invest in",
    "translation": "Invertir en",
    "definition": "To commit economically to gain a financial return.",
    "examples": [
      {
        "en": "My family is investing in the food business."
      }
    ]
  },
  {
    "expression": "Interested in",
    "translation": "Interesado en",
    "definition": "To awaken a wish or desire to get something.",
    "examples": [
      {
        "en": "Michael is interested in the new discounts."
      }
    ]
  },
  {
    "expression": "Introduce to",
    "translation": "Presentar a",
    "definition": "an expression used to introduce one person to another.",
    "examples": [
      {
        "en": "Nick introduced me to your family."
      }
    ]
  },
  {
    "expression": "Invite to",
    "translation": "Invitar a",
    "definition": "To request someone to come to an event or a place.",
    "examples": [
      {
        "en": "I want to invite you to the Christmas party."
      }
    ]
  },
  {
    "expression": "Ignorant about",
    "translation": "Desinformado sobre",
    "definition": "To be unaware or uninformed about something.",
    "examples": [
      {
        "en": "Many citizens are ignorant about the new laws imposed by the government."
      }
    ]
  },
  {
    "expression": "Insist on",
    "translation": "Insistir en",
    "definition": "To be persistent on something.",
    "examples": [
      {
        "en": "My friends insist on going to that concert but I don't like that band."
      }
    ]
  },
  {
    "expression": "Juice up",
    "translation": "Mejorar / hacer más interesante",
    "definition": "To make something more interesting or more powerful.",
    "examples": [
      {
        "en": "We need to juice up our presentation to convince our clients."
      }
    ]
  },
  {
    "expression": "Join in",
    "translation": "Unirse a",
    "definition": "To participate in doing something.",
    "examples": [
      {
        "en": "My little brother is joining in the boys scouts."
      }
    ]
  },
  {
    "expression": "Jot down",
    "translation": "Anotar",
    "definition": "To make notations on something.",
    "examples": [
      {
        "en": "The students jotted down the important things the teacher has said."
      }
    ]
  },
  {
    "expression": "Kid around",
    "translation": "Bromear",
    "definition": "When someone is making jokes or being playful.",
    "examples": [
      {
        "en": "Jules was just kidding around and didn't mean to scare you."
      }
    ]
  },
  {
    "expression": "Kind to",
    "translation": "Amable con",
    "definition": "To act kind and benevolent to people.",
    "examples": [
      {
        "en": "My mother is very kind to my fiancé"
      }
    ]
  },
  {
    "expression": "Know about",
    "translation": "Saber sobre",
    "definition": "Expresses to have knowledge or information about something.",
    "examples": [
      {
        "en": "The scientist knows about the new discovery done in astrophysics."
      }
    ]
  },
  {
    "expression": "Kneel down",
    "translation": "Arrodillarse",
    "definition": "To get down on one knee.",
    "examples": [
      {
        "en": "When I proposed her to marry me, I kneel down and gave her the ring."
      }
    ]
  },
  {
    "expression": "Kick about",
    "translation": "Quejarse de",
    "definition": "To complain about someone or something.",
    "examples": [
      {
        "en": "The kids are always kicking about the homework the teacher gives them."
      }
    ]
  },
  {
    "expression": "Lie about",
    "translation": "Mentir sobre",
    "definition": "To say something untrue about a situation or someone.",
    "examples": [
      {
        "en": "It is not a good advice to lie about something on a trial."
      }
    ]
  },
  {
    "expression": "Look up",
    "translation": "Buscar (información)",
    "definition": "Search for something.",
    "examples": [
      {
        "en": "If you don't know the meaning of that word you better look it up in a dictionary."
      }
    ]
  },
  {
    "expression": "Laugh at",
    "translation": "Reírse de",
    "definition": "To laugh in response when a situation is humorous.",
    "examples": [
      {
        "en": "I always get a good laugh at your jokes."
      }
    ]
  },
  {
    "expression": "Look at",
    "translation": "Mirar",
    "definition": "To act of becoming aware of something or someone by watching it.",
    "examples": [
      {
        "en": "Look at that marvelous artwork by Picasso!"
      }
    ]
  },
  {
    "expression": "Move over",
    "translation": "Hacerse a un lado",
    "definition": "To make some space from the place where someone is.",
    "examples": [
      {
        "en": "Can you move over a little bit? It is so crowded in here."
      }
    ]
  },
  {
    "expression": "Matter with",
    "translation": "Tener un asunto con",
    "definition": "When someone is on a situation that has to be dealt with.",
    "examples": [
      {
        "en": "I have a matter with my bosses that I haven't solved yet."
      }
    ]
  },
  {
    "expression": "Make up",
    "translation": "Compensar / reconciliarse / inventar",
    "definition": "To compensate for an action done badly. To forgive each other. To invent something.",
    "examples": [
      {
        "en": "I couldn't go to your birthday party but I will make it up to you."
      }
    ]
  },
  {
    "expression": "Multiply by",
    "translation": "Multiplicar por",
    "definition": "To increase the amount, number, or degree.",
    "examples": [
      {
        "en": "5 multiplied by 5 equals 25."
      }
    ]
  },
  {
    "expression": "Make Over",
    "translation": "Renovar / transformar",
    "definition": "To redo or renovate something.",
    "examples": [
      {
        "en": "The house around the corner looks fantastic after the make over."
      }
    ]
  },
  {
    "expression": "Next to",
    "translation": "Junto a",
    "definition": "Something adjacent to another thing.",
    "examples": [
      {
        "en": "Mexico is next to the United States."
      }
    ]
  },
  {
    "expression": "Nice to",
    "translation": "Amable con",
    "definition": "To be kind to someone.",
    "examples": [
      {
        "en": "You need to be nice to all the people."
      }
    ]
  },
  {
    "expression": "Never around",
    "translation": "Nunca estar presente",
    "definition": "It is used to say that someone is absent in a place.",
    "examples": [
      {
        "en": "The supervisor is never around when he is needed."
      }
    ]
  },
  {
    "expression": "Open up",
    "translation": "Abrirse / hablar con franqueza",
    "definition": "To speak freely about something that a person may want to confess or express.",
    "examples": [
      {
        "en": "Norah opened up to me and told me that she is in love with Nick."
      }
    ]
  },
  {
    "expression": "Opposed to",
    "translation": "Oponerse a",
    "definition": "To argue or protest against something.",
    "examples": [
      {
        "en": "I am opposed to violent acts."
      }
    ]
  },
  {
    "expression": "Out of",
    "translation": "Quedarse sin",
    "definition": "When something gets exhausted.",
    "examples": [
      {
        "en": "We are out of time, I doubt we finish the paperwork on time."
      }
    ]
  },
  {
    "expression": "Over with",
    "translation": "Terminado",
    "definition": "It is used to express the end of something.",
    "examples": [
      {
        "en": "Let's get the exam over with so that we can go home earlier."
      }
    ]
  },
  {
    "expression": "Outraged by",
    "translation": "Indignado por",
    "definition": "It is used to express that anger or resentment has been caused.",
    "examples": [
      {
        "en": "I was outraged by the acts of violence in the stadium."
      }
    ]
  },
  {
    "expression": "Order from",
    "translation": "Pedir a",
    "definition": "To agree to purchase something from someone or a company.",
    "examples": [
      {
        "en": "I am placing an order from the furniture store to buy some chairs."
      }
    ]
  },
  {
    "expression": "Put away",
    "translation": "Guardar",
    "definition": "To keep something in a place so that it won't be used.",
    "examples": [
      {
        "en": "During your class you need to put away your phone."
      }
    ]
  },
  {
    "expression": "Proud of",
    "translation": "Orgulloso de",
    "definition": "To feel pride or satisfaction about oneself.",
    "examples": [
      {
        "en": "I am proud of being a citizen of this nation."
      }
    ]
  },
  {
    "expression": "Patient with",
    "translation": "Tener paciencia con",
    "definition": "To not get frustrated or tired of waiting for something or someone.",
    "examples": [
      {
        "en": "He is so patient with you, he always waits for you more than 30 minutes."
      }
    ]
  },
  {
    "expression": "Protect from",
    "translation": "Proteger de",
    "definition": "To take special care of something or someone.",
    "examples": [
      {
        "en": "I always have a helmet on when I am riding a bike to protect me from falls."
      }
    ]
  },
  {
    "expression": "Qualified in",
    "translation": "Calificado para / en",
    "definition": "To have the proper characteristics to fulfill a duty or a position.",
    "examples": [
      {
        "en": "You qualified to be working in this office."
      }
    ]
  },
  {
    "expression": "Quick about",
    "translation": "Rápido para",
    "definition": "To act fast on a task.",
    "examples": [
      {
        "en": "My friend is always quick about doing his job."
      }
    ]
  },
  {
    "expression": "Ready for",
    "translation": "Listo para",
    "definition": "To be prepared by an action to come.",
    "examples": [
      {
        "en": "I am ready for the next challenge."
      }
    ]
  },
  {
    "expression": "Rip up",
    "translation": "Romper en pedazos",
    "definition": "To tear something into smaller pieces.",
    "examples": [
      {
        "en": "The paper is not useful anymore, you can rip it up if you want."
      }
    ]
  },
  {
    "expression": "Responsible for",
    "translation": "Responsable de",
    "definition": "Something that is your job or duty.",
    "examples": [
      {
        "en": "He is responsible for training the new employees."
      }
    ]
  },
  {
    "expression": "Righteous about",
    "translation": "Justo respecto a",
    "definition": "To do or to be what is just or proper.",
    "examples": [
      {
        "en": "A good governor has to be righteous about justice matters."
      }
    ]
  },
  {
    "expression": "Rely on/upon",
    "translation": "Confiar en",
    "definition": "To have confidence or trust in someone or something.",
    "examples": [
      {
        "en": "I can always rely on my coworkers."
      }
    ]
  },
  {
    "expression": "Set up",
    "translation": "Organizar / preparar",
    "definition": "To establish or organize something and having it ready.",
    "examples": [
      {
        "en": "Everything has been set up to begin my trip in Europe."
      }
    ]
  },
  {
    "expression": "Search for",
    "translation": "Buscar",
    "definition": "To do an investigation on something or someone.",
    "examples": [
      {
        "en": "I am still searching for my missing luggage."
      }
    ]
  },
  {
    "expression": "Show off",
    "translation": "Presumir / lucirse",
    "definition": "To act beyond what is required for people watching. To boast.",
    "examples": [
      {
        "en": "They are showing off their skating skills."
      }
    ]
  },
  {
    "expression": "Sorry for/about",
    "translation": "Sentir / lamentar algo",
    "definition": "A way to apologize for something being done.",
    "examples": [
      {
        "en": "I am really sorry for not being able to go to your wedding."
      }
    ]
  },
  {
    "expression": "Sure of",
    "translation": "Seguro de",
    "definition": "To have confidence or being certain on doing something.",
    "examples": [
      {
        "en": "I always make sure of the exams that I check."
      }
    ]
  },
  {
    "expression": "Shut up",
    "translation": "Callarse",
    "definition": "To remain in silence.",
    "examples": [
      {
        "en": "Please guys shut up! The teacher is trying to explain us the problem."
      }
    ]
  },
  {
    "expression": "Talk about",
    "translation": "Hablar de",
    "definition": "To have a conversation about something.",
    "examples": [
      {
        "en": "George always likes to talk about cars."
      }
    ]
  },
  {
    "expression": "Turn on",
    "translation": "Encender",
    "definition": "To cause to begin the operation, activity, or flow of an electronic device.",
    "examples": [
      {
        "en": "Please Michelle, turn on the lights!"
      }
    ]
  },
  {
    "expression": "Throw out/away",
    "translation": "Tirar / desechar",
    "definition": "To get rid of something useless.",
    "examples": [
      {
        "en": "Ann is going outside to throw out the trash."
      }
    ]
  },
  {
    "expression": "Think over",
    "translation": "Reflexionar sobre",
    "definition": "To analyze something carefully and at length.",
    "examples": [
      {
        "en": "They are thinking over opening a new office in the city."
      }
    ]
  },
  {
    "expression": "Tell on/about",
    "translation": "Delatar / contar sobre",
    "definition": "Give away information about someone.",
    "examples": [
      {
        "en": "I can't believe that Victoria told on us! We are in trouble."
      }
    ]
  },
  {
    "expression": "Tired of",
    "translation": "Harto de",
    "definition": "To be exhausted or annoyed by something.",
    "examples": [
      {
        "en": "The clients are tired of hearing the same excuse."
      }
    ]
  },
  {
    "expression": "Understand about",
    "translation": "Entender sobre",
    "definition": "To comprehend something that has been explained.",
    "examples": [
      {
        "en": "I don't understand about chemistry very much."
      }
    ]
  },
  {
    "expression": "Use for",
    "translation": "Usar para",
    "definition": "To make use of something for a specific purpose.",
    "examples": [
      {
        "en": "A fork and a spoon are used for eating."
      }
    ]
  },
  {
    "expression": "Used to",
    "translation": "Solía",
    "definition": "An action was frequently done by someone in the past.",
    "examples": [
      {
        "en": "I used to be a great soccer player but I can't play anymore."
      }
    ]
  },
  {
    "expression": "Victorious in",
    "translation": "Victorioso en",
    "definition": "To be successful in a competition or be the winner of all.",
    "examples": [
      {
        "en": "Germany was victorious in the last world cup."
      }
    ]
  },
  {
    "expression": "Wait for",
    "translation": "Esperar a",
    "definition": "To stay in a place expecting something or someone.",
    "examples": [
      {
        "en": "I have been waiting for her to be ready for 45 minutes now."
      }
    ]
  },
  {
    "expression": "Wait on",
    "translation": "Esperar a / por",
    "definition": "Wait for a result before been able to make a decision.",
    "examples": [
      {
        "en": "We are waiting on the results to see if the baby is a boy or a girl."
      }
    ]
  },
  {
    "expression": "Wait up",
    "translation": "Esperar a que alguien alcance al grupo",
    "definition": "To stop an action so that others can catch up.",
    "examples": [
      {
        "en": "We need to wait up on the rest of the group, they shouldn't take long."
      }
    ]
  },
  {
    "expression": "Worry about",
    "translation": "Preocuparse por",
    "definition": "To show concern about a situation or somebody.",
    "examples": [
      {
        "en": "My father is worried about my low grades this semester."
      }
    ]
  },
  {
    "expression": "Xenophobic about",
    "translation": "Xenófobo respecto a",
    "definition": "A fear that is unreasonable towards foreign people or people from different cultures.",
    "examples": [
      {
        "en": "That article in the newspaper is xenophobic about Latin people."
      }
    ]
  },
  {
    "expression": "Yell about",
    "translation": "Gritar sobre / por",
    "definition": "To say something loudly with fear, surprise, pain or enthusiasm",
    "examples": [
      {
        "en": "He yelled about the spider that was in the kitchen."
      }
    ]
  },
  {
    "expression": "Zealous about",
    "translation": "Entusiasmado por",
    "definition": "To be really enthusiastic or show passion about something.",
    "examples": [
      {
        "en": "Sammy was zealous about playing the soccer match last night."
      }
    ]
  },
  {
    "expression": "Zany about/ over",
    "translation": "Alocado por / respecto a",
    "definition": "When someone is crazy, foolish or fun by being out of the ordinary.",
    "examples": [
      {
        "en": "They have been zany about his strange new haircut."
      }
    ]
  }
];

const pronunciations = createPronunciationVol2(source);
const structures = createStructureVol2(source);
const verbForms = createVerbFormsVol2(source);

if (examplesVol2.length !== source.length || examplesVol2.some((examples) => examples.length !== 5)) {
  throw new Error('Volume 2 must have exactly five examples for every expression.');
}

const expressionsVol2 = source.map((item, index) => ({
  id: `v2-${String(index + 1).padStart(2, '0')}`,
  number: index + 1,
  ...item,
  ...pronunciations[item.expression],
  definitionEs: `Se usa para expresar la idea de "${item.translation.toLowerCase()}".`,
  structure: structures[item.expression],
  verbForms: verbForms[item.expression],
  examples: examplesVol2[index],
}));

export default expressionsVol2;
