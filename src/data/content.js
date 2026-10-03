// ✏️  Edit this file to change what the site says. No need to touch the components.

export const profile = {
  name: 'Arkin',
  roles: ['Future Cloud Architect', 'Web & App Developer', 'Azure Learner', 'BSIT Student'],
  tagline:
    'BSIT student majoring in Web & App Development, building my way to Azure Solutions Architect, one project and one cert at a time.',
  // TODO: replace with your real links
    github: 'https://github.com/rhobearkinipac-cell',
  linkedin: 'https://www.linkedin.com/in/your-profile',
  email: 'you@example.com',
}

export const about = [
  "I'm a 2nd-year BSIT student who likes figuring out how things run behind the screen: servers, networks, and the cloud that ties them together.",
  "I've finished OOP in Java and I'm now deep in Data Structures. Outside class I'm learning Microsoft Azure, and I put every lab and project in my public Cloud Journey repo.",
]

export const stats = [
  { value: 'AZ-900', label: 'Target: Dec 2026' },
  { value: '6', label: 'Cloud projects planned' },
  { value: '2nd', label: 'Year, BSIT' },
]

export const skills = [
  {
    group: 'Cloud',
    icon: '☁️',
    items: ['Microsoft Azure', 'Static Web Apps', 'App Service', 'Azure CLI', 'Bicep (learning)'],
  },
  {
    group: 'Frontend',
    icon: '🎨',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Vite'],
  },
  {
    group: 'Programming',
    icon: '⌨️',
    items: ['Java', 'OOP', 'Data Structures', 'Python (Flask)'],
  },
  {
    group: 'Systems',
    icon: '🖥️',
    items: ['Linux', 'Operating Systems', 'Virtualization', 'Git & GitHub'],
  },
]

// status: 'done' | 'active' | 'next'
export const journey = [
  {
    code: 'AZ-900',
    title: 'Azure Fundamentals',
    when: 'Oct – Dec 2026',
    status: 'active',
    note: 'Cloud concepts, core services, security, governance.',
  },
  {
    code: 'AZ-104',
    title: 'Azure Administrator',
    when: 'Jan – Jul 2027',
    status: 'next',
    note: 'Running Azure by hand: VMs, VNets, storage, identity.',
  },
  {
    code: 'AZ-700 / 204',
    title: 'Networking or Developer',
    when: 'Aug 2027 – Jan 2028',
    status: 'next',
    note: 'Specialize, plus Infrastructure as Code and containers.',
  },
  {
    code: 'AZ-305',
    title: 'Solutions Architect Expert',
    when: '2028',
    status: 'next',
    note: 'Designing for cost, security and reliability.',
  },
]

// status: 'live' | 'building' | 'planned'
export const projects = [
  {
    title: 'Cloud Portfolio',
    desc: 'This site. React + Vite, auto-deployed to Azure Static Web Apps on every push through GitHub Actions.',
    tags: ['React', 'Vite', 'Static Web Apps', 'GitHub Actions'],
    status: 'live',
      repo: 'https://github.com/rhobearkinipac-cell/portfolio',
    demo: '',
  },
  {
    title: 'Gym Equipment Tracker',
    desc: 'My Data Structures project, a priority-based equipment maintenance system, going to the cloud as a REST API with a database.',
    tags: ['Java', 'Data Structures', 'App Service', 'Azure SQL'],
    status: 'building',
    repo: '',
    demo: '',
  },
  {
    title: 'Cloud Notes App',
    desc: 'A small Flask notes app I’m using to learn backend basics before deploying it on Azure.',
    tags: ['Python', 'Flask', 'App Service'],
    status: 'building',
    repo: '',
    demo: '',
  },
  {
    title: 'Serverless File Processor',
    desc: 'Upload a file and an Azure Function processes it automatically. Event-driven, pay-per-use.',
    tags: ['Azure Functions', 'Blob Storage', 'Event Grid'],
    status: 'planned',
    repo: '',
    demo: '',
  },
]
