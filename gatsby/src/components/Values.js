import React from "react"
import loadable from "@loadable/component"
const Value = loadable(() => import("./Value"))
const Logo = loadable(() => import("./Logo"))

export default function Values({ values }) {
  const defaultValues = [
    {
      title: "F*ck Hubert Hitch.",
      description:
        "Une belle pizza fraiche et pas chère. Vous ne croyez tout de même pas qu'on allait payer Hubert pour vous la livrer ? Bon...on peut vous la déposer mais on prend une part de com",
    },
    {
      title: "No italy no party.",
      description:
        "1000km par jour pour une mozza fraîche ? On a fait mieux: payer un billet simple Napoli-Paris à Matteo, notre pizzaiolo. Et en plus, c'est bon pour notre Terre. Sorry not from Italy !",
    },
    {
      title: "Moins...mais mieux.",
      description:
        "Vous avez besoin des 50 positions du kamasutra pour faire plaisir à vous et votre partenaire ? Si on en fait deux déjà c'est pas mal...et pour la pizza bah c'est pareil ! 3 choix et basta ! Vous avez besoin des 50 positions du kamasutra pour faire plaisir à vous et votre partenaire ? Si on en fait deux déjà c'est pas mal...et pour la pizza bah c'est pareil ! 3 choix et basta !",
    },
    {
      title: "À la queue leuleu.",
      description:
        "La règle d'or: il n'y a que chez Da Michele qu'on fait la queue. Laissez les autres attendrent pour une pizza tiède. Vous cliquez, vous mangez et si ça vous plaît, vous payez !",
    },
  ]

  const values = values || defaultValues
  return (
    <>
      {values && (
        <div className="values">
          {values.map(value => (
            <Value title={value.title} description={value.description} />
          ))}
        </div>
      )}
    </>
  )
}
