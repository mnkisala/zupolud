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
  }
}

/*
: KRZY
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
goto IDAP

: IDAP
Wchodzisz do apteki,
  ale majom tam tylko
srakolin  turbo forte
echo 1) Kupujesz
echo 2) Nie kupujesz
KSTF
ANK

: KSTF
Kupiles srakolin turbo forte
co teraz ?

  Bierzesz doustnie
Wpychasz sobie pudelko w...pache
Czytasz instrukcje obslugi
Bijesz sie pudelkiem w gardlo
BDSTF
WPPP
CIOS
BSPWG

: WPPP
Wpychasz sobie srakolin ale
nic sie nie dzieje, az nagle
objawia ci sie zadkie nicowe
pepe, i mowi ci ze nic sie nie
stanie, ciebie to nie obchodzi
wienc wyciongasz srakolin z
pachy
goto KSTFb


: BDSTF
Bierzesz doustnie srakolin
  , ale teraz masz srakie i
biegniesz do klopa
Szukasz klopa juz 4 dni, az
nagle widzisz polanke
goto END

: PBUA
Podlewasz buawatki, ale nie umiesz
podlewac buawatkow, wienc podlewasz
zlotom rybke, na co ta odpowiada:
- CO TY CHCESZ MNIE UTOPIC ? !
  ty masz co do tej sprawy mieszane
uczucia, i stwierdzasz ze nie
powiniennes tego robic, wienc
wracasz do pytania sie Gejba
o Half - Life'a
goto POHL

: PH
Pijesz spokojnie herbatke
ale jakis galgan puszcza
jakoms popeline na 900 dBM,
  w ten sposob oglusza wszystko
w promieniu 200km, w tym
ciebie, wienc musisz zmodowac
sobie uszy
goto HUBZ

: PWZI
Probojesz wygrac z Izakiem,
  i wygrales, w ten sposub
oszukales system i masz
dostemp do DEVMODE'A
goto devc

: WZC
Probojesz walczyc z Cepidami
ale spotykasz rycerzy ktorzy
mowiom ni, i kazom ci kupic
niedrogi zywoplot, albo...NI!
Ty naturalnie decydujesz sie
kupic zywoplot
goto KZ

: KZ
Idziesz kupic niedrogi
zywoplot do tajemniczego
maga, ktory nie wie
jakom sile majom jaskolki
europejskie, a jakom
afrykanskie, ale
kieruje cie do miejscowego
sprzedawcy zywoplotow.
goto SZ

: SZ
Sprzedawca zywoplotow
nie chce ci na poczontku
sprzedac zywoplotu,
  co robisz ?

    Wyzywasz go
Scinasz drzewa sledziem
Kupujesz zywoplot
Straszysz go
WSZ
SDS
KZY
SSZ

: WSZ
  - TY MARTWA PAPUGO! - wyzywasz skurzybyka - TY WENGORZU!
Ale to nawet nie rusza sprzedawcy, ktory stwierdza
ze jestes uzytkownikiem Windowsa Visty
goto SZ

: SDS
Stwierdzasz ze nie umiesz
scinac drzew sledziem
goto SZ

: KZY
Kupujesz niedrogo zywoplot
  , wracasz do rycerzy ktorzy
 mowiom ni
goto RKMN

: SSZ
Probojesz go zastraszyc,
  opowiadajonc mu opowiesci
o duchach, ale on jest
za odwazny
goto SZ

: RKMN
Wracasz do rycerzy
ktorzy mowiom ni,
  a ci idom gdzies,
    zadowoleni z nowego
zywoplotu.Nagle
potykasz sie o
kwantowom cegle
ktora cofa cie
w czasie
goto HUBZ

: ABKM
Probojesz kupic czolg w jedynym,
  znanym ci sklepie - Biedronce, ale
przypadkiem zostales zaatakowany przez
bezmuzgich kupownikuw masla, a jeden
z nich, twierdzi ze masz skarpetki
w maselniczce.
Co robisz ?

  Uciekasz do Czech
W ramach protestu tanczysz dubstep
Opowiadasz dowcip
Wracasz do domu
UDCZ
PTDU
OCDO
PRKE

: PTDU
Probojesz tanczyc dubstep, ale
nie umiesz tanczy, wienc nie tanczysz i
wracasz do rzucalni kokosami
goto PRKE

: OCDO
  - Jasiu poszedl do sklepu
i wrocil do domku.
nastempnego dnia poszedl
do sklepu i wrocil do
  domku.nastempnego dni....
Bezmuzdzy kupownicy sie
nie zasmiali ani troche
tylko poszli do Grecji
z zazenowania.
goto PRKE


: UDCZ
Uciekasz do Czech, ale jestes
tak slaby z geografii, ze przypadkiem
uciekasz do Albanii.
Tam spotykasz Popka, a ten
proponuje ci troche kredek
za korzystnom cene.
  - Najlepsze bambino za 3 zlote! - mowi.

  Kupujesz
Nie kupujesz
AK
ANK

: ANK
Brawo! Wlasnie oszukales system
wienc masz tu dostemp do DEVMOD'A!
goto devc

: AK
A wienc kupujesz! Teraz
masz paczke najlepszych
bambino! Mozesz zrobic z nimi
to co ci sie podoba...

Rysujesz
Bijesz nimi Popka
Slodzisz nimi herbate
Grasz o nie z Popkiem w karty
AKBR
AKBBP
AKBSH
AKBWK

: AKBR
Nagle przypominasz sobie ze
nie umiesz rysowac, wienc
idziesz odszukac mistycznom
kretke, ona cie nauczy...
...
Po kilku miesioncach przypominasz
sobie ze nie umiesz szukac mistycznych
kredek, wienc wracasz do prywatnej
rzucalni kokosami
goto PRKE

: AKBBP
Bijesz kretkami Popka, ale
ten wyjmuje maczete i tnie
ci wlosy, teraz masz tak slabom
fryzure, ze ze wstydu idziesz do
  lazienki
goto LM

: AKBSH
Probojesz slodzic swoimi kredkami
herbate, ale nagle przypominasz sobie ze
nie masz herbaty, wywolany w ten sposob
paradoks czasoprzestrzenny cofa cie w czasie
goto UDCZ

: AKBWK
Grasz o nie z Popkiem w karty
ale nie macie kart, wienc
Popek myje sobie godzine liczy
bo mieszka, w dziczy bez zegarka,
  chyba ze to jest latark....
I Popek zmienia sie w Gargamela,
  - Jak ja nie cierpie smerfuf! - mowi i idzie
na nie polowac.
Ty zazenowany idziesz za nim
got GRPNS

: GRPNS
Gargamel juz szykuje pulapke na smerfy,
  a ty co robisz ?

    Czekasz az Gargamel zrobi pulapke
Szukasz wioski smerfuf
Budujesz klatke z ktorej smerfy nie majo szans wyjsc
Dissujesz Saurona z Mordoru
CNG
SWS
BKNS
DS

: DS
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
goto GRPNS

: CNG
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
goto GRPNS

: SWS
Szukasz wioski smerfuf,
  ale spotykasz urzednika,
    ktory pyta Cie o pozwolenie
na szukanie wiosek smerfuf.
Ty niestety nie masz na to
papierow, wienc szybko
uciekasz do Gargamela.
goto GRPNS

: BKNS
Budujesz klatke na smerfy
ale nagle zza krzakuf wyskakuje
banda lokci, i bezlitosnie
zgina sie nad efektem twej
pracy, ty uciekasz...
goto END

: END
Wybiegasz na polane a tam
widzisz stojoncego
Zupoluda, ten odwraca sie
do ciebie, i nic sobie nie
muwicie.
....KONIEC....
*/

export default scenes