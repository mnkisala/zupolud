@echo off
:start
cls
echo Jestes sobie Enifacy.
echo Twojom pasjom jest szukanie
echo mitycznych stworzen, a wiec
echo gdy dowiedziales sie o zupoludzie
echo zaraz postanowiles go odszukac.
pause>>nul

:PRKE
cls
echo Jestes w swojej prywatniej
echo rzucacni kokosami, co robisz?
echo.
echo 1)Kupujesz czolg
echo 2)Rzucasz sie na sciane z pierwotnym krzykiem na ustach
echo 3)Modujesz uszy
echo 4)Idziesz do lazienki
set/p "z=>"
if %z%==1 goto ABKM
if %z%==2 goto AZDW
if %z%==3 goto HUBZ
if %z%==4 goto LM
if %z%==dev goto devc
goto PRKE

:AZDW
cls
echo Rzucasz sie na sciane, ale
echo zapomniales o pierwotnym 
echo krzyku, wiec zaprzestajesz
echo tej czynnosci
pause>nul
goto PRKE

:HUBZ
cls
echo Postanawiasz zmodyfikowac
echo sobie uszy, ale przypadkiem
echo montujesz na sobie nanosuta,
echo i wszystcy biorom cie za
echo Proroka.
echo Co robisz?
echo.
echo 1)Walczysz z Cepidami
echo 2)Grasz w ganianego z Goudem
echo 3)Dzowonisz na policje
echo 4)Kupujesz rower
set/p "cho=>"
if %cho%==1 goto WZC
if %cho%==2 goto GZG
if %cho%==3 goto DNP
if %cho%==4 goto KR
if %cho%==dev goto devc
goto HUBZ

:GZG
cls
echo Ganiasz Gouda, ale
echo on tak szybko przenosi
echo swoje kryjowki, ze nie
echo mozesz nadonzyc, a dobre
echo ziomki z CELL tez chcom
echo go dogonic, wienc zawieracie
echo sojusz, ale nagle spada na
echo ciebie Gabe Newell, i 
echo daje ci kose  za darmo
echo co robisz?
echo.
echo 1)Idziesz na zniwa
echo 2)Probojesz wygrac z Izakiem
echo 3)Pijesz herbate
echo 4)Pytasz sie Gejba kiedy Half-Life 3
set/p "cho=>"
if %cho%==1 goto INZ
if %cho%==2 goto PWZI
if %cho%==3 goto PH
if %cho%==4 goto POHL
if %cho%==dev goto devc
goto GZG

:POHL
cls
echo Chcesz spytac sie Gejba o
echo Half-Life 3, ale ten ucieka
echo do stanow pozrywac bananow,
echo i nie wiesz co ze sobom zrobic.
echo Nagle stwierdzasz ze chcesz byc 
echo nekromantom, wienc zostajesz 
echo nekromantom 3 poziomu, ale
echo to nie wypelnilo pustki, co
echo robisz?
echo.
echo 1)Podlewasz buawatki
echo 2)Krzyczysz
echo 3)Udajesz makaron
echo 4)Prostujesz banany
set/p "cho=>"
if %cho%==1 goto PBUA
if %cho%==2 goto KRZY
if %cho%==3 goto UMAK
if %cho%==4 goto PBAN
if %cho%==dev goto devc
goto POHL

:KRZY
cls
echo FUS RO DAH!!!!!!!!!!
echo Nagle okazujesz sie 
echo smoczym dziecienciem
echo i zaczynasz bawic sie
echo w krzyczenie
echo WOOOOOL NACZOS!!!!!!!
echo PATELNIA!!!!!!!!
echo JOL KAZUL!!!!!!!!!!
echo ale nagle zdarles sobie
echo gardlo, i juz nie mozesz
echo krzyczec, wienc musisz pojsc
echo do apteki, po jakis lek
echo na gardlo
pause>nul
:IDAP
cls
echo Wchodzisz do apteki,
echo ale majom tam tylko
echo srakolin  turbo forte
echo.
echo 1)Kupujesz
echo 2)Nie kupujesz
set/p "cho=>"
if %cho%==1 goto KSTF
if %cho%==2 goto ANK
if %cho%==dev goto devc
goto IDAP

:KSTF
cls
echo Kupiles srakolin turbo forte
:KSTFb
echo co teraz?
echo.
echo 1)Bierzesz doustnie
echo 2)Wpychasz sobie pudelko w... pache
echo 3)Czytasz instrukcje obslugi
echo 4)Bijesz sie pudelkiem w gardlo
set/p "cho=>"
if %cho%==1 goto BDSTF
if %cho%==2 goto WPPP
if %cho%==3 goto CIOS
if %cho%==4 goto BSPWG
if %cho%==dev goto devc
goto KSTF

:WPPP
cls
echo Wpychasz sobie srakolin ale
echo nic sie nie dzieje, az nagle
echo objawia ci sie zadkie nicowe
echo pepe, i mowi ci ze nic sie nie
echo stanie, ciebie to nie obchodzi
echo wienc wyciongasz srakolin z 
echo pachy
pause>nul
goto KSTFb


:BDSTF
cls
echo Bierzesz doustnie srakolin
echo , ale teraz masz srakie i
echo biegniesz do klopa
pause>nul
cls
echo Szukasz klopa juz 4 dni, az
echo nagle widzisz polanke
pause>nul
goto END

:PBUA
cls
echo Podlewasz buawatki, ale nie umiesz
echo podlewac buawatkow, wienc podlewasz
echo zlotom rybke, na co ta odpowiada:
echo - CO TY CHCESZ MNIE UTOPIC?!
echo ty masz co do tej sprawy mieszane 
echo uczucia, i stwierdzasz ze nie 
echo powiniennes tego robic, wienc
echo wracasz do pytania sie Gejba
echo o Half-Life'a
pause>nul
goto POHL

:PH
echo Pijesz spokojnie herbatke
echo ale jakis galgan puszcza
echo jakoms popeline na 900 dBM,
echo w ten sposob oglusza wszystko 
echo w promieniu 200km, w tym
echo ciebie, wienc musisz zmodowac
echo sobie uszy
pause>nul
goto HUBZ

:PWZI
cls
echo Probojesz wygrac z Izakiem,
echo i wygrales, w ten sposub 
echo oszukales system i masz 
echo dostemp do DEVMODE'A
pause>nul
goto devc

:WZC
cls
echo Probojesz walczyc z Cepidami
echo ale spotykasz rycerzy ktorzy
echo mowiom ni, i kazom ci kupic
echo niedrogi zywoplot, albo... NI!
echo Ty naturalnie decydujesz sie
echo kupic zywoplot
pause>nul
:KZ
cls
echo Idziesz kupic niedrogi 
echo zywoplot do tajemniczego
echo maga, ktory nie wie 
echo jakom sile majom jaskolki
echo europejskie, a jakom
echo afrykanskie, ale 
echo kieruje cie do miejscowego
echo sprzedawcy zywoplotow.
pause>nul
:SZ
cls
echo Sprzedawca zywoplotow
echo nie chce ci na poczontku 
echo sprzedac zywoplotu,
echo co robisz?
echo.
echo 1)Wyzywasz go
echo 2)Scinasz drzewa sledziem
echo 3)Kupujesz zywoplot
echo 4)Straszysz go
set/p "cho=>"
if %cho%==1 goto WSZ
if %cho%==2 goto SDS
if %cho%==3 goto KZY
if %cho%==4 goto SSZ
if %cho%==dev goto devc
goto SZ

:WSZ
cls
echo -TY MARTWA PAPUGO!-wyzywasz skurzybyka - TY WENGORZU!
echo Ale to nawet nie rusza sprzedawcy, ktory stwierdza
echo ze jestes uzytkownikiem Windowsa Visty
pause>nul
goto SZ

:SDS
cls
echo Stwierdzasz ze nie umiesz
echo scinac drzew sledziem
pause>nul
goto SZ

:KZY
cls
echo Kupujesz niedrogo zywoplot
echo , wracasz do rycerzy ktorzy
echo mowiom ni
pause>nul
goto RKMN

:SSZ
cls
echo Probojesz go zastraszyc,
echo opowiadajonc mu opowiesci
echo o duchach, ale on jest
echo za odwazny
pause>nul
goto SZ

:RKMN
cls
echo Wracasz do rycerzy
echo ktorzy mowiom ni,
echo a ci idom gdzies,
echo zadowoleni z nowego
echo zywoplotu. Nagle
echo potykasz sie o 
echo kwantowom cegle
echo ktora cofa cie
echo w czasie
pause>nul
goto HUBZ

:ABKM
cls
echo Probojesz kupic czolg w jedynym,
echo znanym ci sklepie - Biedronce, ale
echo przypadkiem zostales zaatakowany przez
echo bezmuzgich kupownikuw masla, a jeden
echo z nich, twierdzi ze masz skarpetki
echo w maselniczce.
echo Co robisz?
echo.
echo 1)Uciekasz do Czech
echo 2)W ramach protestu tanczysz dubstep
echo 3)Opowiadasz dowcip
echo 4)Wracasz do domu
set/p "cho=>"
if %cho%==1 goto UDCZ
if %cho%==2 goto PTDU
if %cho%==3 goto OCDO
if %cho%==4 goto PRKE
if %cho%==dev goto devc
goto ABKM

:PTDU
cls
echo Probojesz tanczyc dubstep, ale
echo nie umiesz tanczy, wienc nie tanczysz i
echo wracasz do rzucalni kokosami
pause>nul
goto PRKE

:OCDO
cls
echo -Jasiu poszedl do sklepu
echo i wrocil do domku.
echo nastempnego dnia poszedl
echo do sklepu i wrocil do
echo domku. nastempnego dni....
echo Bezmuzdzy kupownicy sie
echo nie zasmiali ani troche
echo tylko poszli do Grecji
echo z zazenowania.
pause>nul
goto PRKE


:UDCZ
cls
echo Uciekasz do Czech, ale jestes
echo tak slaby z geografii, ze przypadkiem
echo uciekasz do Albanii.
echo.
echo Tam spotykasz Popka, a ten
echo proponuje ci troche kredek
echo za korzystnom cene.
echo -Najlepsze bambino za 3 zlote! - mowi.
echo.
echo 1)Kupujesz
echo 2)Nie kupujesz
set/p "cho=>"
if %cho%==1 goto AK
if %cho%==2 goto ANK
if %cho%==dev goto devc
goto UDCZ

:ANK
cls
echo Brawo! Wlasnie oszukales system
echo wienc masz tu dostemp do DEVMOD'A!
pause>nul
goto devc

:AK
cls
echo A wienc kupujesz! Teraz
echo masz paczke najlepszych
echo bambino! Mozesz zrobic z nimi
echo to co ci sie podoba...
echo.
echo 1)Rysujesz
echo 2)Bijesz nimi Popka
echo 3)Slodzisz nimi herbate
echo 4)Grasz o nie z Popkiem w karty
set/p "cho=>"
if %cho%==1 goto AKBR
if %cho%==2 goto AKBBP
if %cho%==3 goto AKBSH
if %cho%==4 goto AKBWK
if %cho%==dev goto devc
goto AK

:AKBR
cls
echo Nagle przypominasz sobie ze
echo nie umiesz rysowac, wienc
echo idziesz odszukac mistycznom
echo kretke, ona cie nauczy...
pause>nul
cls
echo Po kilku miesioncach przypominasz
echo sobie ze nie umiesz szukac mistycznych
echo kredek, wienc wracasz do prywatnej 
echo rzucalni kokosami
pause>nul
goto PRKE

:AKBBP
cls
echo Bijesz kretkami Popka, ale
echo ten wyjmuje maczete i tnie
echo ci wlosy, teraz masz tak slabom
echo fryzure, ze ze wstydu idziesz do
echo lazienki
pause>nul
goto LM

:AKBSH
cls
echo Probojesz slodzic swoimi kredkami
echo herbate, ale nagle przypominasz sobie ze
echo nie masz herbaty, wywolany w ten sposob
echo paradoks czasoprzestrzenny cofa cie w czasie
pause>nul
goto UDCZ

:AKBWK
cls
echo Grasz o nie z Popkiem w karty
echo ale nie macie kart, wienc
echo Popek myje sobie godzine liczy
echo bo mieszka, w dziczy bez zegarka,
echo chyba ze to jest latark....
echo I Popek zmienia sie w Gargamela,
echo -Jak ja nie cierpie smerfuf! - mowi i idzie
echo na nie polowac.
echo Ty zazenowany idziesz za nim
pause>nul
:GRPNS
cls
echo Gargamel juz szykuje pulapke na smerfy,
echo a ty co robisz? 
echo.
echo 1)Czekasz az Gargamel zrobi pulapke
echo 2)Szukasz wioski smerfuf
echo 3)Budujesz klatke z ktorej smerfy nie majo szans wyjsc
echo 4)Dissujesz Saurona z Mordoru
set/p "cho=>"
if %cho%==1 goto CNG
if %cho%==2 goto SWS
if %cho%==3 goto BKNS
if %cho%==4 goto DS
if %cho%==dev goto devc
goto GRPNS

:DS
cls
echo Probojesz dissowac Saurona, ale 
echo ten przybywa i bije cie w plecy
pause>nul
cls
echo Postanawiasz kupic nic nie
echo robic wienc zadajesz Sauronowi
echo zagadki, ale ten nie wie co
echo odpowiedziec i dostaje
echo laga muzgu.
echo Ty korzystajonc z sytuacji wracasz do 
echo Gargamela.
pause>nul
goto GRPNS

:CNG
cls
echo Gargamel juz zastawil pulapke,
echo i wlasnie testuje jej dzialanie
echo ale Klakier postanawia zostac
echo inkwizytorem, i zeby sprawdzic
echo czy Gargamel jest czysty wazy
echo go aby sprawdzic czy wazy
echo tyle co kaczka.
echo Ty oczywiscie cofasz sie
echo w czasie, zeby Klakier nie
echo odkryl ze jestes magiem.
pause>nul
goto GRPNS

:SWS
cls
echo Szukasz wioski smerfuf,
echo ale spotykasz urzednika,
echo ktory pyta Cie o pozwolenie
echo na szukanie wiosek smerfuf.
echo Ty niestety nie masz na to
echo papierow, wienc szybko
echo uciekasz do Gargamela.
pause>nul
goto GRPNS

:BKNS
cls
echo Budujesz klatke na smerfy
echo ale nagle zza krzakuf wyskakuje
echo banda lokci, i bezlitosnie 
echo zgina sie nad efektem twej
echo pracy, ty uciekasz...
pause>nul
goto END

:END
cls
echo Wybiegasz na polane a tam
echo widzisz stojoncego 
echo Zupoluda, ten odwraca sie
echo do ciebie, i nic sobie nie
echo muwicie.
pause>nul
cls
echo KONIEC
pause>nul


:devc
cls
echo DEVMODE
set/p "m=?>"
goto %m%