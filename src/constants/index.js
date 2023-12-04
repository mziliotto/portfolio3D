import { meta, shopify, starbucks, tesla, dmgroup, ambb } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    // {
    //     imageUrl: express,
    //     name: "Express",
    //     type: "Backend",
    // },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    // {
    //     imageUrl: redux,
    //     name: "Redux",
    //     type: "State Management",
    // },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "IT Solutions & HelpDesk",
        company_name: "Asociación Médica Bahía Blanca",
        icon: ambb,
        iconBg: "#383E56",
        date: "Septiembre 2019 - Octubre 2021",
        points: [
          "Soporte de webapps destinadas a ABM de pacientes, turneras, historiales y facturación de los médicos de la ciudad y alrededores.",
          "Reporte de estadísticas mensuales y a pedido de las Base de Datos de la institución y hospitales de la ciudad.",
        ],
      },
      {
        title: "Web Developer FrontEnd JS",
        company_name: "DM Group",
        icon: dmgroup,
        iconBg: "#E6DEDD",
        date: "Noviembre 2021 - Actualidad",
        points: [
          "Desarrollo y mantenimiento de aplicaciones web utilizando JavaScript.",
          "Colaboración con areas y equipos incluyendo diseñadores, product managers, clientes y otros desarrolladores para crear soluciones y productos de calidad.",
          "Implementación de diseño responsivo asegurando compatibilidad entre exploradores y dispositivos.",
          "Participación en SCRUMS semanales con feedbacks constantes en un equipo definido",
          "Capacitación a nuevos recruiters en herramientas, tecnologías y su modo de uso dentro del marco de la empresa"
        ],
      },   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mziliotto',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/matias-ziliotto-736212172',
    }
];

export const projects = [
    {
        iconUrl: snapgram,
        theme: 'btn-back-green',
        name: 'Diseño de Remeras en 3D con IA',
        description: 'WebApp que utiliza IA para importar imágenes, logos y patrones a un modelo de remera 3D y poder diseñarla a gusto del usuario. También incluye edición de colores y carga de archivos. Desarrollada con React, Dall-e API y tailwind css',
        link: 'https://github.com/mziliotto/IADiseno3D',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'CarHub',
        description: 'WebApp responsiva. Diseñada para buscar y comparar autos disponibles en alquiler. Desarrollada con NodeJS, mongoDB y tailwind css.',
        link: 'https://github.com/mziliotto/CarHub',
    },
];