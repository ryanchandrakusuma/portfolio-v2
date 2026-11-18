// Central data for the home page. Edit here, not in the templates.

export const person = {
  name: "Ryan Chandra Kusuma",
  handle: "ryan_chandra_kusuma",
  role: "Data Engineer",
  secondaryRole: "Software Engineer",
  openTo: "Data Engineer and Software Engineer (backend) roles",
  location: "Jember, Indonesia · open to relocation",
  email: "w.rookie3ryan@gmail.com", // TODO: confirm public email
  github: "https://github.com/ryanchandrakusuma",
  linkedin: "", // TODO: add LinkedIn URL
  cv: "", // TODO: put CV in public/ and set e.g. "Ryan-Chandra-Kusuma-CV.pdf"
};

// Hero "run log": one DAG task per skill group
export const runLog = [
  { step: "languages", text: "python · sql · php · dart" },
  { step: "processing", text: "pyspark · aws glue · hadoop" },
  { step: "storage", text: "snowflake · mysql · sql server" },
  { step: "orchestration", text: "airflow · dag factory · ecs tasks" },
  { step: "cloud_infra", text: "aws · cloudera · terraform · docker · kubernetes · jenkins" },
  { step: "backend", text: "fastapi · laravel · flutter" },
  { step: "principles", text: "automation · observability · accuracy", highlight: true },
  { step: "practices", text: "idempotent loads · config over code · infra as code · traceable releases", highlight: true },
];

// Experience, any order (the page sorts newest first).
// Dates are "YYYY-MM"; use `end: null` for a current role (shown as "Present").
export const jobs = [
  {
    // Career break, shown like on the CV. kind: "break" gives it its own look.
    kind: "break",
    company: "Career break",
    role: "Family caregiving",
    start: "2026-06",
    end: null,
    metric: "available now",
    points: ["Family caregiving. Now available for full-time roles."],
  },
  {
    company: "PwC Indonesia",
    role: "Senior Associate, Risk Assurance (Data Engineer)",
    location: "Jakarta · onsite",
    start: "2025-09",
    end: "2026-06",
    metric: "Data Anomaly Detector",
    // Bullets and stack mirror the CV ("Resume (November 2026)v1.pdf").
    points: [
      "Delivered daily anomaly reports by 7 a.m. for ~20 irregular-transaction use cases across a bank's ~7,000 business units.",
      "Protected the 7 a.m. reports from missing and duplicated data by building freshness checks that flag any date with no output and designing ETL joins so transaction and branch-level records could not duplicate.",
      "Transformed Informatica-loaded raw staging tables in Hive into business use-case tables with PySpark on Cloudera, then loaded them into SQL Server for the client's web app and Tableau, cutting load time by 40% with Hive partitioning.",
      "Removed manual job scheduling with a metadata-driven orchestration framework on Cloudera that resolves job dependencies.",
      "Added LLM-generated summaries to every anomaly use case by building a FastAPI service that submits processed data to the client's enterprise LLM and polls for the results.",
      "Shipped 2 major production releases, including historical backfills, as technical lead for 6 engineers, reporting delivery risk to Partners, Directors, and client stakeholders.",
    ],
    stack: ["Python", "PySpark", "SQL", "Hive", "HDFS", "SQL Server", "Cloudera", "FastAPI", "Enterprise LLM API", "Tableau"],
    link: { href: "case-studies/anomaly-detection/", label: "design doc" },
  },
  {
    company: "Philip Morris International",
    role: "Data Engineer",
    location: "Jakarta · onsite",
    start: "2024-03",
    end: "2025-08",
    metric: "Data Pipeline Migration",
    points: [
      "Cut daily extraction from 7 hours to 3–4 hours at no added compute cost for a ~150 GB, 300+ table MySQL-to-Snowflake pipeline by running per-table Glue and Lambda jobs in parallel, capped at 10 concurrent connections to protect the source database.",
      "Brought 5 markets onto a new regional platform, including Indonesia, the Philippines, and Jordan, by migrating legacy Matillion pipelines to cross-account Glue and S3 pipelines with timezone translation and local-time extraction schedules.",
      "Co-designed a star schema remodel of a core business domain in Snowflake in a team of 4, replacing legacy tables with fact and dimension tables that every new business use case could reuse.",
      "Shielded ~1,000 warehouse tables from breaking upstream schema changes by building schema checks that halt pipelines on data type changes and auto-add new columns, and by reviewing source releases and flagging affected tables to analysts.",
      "Built CI/CD for the extraction pipeline that packages its Python libraries into .whl files on S3 for AWS Glue, and moved every environment's job parameters into Terraform instead of manual edits.",
      "Kept 30+ production pipelines (Airflow, Snowflake, AWS) healthy on a rotating daily monitoring shift, triaging failures through Kibana logs, adding up to 3 automatic retries for intermittent errors, and permanently fixing recurring ones.",
      "Made every daily and weekly reconciliation process independently traceable by splitting a monolithic FastAPI process into isolated ECS tasks via a DAG factory on AWS MWAA, shipped through Jenkins CI/CD with unit tests and SonarQube gates.",
    ],
    stack: ["Python", "SQL", "AWS (Glue, Lambda, S3, ECS, MWAA)", "Apache Airflow", "Snowflake", "Docker", "FastAPI", "Jenkins", "SonarQube"],
    link: { href: "case-studies/elt-pipeline/", label: "design doc" },
  },
  {
    company: "Nusanet",
    role: "Freelance Software Engineer",
    location: "Remote",
    start: "2023-03",
    end: "2024-01",
    metric: "Warehouse ERP",
    points: [
      "Shipped a Laravel ERP to production covering billing, inventory, inter-warehouse QC, and user and customer management.",
      "Automated deployments with GitHub Actions CI/CD to Ubuntu/Nginx and added Prometheus monitoring (logs, CPU, memory).",
    ],
    stack: ["PHP", "Laravel", "MySQL", "GitHub Actions", "Ubuntu", "Nginx", "Prometheus"],
    link: { href: "projects/warehouse-management/", label: "project" },
  },
  {
    company: "PT. Suitmedia Kreasi Indonesia",
    role: "Software Engineer",
    location: "Remote",
    start: "2022-09",
    end: "2023-01",
    metric: "E-commerce API & CMS",
    points: ["E-commerce API and CMS integration in PHP/Laravel/MySQL within an existing agency codebase."],
  },
  {
    company: "PT. Inaugurasi Pelangi Nusantara",
    role: "Software Engineer (part-time)",
    location: "Remote",
    start: "2022-01",
    end: "2023-01",
    metric: "ERP System",
    points: [
      "Cut feature development time by 25% by restructuring Laravel APIs with the repository pattern.",
      "Delivered an app end to end, from API contracts designed off Figma mockups to Laravel backend and Flutter web and mobile integration, reporting directly to the CEO.",
    ],
    stack: ["PHP", "Laravel", "Flutter", "Figma"],
  },
];

// Skills × where they were used. Only marks real usage, no self-rated levels.
export const skillContexts = ["PwC", "PMI", "Freelance & agency", "Side projects"];
export const skills = [
  { name: "Python", used: ["PwC", "PMI"] },
  { name: "SQL", used: ["PwC", "PMI", "Freelance & agency"] },
  { name: "PySpark", used: ["PwC"] },
  { name: "Cloudera", used: ["PwC"] },
  { name: "AWS Glue / ECS", used: ["PMI"] },
  { name: "Terraform", used: ["PMI"] },
  { name: "Apache Airflow", used: ["PMI"] },
  { name: "Snowflake", used: ["PMI"] },
  { name: "FastAPI", used: ["PMI"] },
  { name: "Laravel / PHP", used: ["Freelance & agency", "Side projects"] },
  { name: "Flutter / Dart", used: ["Freelance & agency", "Side projects"] },
  { name: "React / Node.js", used: ["Side projects"] },
  { name: "Unity / Unreal", used: ["Side projects"] },
];

export const credentials = [
  { name: "S1 Teknik Informatika", org: "Universitas Kristen Petra", note: "GPA 3.34" },
  { name: "Architecting on AWS", org: "Dicoding" },
  { name: "AWS Cloud Practitioner", org: "Dicoding" },
  { name: "Dasar DevOps", org: "Dicoding" },
  { name: "Dasar SQL", org: "Dicoding" },
];
