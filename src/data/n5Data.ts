export interface ResourceLink {
  id: string;
  title: string;
  url: string;
  type?: 'video' | 'exam' | 'anskey' | 'group' | 'note' | 'counting' | 'kaiwa' | 'practice';
  chapter?: number;
}

export interface MinnaChapter {
  chapter: number;
  title: string;
  items: ResourceLink[];
}

export interface SupportInfo {
  telegramAcc: string;
  telegramUrl: string;
  studyPlanUrl: string;
  telegramGuideUrl: string;
  notice: string[];
}

export const supportInfo: SupportInfo = {
  telegramAcc: '@yaminjlc33',
  telegramUrl: 'https://t.me/yaminjlc33',
  studyPlanUrl: 'https://m.facebook.com/groups/1221225785334126/permalink/1231827540940617/',
  telegramGuideUrl: 'https://www.facebook.com/share/p/19LUkvR3FC/',
  notice: [
    'ဒီအတန်းလေးက JLPT / Nat Test ဖြေဆိုချင်သူများအတွက် Video များကို Ready ပြင်ဆင်ပေးထားသော စာစုဖြစ်ပါသည်။',
    'သောကြာနေ့တိုင်း သင်တန်းပိတ်ပါသဖြင့် စာမစစ်ပေးပါ။',
    'Post အောက်တွင် Comment များ မရှုပ်ထွေးစေရန် ပိတ်ထားပါသည်။ နားမလည်ပါက Telegram Acc (@yaminjlc33) သို့ တိုက်ရိုက် မေးမြန်းနိုင်ပါသည်။',
    'Exam များဖြေဆိုပြီးပါက Ans Key များဖြင့် ချက်ချင်း တိုက်ဆိုင် စစ်ဆေးနိုင်ပါသည်။'
  ]
};

export const basicVideos: ResourceLink[] = [
  { id: 'bv-1', title: 'Video No. 1 - Basic Introduction', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221239021999469/', type: 'video' },
  { id: 'bv-2', title: 'Video No. 2 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221244151998956/', type: 'video' },
  { id: 'bv-3', title: 'Video No. 3 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221271611996210/', type: 'video' },
  { id: 'bv-4', title: 'Video No. 4 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221283185328386/', type: 'video' },
  { id: 'bv-5', title: 'Video No. 5 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221287665327938/', type: 'video' },
  { id: 'bv-6', title: 'Video No. 6 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221296708660367/', type: 'video' },
  { id: 'bv-7', title: 'Video No. 7 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221304041992967/', type: 'video' },
  { id: 'bv-8', title: 'Video No. 8 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221315961991775/', type: 'video' },
  { id: 'bv-9', title: 'Video No. 9 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1221329135323791/', type: 'video' },
  { id: 'bv-10', title: 'Video No. 10 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222486758541362/', type: 'video' },
  { id: 'bv-11', title: 'Video No. 11 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222496905207014/', type: 'video' },
  { id: 'bv-12', title: 'Video No. 12 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222502745206430/', type: 'video' },
  { id: 'bv-13', title: 'Video No. 13 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222510271872344/', type: 'video' },
  { id: 'bv-14', title: 'Video No. 14 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222513865205318/', type: 'video' },
  { id: 'bv-15', title: 'Video No. 15 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222516448538393/', type: 'video' },
  { id: 'bv-16', title: 'Video No. 16 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222518795204825/', type: 'video' },
  { id: 'bv-17', title: 'Video No. 17 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222528195203885/', type: 'video' },
  { id: 'bv-18', title: 'Video No. 18 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222531785203526/', type: 'video' },
  { id: 'bv-19', title: 'Video No. 19 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222533711870000/', type: 'video' },
  { id: 'bv-20', title: 'Video No. 20 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222536778536360/', type: 'video' },
  { id: 'bv-21', title: 'Video No. 21 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222540501869321/', type: 'video' },
  { id: 'bv-22', title: 'Video No. 22 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222543921868979/', type: 'video' },
  { id: 'bv-23', title: 'Video No. 23 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222547378535300/', type: 'video' },
  { id: 'bv-24', title: 'Video No. 24 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222557535200951/', type: 'video' },
  { id: 'bv-25', title: 'Video No. 25 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222566925200012/', type: 'video' },
  { id: 'bv-26', title: 'Video No. 26 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222570651866306/', type: 'video' },
  { id: 'bv-27', title: 'Video No. 27 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222575051865866/', type: 'video' },
  { id: 'bv-28', title: 'Video No. 28 - Basic Japanese', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1222578071865564/', type: 'video' },
  { id: 'bv-29', title: 'Video No. 29 - Basic Japanese Final', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223904345066270/', type: 'video' }
];

export const basicPracticeAndTests: ResourceLink[] = [
  { id: 'bp-1', title: 'Basic Practice Exercises', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223907478399290/', type: 'practice' },
  { id: 'bt-1', title: 'Basic Overall Test (1st Time Exam)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1228260767963961/', type: 'exam' },
  { id: 'bt-1-ans', title: 'Basic Overall Test (1st Time Exam Answer Key)', url: 'https://www.facebook.com/groups/1221225785334126/permalink/1231587387631299/', type: 'anskey' },
  { id: 'bt-2', title: 'N5 Basic Overall Test (2nd Time Exam)', url: 'https://www.facebook.com/groups/1221225785334126/permalink/1228259531297418/', type: 'exam' },
  { id: 'bt-2-ans', title: 'N5 Basic Overall Test (2nd Time Exam Answer Key)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1231588714297833/', type: 'anskey' }
];

export const minnaChapters: MinnaChapter[] = [
  {
    chapter: 1,
    title: 'Chapter 1: Self Introduction & Basic Sentence Structure',
    items: [
      { id: 'c1-m1', title: 'Ch-1 Meaning (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223925525064152/', type: 'note' },
      { id: 'c1-m2', title: 'Ch-1 Meaning (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223933045063400/', type: 'note' },
      { id: 'c1-m3', title: 'Ch-1 Meaning (part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223936418396396/', type: 'note' },
      { id: 'c1-g1', title: 'Ch-1 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223946975062007/', type: 'note' },
      { id: 'c1-g2', title: 'Ch-1 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223950425061662/', type: 'note' },
      { id: 'c1-ra', title: 'Ch-1 Renshuu A', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223953328394705/', type: 'practice' },
      { id: 'c1-cnt1', title: '1-10 ရေတွက်ခြင်း (Counting 1-10)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223939188396119/', type: 'counting' },
      { id: 'c1-cnt2', title: '1-99 ရေတွက်ခြင်း (Counting 1-99)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223942101729161/', type: 'counting' },
      { id: 'c1-cnt3', title: 'အသက်ရေတွက်ခြင်း (Age Counting)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223943985062306/', type: 'counting' },
      { id: 'c1-rb', title: 'Ch-1 Renshuu B', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223957058394332/', type: 'practice' },
      { id: 'c1-kw', title: 'Ch-1 Kaiwa (Conversation)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223907725065932/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 2,
    title: 'Chapter 2: Demonstratives (Kore, Sore, Are)',
    items: [
      { id: 'c2-m1', title: 'Ch-2 Meaning (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224739361649435/', type: 'note' },
      { id: 'c2-m2', title: 'Ch-2 Meaning (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224742338315804/', type: 'note' },
      { id: 'c2-g1', title: 'Ch-2 Grammar Note (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224746808315357/', type: 'note' },
      { id: 'c2-g2', title: 'Ch-2 Grammar Note (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224749391648432/', type: 'note' },
      { id: 'c2-rb', title: 'Ch-2 Renshuu B', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224770021646369/', type: 'practice' },
      { id: 'c2-kw', title: 'Ch-2 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223908078399230/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 3,
    title: 'Chapter 3: Places, Money & Pricing',
    items: [
      { id: 'c3-m1', title: 'Ch-3 Meaning (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224773614979343/', type: 'note' },
      { id: 'c3-m2', title: 'Ch-3 Meaning (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224776234979081/', type: 'note' },
      { id: 'c3-mny1', title: 'Money Counting 1 (100)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224795534977151/', type: 'counting' },
      { id: 'c3-mny2', title: 'Money Counting 2 (1,000 & 10,000)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224797908310247/', type: 'counting' },
      { id: 'c3-mny3', title: 'Money Counting 3 (100,000)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224801531643218/', type: 'counting' },
      { id: 'c3-mny4', title: 'Money Counting 4 (1,000,000)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224805331642838/', type: 'counting' },
      { id: 'c3-g1', title: 'Ch-3 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224780444978660/', type: 'note' },
      { id: 'c3-g2', title: 'Ch-3 Grammar Note (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224784291644942/', type: 'note' },
      { id: 'c3-g3', title: 'Ch-3 Grammar Note (Part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224788358311202/', type: 'note' },
      { id: 'c3-g4', title: 'Ch-3 Grammar Note (Final) + Renshuu B', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224793818310656/', type: 'practice' },
      { id: 'c3-kw', title: 'Ch-3 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223908241732547/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 4,
    title: 'Chapter 4: Time, Daily Routines & Verbs',
    items: [
      { id: 'c4-m1', title: 'Ch-4 Meaning (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224808724975832/', type: 'note' },
      { id: 'c4-m2', title: 'Ch-4 Meaning (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224810291642342/', type: 'note' },
      { id: 'c4-m3', title: 'Ch-4 Meaning (Part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224812864975418/', type: 'note' },
      { id: 'c4-g1', title: 'Ch-4 Grammar Note (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224816061641765/', type: 'note' },
      { id: 'c4-g2', title: 'Ch-4 Grammar Note (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224823358307702/', type: 'note' },
      { id: 'c4-g3', title: 'Ch-4 Grammar Note (Part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224827214973983/', type: 'note' },
      { id: 'c4-time', title: 'Time Counting (နာရီ/မိနစ် ရေတွက်ခြင်း)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224841221639249/', type: 'counting' },
      { id: 'c4-e1', title: 'Ch-4 Grammar Exercise (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224837071639664/', type: 'practice' },
      { id: 'c4-e2', title: 'Ch-4 Grammar Exercise (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224839644972740/', type: 'practice' },
      { id: 'c4-kw', title: 'Ch-4 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223908435065861/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 5,
    title: 'Chapter 5: Direction, Transportation & Travel',
    items: [
      { id: 'c5-m1', title: 'Ch-5 Meaning (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1224846424972062/', type: 'note' },
      { id: 'c5-m2', title: 'Ch-5 Meaning (part 2)', url: 'https://www.facebook.com/share/v/1DJYptM6pH/', type: 'note' },
      { id: 'c5-m3', title: 'Ch-5 Meaning Final', url: 'https://www.facebook.com/share/v/1CmqMZAJyJ/', type: 'note' },
      { id: 'c5-g1', title: 'Ch-5 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225455261577845/', type: 'note' },
      { id: 'c5-g2', title: 'Ch-5 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225907284865976/', type: 'note' },
      { id: 'c5-e1', title: 'Ch-5 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225911944865510/', type: 'practice' },
      { id: 'c5-e2', title: 'Ch-5 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225915851531786/', type: 'practice' },
      { id: 'c5-kw', title: 'Ch-5 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223908695065835/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 6,
    title: 'Chapter 6: Transitive Verbs (wo / de particle)',
    items: [
      { id: 'c6-m1', title: 'Ch-6 Meaning (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225920804864624/', type: 'note' },
      { id: 'c6-m2', title: 'Ch-6 Meaning (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225925628197475/', type: 'note' },
      { id: 'c6-m3', title: 'Ch-6 Meaning Final', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225941011529270/', type: 'note' },
      { id: 'c6-g1', title: 'Ch-6 Grammar Note (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225949571528414/', type: 'note' },
      { id: 'c6-g2', title: 'Ch-6 Grammar Note (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225958798194158/', type: 'note' },
      { id: 'c6-g3', title: 'Ch-6 Grammar Note (part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225961178193920/', type: 'note' },
      { id: 'c6-e1', title: 'Ch-6 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225964164860288/', type: 'practice' },
      { id: 'c6-e2', title: 'Ch-6 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1225966008193437/', type: 'practice' },
      { id: 'c6-kw', title: 'Ch-6 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223908911732480/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 7,
    title: 'Chapter 7: Instruments, Giving & Receiving',
    items: [
      { id: 'c7-m1', title: 'Ch-7 Meaning (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226014921521879/', type: 'note' },
      { id: 'c7-m2', title: 'Ch-7 Meaning (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226017508188287/', type: 'note' },
      { id: 'c7-g1', title: 'Ch-7 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226029414853763/', type: 'note' },
      { id: 'c7-g2', title: 'Ch-7 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226033854853319/', type: 'note' },
      { id: 'c7-g3', title: 'Ch-7 Grammar Note (part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226037344852970/', type: 'note' },
      { id: 'c7-e1', title: 'Ch-7 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226041188185919/', type: 'practice' },
      { id: 'c7-e2', title: 'Ch-7 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226045158185522/', type: 'practice' },
      { id: 'c7-kw', title: 'Ch-7 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226060801517291/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 8,
    title: 'Chapter 8: Adjectives (i-adjectives & na-adjectives)',
    items: [
      { id: 'c8-m1', title: 'Ch-8 Meaning (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226066614850043/', type: 'note' },
      { id: 'c8-m2', title: 'Ch-8 Meaning (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226085288181509/', type: 'note' },
      { id: 'c8-g1', title: 'Ch-8 Grammar Note', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226093034847401/', type: 'note' },
      { id: 'c8-e1', title: 'Ch-8 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226098594846845/', type: 'practice' },
      { id: 'c8-e2', title: 'Ch-8 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226103294846375/', type: 'practice' },
      { id: 'c8-kw', title: 'Ch-8 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226103981512973/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 9,
    title: 'Chapter 9: Likes, Skills, Reasons (suki, wakaru, kara)',
    items: [
      { id: 'c9-m1', title: 'Ch-9 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226076928182345/', type: 'note' },
      { id: 'c9-g1', title: 'Ch-9 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226576614799043/', type: 'note' },
      { id: 'c9-g2', title: 'Ch-9 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226580248132013/', type: 'note' },
      { id: 'c9-g3', title: 'Ch-9 Grammar Note (part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1231794284277276/', type: 'note' },
      { id: 'c9-e1', title: 'Ch-9 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226586271464744/', type: 'practice' },
      { id: 'c9-e2', title: 'Ch-9 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226589178131120/', type: 'practice' },
      { id: 'c9-kw', title: 'Ch-9 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223911178398920/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 10,
    title: 'Chapter 10: Existence (imasu, arimasu & location)',
    items: [
      { id: 'c10-m1', title: 'Ch-10 Meaning (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226123948177643/', type: 'note' },
      { id: 'c10-m2', title: 'Ch-10 Meaning (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226128528177185/', type: 'note' },
      { id: 'c10-g1', title: 'Ch-10 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226132771510094/', type: 'note' },
      { id: 'c10-g2', title: 'Ch-10 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226135588176479/', type: 'note' },
      { id: 'c10-e1', title: 'Ch-10 Grammar Exercise', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226148498175188/', type: 'practice' },
      { id: 'c10-kw', title: 'Ch-10 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226471014809603/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 11,
    title: 'Chapter 11: Counters, Quantifiers & Frequency',
    items: [
      { id: 'c11-m1', title: 'Ch-11 Meaning (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226485104808194/', type: 'note' },
      { id: 'c11-m2', title: 'Ch-11 Meaning (Part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226497704806934/', type: 'note' },
      { id: 'c11-m3', title: 'Ch-11 Meaning (Part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226511314805573/', type: 'note' },
      { id: 'c11-g1', title: 'Ch-11 Grammar Note (Part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226513481472023/', type: 'note' },
      { id: 'c11-g2', title: 'Ch-11 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226517984804906/', type: 'note' },
      { id: 'c11-e1', title: 'Ch-11 Grammar Exercise', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226523654804339/', type: 'practice' },
      { id: 'c11-kw', title: 'Ch-11 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226524741470897/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 12,
    title: 'Chapter 12: Past Tense & Comparisons',
    items: [
      { id: 'c12-m1', title: 'Ch-12 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226550451468326/', type: 'note' },
      { id: 'c12-g1', title: 'Ch-12 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226559964800708/', type: 'note' },
      { id: 'c12-g2', title: 'Ch-12 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226568671466504/', type: 'note' },
      { id: 'c12-e1', title: 'Ch-12 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226571254799579/', type: 'practice' },
      { id: 'c12-e2', title: 'Ch-12 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226599068130131/', type: 'practice' },
      { id: 'c12-ra', title: 'Ch-12 Renshuu A', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1231802474276457/', type: 'practice' },
      { id: 'c12-kw', title: 'Ch-12 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226599481463423/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 13,
    title: 'Chapter 13: Desires & Expressing Wants (hoshii / -tai)',
    items: [
      { id: 'c13-m1', title: 'Ch-13 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226603501463021/', type: 'note' },
      { id: 'c13-g1', title: 'Ch-13 Grammar Note', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226607584795946/', type: 'note' },
      { id: 'c13-e1', title: 'Ch-13 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226610508128987/', type: 'practice' },
      { id: 'c13-e2', title: 'Ch-13 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226616771461694/', type: 'practice' },
      { id: 'c13-kw', title: 'Ch-13 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226644718125566/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 14,
    title: 'Chapter 14: Verb Te-Form & Polite Requests (-te kudasai)',
    items: [
      { id: 'c14-m1', title: 'Ch-14 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226675051455866/', type: 'note' },
      { id: 'c14-g1', title: 'Ch-14 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226679968122041/', type: 'note' },
      { id: 'c14-g2', title: 'Ch-14 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1231814154275289/', type: 'note' },
      { id: 'c14-g3', title: 'Ch-14 Grammar Note (part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226690574787647/', type: 'note' },
      { id: 'c14-g4', title: 'Ch-14 Grammar Note (part 4)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226725578117480/', type: 'note' },
      { id: 'c14-g5', title: 'Ch-14 Grammar Note (part 5)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226733498116688/', type: 'note' },
      { id: 'c14-ra', title: 'Ch-14 Renshuu A', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226746618115376/', type: 'practice' },
      { id: 'c14-rb', title: 'Ch-14 Renshuu B', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226765444780160/', type: 'practice' },
      { id: 'c14-kw', title: 'Ch-14 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226766794780025/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 15,
    title: 'Chapter 15: Continuous Action & Permission (-te mo ii)',
    items: [
      { id: 'c15-m1', title: 'Ch-15 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226771184779586/', type: 'note' },
      { id: 'c15-g1', title: 'Ch-15 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226789418111096/', type: 'note' },
      { id: 'c15-g2', title: 'Ch-15 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226802094776495/', type: 'note' },
      { id: 'c15-e1', title: 'Ch-15 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226813611442010/', type: 'practice' },
      { id: 'c15-e2', title: 'Ch-15 Grammar Exercise (part 2)', url: 'https://www.facebook.com/share/v/1BQMrcwJVJ/', type: 'practice' },
      { id: 'c15-kw', title: 'Ch-15 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1226846324772072/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 16,
    title: 'Chapter 16: Connecting Sentences & Sequence of Actions',
    items: [
      { id: 'c16-m1', title: 'Ch-16 Meaning (part 1)', url: 'https://www.facebook.com/share/v/1JEkqaPMm9/', type: 'note' },
      { id: 'c16-m2', title: 'Ch-16 Meaning (part 2)', url: 'https://www.facebook.com/share/v/1McWc7vWq2/', type: 'note' },
      { id: 'c16-g1', title: 'Ch-16 Grammar Note', url: 'https://www.facebook.com/share/v/1EJmAYdvRG/', type: 'note' },
      { id: 'c16-e1', title: 'Ch-16 Grammar Exercise (part 1)', url: 'https://www.facebook.com/share/v/17erQdKTjo/', type: 'practice' },
      { id: 'c16-e2', title: 'Ch-16 Grammar Exercise (part 2)', url: 'https://www.facebook.com/share/v/18dUdugpRg/', type: 'practice' },
      { id: 'c16-kw', title: 'Ch-16 Kaiwa', url: 'https://www.facebook.com/share/v/1CajNAYvkY/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 17,
    title: 'Chapter 17: Verb Nai-Form & Prohibition (-nai de kudasai)',
    items: [
      { id: 'c17-m1', title: 'Ch-17 Meaning', url: 'https://www.facebook.com/share/v/1BVxfvze5d/', type: 'note' },
      { id: 'c17-g1', title: 'Ch-17 Grammar Note (Part 1)', url: 'https://www.facebook.com/share/v/1GJsr6B6Lq/', type: 'note' },
      { id: 'c17-g2', title: 'Ch-17 Grammar Note (part 2)', url: 'https://www.facebook.com/share/v/1Bn8at9cDm/', type: 'note' },
      { id: 'c17-e1', title: 'Ch-17 Grammar Exercise (Part 1)', url: 'https://www.facebook.com/share/v/1BW7pMVjo2/', type: 'practice' },
      { id: 'c17-e2', title: 'Ch-17 Grammar Exercise (part 2)', url: 'https://www.facebook.com/share/v/18qimh7dJB/', type: 'practice' },
      { id: 'c17-kw', title: 'Ch-17 Kaiwa', url: 'https://www.facebook.com/share/v/1Rk7EVR79Y/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 18,
    title: 'Chapter 18: Dictionary Form & Ability (-koto ga dekiru)',
    items: [
      { id: 'c18-m1', title: 'Ch-18 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227263488063689/', type: 'note' },
      { id: 'c18-g1', title: 'Ch-18 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227275734729131/', type: 'note' },
      { id: 'c18-g2', title: 'Ch-18 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227286458061392/', type: 'note' },
      { id: 'c18-g3', title: 'Ch-18 Grammar Note (part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227378924718812/', type: 'note' },
      { id: 'c18-e1', title: 'Ch-18 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227383008051737/', type: 'practice' },
      { id: 'c18-e2', title: 'Ch-18 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227384644718240/', type: 'practice' },
      { id: 'c18-kw', title: 'Ch-18 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227385251384846/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 19,
    title: 'Chapter 19: Ta-Form & Past Experiences (-ta koto ga aru)',
    items: [
      { id: 'c19-m1', title: 'Ch-19 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227390294717675/', type: 'note' },
      { id: 'c19-g1', title: 'Ch-19 Grammar Note', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227401438049894/', type: 'note' },
      { id: 'c19-e1', title: 'Ch-19 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227411081382263/', type: 'practice' },
      { id: 'c19-e2', title: 'Ch-19 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227420408047997/', type: 'practice' },
      { id: 'c19-kw', title: 'Ch-19 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227423794714325/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 20,
    title: 'Chapter 20: Plain Style vs Polite Style',
    items: [
      { id: 'c20-m1', title: 'Ch-20 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227431841380187/', type: 'note' },
      { id: 'c20-g1', title: 'Ch-20 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227448824711822/', type: 'note' },
      { id: 'c20-g2', title: 'Ch-20 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227452851378086/', type: 'note' },
      { id: 'c20-ra', title: 'Ch-20 Renshuu A', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1231827537607284/', type: 'practice' },
      { id: 'c20-e1', title: 'Ch 20 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227458188044219/', type: 'practice' },
      { id: 'c20-e2', title: 'Ch-20 Grammar Exercise (part 2)', url: 'https://www.facebook.com/groups/1221225785334126/permalink/1231875120935859/', type: 'practice' },
      { id: 'c20-e3', title: 'Ch-20 Grammar Exercise (part 3)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227460784710626/', type: 'practice' },
      { id: 'c20-ef', title: 'Ch-20 Grammar Exercise Final', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227462481377123/', type: 'practice' },
      { id: 'c20-kw', title: 'Ch-20 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227462934710411/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 21,
    title: 'Chapter 21: Quotation & Thoughts (-to omou / -to iu)',
    items: [
      { id: 'c21-m1', title: 'Ch-21 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227467641376607/', type: 'note' },
      { id: 'c21-g1', title: 'Ch-21 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227475411375830/', type: 'note' },
      { id: 'c21-g2', title: 'Ch-21 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1231831250940246/', type: 'note' },
      { id: 'c21-e1', title: 'Ch-21 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1231842514272453/', type: 'practice' },
      { id: 'c21-e2', title: 'Ch-21 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227506888039349/', type: 'practice' },
      { id: 'c21-kw', title: 'Ch-21 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227508201372551/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 22,
    title: 'Chapter 22: Noun Modification with Clause',
    items: [
      { id: 'c22-m1', title: 'Ch-22 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227535744703130/', type: 'note' },
      { id: 'c22-g1', title: 'Ch-22 Grammar Note', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227538454702859/', type: 'note' },
      { id: 'c22-e1', title: 'Ch-22 Grammar Exercise', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227542418035796/', type: 'practice' },
      { id: 'c22-kw', title: 'Ch-22 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223915541731817/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 23,
    title: 'Chapter 23: Time Condition (-toki) & Natural Consequence (-to)',
    items: [
      { id: 'c23-m1', title: 'Ch-23 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227553474701357/', type: 'note' },
      { id: 'c23-g1', title: 'Ch-23 Grammar Note (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227561101367261/', type: 'note' },
      { id: 'c23-g2', title: 'Ch-23 Grammar Note (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227568221366549/', type: 'note' },
      { id: 'c23-e1', title: 'Ch-23 Grammar Exercise (part 1)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227572598032778/', type: 'practice' },
      { id: 'c23-e2', title: 'Ch-23 Grammar Exercise (part 2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227579088032129/', type: 'practice' },
      { id: 'c23-kw', title: 'Ch-23 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227579641365407/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 24,
    title: 'Chapter 24: Giving & Receiving Actions (kuremasu / agemasu / moraimasu)',
    items: [
      { id: 'c24-m1', title: 'Ch-24 + Ch-25 Meaning', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227583704698334/', type: 'note' },
      { id: 'c24-g1', title: 'Ch-24 Grammar Note', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227590551364316/', type: 'note' },
      { id: 'c24-e1', title: 'Ch-24 Grammar Exercise', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227639144692790/', type: 'practice' },
      { id: 'c24-kw', title: 'Ch-24 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227664808023557/', type: 'kaiwa' }
    ]
  },
  {
    chapter: 25,
    title: 'Chapter 25: Conditionals (-tara / -demo)',
    items: [
      { id: 'c25-g1', title: 'Ch-25 Grammar Note', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227626531360718/', type: 'note' },
      { id: 'c25-e1', title: 'Ch-25 Grammar Exercise', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227663884690316/', type: 'practice' },
      { id: 'c25-kw', title: 'Ch-25 Kaiwa', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1227665631356808/', type: 'kaiwa' }
    ]
  }
];

export const kanjiLessons: ResourceLink[] = [
  { id: 'kj-d1', title: 'N5 Kanji Day 1', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223916291731742/', type: 'note' },
  { id: 'kj-d2', title: 'N5 Kanji Day 2', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223916465065058/', type: 'note' },
  { id: 'kj-d3', title: 'N5 Kanji Day 3', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223916948398343/', type: 'note' },
  { id: 'kj-d4', title: 'N5 Kanji Day 4', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223917158398322/', type: 'note' },
  { id: 'kj-d5', title: 'N5 Kanji Day 5', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223917378398300/', type: 'note' },
  { id: 'kj-d6', title: 'N5 Kanji Day 6', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223917595064945/', type: 'note' },
  { id: 'kj-d7', title: 'N5 Kanji Day 7', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223917991731572/', type: 'note' },
  { id: 'kj-c12', title: 'N5 Kanji Ch.(1+2)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223918251731546/', type: 'note' },
  { id: 'kj-c34', title: 'N5 Kanji Ch.(3+4)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223918468398191/', type: 'note' },
  { id: 'kj-c56', title: 'N5 Kanji Ch.(5+6)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223918651731506/', type: 'note' },
  { id: 'kj-c78', title: 'N5 Kanji Ch.(7+8)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223918821731489/', type: 'note' },
  { id: 'kj-c911', title: 'N5 Kanji Ch.(9+10+11)', url: 'https://m.facebook.com/groups/1221225785334126/permalink/1223918971731474/', type: 'note' }
];

export interface MockExamPair {
  id: string;
  name: string;
  examUrl: string;
  ansKeyUrl: string;
}

export const mockExams: MockExamPair[] = [
  {
    id: 'exam-1',
    name: '1st Time JLPT N5 Mock Exam',
    examUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231556497634388/',
    ansKeyUrl: 'https://m.facebook.com/groups/1221225785334126/permalink/1231556940967677/'
  },
  {
    id: 'exam-2',
    name: '2nd Time JLPT N5 Mock Exam',
    examUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231558407634197/',
    ansKeyUrl: 'https://m.facebook.com/groups/1221225785334126/permalink/1231559254300779/'
  },
  {
    id: 'exam-3',
    name: '3rd Time JLPT N5 Mock Exam',
    examUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231560080967363/',
    ansKeyUrl: 'https://m.facebook.com/groups/1221225785334126/permalink/1231561020967269/'
  },
  {
    id: 'exam-4',
    name: '4th Time JLPT N5 Mock Exam',
    examUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231566237633414/',
    ansKeyUrl: 'https://m.facebook.com/groups/1221225785334126/permalink/1231567000966671/'
  },
  {
    id: 'exam-5',
    name: '5th Time JLPT N5 Mock Exam',
    examUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231570227633015/',
    ansKeyUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231571114299593/'
  },
  {
    id: 'exam-6',
    name: '6th Time JLPT N5 Mock Exam',
    examUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231579800965391/',
    ansKeyUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231580144298690/'
  },
  {
    id: 'exam-7',
    name: '7th Time JLPT N5 Mock Exam',
    examUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231580610965310/',
    ansKeyUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231581327631905/'
  },
  {
    id: 'exam-8',
    name: '8th Time JLPT N5 Mock Exam',
    examUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231582114298493/',
    ansKeyUrl: 'https://www.facebook.com/groups/1221225785334126/permalink/1231584340964937/'
  }
];

export const practiceGroups: ResourceLink[] = [
  { id: 'gp-mondai', title: 'N5 Mondai Practice Group', url: 'https://www.facebook.com/groups/879060402798191/?ref=share_group_link', type: 'group' },
  { id: 'gp-readlist', title: 'N5 Reading & Listening Group', url: 'https://www.facebook.com/groups/353254159036261/?ref=share_group_link', type: 'group' },
  { id: 'gp-exampractice', title: 'N5 Exam Practice Group', url: 'https://www.facebook.com/groups/555778329285488/?ref=share_group_link', type: 'group' },
  { id: 'gp-oldquest', title: 'N5 JLPT Old Question Bank Group', url: 'https://www.facebook.com/share/g/13t9Dq7VsH/', type: 'group' }
];

export const totalItemCount = basicVideos.length + basicPracticeAndTests.length + minnaChapters.reduce((acc, c) => acc + c.items.length, 0) + kanjiLessons.length + mockExams.length * 2 + practiceGroups.length;
