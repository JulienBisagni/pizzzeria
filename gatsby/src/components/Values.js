import React from "react"
import loadable from "@loadable/component"

import styles from "../styles/components/values.module.scss"

const Value = loadable(() => import("./Value"))
const Logo = loadable(() => import("./Logo"))

export default function Values() {
  return (
    <div className={styles.container}>
      <Value title="F*ck Hubert Hitch.">
        <p>
          Une belle pizza fraiche et pas chère. Vous ne croyez tout de même pas
          qu'on allait payer Hubert pour vous la livrer ? Bon...on peut vous la
          déposer mais on prend une part de <span>com' !</span>
        </p>
      </Value>
      <Value title="No italy no party.">
        <p>
          1000km par jour pour une mozza fraîche ? On a fait mieux: payer un
          billet simple Napoli-Paris à Matteo, notre pizzaiolo. Et en plus,
          c'est bon pour notre Terre. Sorry not from <span>Italy !</span>
        </p>
      </Value>
      <Value title="Moins...mais mieux.">
        <p>
          Vous avez besoin des 50 positions du kamasutra pour faire plaisir à
          vous et votre partenaire ? Si on en fait deux déjà c'est pas mal...et
          pour la pizza bah c'est pareil ! 3 choix et <span> basta ! </span>
        </p>
      </Value>
      <Value title="À la queue leuleu.">
        <p>
          La règle d'or: il n'y a que chez Da Michele qu'on fait la queue.
          Laissez les autres attendrent pour une pizza tiède. Vous cliquez, vous
          mangez et si ça vous plaît, vous <span>payez !</span>
        </p>
      </Value>
    </div>
  )
}
