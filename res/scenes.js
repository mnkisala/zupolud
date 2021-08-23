/*
@echo off
:start
cls
echo Jestes sobie Enifacy.
echo Twojom pasjom jest szukanie
echo mitycznych stworzen, a wiec
echo gdy dowiedziales sie o zupoludzie
echo zaraz postanowiles go odszukac.
pause>>nul
*/
const scenes = {
  PRKE: {
    description: `
      Jestes w swojej prywatniej
      rzucacni kokosami, co robisz?
      `,
    choices: [
      {
        description: "Kupujesz czolg",
        destination: "ABKM",
      },
      {
        description: "Rzucasz sie na sciane z pierwotnym krzykiem na ustach",
        destination: "AZDW",
      },
      {
        description: "Modujesz uszy",
        destination: "HUBZ",
      },
      {
        description: "Idziesz do lazienki",
        destination: "LM",
      },
    ]
  },
  AZDW: {
    description: `
      Rzucasz sie na sciane, ale
      zapomniales o pierwotnym
      krzyku, wiec zaprzestajesz
      tej czynnosci
      `,
    choices: [
      {
        description: "Wroc",
        destination: "PRKE",
      },
    ]
  },
  HUBZ: {
    description: `
      Postanawiasz zmodyfikowac
      sobie uszy, ale przypadkiem
      montujesz na sobie nanosuta,
      i wszystcy biorom cie za
      Proroka.
      Co robisz ?
    `,
    choices: [
      {
        description: "Walczysz z Cepidami",
        destination: "WZC",
      },
      {
        description: "Grasz w ganianego z Goudem",
        destination: "GZG",
      },
      {
        description: "Dzwonisz na policje",
        destination: "DNP",
      },
      {
        description: "Kupujesz rower",
        destination: "KR",
      },
    ]
  },
  GZG: {
    description: `
      Ganiasz Gouda, ale
      on tak szybko przenosi
      swoje kryjowki, ze nie
      mozesz nadonzyc, a dobre
      ziomki z CELL tez chcom
      go dogonic, wienc zawieracie
      sojusz, ale nagle spada na
      ciebie Gabe Newell, i
      daje ci kose  za darmo
      co robisz ?
      `,
    choices: [
      {
        description: "Idziesz na zniwa",
        destination: "INZ",
      },
      {
        description: "Probojesz wygrac z Izakiem",
        destination: "PWZI",
      },
      {
        description: "Pijesz herbate",
        destination: "PH",
      },
      {
        description: "Pytasz sie Gejba kiedy Half-Life 3",
        destination: "POHL",
      },
    ]
  },
  POHL: {
    description: `
      Chcesz spytac sie Gejba o
      Half - Life 3, ale ten ucieka
      do stanow pozrywac bananow,
        i nie wiesz co ze sobom zrobic.
      Nagle stwierdzasz ze chcesz byc
      nekromantom, wienc zostajesz
      nekromantom 3 poziomu, ale
      to nie wypelnilo pustki, co
      robisz ?
      `,
    choices: [
      { description: "Podlewasz buawatki", destination: "PBUA" },
      { description: "Krzyczysz", destination: "KRZY" },
      { description: "Udajesz makaron", destination: "UMAK" },
      { description: "Prostujesz banany", destination: "PBAN" },
    ]
  },
  KRZY: {
    description: `
  FUS RO DAH!!!!!!!!!!
  Nagle okazujesz sie
  smoczym dziecienciem
  i zaczynasz bawic sie
  w krzyczenie
  WOOOOOL NACZOS!!!!!!!
  PATELNIA!!!!!!!!
  JOL KAZUL!!!!!!!!!!
  ale nagle zdarles sobie
  gardlo, i juz nie mozesz
  krzyczec, wienc musisz pojsc
  do apteki, po jakis lek
  na gardlo
  `,
    choices: [
      { decription: "Do apteki", destination: "IDAP" },
    ]
  },
  IDAP: {
    description: `
Wchodzisz do apteki,
  ale majom tam tylko
srakolin  turbo forte
  `,
    choices: [
      { decription: "Kupujesz", destination: "KSTF" },
      { decription: "Nie kupujesz", destination: "ANK" },
    ]
  },
  KSTF: {
    description: `
Kupiles srakolin turbo forte
co teraz ?
  `,
    choices: [
      { decription: "Bierzesz doustnie", destination: "BDSTF" },
      { decription: "Wpychasz sobie pudelko w...pache", destination: "WPPP" },
      { decription: "Czytasz instrukcje obslugi", destination: "CIOS" },
      { decription: "Bijesz sie pudelkiem w gardlo", destination: "BSPWG" },
    ]
  },
  WPPP: {
    description: `
Wpychasz sobie srakolin ale
nic sie nie dzieje, az nagle
objawia ci sie zadkie nicowe
pepe, i mowi ci ze nic sie nie
stanie, ciebie to nie obchodzi
wienc wyciongasz srakolin z
pachy
  `,
    choices: [
      { decription: "Tutaj gra powinna sie wywalic ale tego nie zrobi po prostu", destination: "[Tu doslownie nic nie ma, nie bylo napisane w tym 2015]" },
    ]
  },
  BDSTF: {
    description: `
Bierzesz doustnie srakolin
  , ale teraz masz srakie i
biegniesz do klopa
Szukasz klopa juz 4 dni, az
nagle widzisz polanke
  `,
    choices: [
      { decription: "Idziesz na polanke", destination: "END" },
    ]
  },
  PBUA: {
    description: `
Podlewasz buawatki, ale nie umiesz
podlewac buawatkow, wienc podlewasz
zlotom rybke, na co ta odpowiada:
- CO TY CHCESZ MNIE UTOPIC ? !
  ty masz co do tej sprawy mieszane
uczucia, i stwierdzasz ze nie
powiniennes tego robic, wienc
wracasz do pytania sie Gejba
o Half - Life'a
  `,
    choices: [
      { decription: "Wracasz do Gejba", destination: "POHL" },
    ]
  },
  PH: {
    description: `
Pijesz spokojnie herbatke
ale jakis galgan puszcza
jakoms popeline na 900 dBM,
  w ten sposob oglusza wszystko
w promieniu 200km, w tym
ciebie, wienc musisz zmodowac
sobie uszy
    `,
    choices: [
      { decription: "Modujesz uszy", destination: "HUBZ" },
    ]
  },
  PWZI: {
    description: `
Probojesz wygrac z Izakiem,
  i wygrales, w ten sposub
oszukales system i masz
dostemp do DEVMODE'A
  `,
    choices: [
      { decription: "DEVMODE", destination: `[orignalny tag dla 'devmoda' to 'devc', ale jeszcze nie wiem jak to ma dzialac tutaj` },
    ]
  },
  WZC: {
    description: `
Probojesz walczyc z Cepidami
ale spotykasz rycerzy ktorzy
mowiom ni, i kazom ci kupic
niedrogi zywoplot, albo...NI!
Ty naturalnie decydujesz sie
kupic zywoplot
  `,
    choices: [
      { decription: "Dokonujesz kupna zywoplotu", destination: "KZ" },
    ]
  },
  KZ: {
    description: `
  `,
    choices: [
      { decription: "", destination: "" },
      { decription: "", destination: "" },
    ]
  },
  KZ: {
    description: `
Idziesz kupic niedrogi
zywoplot do tajemniczego
maga, ktory nie wie
jakom sile majom jaskolki
europejskie, a jakom
afrykanskie, ale
kieruje cie do miejscowego
sprzedawcy zywoplotow.
  `,
    choices: [
      { decription: "...", destination: "SZ" },
    ]
  },
  SZ: {
    description: `
Sprzedawca zywoplotow
nie chce ci na poczontku
sprzedac zywoplotu,
  co robisz ?
  `,
    choices: [
      { decription: "Wyzywasz go", destination: "WSZ" },
      { decription: "Scinasz drzewa sledziem", destination: "SDS" },
      { decription: "Kupujesz zywoplot", destination: "KZY" },
      { decription: "Straszysz go", destination: "SSZ" },
    ]
  },
  WSZ: {
    description: `
  - TY MARTWA PAPUGO! - wyzywasz skurzybyka - TY WENGORZU!
Ale to nawet nie rusza sprzedawcy, ktory stwierdza
ze jestes uzytkownikiem Windowsa Visty
  `,
    choices: [
      { decription: "...", destination: "SZ" },
    ]
  },
  SDS: {
    description: `
Stwierdzasz ze nie umiesz
scinac drzew sledziem
  `,
    choices: [
      { decription: "...", destination: "SZ" },
    ]
  },
  KZY: {
    description: `
Kupujesz niedrogo zywoplot
  , wracasz do rycerzy ktorzy
 mowiom ni
  `,
    choices: [
      { decription: "...", destination: "RKMN" },
    ]
  },
  SSZ: {
    description: `
Probojesz go zastraszyc,
  opowiadajonc mu opowiesci
o duchach, ale on jest
za odwazny
  `,
    choices: [
      { decription: "...", destination: "SZ" },
    ]
  },
  RKMN: {
    description: `
Wracasz do rycerzy
ktorzy mowiom ni,
  a ci idom gdzies,
    zadowoleni z nowego
zywoplotu.Nagle
potykasz sie o
kwantowom cegle
ktora cofa cie
w czasie
  `,
    choices: [
      { decription: "...", destination: "HUBZ" },
    ]
  },
  ABKM: {
    description: `
Probojesz kupic czolg w jedynym,
  znanym ci sklepie - Biedronce, ale
przypadkiem zostales zaatakowany przez
bezmuzgich kupownikuw masla, a jeden
z nich, twierdzi ze masz skarpetki
w maselniczce.
Co robisz ?

  `,
    choices: [
      { description: "Uciekasz do Czech", destination: "UDCZ" },
      { description: "W ramach protestu tanczysz dubstep", destination: "PTDU" },
      { description: "Opowiadasz dowcip", destination: "OCDO" },
      { description: "Wracasz do domu", destination: "PRKE" },
    ]
  },
  PTDU: {
    description: `
Probojesz tanczyc dubstep, ale
nie umiesz tanczy, wienc nie tanczysz i
wracasz do rzucalni kokosami
  `,
    choices: [
      { decription: "...", destination: "PRKE" },
    ]
  },
  TAG: {
    description: `
  `,
    choices: [
      { decription: "", destination: "" },
      { decription: "", destination: "" },
    ]
  },
  OCDO: {
    description: `
  - Jasiu poszedl do sklepu
i wrocil do domku.
nastempnego dnia poszedl
do sklepu i wrocil do
  domku.nastempnego dni....
Bezmuzdzy kupownicy sie
nie zasmiali ani troche
tylko poszli do Grecji
z zazenowania.
  `,
    choices: [
      { decription: "...", destination: "PRKE" },
    ]
  },
  UDCZ: {
    description: `
Uciekasz do Czech, ale jestes
tak slaby z geografii, ze przypadkiem
uciekasz do Albanii.
Tam spotykasz Popka, a ten
proponuje ci troche kredek
za korzystnom cene.
  - Najlepsze bambino za 3 zlote! - mowi.
  `,
    choices: [
      { description: "Kupujesz", destination: "AK" },
      { description: "Nie kupujesz", destination: "ANK" }
    ]
  },


  ANK: {
    description: `
Brawo! Wlasnie oszukales system
wienc masz tu dostemp do DEVMOD'A!
  `,
    choices: [
      { decription: "DEVMODE", destination: `[orignalny tag dla 'devmoda' to 'devc', ale jeszcze nie wiem jak to ma dzialac tutaj` },
    ]
  },
  UDCZ: {
    description: `
Uciekasz do Czech, ale jestes
tak slaby z geografii, ze przypadkiem
uciekasz do Albanii.
Tam spotykasz Popka, a ten
proponuje ci troche kredek
za korzystnom cene.
  - Najlepsze bambino za 3 zlote! - mowi.
  `,
    choices: [
      { description: "Kupujesz", destination: "AK" },
      { description: "Nie kupujesz", destination: "ANK" }
    ]
  },
  ANK: {
    description: `
Brawo! Wlasnie oszukales system
wienc masz tu dostemp do DEVMOD'A!
  `,
    choices: [
      { decription: "DEVMODE", destination: `[orignalny tag dla 'devmoda' to 'devc', ale jeszcze nie wiem jak to ma dzialac tutaj` },
    ]
  },
  AK: {
    description: `
A wienc kupujesz! Teraz
masz paczke najlepszych
bambino! Mozesz zrobic z nimi
to co ci sie podoba...

  `,
    choices: [
      { description: "Rysujesz", destination: "AKBR" },
      { description: "Bijesz nimi Popka", destination: "AKBBP" },
      { description: "Slodzisz nimi herbate", destination: "AKBSH" },
      { description: "Grasz o nie z Popkiem w karty", destination: "AKBWK" },
    ]
  },
  AKBR: {
    description: `
Nagle przypominasz sobie ze
nie umiesz rysowac, wienc
idziesz odszukac mistycznom
kretke, ona cie nauczy...
...
Po kilku miesioncach przypominasz
sobie ze nie umiesz szukac mistycznych
kredek, wienc wracasz do prywatnej
rzucalni kokosami
  `,
    choices: [
      { description: "...", destination: "PRKE" },
    ]
  },
  AKBBP: {
    description: `
Bijesz kretkami Popka, ale
ten wyjmuje maczete i tnie
ci wlosy, teraz masz tak slabom
fryzure, ze ze wstydu idziesz do
  lazienki
  `,
    choices: [
      { description: "...", destination: "LM" },
    ]
  },
  AKBSH: {
    description: `
Probojesz slodzic swoimi kredkami
herbate, ale nagle przypominasz sobie ze
nie masz herbaty, wywolany w ten sposob
paradoks czasoprzestrzenny cofa cie w czasie
  `,
    choices: [
      { description: "...", destination: "UDCZ" },
    ]
  },
  AKBWK: {
    description: `
Grasz o nie z Popkiem w karty
ale nie macie kart, wienc
Popek myje sobie godzine liczy
bo mieszka, w dziczy bez zegarka,
  chyba ze to jest latark....
I Popek zmienia sie w Gargamela,
  - Jak ja nie cierpie smerfuf! - mowi i idzie
na nie polowac.
Ty zazenowany idziesz za nim
  `,
    choices: [
      { description: "...", destination: "GRPNS" },
    ]
  },
  GRPNS: {
    description: `
Gargamel juz szykuje pulapke na smerfy,
  a ty co robisz ?
  `,
    choices: [
      { description: "Czekasz az Gargamel zrobi pulapke", destination: "CNG" },
      { description: "Szukasz wioski smerfuf", destination: "SWS" },
      { description: "Budujesz klatke z ktorej smerfy nie majo szans wyjsc", destination: "BKNS" },
      { description: "Dissujesz Saurona z Mordoru", destination: "DS" },
    ]
  },
  DS: {
    description: `
Probojesz dissowac Saurona, ale
ten przybywa i bije cie w plecy
...
Postanawiasz kupic nic nie
robic wienc zadajesz Sauronowi
zagadki, ale ten nie wie co
odpowiedziec i dostaje
laga muzgu.
Ty korzystajonc z sytuacji wracasz do
  Gargamela.
  `,
    choices: [
      { description: "...", destination: "GRPNS" },
    ]
  },
  CNG: {
    description: `
Gargamel juz zastawil pulapke,
  i wlasnie testuje jej dzialanie
ale Klakier postanawia zostac
inkwizytorem, i zeby sprawdzic
czy Gargamel jest czysty wazy
go aby sprawdzic czy wazy
tyle co kaczka.
Ty oczywiscie cofasz sie
w czasie, zeby Klakier nie
odkryl ze jestes magiem.
  `,
    choices: [
      { description: "...", destination: "GRPNS" },
    ]
  },
  SWS: {
    description: `
Szukasz wioski smerfuf,
  ale spotykasz urzednika,
    ktory pyta Cie o pozwolenie
na szukanie wiosek smerfuf.
Ty niestety nie masz na to
papierow, wienc szybko
uciekasz do Gargamela.
  `,
    choices: [
      { description: "...", destination: "GRPNS" },
    ]
  },
  BKNS: {
    description: `
Budujesz klatke na smerfy
ale nagle zza krzakuf wyskakuje
banda lokci, i bezlitosnie
zgina sie nad efektem twej
pracy, ty uciekasz...
  `,
    choices: [
      { description: "...", destination: "END" },
    ]
  },
  END: {
    description: `
Wybiegasz na polane a tam
widzisz stojoncego
Zupoluda, ten odwraca sie
do ciebie, i nic sobie nie
muwicie.

KONIEC
  `,
    choices: [
    ]
  },
}

export default scenes