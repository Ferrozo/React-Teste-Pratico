import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "20M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Contactos guardados com segurança todos os dias."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Classificação por estrelas, mantida consistentemente em todas as lojas de aplicativos."
    },
    {
        title: "200+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Financial Institutions, seamlessly integrated, so you can manage all accounts."
    }
];