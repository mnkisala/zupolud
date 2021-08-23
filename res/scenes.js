const scenes = {
  PRKE: {
    description:
      `
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
  ABKM: {
    description:
      `
Probojesz kupic czolg w jedynym,
znanym ci sklepie - Biedronce, ale
przypadkiem zostales zaatakowany przez
bezmuzgich kupownikuw masla, a jeden
z nich, twierdzi ze masz skarpetki
w maselniczce.
Co robisz?
      `,
    choices: [
      {
        description: "Uciekasz do Czech",
        destination: "UDCZ",
      },
      {
        description: "W ramach protestu tanczysz dubstep",
        destination: "PTDU",
      },
      {
        description: "Opowiadasz dowcip",
        destination: "OCDO",
      },
      {
        description: "Wracasz do domu",
        destination: "PRKE",
      },
    ]
  }
}

export default scenes