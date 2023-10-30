import Job from "./Job";

const Jobs = (props) => {
  return (
    <div className={props.className}>
      <Job
        className="item border-red"
        title="Full Time Sales Associate - Sydney Boutique"
        contractType="CDI"
        country="Australie"
        city="Sydney"
      ></Job>
      <Job
        className="item border-green"
        title="Agent de Sécurité - Pantin"
        contractType="CDI"
        country="France"
        city="Pantin"
      ></Job>
      <Job
        className="item border-yellow"
        title="Responsable d'Atelier (H/F)"
        contractType="CDD"
        country="France"
        city="Paris"
      ></Job>
      <Job
        className="item border-blue"
        title="Chef de Projets"
        contractType="CDD"
        country="France"
        city="Paris"
      ></Job>
      <Job
        className="item border-pink"
        title="Développeur React.js"
        contractType="CDI"
        country="France"
        city="Paris"
      ></Job>
      <Job
        className="item border-red"
        title="Sales Associate Stockholm"
        contractType="CDI"
        country="Suède"
        city="Stockholm"
      ></Job>
      <Job
        className="item border-green"
        title="Vendeur/se - Crans Montana"
        contractType="CDI"
        country="Suisse"
        city="Crans-Montana"
      ></Job>
      <Job
        className="item border-yellow"
        title="CRM & Data Quality Analyst"
        contractType="CDI"
        country="USA"
        city="New York"
      ></Job>
      <Job
        className="item border-blue"
        title="Infirmier (H/F)"
        contractType="CDI"
        country="France"
        city="Pantin"
      ></Job>
    </div>
  );
};

export default Jobs;
