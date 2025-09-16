declare global {
  interface Dictionary {
    header: {
      about: string;
      projects: string;
      resume: string;
    };
    hero: {
      welcome: string;
      title: string;
      subtitle: string;
      viewProjects: string;
      contactMe: string;
      typewriterTexts: string[];
    };
    about: {
      title: string;
      description: string;
    };
    projects: {
      title: string;
      subtitle: string;
      items: {
        portfolio: {
          title: string;
          description: string;
        };
        ecommerce: {
          title: string;
          description: string;
        };
        weather: {
          title: string;
          description: string;
        };
        website: {
          title: string;
          description: string;
        };
        todoList: {
          title: string;
          description: string;
        };
        todoListJS: {
          title: string;
          description: string;
        };
      };
    };
    techStack: {
      title: string;
    };
    repositories: {
      title: string;
      viewOnGitHub: string;
    };
    footer: {
      cta: {
        title: string;
        description: string;
        sendEmail: string;
        whatsapp: string;
      };
      brand: {
        name: string;
        description: string;
      };
      navigation: {
        site: {
          title: string;
          aboutMe: string;
          projects: string;
          contact: string;
        };
        resources: {
          title: string;
          resume: string;
          latestRepos: string;
        };
        contact: {
          title: string;
          email: string;
          whatsapp: string;
          linkedin: string;
        };
      };
      bottom: {
        copyright: string;
        builtWith: string;
        backToTop: string;
      };
    };
    language: {
      switchTo: string;
      spanish: string;
      english: string;
    };
  }
}

export {};
