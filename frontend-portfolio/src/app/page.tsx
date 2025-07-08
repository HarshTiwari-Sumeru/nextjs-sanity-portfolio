import { getHero } from "../../lib/getHero";
import { Project, getProjects } from "../../lib/getProjects";

import Image from "next/image";

// export default async function HomePage() {
//   const hero = await getHero();
//   const projects = await getProjects();

//   return (
//     <main style={{ padding: "2rem" }}>
//       {/* Hero Section */}
//       <section style={{ textAlign: "center", marginBottom: "4rem" }}>
//         <h1>{hero.title}</h1>
//         <p>{hero.subtitle}</p>
//         <Image
//           src={hero.imageUrl}
//           alt="Hero Image"
//           width={800}
//           height={400}
//           style={{ borderRadius: "12px" }}
//         />
//       </section>

//       {/* Projects */}
//       <section>
//         <h2>Projects</h2>
//         <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
//           {projects.map((proj: Project, i) => (
//             <div key={i} style={{ width: "300px" }}>
//               <Image
//                 src={proj.imageUrl}
//                 alt={proj.title}
//                 width={300}
//                 height={200}
//                 style={{ borderRadius: "8px" }}
//               />
//               <h3>{proj.title}</h3>
//               <p>{proj.description}</p>
//               <a href={proj.url} target="_blank" rel="noopener noreferrer">
//                 View Project
//               </a>
//             </div>
//           ))}
//         </div>
//       </section>
//     </main>
//   );
// }
export default async function HomePage() {
  const hero = await getHero();
  const projects = await getProjects();

  return (
    <main style={{ padding: "2rem", backgroundColor: "#e8e2d0" }}>
      {/* Hero Section */}
      {hero ? (
        <section style={{ textAlign: "center", marginBottom: "4rem" }}>
          <h1
            style={{
              fontSize: "48px",
              color: "#333",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            {hero.title}
          </h1>
          <p
            style={{
              fontSize: "20px",
              color: "#666",
              lineHeight: "1.6",
              marginTop: "0.5rem",
            }}
          >
            {hero.subtitle}
          </p>

          <Image
            src={hero.imageUrl}
            alt="Hero Image"
            width={900}
            height={550}
            style={{ borderRadius: "12px" }}
          />
        </section>
      ) : (
        <p style={{ color: "red" }}>
          No hero section found. Please add it in Sanity Studio.
        </p>
      )}

      {/* Projects */}
      <section>
        <h2
          style={{
            fontSize: "36px",
            color: "#222",
            marginBottom: "2rem",
            fontWeight: "500",
          }}
        >
          Projects
        </h2>

        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          {projects.map((proj, i) => (
            <div key={i} style={{ width: "500px" }}>
              <Image
                src={proj.imageUrl}
                alt={proj.title}
                width={500}
                height={350}
                style={{ borderRadius: "8px" }}
              />
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
