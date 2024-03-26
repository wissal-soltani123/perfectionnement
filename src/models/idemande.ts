export interface Idemande {
    id:number
    dateDeb:string
    dateFin:string
    type:"exceptionnel"| "repos" | "maladie" | "maternité" | "hajj"
    statut:"validé" | "encours" | "refusé"
    email:string
}
