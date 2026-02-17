
import { SceneConfig } from './types';

export const SCENES: Record<string, SceneConfig> = {
  atrio: {
    id: "atrio",
    name: "EL ATRIO",
    description: "Vol. 01 — El Atrio: Una exploración sobre el silencio, la materia y el primer encuentro.",
    image: "https://res.cloudinary.com/drhrrhrvp/image/upload/v1766151599/Gemini_Generated_Image_714zb0714zb0714z_q7if5k.png",
    hotspots: [
      {
        id: "nav-salon",
        x: 28,
        y: 72,
        label: "El Salón",
        description: "Espacio de reunión y calma con luz indirecta y texturas naturales.",
        targetSceneId: "salon"
      },
      {
        id: "nav-cocina",
        x: 24,
        y: 45,
        label: "La Cocina",
        description: "Minimalismo funcional en el corazón de la planta baja.",
        targetSceneId: "cocina"
      },
      {
        id: "nav-dormitorio",
        x: 65,
        y: 42,
        label: "El Dormitorio",
        description: "Refugio íntimo suspendido sobre el eje central.",
        targetSceneId: "dormitorio"
      },
      {
        id: "nav-terraza",
        x: 48,
        y: 22,
        label: "La Terraza",
        description: "Un mirador al cielo donde la arquitectura respira.",
        targetSceneId: "terraza"
      },
      {
        id: "nav-baño",
        x: 55,
        y: 78,
        label: "El Baño",
        description: "Atmósfera de introspección tallada en piedra.",
        targetSceneId: "baño"
      }
    ],
    narrative: []
  },
  salon: {
    id: "salon",
    name: "EL SALÓN",
    description: "Vol. 02 — Estancia Social: Donde la luz de tarde baña las texturas del mobiliario.",
    image: "https://res.cloudinary.com/drhrrhrvp/image/upload/v1766256674/f9da0240-47d9-447d-9899-4989e5e8c59d_ocn4lh.png",
    hotspots: [],
    narrative: [],
    article: "El salón se concibe como un diálogo entre la tectónica de los materiales y la fluidez del espacio. Aquí, la luz no solo ilumina, sino que esculpe las superficies de madera y piedra, creando una atmósfera de serenidad contemplativa.\n\nEl diseño del mobiliario, de líneas puras y materiales honestos, invita a una pausa necesaria en el ritmo frenético de la vida moderna. La disposición espacial fomenta la interacción social sin sacrificar la sensación de refugio individual. Cada ángulo ha sido estudiado para maximizar las visuales hacia el exterior, integrando el entorno natural como una extensión del propio interior.",
    detailFocus: {
      scale: 1.8,
      position: "35% 65%" // Enfoque en el sofá y texturas
    }
  },
  cocina: {
    id: "cocina",
    name: "LA COCINA",
    description: "Vol. 03 — Gastronomía y Rigor: Minimalismo aplicado a la vida cotidiana.",
    image: "https://res.cloudinary.com/drhrrhrvp/image/upload/v1766256674/43858245-5a77-45a7-a0c7-1e0ce48a2d76_hqybwt.png",
    hotspots: [],
    narrative: [],
    article: "Más que un espacio de preparación, la cocina es el laboratorio de la vida diaria. Bajo una estética de rigor geométrico, se oculta una funcionalidad extrema donde cada utensilio tiene su lugar preciso.\n\nLa isla central actúa como un monolito de piedra que organiza el flujo de trabajo, convirtiéndose en el epicentro de la actividad doméstica. Los acabados mates y las superficies continuas eliminan el ruido visual, permitiendo que el acto de cocinar se convierta en una experiencia casi ritual.",
    detailFocus: {
      scale: 2.2,
      position: "50% 50%" // Enfoque en la isla central
    }
  },
  dormitorio: {
    id: "dormitorio",
    name: "EL DORMITORIO",
    description: "Vol. 04 — Intimidad: El espacio de descanso definido por la suavidad de la sombra.",
    image: "https://res.cloudinary.com/drhrrhrvp/image/upload/v1766256673/28565760-cfcf-4cfc-b727-237225ceb48b_vr33po.png",
    hotspots: [],
    narrative: [],
    article: "El dormitorio es el refugio final, un espacio diseñado para la desconexión sensorial. La paleta cromática se reduce a tonos tierra y grises suaves, minimizando cualquier estímulo que pueda perturbar el descanso.\n\nLa cama, dispuesta como un plano flotante, preside la estancia aportando una sensación de ligereza. Los textiles naturales como el lino y la lana añaden capas de textura táctil que contrastan con la rigidez de los elementos arquitectónicos.",
    detailFocus: {
      scale: 1.6,
      position: "50% 80%" // Enfoque en los textiles de la cama
    }
  },
  terraza: {
    id: "terraza",
    name: "LA TERRAZA",
    description: "Vol. 05 — El Exterior: Un mirador privado sobre el paisaje urbano.",
    image: "https://res.cloudinary.com/drhrrhrvp/image/upload/v1766256673/8ef8b29a-2ff2-42ff-8932-54934260daf6_xf0xfg.png",
    hotspots: [],
    narrative: [],
    article: "La terraza representa la transición entre la arquitectura controlada y la imprevisibilidad del exterior. Es un mirador al cielo donde el límite entre el interior y el exterior se difumina por completo.\n\nLa vegetación se integra no como un adorno, sino como un elemento constructivo más que aporta frescura y vida. El pavimento de madera natural proporciona calidez bajo los pies, mientras que el mobiliario de exterior se reduce a lo esencial.",
    detailFocus: {
      scale: 2.0,
      position: "40% 30%" // Enfoque en el cielo y la estructura superior
    }
  },
  baño: {
    id: "baño",
    name: "EL BAÑO",
    description: "Vol. 06 — Higiene y Materia: Una atmósfera envolvente de piedra natural y luz cenital.",
    image: "https://res.cloudinary.com/drhrrhrvp/image/upload/v1766256674/e1762d82-25c6-425c-a6df-526d86696e25_g46xow.png",
    hotspots: [],
    narrative: [],
    article: "El baño se aleja de la concepción puramente funcional para convertirse en un santuario de introspección. La piedra natural envuelve todo el espacio, creando una continuidad táctil y visual que recuerda a las grutas naturales.\n\nEl agua fluye como un elemento sonoro que calma los sentidos. La iluminación indirecta, oculta tras foseados y espejos, crea una luz ambiental difusa que invita a la relajación profunda.",
    detailFocus: {
      scale: 2.2,
      position: "55% 55%" // Enfoque en la materialidad de la piedra
    }
  }
};

export const HOUSE_SCENE = SCENES.atrio;
